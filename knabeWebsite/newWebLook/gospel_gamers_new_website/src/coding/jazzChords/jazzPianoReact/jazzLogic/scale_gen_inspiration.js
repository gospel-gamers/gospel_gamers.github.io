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
    if (tonicArray[1] === 'b' || tonicArray[0] === 'F' || tonicArray[0] === 'd' || tonicArray[0] === 'g' || tonicArray[0] === 'c' || tonicArray[0] === 'f') {
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

class scaleType {
  constructor(tonic) {
    this.tonic = tonic;
  }

  // church modes
  majorScale() {
    return new Scale(this.tonic).interval('MMmMMMm');
  }

  dorianScale() {
    return new Scale(this.tonic).interval('MmMMMmM');
  }

  phrygianScale() {
    return new Scale(this.tonic).interval('mMMMmMM');
  }

  lydianScale() {
    return new Scale(this.tonic).interval('MMMmMMm');
  }

  mixolydianScale() {
    return new Scale(this.tonic).interval('MMmMMmM');
  }

  aeolianScale() {
    return new Scale(this.tonic).interval('MmMMmMM');
  }

  locrianScale() {
    return new Scale(this.tonic).interval('mMMmMMM');
  }

  // extra minor scales
  harmonicMinorScale() {
    return new Scale(this.tonic).interval('MmMMmAm');
  }

  melodicMinorScale() {
    return new Scale(this.tonic).interval('MmMMMMm');
  }

  // blues scales
  minorPentBluesScale() {
    return new Scale(this.tonic).interval('AMmmAM');
  }

  majorPentBluesScale() {
    return new Scale(this.tonic).interval('MmmAMA');
  }

  // pentatonic scales
  minorPentScale() {
    return new Scale(this.tonic).interval('AMMAM');
  }

  majorPentScale() {
    return new Scale(this.tonic).interval('MMAMA');
  }

  // jazz scales
  // bebop scales 
  majorBebopScale() {
    return new Scale(this.tonic).interval('MMmMmmMm');
  }

  minorBebopScale() {
    return new Scale(this.tonic).interval('MmmmMMmM');
  }

  dominantBebopScale() {
    return new Scale(this.tonic).interval('MMmMMmmm');
  }

  dorianBebopScale() {
    return new Scale(this.tonic).interval('MmMMMmm');
  }

  // super locrian
  superLocrianScale() {
    return new Scale(this.tonic).interval('mMmMMMM');
  }

  // 9 Tone Scale (less common)
  nineToneScale() {
    return new Scale(this.tonic).interval('MmmMmmmMm');
  }

  // exotic scales
  algerianScale() {
    return new Scale(this.tonic).interval('MmMmmmAM');
  }

  arabicScale() {
    return new Scale(this.tonic).interval('MMmmMMM');
  }

  augmentedScale() {
    return new Scale(this.tonic).interval('AmAmAm');
  }

  // TODO check this scale
  balineseScale() {
    return new Scale(this.tonic).interval('mMQmQ');
  }

  // TODO add modes of the byzantine scale
  byzantineScale() {
    return new Scale(this.tonic).interval('mAmMmAm');
  }

  // TODO add Mongolian scale
  chineseScale() {
    return new Scale(this.tonic).interval('QMmQm');
  }

  diminishedScale() {
    return new Scale(this.tonic).interval('MmMmMmMm');
  }

  domDiminishedScale() {
    return new Scale(this.tonic).interval('mMmMmMmM');
  }

  egyptianScale() {
    return new Scale(this.tonic).interval('MAMAM');
  }

  // ADD SPANISH GYPSY SCALE
  eightToneScale() {
    return new Scale(this.tonic).interval('mMmmmMMM');
  }

  enigmaticMinorScale() {
    return new Scale(this.tonic).interval('mMAmAmm');
  }

  enigmaticMajorScale() {
    return new Scale(this.tonic).interval('mAMMMMmm');
  }

  ethiopianScale() {
    return new Scale(this.tonic).interval('MmMMmMM');
  }

  hawaiianScale() {
    return new Scale(this.tonic).interval('MmMMMMm');
  }

  hinduScale() {
    return new Scale(this.tonic).interval('MMmMmMM');
  }

  hirajoshiScale() {
    return new Scale(this.tonic).interval('MmQmQ');
  }

  hungarianGypsyScale() {
    return new Scale(this.tonic).interval('MmAmmAm');
  }
  hungarianMajorScale() {
    return new Scale(this.tonic).interval('AmMmMmM');
  }

  iberianScale() {
    return new Scale(this.tonic).interval('mAmMAM');
  }

  iwatoScale() {
    return new Scale(this.tonic).interval('mQmQM');
  }

  japaneseScale() {
    return new Scale(this.tonic).interval('mQMAM');
  }
  lydianDominantScale() {
    return new Scale(this.tonic).interval('MMMmMmM');
  }

  neapolitanMinorScale() {
    return new Scale(this.tonic).interval('mMMMmAm');
  }

  // many of these
  // TODO finish
  ocatonicScale() {
    return new Scale(this.tonic).interval('mMMMMMm');
  }

  orientalScale() {
    return new Scale(this.tonic).interval('mAmmAmM');
  }
  prometheusScale() {
    return new Scale(this.tonic).interval('MMMAmM');
  }

  romanianMinorScale() {
    return new Scale(this.tonic).interval('MmAmMmM');
  }

  spanishGypsyScale() {
    return new Scale(this.tonic).interval('mAmMmMM');
  }

  wholeTonesScale() {
    return new Scale(this.tonic).interval('MMMMMM');
  }
  yoScale() {
    return new Scale(this.tonic).interval('MAMMA');
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
 
// console.log(cTonic.majorScale());
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
