let notesArraySharp = 
[
  'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A'
];

let notesArrayFlat = 
[
  'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A'
];

// interval definitions from 1-octave:

const minorSecond = 1; 
const majorSecond = 2;
const minorThird = 3;
const majorThird = 4;
const perfectFourth = majorSecond + minorThird;
const augFourth = minorThird + minorThird;
const dimFifth = minorThird + minorThird;
const perfectFifth = majorThird + minorThird;
const augFifth = majorThird + majorThird;
const dimSixth = majorThird + majorThird;
const majorSixth = perfectFourth + majorThird;
const augSixth = perfectFifth + minorThird;
const dimSeventh = perfectFifth + minorThird;
const majorSeventh = perfectFifth + majorThird;
const octave = majorSixth + minorThird;

// classes
class Scale {
  constructor(tonic) {
    this.tonic = tonic;
  }
  
  chromatic() {
    let tonicArray = Array.from(this.tonic);
    let isSharp = false;
    let isFlat = false;
    if (tonicArray[1] === 'b' || tonicArray[0] === 'F' || tonicArray[0] === 'd' || tonicArray[0] === 'g' || tonicArray[0] === 'c' || tonicArray[0] === 'f') {
      isFlat = true;
    } else {
      isSharp = true;
    }
    if (tonicArray[1] === '#') {
      isFlat = false;
      isSharp = true;
    } 

    let startingNote;
    if (this.tonic[1]) {
      startingNote = this.tonic[0].toUpperCase() + this.tonic[1];
    } else {
      startingNote = this.tonic[0].toUpperCase();
    }

    if (isSharp) {
      let first = notesArraySharp.indexOf(startingNote);
      let result = notesArraySharp.splice(first, (first + 9));
      return result;
    } else if (isFlat) {
      let first = notesArrayFlat.indexOf(startingNote);
      let result = notesArrayFlat.splice(first, (first + 9));
      return result;
    }
    
  }

  interval(intervals) {
    // logic for determining whether to use sharps or flats
    let tonicArray = Array.from(this.tonic);
    let isSharp = false;
    let isFlat = false;
    if (tonicArray[1] === 'b') {
      isFlat = true;
    } else {
      isSharp = true;
    }
    if (tonicArray[1] === '#') {
      isFlat = false;
      isSharp = true;
    } 

    // building scales with interval inputs
    let intervalArray = Array.from(intervals);
    let startingNote;
    if (this.tonic[1]) {
      startingNote = this.tonic[0].toUpperCase() + this.tonic[1];
    } else {
      startingNote = this.tonic[0].toUpperCase();
    }
    let scaleArray = [startingNote];
    if (isSharp) {
      let firstNoteIndex = notesArraySharp.indexOf(startingNote);
      let counter = firstNoteIndex;
      for (let i=0; i<intervalArray.length-1; i++) {
        if (intervalArray[i] === 'm') {
          counter++;
        } else if (intervalArray[i] === 'M') {
          counter += 2;
        } else if (intervalArray[i] === 'A') {
          counter += 3;
        } else if (intervalArray[i] === 'Q') {
          counter += 4;
        }
        scaleArray.push(notesArraySharp[counter]);
      }
      return scaleArray;
    } else if (isFlat) {
      let firstNoteIndex = notesArrayFlat.indexOf(startingNote);
      let counter = firstNoteIndex;
      for (let i=0; i<intervalArray.length-1; i++) {
        if (intervalArray[i] === 'm') {
          counter++;
        } else if (intervalArray[i] === 'M') {
          counter += 2;
        } else if (intervalArray[i] === 'A') {
          counter += 3;
        } else if (intervalArray[i] === 'Q') {
          counter += 4;
        }
        scaleArray.push(notesArrayFlat[counter]);
      }
      return scaleArray;
    }
  }
}

export default class scaleType {
  constructor(tonic) {
    this.tonic = tonic;
  }

  // church modes
  ionian() {
    const scaleArr = new Scale(this.tonic).interval('MMmMMMm');
    let scaleObj = 
    {
      name: 'ionian',
      notes: scaleArr,
    }
    return scaleObj
  }

  dorian() {
    const scaleArr = new Scale(this.tonic).interval('MmMMMmM');
    const scaleObj = 
    {
      name: 'dorian',
      notes: scaleArr,
    }
    return scaleObj;
  }

