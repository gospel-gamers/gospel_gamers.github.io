import { useState } from 'react'
import NavBar from '../components/navbar'
import PianoNote from '../components/pianoNote'
import JazzChordsButtons from '../components/jazzChordsButtons'
import Footer from '../components/footer'

// import jazzChordLogic
// import { jazzChord } from './jazzChordLogic'
// import { jazzChordNumbers } from './jazzChordLogic'
import ChordVoicings from '../components/chordVoicings'
import MapLegend from '../components/mapLegend'

// import all the epiano notes
//c2 octave
import c2 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-c2-key.wav';
import c2sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-c2-sharp-key.wav';
import d2 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-d2-key.wav';
import d2sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-d2-sharp-key.wav';
import e2 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-e2-key.wav';
import f2 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-f2-key.wav';
import f2sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-f2-sharp-key.wav';
import g2 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-g2-key.wav';
import g2sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-g2-sharp-key.wav';
import a2 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-a2-key.wav';
import a2sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-a2-sharp-key.wav';
import b2 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-b2-key.wav';

//c3 octave
import c3 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-c3-key.wav';
import c3sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-c3-sharp-key.wav';
import d3 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-d3-key.wav';
import d3sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-d3-sharp-key.wav';
import e3 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-e3-key.wav';
import f3 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-f3-key.wav';
import f3sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-f3-sharp-key.wav';
import g3 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-g3-key.wav';
import g3sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-g3-sharp-key.wav';
import a3 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-a3-key.wav';
import a3sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-a3-sharp-key.wav';
import b3 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-b3-key.wav';

//c4 octave
import c4 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-c4-key.wav';
import c4sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-c4-sharp-key.wav';
import d4 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-d4-key.wav';
import d4sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-d4-sharp-key.wav';
import e4 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-e4-key.wav';
import f4 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-f4-key.wav';
import f4sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-f4-sharp-key.wav';
import g4 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-g4-key.wav';
import g4sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-g4-sharp-key.wav';
import a4 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-a4-key.wav';
import a4sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-a4-sharp-key.wav';
import b4 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-b4-key.wav';

//c5 octave
import c5 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-c5-key.wav';
import c5sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-c5-sharp-key.wav';
import d5 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-d5-key.wav';
import d5sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-d5-sharp-key.wav';
import e5 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-e5-key.wav';
import f5 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-f5-key.wav';
import f5sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-f5-sharp-key.wav';
import g5 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-g5-key.wav';
import g5sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-g5-sharp-key.wav';
import a5 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-a5-key.wav';
import a5sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-a5-sharp-key.wav';
import b5 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-b5-key.wav';

//c6 octave
import c6 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-c6-key.wav';
import c6sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-c6-sharp-key.wav';
import d6 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-d6-key.wav';
import d6sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-d6-sharp-key.wav';
import e6 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-e6-key.wav';
import f6 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-f6-key.wav';
import f6sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-f6-sharp-key.wav';
import g6 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-g6-key.wav';
import g6sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-g6-sharp-key.wav';
import a6 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-a6-key.wav';
import a6sharp from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-a6-sharp-key.wav';
import b6 from '../coding/audioRecs/epianoAudioRecs/epianobounces/electric-piano-b6-key.wav';

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

