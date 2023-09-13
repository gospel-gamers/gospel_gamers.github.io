import { useState } from 'react'
import NavBar from '../components/navbar'
import PianoNote from '../components/pianoNote'
import JazzChordsButtons from '../components/jazzChordsButtons'
import ScaleOptions from '../components/scales'
import Footer from '../components/footer'

// import jazzChordLogic
// import { jazzChord } from './jazzChordLogic'
// import { jazzChordNumbers } from './jazzChordLogic'
import ChordVoicings from '../components/chordVoicings'
import ScaleVoicings from '../components/scaleVoicings'
import ScaleMapLegend from '../components/scaleMapLegend'

// import all the piano notes
//c2 octave
import c2 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-c2_1.wav';
import c2sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-c2-sharp_1.wav';
import d2 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-d2_1.wav';
import d2sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-d2-sharp_1.wav';
import e2 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-e2_1.wav';
import f2 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-f2_1.wav';
import f2sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-f2-sharp_1.wav';
import g2 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-g2_1.wav';
import g2sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-g2-sharp_1.wav';
import a2 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-a2_1.wav';
import a2sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-a2-sharp_1.wav';
import b2 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-b2_1.wav';

//c3 octave
import c3 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-c3_1.wav';
import c3sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-c3-sharp_1.wav';
import d3 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-d3_1.wav';
import d3sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-d3-sharp_1.wav';
import e3 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-e3_1.wav';
import f3 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-f3_1.wav';
import f3sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-f3-sharp_1.wav';
import g3 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-g3_1.wav';
import g3sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-g3-sharp_1.wav';
import a3 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-a3_1.wav';
import a3sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-a3-sharp_1.wav';
import b3 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-b3_1.wav';

//c4 octave
import c4 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-c4_1.wav';
import c4sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-c4-sharp_1.wav';
import d4 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-d4_1.wav';
import d4sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-d4-sharp_1.wav';
import e4 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-e4_1.wav';
import f4 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-f4_1.wav';
import f4sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-f4-sharp_1.wav';
import g4 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-g4_1.wav';
import g4sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-g4-sharp_1.wav';
import a4 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-a4_1.wav';
import a4sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-a4-sharp_1.wav';
import b4 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-b4_1.wav';

//c5 octave
import c5 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-c5_1.wav';
import c5sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-c5-sharp_1.wav';
import d5 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-d5_1.wav';
import d5sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-d5-sharp_1.wav';
import e5 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-e5_1.wav';
import f5 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-f5_1.wav';
import f5sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-f5-sharp_1.wav';
import g5 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-g5_1.wav';
import g5sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-g5-sharp_1.wav';
import a5 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-a5_1.wav';
import a5sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-a5-sharp_1.wav';
import b5 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-b5_1.wav';

//c6 octave
import c6 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-c6_1.wav';
import c6sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-c6-sharp_1.wav';
import d6 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-d6_1.wav';
import d6sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-d6-sharp_1.wav';
import e6 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-e6_1.wav';
import f6 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-f6_1.wav';
import f6sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-f6-sharp_1.wav';
import g6 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-g6_1.wav';
import g6sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-g6-sharp_1.wav';
import a6 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-a6_1.wav';
import a6sharp from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-a6-sharp_1.wav';
import b6 from '../coding/audioRecs/pianoShortBounces/pianoShortBounces/piano-b6_1.wav';

// use this string to note object instead of the insecure eval method
const stringToNoteObj = 
{
  // c2 octave
  'c2': c2,
  'c2sharp': c2sharp,
  'd2': d2,
  'd2sharp': d2sharp,
  'e2': e2,
  'f2': f2,
  'f2sharp': f2sharp,
  'g2': g2,
  'g2sharp': g2sharp,
  'a2': a2,
  'a2sharp': a2sharp,
  'b2': b2,

  // c3 octave
  'c3': c3,
  'c3sharp': c3sharp,
  'd3': d3,
  'd3sharp': d3sharp,
  'e3': e3,
  'f3': f3,
  'f3sharp': f3sharp,
  'g3': g3,
  'g3sharp': g3sharp,
  'a3': a3,
  'a3sharp': a3sharp,
  'b3': b3,

  // c4 octave
  'c4': c4,
  'c4sharp': c4sharp,
  'd4': d4,
  'd4sharp': d4sharp,
  'e4': e4,
  'f4': f4,
  'f4sharp': f4sharp,
  'g4': g4,
  'g4sharp': g4sharp,
  'a4': a4,
  'a4sharp': a4sharp,
  'b4': b4,

  // c5 octave
  'c5': c5,
  'c5sharp': c5sharp,
  'd5': d5,
  'd5sharp': d5sharp,
  'e5': e5,
  'f5': f5,
  'f5sharp': f5sharp,
  'g5': g5,
  'g5sharp': g5sharp,
  'a5': a5,
  'a5sharp': a5sharp,
  'b5': b5,

  // c6 octave
  'c6': c6,
  'c6sharp': c6sharp,
  'd6': d6,
  'd6sharp': d6sharp,
  'e6': e6,
  'f6': f6,
  'f6sharp': f6sharp,
  'g6': g6,
  'g6sharp': g6sharp,
  'a6': a6,
  'a6sharp': a6sharp,
  'b6': b6,
}