  phrygian() {
    const scaleArr = new Scale(this.tonic).interval('mMMMmMM');
    const scaleObj = 
    {
      name: 'phrygian',
      notes: scaleArr,
    }
    return scaleObj;
  }

  lydian() {
    const scaleArr = new Scale(this.tonic).interval('MMMmMMm');
    const scaleObj = 
    {
      name: 'lydian',
      notes: scaleArr,
    }
    return scaleObj;
  }

  mixolydian() {
    const scaleArr = new Scale(this.tonic).interval('MMmMMmM');
    const scaleObj = 
    {
      name: 'mixolydian',
      notes: scaleArr,
    }
    return scaleObj;
  }

  aeolian() {
    const scaleArr = new Scale(this.tonic).interval('MmMMmMM');
    const scaleObj = 
    {
      name: 'aeolian',
      notes: scaleArr,
    }
    return scaleObj;
  }

  locrian() {
    const scaleArr = new Scale(this.tonic).interval('mMMmMMM');
    const scaleObj = 
    {
      name: 'locrian',
      notes: scaleArr,
    }
    return scaleObj;
  }

  // extra minor scales
  harmonicMinor() {
    const scaleArr = new Scale(this.tonic).interval('MmMMmAm');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  melodicMinor() {
    const scaleArr = new Scale(this.tonic).interval('MmMMMMm');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  // blues scales
  minorPentBlues() {
    const scaleArr = new Scale(this.tonic).interval('AMmmAM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  majorPentBlues() {
    const scaleArr = new Scale(this.tonic).interval('MmmAMA');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  // pentatonic scales
  minorPent() {
    const scaleArr = new Scale(this.tonic).interval('AMMAM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  majorPent() {
    const scaleArr = new Scale(this.tonic).interval('MMAMA');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  // jazz scales
  // bebop scales 
  majorBebop() {
    const scaleArr = new Scale(this.tonic).interval('MMmMmmMm');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  minorBebop() {
    const scaleArr = new Scale(this.tonic).interval('MmmmMMmM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  dominantBebop() {
    const scaleArr = new Scale(this.tonic).interval('MMmMMmmm');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  dorianBebop() {
    const scaleArr = new Scale(this.tonic).interval('MmMMMmm');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  // super locrian
  superLocrian() {
    const scaleArr = new Scale(this.tonic).interval('mMmMMMM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  // 9 Tone Scale (less common)
  nineTone() {
    const scaleArr = new Scale(this.tonic).interval('MmmMmmmMm');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  // exotic scales
  algerian() {
    const scaleArr = new Scale(this.tonic).interval('MmMmmmAM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  arabic() {
    const scaleArr = new Scale(this.tonic).interval('MMmmMMM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  augmented() {
    const scaleArr = new Scale(this.tonic).interval('AmAmAm');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  // TODO check this scale
  balinese() {
    const scaleArr = new Scale(this.tonic).interval('mMQmQ');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  // TODO add modes of the byzantine scale
  byzantine() {
    const scaleArr = new Scale(this.tonic).interval('mAmMmAm');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  // TODO add Mongolian scale
  chinese() {
    const scaleArr = new Scale(this.tonic).interval('QMmQm');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  diminished() {
    const scaleArr = new Scale(this.tonic).interval('MmMmMmMm');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  domDiminished() {
    const scaleArr = new Scale(this.tonic).interval('mMmMmMmM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  egyptian() {
    const scaleArr = new Scale(this.tonic).interval('MAMAM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  // ADD SPANISH GYPSY SCALE
  eightTone() {
    const scaleArr = new Scale(this.tonic).interval('mMmmmMMM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  enigmaticMinor() {
    const scaleArr = new Scale(this.tonic).interval('mMAmAmm');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  enigmaticMajor() {
    const scaleArr = new Scale(this.tonic).interval('mAMMMMmm');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  ethiopian() {
    const scaleArr = new Scale(this.tonic).interval('MmMMmMM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  hawaiian() {
    const scaleArr = new Scale(this.tonic).interval('MmMMMMm');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  hindu() {
    const scaleArr = new Scale(this.tonic).interval('MMmMmMM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  hirajoshi() {
    const scaleArr = new Scale(this.tonic).interval('MmQmQ');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  hungarianGypsy() {
    const scaleArr = new Scale(this.tonic).interval('MmAmmAm');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }
  hungarianMajor() {
    const scaleArr = new Scale(this.tonic).interval('AmMmMmM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  iberian() {
    const scaleArr = new Scale(this.tonic).interval('mAmMAM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  iwato() {
    const scaleArr = new Scale(this.tonic).interval('mQmQM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  japanese() {
    const scaleArr = new Scale(this.tonic).interval('mQMAM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }
  lydianDominant() {
    const scaleArr = new Scale(this.tonic).interval('MMMmMmM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  neapolitanMinor() {
    const scaleArr = new Scale(this.tonic).interval('mMMMmAm');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  // many of these
  // TODO finish
  ocatonic() {
    const scaleArr = new Scale(this.tonic).interval('mMMMMMm');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  oriental() {
    const scaleArr = new Scale(this.tonic).interval('mAmmAmM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }
  prometheus() {
    const scaleArr = new Scale(this.tonic).interval('MMMAmM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  romanianMinor() {
    const scaleArr = new Scale(this.tonic).interval('MmAmMmM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  spanishGypsy() {
    const scaleArr = new Scale(this.tonic).interval('mAmMmMM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

  wholeTones() {
    const scaleArr = new Scale(this.tonic).interval('MMMMMM');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }
  yo() {
    const scaleArr = new Scale(this.tonic).interval('MAMMA');
    const scaleObj = 
    {
      notes: scaleArr,
    }
    return scaleObj;
  }

}

// log tests
/*
// 1 console.log(new Scale('C').chromatic().join('-').join('-'));
// ? 2 too many notes at the end somehow? ... console.log(new Scale('F').chromatic().join('-'));
// 3 console.log(new Scale('C').interval('MMmMMMm').join('-'));
// 4 console.log(new Scale('G').interval('MMmMMMm').join('-'));
// 5 console.log(new Scale('F').interval('MMmMMMm').join('-'));
// 6 console.log(new Scale('f#').interval('MmMMmMM').join('-'));
// 7 correct console.log(new Scale('bb').interval('MmMMmMM').join('-'));
// 8 console.log(new Scale('d').interval('MmMMMmM').join('-'));
// 9 console.log(new Scale('Eb').interval('MMmMMmM').join('-'));
// 10 console.log(new Scale('a').interval('MMMmMMm').join('-'));
// 11 console.log(new Scale('e').interval('mMMMmMM').join('-'));
// 12 console.log(new Scale('g').interval('mMMmMMM').join('-'));
// 13 console.log(new Scale('d').interval('MmMMmAm').join('-'));
// 14 console.log(new Scale('C').interval('MmMmMmMm').join('-'));
// 15 console.log(new Scale('Db').interval('MMMMMM').join('-'));
// 16 console.log(new Scale('A').interval('MMAMA').join('-'));
// 17 console.log(new Scale('G').interval('mAMMMmm').join('-'));
*/

// start of prompts
// divide into western and non-western scales
// const cTonic = new scaleType('C');

// order of scales based on major scale downwards
 
// console.log(cTonic.ionian());
// console.log(cTonic.mixolydianScale());
// console.log(cTonic.dorianScale());
// console.log(cTonic.aeolianScale());
// console.log(cTonic.phrygianScale());
// console.log(cTonic.locrianScale());
// console.log(cTonic.lydianScale());
 

// order of minor scales
/*
console.log(cTonic.aeolianScale());
console.log(cTonic.harmonicMinorScale());
console.log(cTonic.melodicMinorScale());
*/

// blues scales
/*
console.log(cTonic.majorPentBluesScale());
console.log(cTonic.minorPentBluesScale());
*/

// pentatonic scales
/*
console.log(cTonic.majorPentScale());
console.log(cTonic.minorPentScale());
*/

// jazz scales tests
// order of bebop scales
/*
console.log(cTonic.majorBebopScale());
console.log(cTonic.minorBebopScale());
console.log(cTonic.dominantBebopScale());
console.log(cTonic.dorianBebopScale());
*/

// extra jazz scales
/*
console.log(cTonic.superLocrianScale());
console.log(cTonic.nineToneScale());
*/

// exotic scales
//console.log(cTonic.balineseScale());