export default function JazzChordGen() {
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

  // first Round to decide on chord type
  const [firstRound, setFirstRound] = useState(false);

  // augmented and diminished chords
  const [augChord, setAugChord] = useState(false)
  const [dimChord, setDimChord] = useState(false)
  
  // second Round if major chord is selected
  const [secondRoundMaj, setSecondRoundMaj] = useState(false)
  const [thirdRoundMaj9, setThirdRoundMaj9] = useState(false)
  const [thirdRoundMaj11, setThirdRoundMaj11] = useState(false)
  const [thirdRoundMaj13, setThirdRoundMaj13] = useState(false)
  const [thirdRoundDom13, setThirdRoundDom13] = useState(false)

  // second Round if minor chord is selected
  const [secondRoundMin, setSecondRoundMin] = useState(false) 
  const [thirdRoundMin9, setThirdRoundMin9] = useState(false)
  const [thirdRoundMin11, setThirdRoundMin11] = useState(false)

  // create final chord input state for jazz Chord generator ... not used??
  // const [finalChord, setFinalChord] = useState('null');

  // reset button 
  const [resetButton, setResetButton] = useState(false)
  // map legend
  const [mapLegend, setMapLegend] = useState(false)
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
    '8': 'violet',
    '9': 'violet',
    '11': 'crimson',
    '#11': 'firebrick',
    '13': 'darkred',

  }

  const notesIdNameArr =
  [
    'c2-key', 'c2-sharp-key', 'd2-key', 'd2-sharp-key', 'e2-key', 'f2-key', 'f2-sharp-key', 'g2-key', 'g2-sharp-key', 'a2-key', 'a2-sharp-key', 'b2-key', 'c3-key', 'c3-sharp-key', 'd3-key', 'd3-sharp-key', 'e3-key', 'f3-key', 'f3-sharp-key', 'g3-key', 'g3-sharp-key', 'a3-key', 'a3-sharp-key', 'b3-key', 'c4-key', 'c4-sharp-key', 'd4-key', 'd4-sharp-key', 'e4-key', 'f4-key', 'f4-sharp-key', 'g4-key', 'g4-sharp-key', 'a4-key', 'a4-sharp-key', 'b4-key', 'c5-key', 'c5-sharp-key', 'd5-key', 'd5-sharp-key', 'e5-key', 'f5-key', 'f5-sharp-key', 'g5-key', 'g5-sharp-key', 'a5-key', 'a5-sharp-key', 'b5-key', 'c6-key', 'c6-sharp-key', 'd6-key', 'd6-sharp-key', 'e6-key', 'f6-key', 'f6-sharp-key', 'g6-key', 'g6-sharp-key', 'a6-key', 'a6-sharp-key', 'b6-key'
  ]
  let chordIdNames = [
    // 'one', 'two', 'three', 'four', 'five', 'six'
  ]

  // displays chords on the keyboard and plays the notes audio
  function displayChord(chordNotes, chordNums, chordId, chordType) {
    // logs
    // console.log(`\nin parent element now...`)
    // console.log(`chordNotes:`)
    // console.log(chordNotes)
    // console.log(`chordNums:`)
    // console.log(chordNums)

    // console.log(`\ninside displayChord function`)
    // console.log(`chordId:`)
    // console.log(chordId)

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

    // create chordIdNames based on chordType so that the console does not throw an error
    if (chordType === 'maj9th') {
      chordIdNames = ['one', 'two', 'three']
    } else if (chordType === 'maj11th') {
      chordIdNames = ['one', 'two', 'three']
    } else if (chordType === 'maj13th') {
      chordIdNames = ['one', 'two']
    }  else if (chordType === 'dom13th') {
      chordIdNames = ['one', 'two', 'three', 'four', 'five', 'six']
    }  else if (chordType === 'min9th') {
      chordIdNames = ['one', 'two', 'three', 'four']
    }  else if (chordType === 'min11th') {
      chordIdNames = ['one', 'two', 'three', 'four', 'five']
    }  else if (chordType === 'aug') {
      chordIdNames = ['one']
    }  else if (chordType === 'dim') {
      chordIdNames = ['one']
    }

    // forEach below goes through each chord--type and set its background color to white... so that a chord is shown as 'deselected'
    chordIdNames.forEach(idOfEachChord => {
      const chordHTML = document.getElementById(idOfEachChord)
      // console.log(`\nchordHTML inside notesIdNameArr:`)
      // console.log(chordHTML)
      chordHTML.style.backgroundColor = 'white';
      chordHTML.style.color = 'black';

    })

    // reset currOctave to 3 ... should I make this a state and add a button that changes octaves?...
    currOctave = 3;
    // setCurrOctave(3)

    let counter = 1;
    let idArr = [];

    for (let i=0; i<chordNotes.length; i++) {
      console.log(`counter at start:`)
      console.log(counter)
      console.log(`lastNoteVal at start of for loop:`)
      console.log(lastNoteVal)

      let note = chordNotes[i].trim()
      console.log(`note:`)
      console.log(note)

      currNoteVal = notesOrderObj[note]
      if (!currNoteVal) {
        throw new Error('undefined currNoteVal somehow...')
      }

      console.log(`currNoteVal:`)
      console.log(currNoteVal)
      console.log(`currOctave before checking lastNoteVal:`)
      console.log(currOctave)

      // ? should you make it >= here if there's ever and octave with a note?... looks like you should not
      if (currNoteVal > lastNoteVal) {
        currOctave++
      }
      console.log(`currOctave after checking lastNoteVal:`)
      console.log(currOctave)

      let noteLow = note.toLowerCase().trim()
      console.log(`noteLow before adding name extensions:`)
      console.log(noteLow)

      if (noteLow.length === 2) {
        if (noteLow[1] === '#') {
          noteLow = `${noteLow[0]}${String(currOctave)}-sharp-key`
        } else if (noteLow[1] === 'b') {
          noteLow = `${noteLow[0]}${String(currOctave)}-flat-key`
        }
      } else {
        noteLow = `${noteLow[0]}${String(currOctave)}-key`
      }

      console.log(`noteLow after adding name extensions:`)
      console.log(noteLow)
      
      // push noteLow and make final adjustments
      idArr.push(noteLow)
      if (lastNoteVal && currNoteVal) {
        lastNoteVal = currNoteVal
      }
      
      // counter === chordNotes.length ? currOctave = 3 : currOctave = currOctave;
      if (counter === chordNotes.length) {
        currOctave = 3
      }

      counter++

      // set lastNoteVal back to 12 if this is the last iteration of the loop
      if (i === chordNotes.length-1) {
        lastNoteVal = 12
      }

      // logs
      console.log(`idArr at end:`)
      console.log(idArr)
      
      console.log(`lastNoteVal at end:`)
      console.log(lastNoteVal)

      console.log(`counter at end:`)
      console.log(counter)

      console.log(`currNoteVal at end:`)
      console.log(currNoteVal)
    }

    // console.log(idArr)

    // color the different selected keys based on their id's
    if (idArr.length === 7) {
      const firstNoteHtmlId = document.getElementById(idArr[0])
      const secondNoteHtmlId = document.getElementById(idArr[1])
      const thirdNoteHtmlId = document.getElementById(idArr[2])
      const fourthNoteHtmlId = document.getElementById(idArr[3])
      const fifthNoteHtmlId = document.getElementById(idArr[4])
      const sixthNoteHtmlId = document.getElementById(idArr[5])
      const seventhNoteHtmlId = document.getElementById(idArr[6])

      // console.log(`\nfirstNoteHtmlId child:`)
      // console.log(firstNoteHtmlId)

      let chordNumsTrim = [];
      chordNums.forEach(function(num, ind) {
        chordNumsTrim.push(num.trim())
      })

      // console.log(chordNumsTrim)
      // change background colors of notes
      firstNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[0]]
      secondNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[1]]
      thirdNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[2]]
      fourthNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[3]]
      fifthNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[4]]
      sixthNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[5]]
      seventhNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[6]]

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

      let chordNumsTrim = [];
      chordNums.forEach(function(num, ind) {
        chordNumsTrim.push(num.trim())
      })

      // console.log(chordNumsTrim)
      // change background colors of notes
      firstNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[0]]
      secondNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[1]]
      thirdNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[2]]
      fourthNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[3]]
      fifthNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[4]]
      sixthNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[5]]

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

      let chordNumsTrim = [];
      chordNums.forEach(function(num, ind) {
        chordNumsTrim.push(num.trim())
      })

      // console.log(chordNumsTrim)
      // change background colors of notes
      firstNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[0]]
      secondNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[1]]
      thirdNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[2]]
      fourthNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[3]]
      fifthNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[4]]

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

      let chordNumsTrim = [];
      chordNums.forEach(function(num, ind) {
        chordNumsTrim.push(num.trim())
      })

      // console.log(chordNumsTrim)
      // change background colors of notes
      firstNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[0]]
      secondNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[1]]
      thirdNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[2]]
      fourthNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[3]]

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

      let chordNumsTrim = [];
      chordNums.forEach(function(num, ind) {
        chordNumsTrim.push(num.trim())
      })

      // console.log(chordNumsTrim)
      // change background colors of notes
      firstNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[0]]
      secondNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[1]]
      thirdNoteHtmlId.style.backgroundColor = noteColorObj[chordNumsTrim[2]]

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
    const chordHTML = document.getElementById(chordId)
    chordHTML.style.backgroundColor = 'tomato';
    // turn on the mapLegend state 
    setMapLegend(true)

    // for loop that cycles and matches each noteId in idArr with the audio file of that note
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

      console.log(`newNote:`)
      console.log(newNote)

      // use stringToNoteObj instead of the eval method!
      new Audio(stringToNoteObj[newNote]).play()
  
    }

  }


  // let audioNote;
  // function playNote(noteId) {
  //   console.log(noteId)
  //   audioNote = <audio 
  //     src={`./audioRecs/epianoAudioRecs/epianobounces/electric-piano-${noteId}.wav`}
  //   />
  //   console.log(audioNote)
  //   //return (audioNote)
  // }

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

  // augmented and diminished chord extensions
  function augChordFnc() {
    setFirstRound(false)
    setAugChord(true)
  }

  function dimChordFnc() {
    setFirstRound(false)
    setDimChord(true)
  }

  // major chord extensions

  function majChord() {
    setFirstRound(false)
    setSecondRoundMaj(true)
  }

  /*
  function maj7th() {
    setSecondRoundMaj(false)
    setThirdRoundMaj7(true)
  }
  */

  function maj9th() {
    setSecondRoundMaj(false)
    setThirdRoundMaj9(true)
  }

  function maj11th() {
    setSecondRoundMaj(false)
    setThirdRoundMaj11(true)
  }

  function maj13th() {
    setSecondRoundMaj(false)
    setThirdRoundMaj13(true)
  }

  function dom13th() {
    setSecondRoundMaj(false)
    setThirdRoundDom13(true)
  }

  // minor chord extensions

  function minChord() {
    setFirstRound(false)
    setSecondRoundMin(true)
  }

  function min9th() {
    setSecondRoundMin(false)
    setThirdRoundMin9(true)
  }

  function min11th() {
    setSecondRoundMin(false)
    setThirdRoundMin11(true)
  }

  function reset() {
    // just reload the entire page
    window.location.reload(false)

    // old way of resetting the state of each value
    // // states variables of keys
    // setCKey(false)
    // setCSharpKey(false)
    // setDKey(false)
    // setDSharpKey(false)
    // setEKey(false)
    // setFKey(false)
    // setFSharpKey(false)
    // setGKey(false)
    // setGSharpKey(false)
    // setAKey(false)
    // setASharpKey(false)
    // setBKey(false)
  
    // // first Round to decide on chord type
    // setFirstRound(false);
  
    // // augmented and diminished chords
    // setAugChord(false)
    // setDimChord(false)
    
    // // second Round if major chord is selected
    // setSecondRoundMaj(false)
    // setThirdRoundMaj9(false)
    // setThirdRoundMaj11(false)
    // setThirdRoundMaj13(false)
    // setThirdRoundDom13(false)
  
    // // second Round if minor chord is selected
    // setSecondRoundMin(false) 
    // setThirdRoundMin9(false)
    // setThirdRoundMin11(false)

    // // set aug and dim chords to false
    // setAugChord(false)
    // setDimChord(false)

    // setStartKey('C')
    // setPreCursorRound(true)
    // setResetButton(false)
    
  }

  return (
    <div className={!darkMode ? 'jazzchords--page' : 'jazzchords--page--dark'}>

        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

        <h1 className={!darkMode ? 'welcome--title' : 'welcome--title--dark'}>Have fun with my jazz 🎷 chords 🎹 generator!!</h1>

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
                {mapLegend && <MapLegend className={!darkMode ? 'map--legend' : 'map--legend--dark'}/>}

                {/* decide on key / preCursor Round*/}
                {preCursorRound && <JazzChordsButtons  chordTypeBool={keyStartC} text='C' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <JazzChordsButtons  chordTypeBool={keyStartCsharp} text='C#' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <JazzChordsButtons  chordTypeBool={keyStartD} text='D' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <JazzChordsButtons  chordTypeBool={keyStartDsharp} text='D#' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <JazzChordsButtons  chordTypeBool={keyStartE} text='E' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <JazzChordsButtons  chordTypeBool={keyStartF} text='F' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <JazzChordsButtons  chordTypeBool={keyStartFsharp} text='F#' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <JazzChordsButtons  chordTypeBool={keyStartG} text='G' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <JazzChordsButtons  chordTypeBool={keyStartGsharp} text='G#' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <JazzChordsButtons  chordTypeBool={keyStartA} text='A' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <JazzChordsButtons  chordTypeBool={keyStartAsharp} text='A#' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}
                {preCursorRound && <JazzChordsButtons  chordTypeBool={keyStartB} text='B' className={!darkMode ? 'startNote--button' : 'startNote--dark--button'}/>}

                {/* first round of questions */}
                {firstRound && <JazzChordsButtons  chordTypeBool={majChord} text='Maj Chord' className={!darkMode ? 'chord--button' : 'chord--dark--button'}/>}
                {firstRound && <JazzChordsButtons  chordTypeBool={minChord} text='Min Chord' className={!darkMode ? 'chord--button' : 'chord--dark--button'}/>}
                {firstRound && <JazzChordsButtons  chordTypeBool={augChordFnc} text='Aug Chord' className={!darkMode ? 'chord--button' : 'chord--dark--button'}/>}
                {firstRound && <JazzChordsButtons  chordTypeBool={dimChordFnc} text='Dim Chord' className={!darkMode ? 'chord--button' : 'chord--dark--button'}/>}

                {/* exit and display augmented or diminished chord */}
                {augChord && <ChordVoicings startKey={startKey} chordType='aug' className={!darkMode ? 'chord--type' : 'chord--type--dark'} className2={!darkMode ? 'chord--name--text' : 'chord--name--text--dark'} className3={!darkMode ? 'chord--notes--text' : 'chord--notes--text--dark'} className4={!darkMode ? 'chord--nums--text' : 'chord--nums--text--dark'} showChord={displayChord}/>}
                {dimChord && <ChordVoicings startKey={startKey} chordType='dim' className={!darkMode ? 'chord--type' : 'chord--type--dark'} className2={!darkMode ? 'chord--type--text' : 'chord--type--text--dark'} className3={!darkMode ? 'chord--notes--text' : 'chord--notes--text--dark'} className4={!darkMode ? 'chord--nums--text' : 'chord--nums--text--dark'} showChord={displayChord}/>}

                {/* display reset button for aug/dim chord voicings */}
                {augChord && <button onClick={reset} className={!darkMode ? 'reset--button' : 'reset--button--dark'}>Reset</button>}
                {dimChord && <button onClick={reset} className={!darkMode ? 'reset--button' : 'reset--button--dark'}>Reset</button>}

                {/* MajChord second round of questions */}
                {secondRoundMaj && <JazzChordsButtons  chordTypeBool={maj9th} text='maj9 Chord' className={!darkMode ? 'chord--button' : 'chord--dark--button'}/>}
                {secondRoundMaj && <JazzChordsButtons  chordTypeBool={maj11th} text='maj11 Chord' className={!darkMode ? 'chord--button' : 'chord--dark--button'}/>}
                {secondRoundMaj && <JazzChordsButtons  chordTypeBool={maj13th} text='maj13 Chord' className={!darkMode ? 'chord--button' : 'chord--dark--button'}/>}
                {secondRoundMaj && <JazzChordsButtons  chordTypeBool={dom13th} text='dom13 Chord' className={!darkMode ? 'chord--button' : 'chord--dark--button'}/>}

                {/* display major chord voicings */}
                {thirdRoundMaj9 && <ChordVoicings startKey={startKey} chordType='maj9th' className={!darkMode ? 'chord--type' : 'chord--type--dark'} className2={!darkMode ? 'chord--type--text' : 'chord--type--text--dark'} className3={!darkMode ? 'chord--notes--text' : 'chord--notes--text--dark'} className4={!darkMode ? 'chord--nums--text' : 'chord--nums--text--dark'} showChord={displayChord}/>}
                {thirdRoundMaj11 && <ChordVoicings startKey={startKey} chordType='maj11th' className={!darkMode ? 'chord--type' : 'chord--type--dark'} className2={!darkMode ? 'chord--type--text' : 'chord--type--text--dark'} className3={!darkMode ? 'chord--notes--text' : 'chord--notes--text--dark'} className4={!darkMode ? 'chord--nums--text' : 'chord--nums--text--dark'} showChord={displayChord}/>}
                {thirdRoundMaj13 && <ChordVoicings startKey={startKey} chordType='maj13th' className={!darkMode ? 'chord--type' : 'chord--type--dark'} className2={!darkMode ? 'chord--type--text' : 'chord--type--text--dark'} className3={!darkMode ? 'chord--notes--text' : 'chord--notes--text--dark'} className4={!darkMode ? 'chord--nums--text' : 'chord--nums--text--dark'} showChord={displayChord}/>}
                {thirdRoundDom13 && <ChordVoicings startKey={startKey} chordType='dom13th' className={!darkMode ? 'chord--type' : 'chord--type--dark'} className2={!darkMode ? 'chord--type--text' : 'chord--type--text--dark'} className3={!darkMode ? 'chord--notes--text' : 'chord--notes--text--dark'} className4={!darkMode ? 'chord--nums--text' : 'chord--nums--text--dark'} showChord={displayChord}/>}
                {/* display reset button for maj chord voicings */}
                {thirdRoundMaj9 && <button onClick={reset} className={!darkMode ? 'reset--button' : 'reset--button--dark'}>Reset</button>}
                {thirdRoundMaj11 && <button onClick={reset} className={!darkMode ? 'reset--button' : 'reset--button--dark'}>Reset</button>}
                {thirdRoundMaj13 && <button onClick={reset} className={!darkMode ? 'reset--button' : 'reset--button--dark'}>Reset</button>}
                {thirdRoundDom13 && <button onClick={reset} className={!darkMode ? 'reset--button' : 'reset--button--dark'}>Reset</button>}

                {/* MinChord second round of questions */}
                {secondRoundMin && <JazzChordsButtons  chordTypeBool={min9th} text='min9 Chord' className={!darkMode ? 'chord--button' : 'chord--dark--button'}/>}
                {secondRoundMin && <JazzChordsButtons  chordTypeBool={min11th} text='min11 Chord' className={!darkMode ? 'chord--button' : 'chord--dark--button'}/>}

                {/* display minor chord voicings */}
                {thirdRoundMin9 && <ChordVoicings startKey={startKey} chordType='min9th' className={!darkMode ? 'chord--type' : 'chord--type--dark'} className2={!darkMode ? 'chord--type--text' : 'chord--type--text--dark'} className3={!darkMode ? 'chord--notes--text' : 'chord--notes--text--dark'} className4={!darkMode ? 'chord--nums--text' : 'chord--nums--text--dark'} showChord={displayChord}/>}
                {thirdRoundMin11 && <ChordVoicings startKey={startKey} chordType='min11th' className={!darkMode ? 'chord--type' : 'chord--type--dark'} className2={!darkMode ? 'chord--type--text' : 'chord--type--text--dark'} className3={!darkMode ? 'chord--notes--text' : 'chord--notes--text--dark'} className4={!darkMode ? 'chord--nums--text' : 'chord--nums--text--dark'} showChord={displayChord}/>}
                {/* display reset button for min chord voicings */}
                {thirdRoundMin9 && <button onClick={reset} className={!darkMode ? 'reset--button' : 'reset--button--dark'}>Reset</button>}
                {thirdRoundMin11 && <button onClick={reset} className={!darkMode ? 'reset--button' : 'reset--button--dark'}>Reset</button>}


            </div>

        </div>

       



    <Footer darkMode={darkMode}/>


    </div>
  )
}