export default function ScaleGenerator() {
  // setState variables

  // darkMode
  const [darkMode, setDarkMode] = useState(false)
  // const [selectChord, setSelectChord] = useState(false)

  // first question to decide on key
  const [startKey, setStartKey] = useState('C')
  const [preCursorRound, setPreCursorRound] = useState(true)

  // states variables of keys
  const [cKey, setCKey] = useState(false)
  const [cSharpKey, setCSharpKey] = useState(false)
  const [dKey, setDKey] = useState(false)
  const [dSharpKey, setDSharpKey] = useState(false)
  const [eKey, setEKey] = useState(false)
  const [FKey, setFKey] = useState(false)
  const [fSharpKey, setFSharpKey] = useState(false)
  const [gKey, setGKey] = useState(false)
  const [gSharpKey, setGSharpKey] = useState(false)
  const [aKey, setAKey] = useState(false)
  const [aSharpKey, setASharpKey] = useState(false)
  const [bKey, setBKey] = useState(false)

  // first Round to decide on scale genre
  const [firstRound, setFirstRound] = useState(false);

  // dislay church modes
  const [showChurchModes, setShowChurchModes] = useState(false)
  // display minor scales
  const [minorScales, setMinorScales] = useState(false)
  // display blues scales 
  const [bluesScales, setBluesScales] = useState(false)
  // display pentatonic scales
  const [pentScales, setPentScales] = useState(false)
  // display jazz scales
  const [jazzScales, setJazzScales] = useState(false)
  // display exotic scales
  const [exoticScales, setExoticScales] = useState(false)

  // create final chord input state for jazz Chord generator ... not used??
  // const [finalChord, setFinalChord] = useState('null');

  // reset button 
  const [resetButton, setResetButton] = useState(false)
  // map legend
  const [scaleMapLegend, setScaleMapLegend] = useState(false)

  // currOctave state
  // let [currOctave, setCurrOctave] = useState(3)

  // important logic for displaying chords
  let currOctave = 3
  let lastNoteVal = 12;
  let currNoteVal;

  let notesOrderObj = 
  {
    'C': 12,
    'C#': 11,
    'Db': 11,
    'D': 10,
    'D#': 9,
    'Eb': 9,
    'E': 8,
    'F': 7,
    'F#': 6,
    'Gb': 6,
    'G': 5,
    'G#': 4,
    'Ab': 4,
    'A': 3,
    'A#': 2,
    'Bb': 2,
    'B': 1,
  }
  let noteColorObj = 
  {
    '1': 'red',
    'b2': 'orangered',
    '2': 'orange',
    'b3': 'yellow',
    '3': 'yellowgreen',
    '4': 'green',
    'b5': 'aquamarine',
    '5': 'aqua',
    'b6': 'blue',
    '6': 'rgb(64, 41, 212)',
    'b7': 'rgba(107, 3, 182, 0.91)',
    '7': 'rgb(162, 106, 239)',
  }

  const notesIdNameArr =
  [
    'c2-key', 'c2-sharp-key', 'd2-key', 'd2-sharp-key', 'e2-key', 'f2-key', 'f2-sharp-key', 'g2-key', 'g2-sharp-key', 'a2-key', 'a2-sharp-key', 'b2-key', 'c3-key', 'c3-sharp-key', 'd3-key', 'd3-sharp-key', 'e3-key', 'f3-key', 'f3-sharp-key', 'g3-key', 'g3-sharp-key', 'a3-key', 'a3-sharp-key', 'b3-key', 'c4-key', 'c4-sharp-key', 'd4-key', 'd4-sharp-key', 'e4-key', 'f4-key', 'f4-sharp-key', 'g4-key', 'g4-sharp-key', 'a4-key', 'a4-sharp-key', 'b4-key', 'c5-key', 'c5-sharp-key', 'd5-key', 'd5-sharp-key', 'e5-key', 'f5-key', 'f5-sharp-key', 'g5-key', 'g5-sharp-key', 'a5-key', 'a5-sharp-key', 'b5-key', 'c6-key', 'c6-sharp-key', 'd6-key', 'd6-sharp-key', 'e6-key', 'f6-key', 'f6-sharp-key', 'g6-key', 'g6-sharp-key', 'a6-key', 'a6-sharp-key', 'b6-key'
  ]
  let scaleIdNames = [
    // 'one', 'two', 'three', 'four', 'five', 'six'
  ]

  // async sleep function used to play one note after the next
  async function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
  }
  // displays chords on the keyboard and plays all the notes
  async function displayScale(scaleNotes, scaleNums, scaleId, scaleType) {
    // logs
    // console.log(`\nin parent element now...`)
    // console.log(`scaleNotes:`)
    // console.log(scaleNotes)
    // console.log(`scaleNums:`)
    // console.log(scaleNums)

    // console.log(`\ninside displayScale function`)
    // console.log(`scaleId:`)
    // console.log(scaleId)

    
    notesIdNameArr.forEach(noteId => {
      const noteHTML = document.getElementById(noteId)

      if (noteId.length > 6) {
        noteHTML.style.backgroundColor = '#141c3a';
        noteHTML.style.color = 'white';
        noteHTML.style.border = 'none';
        noteHTML.style.fontWeight = 'normal';
      } else {
        noteHTML.style.backgroundColor = 'white';
        noteHTML.style.border = 'none';
        noteHTML.style.fontWeight = 'normal';
      }
      
    })
    // forEach above clears the keyboard of any color

    // create scaleIdNames based on scaleType so that the console does not throw an error
    // ! is this needed below... it is commented out for now
    // if (scaleType === 'maj9th') {
    //   scaleIdNames = ['one', 'two', 'three']
    // } else if (scaleType === 'maj11th') {
    //   scaleIdNames = ['one', 'two', 'three']
    // } else if (scaleType === 'maj13th') {
    //   scaleIdNames = ['one', 'two']
    // }  else if (scaleType === 'dom13th') {
    //   scaleIdNames = ['one', 'two', 'three', 'four', 'five', 'six']
    // }  else if (scaleType === 'min9th') {
    //   scaleIdNames = ['one', 'two', 'three']
    // }  else if (scaleType === 'min11th') {
    //   scaleIdNames = ['one', 'two', 'three', 'four', 'five']
    // }  else if (scaleType === 'aug') {
    //   scaleIdNames = ['one']
    // }  else if (scaleType === 'dim') {
    //   scaleIdNames = ['one']
    // }

    // forEach below goes through each chord--type and set its background color to white... so that a chord is shown as 'deselected'
    
    // create scaleIdNames based on scaleType so that the console does not throw an error
    
    scaleIdNames.forEach(idOfEachScale => {
      const scaleHTML = document.getElementById(idOfEachScale)
      // console.log(`\nscaleHTML inside notesIdNameArr:`)
      // console.log(scaleHTML)
      scaleHTML.style.backgroundColor = 'white';
      scaleHTML.style.color = 'black';

    })

    // reset currOctave to 3 ... should I make this a state and add a button that changes octaves?...
    currOctave = 3;
    // setCurrOctave(3)

    let counter = 1;
    let idArr = [];

    for (let i=0; i<scaleNotes.length; i++) {
      // console.log(`counter at start:`)
      // console.log(counter)
      // console.log(`lastNoteVal at start of for loop:`)
      // console.log(lastNoteVal)

      let note = scaleNotes[i].trim()
      // console.log(`note:`)
      // console.log(note)

      currNoteVal = notesOrderObj[note]
      if (!currNoteVal) {
        throw new Error('undefined currNoteVal somehow...')
      }

      // console.log(`currNoteVal:`)
      // console.log(currNoteVal)
      // console.log(`currOctave before checking lastNoteVal:`)
      // console.log(currOctave)

      // ? should you make it >= here if there's ever and octave with a note?... looks like you should not
      if (currNoteVal > lastNoteVal) {
        currOctave++
      }
      // console.log(`currOctave after checking lastNoteVal:`)
      // console.log(currOctave)

      let noteLow = note.toLowerCase().trim()
      // console.log(`noteLow before adding name extensions:`)
      // console.log(noteLow)

      if (noteLow.length === 2) {
        if (noteLow[1] === '#') {
          noteLow = `${noteLow[0]}${String(currOctave)}-sharp-key`
        } else if (noteLow[1] === 'b') {
          noteLow = `${noteLow[0]}${String(currOctave)}-flat-key`
        }
      } else {
        noteLow = `${noteLow[0]}${String(currOctave)}-key`
      }

      // console.log(`noteLow after adding name extensions:`)
      // console.log(noteLow)
      
      // push noteLow and make final adjustments
      idArr.push(noteLow)
      if (lastNoteVal && currNoteVal) {
        lastNoteVal = currNoteVal
      }
      
      // counter === scaleNotes.length ? currOctave = 3 : currOctave = currOctave;
      if (counter === scaleNotes.length) {
        currOctave = 3
      }

      counter++

      // set lastNoteVal back to 12 if this is the last iteration of the loop
      if (i === scaleNotes.length-1) {
        lastNoteVal = 12
      }

      // logs
      // console.log(`idArr at end:`)
      // console.log(idArr)
      
      // console.log(`lastNoteVal at end:`)
      // console.log(lastNoteVal)

      // console.log(`counter at end:`)
      // console.log(counter)

      // console.log(`currNoteVal at end:`)
      // console.log(currNoteVal)
    }

    // console.log(idArr)

    // color the different selected keys based on their id's
    if (idArr.length === 9) {
        const firstNoteHtmlId = document.getElementById(idArr[0])
        const secondNoteHtmlId = document.getElementById(idArr[1])
        const thirdNoteHtmlId = document.getElementById(idArr[2])
        const fourthNoteHtmlId = document.getElementById(idArr[3])
        const fifthNoteHtmlId = document.getElementById(idArr[4])
        const sixthNoteHtmlId = document.getElementById(idArr[5])
        const seventhNoteHtmlId = document.getElementById(idArr[6])
        const eighthNoteHtmlId = document.getElementById(idArr[7])
        const ninthNoteHtmlId = document.getElementById(idArr[8])
  
        // console.log(`\nfirstNoteHtmlId child:`)
        // console.log(firstNoteHtmlId)
  
        let scaleNumsTrim = [];
        scaleNums.forEach(function(num, ind) {
          scaleNumsTrim.push(num.trim())
        })
  
        // console.log(scaleNumsTrim)
        // change background colors of notes
        firstNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[0]]
        secondNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[1]]
        thirdNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[2]]
        fourthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[3]]
        fifthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[4]]
        sixthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[5]]
        seventhNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[6]]
        eighthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[7]]
        ninthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[8]]
  
        // change text color
        firstNoteHtmlId.style.color = 'black'
        secondNoteHtmlId.style.color = 'black'
        thirdNoteHtmlId.style.color = 'black'
        fourthNoteHtmlId.style.color = 'black'
        fifthNoteHtmlId.style.color = 'black'
        sixthNoteHtmlId.style.color = 'black'
        seventhNoteHtmlId.style.color = 'black'
        eighthNoteHtmlId.style.color = 'black'
        ninthNoteHtmlId.style.color = 'black'
  
        // change text weight
        firstNoteHtmlId.style.fontWeight = 'bold'
        secondNoteHtmlId.style.fontWeight = 'bold'
        thirdNoteHtmlId.style.fontWeight = 'bold'
        fourthNoteHtmlId.style.fontWeight = 'bold'
        fifthNoteHtmlId.style.fontWeight = 'bold'
        sixthNoteHtmlId.style.fontWeight = 'bold'
        seventhNoteHtmlId.style.fontWeight = 'bold'
        eighthNoteHtmlId.style.fontWeight = 'bold'
        ninthNoteHtmlId.style.fontWeight = 'bold'
  
  
        // change border
        firstNoteHtmlId.style.border = 'solid'
        secondNoteHtmlId.style.border = 'solid'
        thirdNoteHtmlId.style.border = 'solid'
        fourthNoteHtmlId.style.border = 'solid'
        fifthNoteHtmlId.style.border = 'solid'
        sixthNoteHtmlId.style.border = 'solid'
        seventhNoteHtmlId.style.border = 'solid'
        eighthNoteHtmlId.style.border = 'solid'
        ninthNoteHtmlId.style.border = 'solid'
    } else if (idArr.length === 8) {
        const firstNoteHtmlId = document.getElementById(idArr[0])
        const secondNoteHtmlId = document.getElementById(idArr[1])
        const thirdNoteHtmlId = document.getElementById(idArr[2])
        const fourthNoteHtmlId = document.getElementById(idArr[3])
        const fifthNoteHtmlId = document.getElementById(idArr[4])
        const sixthNoteHtmlId = document.getElementById(idArr[5])
        const seventhNoteHtmlId = document.getElementById(idArr[6])
        const eighthNoteHtmlId = document.getElementById(idArr[7])
  
        // console.log(`\nfirstNoteHtmlId child:`)
        // console.log(firstNoteHtmlId)
  
        let scaleNumsTrim = [];
        scaleNums.forEach(function(num, ind) {
          scaleNumsTrim.push(num.trim())
        })
  
        // console.log(scaleNumsTrim)
        // change background colors of notes
        firstNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[0]]
        secondNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[1]]
        thirdNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[2]]
        fourthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[3]]
        fifthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[4]]
        sixthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[5]]
        seventhNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[6]]
        eighthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[7]]
  
        // change text color
        firstNoteHtmlId.style.color = 'black'
        secondNoteHtmlId.style.color = 'black'
        thirdNoteHtmlId.style.color = 'black'
        fourthNoteHtmlId.style.color = 'black'
        fifthNoteHtmlId.style.color = 'black'
        sixthNoteHtmlId.style.color = 'black'
        seventhNoteHtmlId.style.color = 'black'
        eighthNoteHtmlId.style.color = 'black'
  
        // change text weight
        firstNoteHtmlId.style.fontWeight = 'bold'
        secondNoteHtmlId.style.fontWeight = 'bold'
        thirdNoteHtmlId.style.fontWeight = 'bold'
        fourthNoteHtmlId.style.fontWeight = 'bold'
        fifthNoteHtmlId.style.fontWeight = 'bold'
        sixthNoteHtmlId.style.fontWeight = 'bold'
        seventhNoteHtmlId.style.fontWeight = 'bold'
        eighthNoteHtmlId.style.fontWeight = 'bold'
  
  
        // change border
        firstNoteHtmlId.style.border = 'solid'
        secondNoteHtmlId.style.border = 'solid'
        thirdNoteHtmlId.style.border = 'solid'
        fourthNoteHtmlId.style.border = 'solid'
        fifthNoteHtmlId.style.border = 'solid'
        sixthNoteHtmlId.style.border = 'solid'
        seventhNoteHtmlId.style.border = 'solid'
        eighthNoteHtmlId.style.border = 'solid'
    } else if (idArr.length === 7) {
      const firstNoteHtmlId = document.getElementById(idArr[0])
      const secondNoteHtmlId = document.getElementById(idArr[1])
      const thirdNoteHtmlId = document.getElementById(idArr[2])
      const fourthNoteHtmlId = document.getElementById(idArr[3])
      const fifthNoteHtmlId = document.getElementById(idArr[4])
      const sixthNoteHtmlId = document.getElementById(idArr[5])
      const seventhNoteHtmlId = document.getElementById(idArr[6])

      // console.log(`\nfirstNoteHtmlId child:`)
      // console.log(firstNoteHtmlId)

      let scaleNumsTrim = [];
      scaleNums.forEach(function(num, ind) {
        scaleNumsTrim.push(num.trim())
      })

      // console.log(scaleNumsTrim)
      // change background colors of notes
      firstNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[0]]
      secondNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[1]]
      thirdNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[2]]
      fourthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[3]]
      fifthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[4]]
      sixthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[5]]
      seventhNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[6]]

      // change text color
      firstNoteHtmlId.style.color = 'black'
      secondNoteHtmlId.style.color = 'black'
      thirdNoteHtmlId.style.color = 'black'
      fourthNoteHtmlId.style.color = 'black'
      fifthNoteHtmlId.style.color = 'black'
      sixthNoteHtmlId.style.color = 'black'
      seventhNoteHtmlId.style.color = 'black'

      // change text weight
      firstNoteHtmlId.style.fontWeight = 'bold'
      secondNoteHtmlId.style.fontWeight = 'bold'
      thirdNoteHtmlId.style.fontWeight = 'bold'
      fourthNoteHtmlId.style.fontWeight = 'bold'
      fifthNoteHtmlId.style.fontWeight = 'bold'
      sixthNoteHtmlId.style.fontWeight = 'bold'
      seventhNoteHtmlId.style.fontWeight = 'bold'

      // change border
      firstNoteHtmlId.style.border = 'solid'
      secondNoteHtmlId.style.border = 'solid'
      thirdNoteHtmlId.style.border = 'solid'
      fourthNoteHtmlId.style.border = 'solid'
      fifthNoteHtmlId.style.border = 'solid'
      sixthNoteHtmlId.style.border = 'solid'
      seventhNoteHtmlId.style.border = 'solid'

    } else if (idArr.length === 6) {
      const firstNoteHtmlId = document.getElementById(idArr[0])
      const secondNoteHtmlId = document.getElementById(idArr[1])
      const thirdNoteHtmlId = document.getElementById(idArr[2])
      const fourthNoteHtmlId = document.getElementById(idArr[3])
      const fifthNoteHtmlId = document.getElementById(idArr[4])
      const sixthNoteHtmlId = document.getElementById(idArr[5])

      // console.log(`\nfirstNoteHtmlId child:`)
      // console.log(firstNoteHtmlId)

      let scaleNumsTrim = [];
      scaleNums.forEach(function(num, ind) {
        scaleNumsTrim.push(num.trim())
      })

      // console.log(scaleNumsTrim)
      // change background colors of notes
      firstNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[0]]
      secondNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[1]]
      thirdNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[2]]
      fourthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[3]]
      fifthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[4]]
      sixthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[5]]

      // change text color
      firstNoteHtmlId.style.color = 'black'
      secondNoteHtmlId.style.color = 'black'
      thirdNoteHtmlId.style.color = 'black'
      fourthNoteHtmlId.style.color = 'black'
      fifthNoteHtmlId.style.color = 'black'
      sixthNoteHtmlId.style.color = 'black'

      // change text weight
      firstNoteHtmlId.style.fontWeight = 'bold'
      secondNoteHtmlId.style.fontWeight = 'bold'
      thirdNoteHtmlId.style.fontWeight = 'bold'
      fourthNoteHtmlId.style.fontWeight = 'bold'
      fifthNoteHtmlId.style.fontWeight = 'bold'
      sixthNoteHtmlId.style.fontWeight = 'bold'

      // change border
      firstNoteHtmlId.style.border = 'solid'
      secondNoteHtmlId.style.border = 'solid'
      thirdNoteHtmlId.style.border = 'solid'
      fourthNoteHtmlId.style.border = 'solid'
      fifthNoteHtmlId.style.border = 'solid'
      sixthNoteHtmlId.style.border = 'solid'

    } else if (idArr.length === 5) {
      const firstNoteHtmlId = document.getElementById(idArr[0])
      const secondNoteHtmlId = document.getElementById(idArr[1])
      const thirdNoteHtmlId = document.getElementById(idArr[2])
      const fourthNoteHtmlId = document.getElementById(idArr[3])
      const fifthNoteHtmlId = document.getElementById(idArr[4])

      // console.log(`\nfirstNoteHtmlId child:`)
      // console.log(firstNoteHtmlId)

      let scaleNumsTrim = [];
      scaleNums.forEach(function(num, ind) {
        scaleNumsTrim.push(num.trim())
      })

      // console.log(scaleNumsTrim)
      // change background colors of notes
      firstNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[0]]
      secondNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[1]]
      thirdNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[2]]
      fourthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[3]]
      fifthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[4]]

      // change text color
      firstNoteHtmlId.style.color = 'black'
      secondNoteHtmlId.style.color = 'black'
      thirdNoteHtmlId.style.color = 'black'
      fourthNoteHtmlId.style.color = 'black'
      fifthNoteHtmlId.style.color = 'black'

      // change text weight
      firstNoteHtmlId.style.fontWeight = 'bold'
      secondNoteHtmlId.style.fontWeight = 'bold'
      thirdNoteHtmlId.style.fontWeight = 'bold'
      fourthNoteHtmlId.style.fontWeight = 'bold'
      fifthNoteHtmlId.style.fontWeight = 'bold'

      // change border
      firstNoteHtmlId.style.border = 'solid'
      secondNoteHtmlId.style.border = 'solid'
      thirdNoteHtmlId.style.border = 'solid'
      fourthNoteHtmlId.style.border = 'solid'
      fifthNoteHtmlId.style.border = 'solid'

    } else if (idArr.length === 4) {
      const firstNoteHtmlId = document.getElementById(idArr[0])
      const secondNoteHtmlId = document.getElementById(idArr[1])
      const thirdNoteHtmlId = document.getElementById(idArr[2])
      const fourthNoteHtmlId = document.getElementById(idArr[3])

      // console.log(`\nfirstNoteHtmlId child:`)
      // console.log(firstNoteHtmlId)

      let scaleNumsTrim = [];
      scaleNums.forEach(function(num, ind) {
        scaleNumsTrim.push(num.trim())
      })

      // console.log(scaleNumsTrim)
      // change background colors of notes
      firstNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[0]]
      secondNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[1]]
      thirdNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[2]]
      fourthNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[3]]

      // change text color
      firstNoteHtmlId.style.color = 'black'
      secondNoteHtmlId.style.color = 'black'
      thirdNoteHtmlId.style.color = 'black'
      fourthNoteHtmlId.style.color = 'black'

      // change text weight
      firstNoteHtmlId.style.fontWeight = 'bold'
      secondNoteHtmlId.style.fontWeight = 'bold'
      thirdNoteHtmlId.style.fontWeight = 'bold'
      fourthNoteHtmlId.style.fontWeight = 'bold'

      // change border
      firstNoteHtmlId.style.border = 'solid'
      secondNoteHtmlId.style.border = 'solid'
      thirdNoteHtmlId.style.border = 'solid'
      fourthNoteHtmlId.style.border = 'solid'
    
    } else if (idArr.length === 3) {
      const firstNoteHtmlId = document.getElementById(idArr[0])
      const secondNoteHtmlId = document.getElementById(idArr[1])
      const thirdNoteHtmlId = document.getElementById(idArr[2])

      // console.log(`\nfirstNoteHtmlId child:`)
      // console.log(firstNoteHtmlId)

      let scaleNumsTrim = [];
      scaleNums.forEach(function(num, ind) {
        scaleNumsTrim.push(num.trim())
      })

      // console.log(scaleNumsTrim)
      // change background colors of notes
      firstNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[0]]
      secondNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[1]]
      thirdNoteHtmlId.style.backgroundColor = noteColorObj[scaleNumsTrim[2]]

      // change text color
      firstNoteHtmlId.style.color = 'black'
      secondNoteHtmlId.style.color = 'black'
      thirdNoteHtmlId.style.color = 'black'

      // change text weight
      firstNoteHtmlId.style.fontWeight = 'bold'
      secondNoteHtmlId.style.fontWeight = 'bold'
      thirdNoteHtmlId.style.fontWeight = 'bold'

      // change border
      firstNoteHtmlId.style.border = 'solid'
      secondNoteHtmlId.style.border = 'solid'
      thirdNoteHtmlId.style.border = 'solid'

    } 

    // color the selected chord
    const scaleHTML = document.getElementById(scaleId)
    scaleHTML.style.backgroundColor = 'tomato';
    // turn on the scaleMapLegend state 
    setScaleMapLegend(true)

    // for loop that cycles that matches each noteId in idArr with the audio file of that note
    for (let i=0; i<idArr.length; i++) {
      let note = idArr[i];
      let isSharp = false;

      if (note.length > 6) {
          isSharp = true
      }

      let newNote = note.slice(0, 2)

      if (isSharp) {
          newNote += 'sharp'
      }

      // console.log(`newNote:`)
      // console.log(newNote)

      // use stringToNoteObj instead of the eval method!
      new Audio(stringToNoteObj[newNote]).play()
      
      // sleep for two seconds
      await sleep(0.7)
    }

  }

  // event handler functions

  // darkMode function
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  // play audio notes
  // function playNote() {
  //   console.log(`\n this triggered the playNote function:`)
  //   return new Audio(c2).play()
  // }

  // choose starting key function
  function keyStartC() {
    setPreCursorRound(false)
    setFirstRound(true)
  }
  function keyStartCsharp() {
    setStartKey('C#')
    setPreCursorRound(false)
    setFirstRound(true)
  }
  function keyStartD() {
    setStartKey('D')
    setPreCursorRound(false)
    setFirstRound(true)
  }
  function keyStartDsharp() {
    setStartKey('D#')
    setPreCursorRound(false)
    setFirstRound(true)
  }
  function keyStartE() {
    setStartKey('E')
    setPreCursorRound(false)
    setFirstRound(true)
  }
  function keyStartF() {
    setStartKey('F')
    setPreCursorRound(false)
    setFirstRound(true)
  }
  function keyStartFsharp() {
    setStartKey('F#')
    setPreCursorRound(false)
    setFirstRound(true)
  }
  function keyStartG() {
    setStartKey('G')
    setPreCursorRound(false)
    setFirstRound(true)
  }
  function keyStartGsharp() {
    setStartKey('G#')
    setPreCursorRound(false)
    setFirstRound(true)
  }
  function keyStartA() {
    setStartKey('A')
    setPreCursorRound(false)
    setFirstRound(true)
  }
  function keyStartAsharp() {
    setStartKey('A#')
    setPreCursorRound(false)
    setFirstRound(true)
  }
  function keyStartB() {
    setStartKey('B')
    setPreCursorRound(false)
    setFirstRound(true)
  }

  // scale genre functions
  function churchModes() {
    setFirstRound(false)
    setShowChurchModes(true)
  }

  function minorFnc() {
    setFirstRound(false)
    setMinorScales(true)
  }

  function bluesFnc() {
    setFirstRound(false)
    setBluesScales(true)
  }

  function pentFnc() {
    setFirstRound(false)
    setPentScales(true)
  }

  function jazzFnc() {
    setFirstRound(false)
    setJazzScales(true)
  }

  function exoticFnc() {
    setFirstRound(false)
    setExoticScales(true)
  }

  return (
    <div className={!darkMode ? 'App' : 'App--dark'}>

        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

        <h1 className={!darkMode ? 'welcome--title' : 'welcome--title--dark'}>Have fun with my scales 🎼 generator!!</h1>

        <div className={!darkMode ? 'piano--section' : 'piano--dark--section'}>

            <div className={!darkMode ? 'piano--keyboard' : 'piano--dark--keyboard'}>
                <div className={!darkMode ? 'just--keyboard' : 'just--dark--keyboard'}>
                  <PianoNote text='C2'id='c2-key' key='c2-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'}/>
                  <PianoNote text='C#'id='c2-sharp-key' key='c2-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='D' id='d2-key' key='d2-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='D#'id='d2-sharp-key' key='d2-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='E' id='e2-key' key='e2-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='F'id='f2-key' key='f2-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='F#'id='f2-sharp-key' key='f2-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='G'id='g2-key' key='g2-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='G#'id='g2-sharp-key' key='g2-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='A'id='a2-key' key='a2-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='A#'id='a2-sharp-key' key='a2-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='B'id='b2-key' key='b2-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />

                  <PianoNote text='C3' id='c3-key' key='c3-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='C#'id='c3-sharp-key' key='c3-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='D' id='d3-key' key='d3-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='D#'id='d3-sharp-key' key='d3-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='E' id='e3-key' key='e3-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='F'id='f3-key' key='f3-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='F#'id='f3-sharp-key' key='f3-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='G'id='g3-key' key='g3-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='G#'id='g3-sharp-key' key='g3-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='A'id='a3-key' key='a3-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='A#'id='a3-sharp-key' key='a3-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='B'id='b3-key' key='b3-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />

                  <PianoNote text='C4' id='c4-key' key='c4-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='C#'id='c4-sharp-key' key='c4-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='D' id='d4-key' key='d4-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='D#'id='d4-sharp-key' key='d4-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='E' id='e4-key' key='e4-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='F'id='f4-key' key='f4-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='F#'id='f4-sharp-key' key='f4-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='G'id='g4-key' key='g4-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='G#'id='g4-sharp-key' key='g4-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='A'id='a4-key' key='a4-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='A#'id='a4-sharp-key' key='a4-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='B'id='b4-key' key='b4-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />

                  <PianoNote text='C5' id='c5-key' key='c5-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='C#'id='c5-sharp-key' key='c5-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='D' id='d5-key' key='d5-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='D#'id='d5-sharp-key' key='d5-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='E' id='e5-key' key='e5-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='F'id='f5-key' key='f5-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='F#'id='f5-sharp-key' key='f5-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='G'id='g5-key' key='g5-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='G#'id='g5-sharp-key' key='g5-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='A'id='a5-key' key='a5-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='A#'id='a5-sharp-key' key='a5-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='B'id='b5-key' key='b5-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />

                  <PianoNote text='C6' id='c6-key' key='c6-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='C#'id='c6-sharp-key' key='c6-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='D' id='d6-key' key='d6-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='D#'id='d6-sharp-key' key='d6-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='E' id='e6-key' key='e6-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='F'id='f6-key' key='f6-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='F#'id='f6-sharp-key' key='f6-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='G'id='g6-key' key='g6-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='G#'id='g6-sharp-key' key='g6-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='A'id='a6-key' key='a6-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                  <PianoNote text='A#'id='a6-sharp-key' key='a6-sharp-key' className={!darkMode ? 'piano--black--key' : 'piano--black--key--dark'} className2={!darkMode ? 'black--key--text' : 'black--key--dark--text'} />
                  <PianoNote text='B'id='b6-key' key='b6-key' className={!darkMode ? 'piano--key' : 'piano--key--dark'} className2={!darkMode ? 'key--text' : 'key--dark--text'} />
                </div>
            </div>

            <div className={!darkMode ? 'jazzChords--buttons' : 'jazzChords--dark--buttons'}>

                {/* display map legend when chord voicing is selected*/}
                {scaleMapLegend && <ScaleMapLegend className={!darkMode ? 'map--legend' : 'map--legend--dark'}/>}

                {/* decide on key / preCursor Round*/}
                {preCursorRound && <ScaleOptions  chordTypeBool={keyStartC} text='C' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <ScaleOptions  chordTypeBool={keyStartCsharp} text='C#' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <ScaleOptions  chordTypeBool={keyStartD} text='D' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <ScaleOptions  chordTypeBool={keyStartDsharp} text='D#' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <ScaleOptions  chordTypeBool={keyStartE} text='E' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <ScaleOptions  chordTypeBool={keyStartF} text='F' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <ScaleOptions  chordTypeBool={keyStartFsharp} text='F#' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <ScaleOptions  chordTypeBool={keyStartG} text='G' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <ScaleOptions  chordTypeBool={keyStartGsharp} text='G#' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <ScaleOptions  chordTypeBool={keyStartA} text='A' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <ScaleOptions  chordTypeBool={keyStartAsharp} text='A#' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <ScaleOptions  chordTypeBool={keyStartB} text='B' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}

                {/* first round to select genre of scales */}
                {firstRound && <ScaleOptions chordTypeBool={churchModes} text='Church Modes' className={!darkMode ? 'scale--chord--button' : 'scale--chord--dark--button'}/>}
                {firstRound && <ScaleOptions chordTypeBool={minorFnc} text='Minor Scales' className={!darkMode ? 'scale--chord--button' : 'scale--chord--dark--button'}/>}
                {firstRound && <ScaleOptions chordTypeBool={bluesFnc} text='Blues/Pent Scales' className={!darkMode ? 'scale--chord--button' : 'scale--chord--dark--button'}/>}
                {firstRound && <ScaleOptions chordTypeBool={jazzFnc} text='Jazz Scales' className={!darkMode ? 'scale--chord--button' : 'scale--chord--dark--button'}/>}
                {firstRound && <ScaleOptions chordTypeBool={exoticFnc} text='Exotic Scales' className={!darkMode ? 'scale--chord--button' : 'scale--chord--dark--button'}/>}


                {/* display Church Modes */}
                {/* {showChurchModes && <ScaleVoicings startKey={startKey} typeOfScale={'ionian'} text='ionian/maj' className={!darkMode ? 'chord--type' : 'chord--type--dark'} className2={!darkMode ? 'chord--type--text' : 'chord--type--text--dark'} className3={!darkMode ? 'chord--notes--text' : 'chord--notes--text--dark'} className4={!darkMode ? 'chord--nums--text' : 'chord--nums--text--dark'} showScale={displayScale} />} */}
                {showChurchModes && <ScaleVoicings id='one' key='one' startKey={startKey} typeOfScale='ionian' text='ionian' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {showChurchModes && <ScaleVoicings id='two' key='two' startKey={startKey} typeOfScale='dorian' text='dorian' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {showChurchModes && <ScaleVoicings id='three' key='three' startKey={startKey} typeOfScale='phrygian' text='phrygian' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {showChurchModes && <ScaleVoicings id='four' key='four' startKey={startKey} typeOfScale='lydian' text='lydian' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {showChurchModes && <ScaleVoicings id='five' key='five' startKey={startKey} typeOfScale='mixolydian'  text='mixolydian' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {showChurchModes && <ScaleVoicings id='six' key='six' startKey={startKey} typeOfScale='aeolian' text='aeolian/min' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {showChurchModes && <ScaleVoicings id='seven' key='seven' startKey={startKey} typeOfScale='locrian' text='locrian' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}

                {/* display major chord voicings */}
                {/* {thirdRoundMaj9 && <ChordVoicings startKey={startKey} chordType='maj9th' className={!darkMode ? 'chord--type' : 'chord--type--dark'} className2={!darkMode ? 'chord--type--text' : 'chord--type--text--dark'} className3={!darkMode ? 'chord--notes--text' : 'chord--notes--text--dark'} className4={!darkMode ? 'chord--nums--text' : 'chord--nums--text--dark'} showChord={displayChord}/>} */}

                {/* show minor scales */}
                {minorScales && <ScaleVoicings id='one' key='one' startKey={startKey} typeOfScale='aeolian' text='aeolian/natural minor' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {minorScales && <ScaleVoicings id='two' key='two' startKey={startKey} typeOfScale='harmonicMinor' text='harmonic minor' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {minorScales && <ScaleVoicings id='three' key='three' startKey={startKey} typeOfScale='melodicMinor' text='melodic minor' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}

                {/* show blues and pentatonic scales */}
                {bluesScales && <ScaleVoicings id='one' key='one' startKey={startKey} typeOfScale='minorPentBlues' text='minor pentatonic blues' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {bluesScales && <ScaleVoicings id='two' key='two' startKey={startKey} typeOfScale='majorPentBlues' text='major pentatonic blues' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {bluesScales && <ScaleVoicings id='three' key='three' startKey={startKey} typeOfScale='minorPent'text='minor pentatonic' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {bluesScales && <ScaleVoicings id='four' key='four' startKey={startKey} typeOfScale='majorPent' text='major pentatonic' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}

                {/* show jazz scales */}
                {jazzScales && <ScaleVoicings id='one' key='one' startKey={startKey} typeOfScale='majorBebop' text='maj Bebob scale' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {jazzScales && <ScaleVoicings id='two' key='two' startKey={startKey} typeOfScale='minorBebop' text='min Bebob scale' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {jazzScales && <ScaleVoicings id='three' key='three' startKey={startKey} typeOfScale='dominantBebop' text='dom Bebob scale' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {jazzScales && <ScaleVoicings id='four' key='four' startKey={startKey} typeOfScale='dorianBebop' text='dorian Bebob scale' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {jazzScales && <ScaleVoicings id='five' key='five' startKey={startKey} typeOfScale='superLocrian' text='super Locrian scale' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {jazzScales && <ScaleVoicings id='six' key='six' startKey={startKey} typeOfScale='nineTone' text='nine tone scale' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}

                {/* show exotic scales */}
                {exoticScales && <ScaleVoicings id='one' key='one' startKey={startKey} typeOfScale='algerian' text='algerian' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='two' key='two' startKey={startKey} typeOfScale='arabic' text='arabic' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='three' key='three' startKey={startKey} typeOfScale='augmented' text='augmented' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='four' key='four' startKey={startKey} typeOfScale='balinese' text='balinese' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='five' key='five' startKey={startKey} typeOfScale='byzantine' text='byzantine' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='six' key='six' startKey={startKey} typeOfScale='chinese' text='chinese' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='seven' key='seven' startKey={startKey} typeOfScale='diminished' text='diminished' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='eight' key='eight' startKey={startKey} typeOfScale='domDiminished' text='dom Diminished' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='nine' key='nine' startKey={startKey} typeOfScale='egyptian' text='egyptian' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='ten' key='ten' startKey={startKey} typeOfScale='eightTone' text='eightTone' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='eleven' key='eleven' startKey={startKey} typeOfScale='enigmaticMinor' text='enigmatic Minor' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='twelve' key='twelve' startKey={startKey} typeOfScale='enigmaticMajor' text='enigmatic Major' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='thirteen' key='thirteen' startKey={startKey} typeOfScale='ethiopian' text='ethiopian' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='fourteen' key='fourteen' startKey={startKey} typeOfScale='hawaiian' text='hawaiian' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='fifteen' key='fifteen' startKey={startKey} typeOfScale='hindu' text='hindu' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='sixteen' key='sixteen' startKey={startKey} typeOfScale='hirajoshi' text='hirajoshi' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='seventeen' key='seventeen' startKey={startKey} typeOfScale='hungarianGypsy' text='hungarian Gypsy' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='eighteen' key='eighteen' startKey={startKey} typeOfScale='hungarianMajor' text='hungarian Major' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='nineteen' key='nineteen' startKey={startKey} typeOfScale='iberian' text='iberian' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='twenty' key='twenty' startKey={startKey} typeOfScale='iwato' text='iwato' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='twenty-one' key='twenty-one' startKey={startKey} typeOfScale='japanese' text='japanese' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='twenty-two' key='twenty-two' startKey={startKey} typeOfScale='lydianDominant' text='lydian Dominant' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {/* {exoticScales && <ScaleVoicings id='twenty-three' key='twenty-three' startKey={startKey} typeOfScale='neapolitanMinor' text='neapolitan Minor' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />} */}
                {exoticScales && <ScaleVoicings id='twenty-four' key='twenty-four' startKey={startKey} typeOfScale='ocatonic' text='ocatonic' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='twenty-five' key='twenty-five' startKey={startKey} typeOfScale='oriental' text='oriental' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='twenty-six' key='twenty-six' startKey={startKey} typeOfScale='prometheus' text='prometheus' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='twenty-seven' key='twenty-seven' startKey={startKey} typeOfScale='romanianMinor' text='romanian Minor' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='twenty-eight' key='twenty-eight' startKey={startKey} typeOfScale='spanishGypsy' text='spanishGypsy' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='twenty-nine' key='twenty-nine' startKey={startKey} typeOfScale='wholeTones' text='wholeTones' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                {exoticScales && <ScaleVoicings id='thirty' key='thirty' startKey={startKey} typeOfScale='yo' text='yo' className={!darkMode ? 'scale--type' : 'scale--type--dark'} className2={!darkMode ? 'scale--type--text' : 'scale--type--text--dark'} className3={!darkMode ? 'scale--notes--text' : 'scale--notes--text--dark'} className4={!darkMode ? 'scale--nums--text' : 'scale--nums--text--dark'} showScale={displayScale} />}
                

                {/* display reset button for maj chord voicings */}
                {/* {thirdRoundMaj9 && <button onClick={reset} className={!darkMode ? 'reset--button' : 'reset--button--dark'}>Reset</button>} */}

                {/* display reset button for min chord voicings */}
                {/* {thirdRoundMin9 && <button onClick={reset} className={!darkMode ? 'reset--button' : 'reset--button--dark'}>Reset</button>} */}
                {/* {thirdRoundMin11 && <button onClick={reset} className={!darkMode ? 'reset--button' : 'reset--button--dark'}>Reset</button>} */}


            </div>

        </div>

       



    <Footer darkMode={darkMode}/>


    </div>
  )
}