// add defines and starts ctx
window.AudioContext = window.AudioContext || window.webkitAudioContext

let ctx;

const startButton = document.querySelector('button')
startButton.addEventListener('click', () => {
    ctx = new AudioContext();
    // console.log(ctx)
})

// pedalBool value
let pedalActivated = false
// pedal Obj
let pedalOscillatorsObj = {};

// global oscillators obj that keeps track of notes being played
const oscillators = {}

// function that converts midi to freqNotes
function midiToFreq(number) {
    const a = 440
    // this works ... don't ask why but what the Internet said
    return (a / 32) * (2 ** ((number - 9) / 12))
}


// everything below grabs the midi info from the Yamaha moxf8
// then adds an oscillator

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(success, failure)
}

function success(midiAccess) {
    // console.log(midiAccess)
    // midiAccess.onstatechange = updateDevices --> different way of doing event listener...
    midiAccess.addEventListener('statechange', updateDevices)

    const inputs = midiAccess.inputs;
    // console.log(inputs)

    inputs.forEach((input) => {
        // console.log(input)
        // input.onmidimessage = handleInput
        input.addEventListener('midimessage', handleInput)
    })
}

function handleInput(input) {
    // console.log(input)
    const command = input.data[0]
    const note = input.data[1]
    const velocity = input.data[2]

    // stops the constant flow for moxf8 on these two numbers... no idea why that happens
    if (command === 248 || command === 254) {
        // console.log(command, note, velocity)
    } else {
        // console.log(command, note, velocity)
    }

    // triggers notes (value 144) on or off 
    if (command === 144) {
        if (velocity > 0 ) { 
            // note is on
            noteOn(note, velocity)
        } else {
            // note is off
            noteOff(note)
        }
    }

    // triggers pedal (value 176) on or off 
    if (command === 176) {
        if (velocity > 0 ) { 
            // pedal is on
            console.log(command, note, velocity)
            pedalActivated = true
            console.log(`pedalActivated value:`)
            console.log(pedalActivated)
            pedalToggle()
        } else {
            // pedal is off
            console.log(command, note, velocity)
            pedalActivated = false
            console.log(`pedalActivated value:`)
            console.log(pedalActivated)
            pedalToggle()
        }
    }

}

// various functions

// note functions
function noteOn(note, velocity) {
    // logs
    // console.log(`\nnoteOn:`)
    // console.log(note, velocity)

    const osc = ctx.createOscillator()

    const oscGain = ctx.createGain()
    oscGain.gain.value = 0.1

    // convert velocity to gain amount
    const velocityGainAmount = (1 / 127) * velocity
    const velocityGain = ctx.createGain()
    velocityGain.gain.value = velocityGainAmount

    osc.type = 'sine'
    osc.frequency.value = midiToFreq(note)
    
    // connects sounds to ouput
    osc.connect(oscGain)
    oscGain.connect(velocityGain)
    velocityGain.connect(ctx.destination)

    // add gain to oscGain and add note to oscillators obj
    osc.gain = oscGain
    // console.log(osc)
    oscillators[note.toString()] = osc
    // console.log(oscillators)
    osc.start()
}

function noteOff(note) {
    // logs
    // console.log(`\nnoteOff:`)
    // console.log(note)
    const osc = oscillators[note.toString()]
    const oscGain = osc.gain

    oscGain.gain.setValueAtTime(oscGain.gain.value, ctx.currentTime)
    oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03)

    setTimeout(() => {
        osc.stop()
        osc.disconnect()
    }, 20)

    
    delete oscillators[note.toString()]
    // console.log(oscillators)
}

// pedal functions and counter
let pedalCounter = 0

function pedalToggle() {
    pedalCounter++;
    // console.log(`\npedalCounter:`)
    // console.log(pedalCounter)

    // set const velocity
    const velocity = 40

    // code copied from noteOn above. Put this inside a for... in loop and play each note?
    if (pedalActivated) {
        console.log(`\npedalCounter:`)
        console.log(pedalCounter)
        if (pedalCounter === 1) {
            console.log(`this should only log the very first time when pedalCounter is 1...`)
            // copy current notes in oscillators object 
            pedalOscillatorsObj = oscillators
            
            for (const note in pedalOscillatorsObj) {
                const osc = ctx.createOscillator()
        
                const oscGain = ctx.createGain()
                oscGain.gain.value = 0.1
            
                // convert velocity to gain amount
                const velocityGainAmount = (1 / 127) * velocity
                const velocityGain = ctx.createGain()
                velocityGain.gain.value = velocityGainAmount
            
                osc.type = 'sine'
                osc.frequency.value = midiToFreq(note)
                
                // connects sounds to ouput
                osc.connect(oscGain)
                oscGain.connect(velocityGain)
                velocityGain.connect(ctx.destination)
            
                // add gain to oscGain and add note to oscillators obj
                osc.gain = oscGain
                osc.start()
            }
        }
    } else {
        // for in loop that goes through each note in pedal object and deletes its value
        for (const note in pedalOscillatorsObj) {
            // code copied from noteOff above and then modified
            const osc = pedalOscillatorsObj[note.toString()]
            const oscGain = osc.gain
            // logs
            // console.log(`\nosc`)
            // console.log(osc)
            // console.log(`oscGain`)
            // console.log(oscGain)

            oscGain.gain.setValueAtTime(oscGain.gain.value, ctx.currentTime)
            oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03)

            setTimeout(() => {
                osc.stop()
                osc.disconnect()
            }, 20)
            
            delete pedalOscillatorsObj[note.toString()]
            // console.log(`pedalOscillatorsObj:`)
            // console.log(pedalOscillatorsObj)
            
            // reset counter 
            pedalCounter = 0
            console.log(`\npedalCounter:`)
            console.log(pedalCounter)
        }
    }

    console.log(`pedalOscillatorsObj at end off pedalToggle`)
    console.log(pedalOscillatorsObj)
}

function pedalOff() {
    // const newObj = pedalOscillatorsObj
    // console.log(`newObj at start of pedalOff`)
    // console.log(newObj)

    // for in loop that goes through each note in pedal object and deletes its value
    for (const note in pedalOscillatorsObj) {
        // code copied from noteOff above and then modified
        const osc = pedalOscillatorsObj[note.toString()]
        const oscGain = osc.gain
        // logs
        console.log(`\nosc`)
        console.log(osc)
        console.log(`oscGain`)
        console.log(oscGain)

        oscGain.gain.setValueAtTime(oscGain.gain.value, ctx.currentTime)
        oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03)

        setTimeout(() => {
            osc.stop()
            osc.disconnect()
        }, 20)

        
        delete pedalOscillatorsObj[note.toString()]
        console.log(`pedalOscillatorsObj:`)
        console.log(pedalOscillatorsObj)
    }

    // set pedalCounter back to 0
    pedalCounter = 0
}



// these are not really used ...
function updateDevices(event) {
    // console.log(event)
    console.log(`Name: ${event.port.name}, Brand: ${event.port.manufacturer}, State: ${event.port.state}, Type: ${event.port.type}`)
}

function failure() {
    console.log('Could not connect MIDI')
}