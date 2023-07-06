// sharp and flat arrays

const notesArraySharp = 
[
  'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A'
];

const notesArrayFlat = 
[
  'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A'
];

// numbers Interval Array
const numbersIntervalArr = 
[
    '1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7', '8', 'b9', '9', 'b10', '10', '11', '#11', '12', 'b13', '13', '1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7', '8', 'b9', '9', 'b10', '10', '11', '#11', '12', 'b13', '13', '1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7', '8', 'b9', '9', 'b10', '10', '11', '#11', '12', 'b13', '13', '1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7', '8', 'b9', '9', 'b10', '10', '11', '#11', '12', 'b13', '13'
];

// change to uppercase function
function changeToUpperCase(string) {
    return string.toUpperCase();
}

// join method for array
function joinArray(array) {
    return array.join(' - ');
}

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

// interval definitions for flavor chords from octave - +1octave

const dim9th = octave + minorSecond; 
const maj9th = octave + majorSecond;
const dim10th = octave + minorThird;
const maj10th = octave + majorThird;
const perfect11th = octave + majorSecond + minorThird;
const aug11th = octave + minorThird + minorThird;
const dim12th = octave + minorThird + minorThird;
const perfect12th = octave + majorThird + minorThird;
const aug12th = octave + majorThird + majorThird;
const dim13th = octave + majorThird + majorThird;
const maj13th = octave + perfectFourth + majorThird;
const aug13th = octave + perfectFifth + minorThird;
const dim14th = octave + perfectFifth + minorThird;
const maj14th = octave + perfectFifth + majorThird;

// object for number generator

let intervalsObject = {
    '1': 0,
    'b2': 1,
    '2': 2,
    'b3': 3,
    '3': 4,
    '4': 5,
    'b5': 6,
    '5': 7,
    'b6': 8,
    '6': 9,
    'b7': 10,
    '7': 11,
    '8': 12,
    'b9': 13,
    '9': 14,
    'b10': 15,
    '10': 16,
    '11': 17,
    '#11': 18,
    '12': 19,
    'b13': 20,
    '13': 21,
    'b14': 22,
    '14': 23,
}

// jazzChord class definition 

export class jazzChord {
  constructor(tonic, chordType) {
    this.tonic = tonic;
    this.chordType = chordType;
  }

  chordGenerator() {
    // definitons of variables and arrays/strings to use upper or lowercase input
    let upperCaseTonic = changeToUpperCase(this.tonic);
    let tonicArray = Array.from(this.tonic);
    let upperTonicArray = Array.from(upperCaseTonic);
    let combinedTonicString;
    // if statement to avoid undefined result if no sharp or flat in the second index
    if (upperTonicArray[1]) {
        combinedTonicString = upperTonicArray[0] + tonicArray[1];
    } else {
        combinedTonicString = upperTonicArray[0]
    }
    let combinedTonicArray = Array.from(combinedTonicString);
    // other needed variables
    let tonicIndex = 0;
    let isSharp = false;
    let isFlat = false;
    let chordNotes = [];

    // TODO create logic for isMajor, isMinor, isDim, isAug

    let isMaj = false;
    let isMin = false;
    let isDim = false;
    let isAug = false;

    if (this.chordType === 'maj' || !this.chordType) {
        isMaj = true;
    } else if (this.chordType === 'min' || this.chordType === '-') {
        isMin = true;
    } else if (this.chordType === 'dim' || this.chordType === '°') {
        isDim = true;
    } else if (this.chordType === 'aug' || this.chordType === '+') {
        isAug = true;
    } else {
        throw new Error('Not a valid chord input type');
    }

    // determine whether to use sharps or flats
    // TODO fix this value for Gminor and Cminor...
    if (combinedTonicArray[1] === 'b') {
        isFlat = true;
    } else {
        isSharp = true;
    }
    if (combinedTonicArray[1] === '#') {
        isFlat = false;
        isSharp = true;
    } 

    // generalize chord array to use

    let correctNotesArray = [];
    
    if (isFlat) {
        correctNotesArray = notesArrayFlat;
    } else {
        correctNotesArray = notesArraySharp;
    }

    // add scale notes logic based on chordType

    tonicIndex = correctNotesArray.indexOf(combinedTonicString);

    if (isMaj) {
        chordNotes.push(correctNotesArray[tonicIndex]);
        chordNotes.push(correctNotesArray[tonicIndex + majorThird]);
        chordNotes.push(correctNotesArray[tonicIndex + perfectFifth]);
    } else if (isMin) {
        chordNotes.push(correctNotesArray[tonicIndex]);
        chordNotes.push(correctNotesArray[tonicIndex + minorThird]);
        chordNotes.push(correctNotesArray[tonicIndex + perfectFifth]);
    } else if (isDim) {
        chordNotes.push(correctNotesArray[tonicIndex]);
        chordNotes.push(correctNotesArray[tonicIndex + minorThird]);
        chordNotes.push(correctNotesArray[tonicIndex + dimFifth]);
    } else if (isAug) {
        chordNotes.push(correctNotesArray[tonicIndex]);
        chordNotes.push(correctNotesArray[tonicIndex + majorThird]);
        chordNotes.push(correctNotesArray[tonicIndex + augFifth]);
    } else {
        //throw new Error('Not a valid chord input type');
    }
    return chordNotes;
  }

  chordExtension(flavorNote) {

    // create chordNotes array to work with
    let chordNotes = this.chordGenerator(); // simpler version than... let chordNotes = new jazzChord(this.tonic, this.chordType).chordGenerator();

    // definitons of variables and arrays/strings to use upper or lowercase input
    let upperCaseTonic = changeToUpperCase(this.tonic);
    let tonicArray = Array.from(this.tonic);
    let upperTonicArray = Array.from(upperCaseTonic);
    let combinedTonicString;

    let tonicIndex = 0;
    let isSharp = false;
    let isFlat = false;

    // if statement to avoid undefined result if no sharp or flat in the second index
    if (upperTonicArray[1]) {
        combinedTonicString = upperTonicArray[0] + tonicArray[1];
    } else {
        combinedTonicString = upperTonicArray[0]
    }

    let combinedTonicArray = Array.from(combinedTonicString);

    // logic for whether isMaj, isMin, isDom is true or false

    let isMaj = false;
    let isMin = false;
    let isDom = false;
    let domArray = Array.from(flavorNote);
    let domString = domArray[0] + domArray[1] + domArray[2];
    let domFlavorString = domArray.slice(3).join('');
    //console.log(domFlavorString);

    if ((this.chordType === 'maj' || !this.chordType) && (domString === 'dom')) {
        isDom = true;
    } else if (this.chordType === 'maj' || !this.chordType) {
        isMaj = true;
    } else if (this.chordType === 'min' || this.chordType === '-') {
        isMin = true;
    } else {
        throw new Error('Not a valid chord extension type. Use \'dom\' for dominant 7th chord extensions.');
    }

    // determine whether to use sharps or flats
    // TODO fix this value for Gminor and Cminor...

    if (combinedTonicArray[1] === 'b') {
        isFlat = true;
    } else {
        isSharp = true;
    }
    if (combinedTonicArray[1] === '#') {
        isFlat = false;
        isSharp = true;
    } 

    // generalize chord array to use

    let correctNotesArray = [];
    
    if (isFlat) {
        correctNotesArray = notesArrayFlat;
    } else {
        correctNotesArray = notesArraySharp;
    }

    // logic for adding chord extensions

    tonicIndex = correctNotesArray.indexOf(combinedTonicString);
    // major chord extension
    if (flavorNote && isMaj) {
        chordNotes.push(correctNotesArray[tonicIndex + majorSeventh]);
    } 
    if (flavorNote === '9' && isMaj) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
    } 
    if (flavorNote === '11' && isMaj) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + aug11th]);
    } 
    if (flavorNote === '13' && isMaj) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + aug11th]);
        chordNotes.push(correctNotesArray[tonicIndex + maj13th]);
    } 
    // minor chord extensions
    if (flavorNote && isMin) {
        chordNotes.push(correctNotesArray[tonicIndex + dimSeventh]);
    } 
    if (flavorNote === '9' && isMin) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
    } 
    if (flavorNote === '11' && isMin) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + perfect11th]);
    } 
    if (flavorNote === '13' && isMin) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + perfect11th]);
        chordNotes.push(correctNotesArray[tonicIndex + maj13th]);
    }
    // dominant chord extensions 
    if (flavorNote && isDom) {
        chordNotes.push(correctNotesArray[tonicIndex +  dimSeventh]);
    } 
    if (domArray[3] === '9' && isDom) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
    } 
    if (domFlavorString === '11' && isDom) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + aug11th]);
    } 
    if (domFlavorString === '13' && isDom) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + aug11th]);
        chordNotes.push(correctNotesArray[tonicIndex + maj13th]);
    }

    return chordNotes;

  }
}

export class jazzChordNumbers {
    constructor(array) {
        this.array = array;
    }

    numberGenerator() {

        // create tonic and tonicIndex to work with
        let tonic = this.array[0];
        let tonicIndex = 0;

        // tonic Array creation
        let tonicArray = Array.from(tonic);

        // isSharp or isFlat variables and logic
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

        // generalize chord array to use
        let correctNotesArray = [];
        
        if (isFlat) {
            correctNotesArray = notesArrayFlat;
        } else {
            correctNotesArray = notesArraySharp;
        }

        // logic for returning array with numbers
        tonicIndex = correctNotesArray.indexOf(tonic);
        let newTonicArray = correctNotesArray.slice(tonicIndex, correctNotesArray.length)

        // forEach method applied to create array with indices values
        let indexArray = [];
        this.array.forEach(element => {
            indexArray.push(newTonicArray.indexOf(element));
        });

        let indexArrayFinal = [];
        for (let i = 0; i<indexArray.length; i++) {
            if (indexArray[i] === 2 || indexArray[i] === 5 || indexArray[i] === 6 || indexArray[i] === 9) {
                indexArrayFinal.push(indexArray[i] + 12);
            } else {
                indexArrayFinal.push(indexArray[i]);
            }
        }

        // create final Numbers array
        let numbersArray = [];
        for (let i=0; i<indexArrayFinal.length; i++) {
            numbersArray.push(Object.keys(intervalsObject).find(key => intervalsObject[key] === indexArrayFinal[i]));
        }
        return numbersArray;
    }

    scaleNumberGenerator() {

        // create tonic and tonicIndex to work with
        let tonic = this.array[0];
        let tonicIndex = 0;

        // tonic Array creation
        let tonicArray = Array.from(tonic);

        // isSharp or isFlat variables and logic
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

        // generalize chord array to use
        let correctNotesArray = [];
        
        if (isFlat) {
            correctNotesArray = notesArrayFlat;
        } else {
            correctNotesArray = notesArraySharp;
        }

        // logic for returning array with numbers
        tonicIndex = correctNotesArray.indexOf(tonic);
        let newTonicArray = correctNotesArray.slice(tonicIndex, correctNotesArray.length)

        // forEach method applied to create array with indices values
        let indexArray = [];
        this.array.forEach(element => {
            indexArray.push(newTonicArray.indexOf(element));
        });

        let indexArrayFinal = [];
        for (let i = 0; i<indexArray.length; i++) {
            // refactor this part...
            if (indexArray[i] === 100) {
                indexArrayFinal.push(indexArray[i] + 12);
            } else {
                indexArrayFinal.push(indexArray[i]);
            }
        }

        // create final Numbers array
        let numbersArray = [];
        for (let i=0; i<indexArrayFinal.length; i++) {
            numbersArray.push(Object.keys(intervalsObject).find(key => intervalsObject[key] === indexArrayFinal[i]));
        }
        return numbersArray;
    }
    
    major9thVoicings() {
        //let numbersArray = new jazzChordNumbers(this.array).numberGenerator();
        let numbersArray = this.array;

        // check if array contains a minor chord, hence the b3
        let minorChordIndicator = numbersArray.find(value => value === 'b3');

        if (minorChordIndicator) {
            throw new Error('a major 9th voicing cannot be built with a minor chord');
        }

        // same but now whether it is Dominant
        let dominantChordIndicator = numbersArray.find(value => value === 'b7');
        if (dominantChordIndicator) {
            throw new Error('a major 9th voicing cannot be built with a dominant chord');
        }

        // check if length of chord exceeds a 9th chord
        if (numbersArray.length !== 5) {
            throw new Error('these voicings only work with a 9th chord')
        }

        // create chord voicings
        let openMaj9thVoicing = numbersArray;
        let closedMaj9thVoicing = [].concat(numbersArray[0], numbersArray.slice(-2), numbersArray.slice(1, 3)) 
        let drop5Maj9thVoicing = [].concat(closedMaj9thVoicing[0], closedMaj9thVoicing.slice(-1), closedMaj9thVoicing.slice(1, 4));

        // return answer with string interpolation
        const maj9Obj = 
        {
            'open maj9': openMaj9thVoicing,
            'closed maj9': closedMaj9thVoicing,
            'drop5 maj9': drop5Maj9thVoicing,
        }

        return maj9Obj

        // return `${openMaj9thVoicing.join(' - ')} --> open Maj9th    \n${closedMaj9thVoicing.join(' - ')} --> closed Maj9th    \n${drop5Maj9thVoicing.join(' - ')} --> drop5 Maj9th
        // `;


    }
    
    minor9thVoicings() {
        //let numbersArray = new jazzChordNumbers(this.array).numberGenerator();
        let numbersArray = this.array;

        // check if array contains a minor chord, hence the b3
        let majorChordIndicator = numbersArray.find(value => value === '3');
        if (majorChordIndicator) {
            throw new Error('a min 9th voicing cannot be built with a major or a dominant chord');
        }
        if (numbersArray.length !== 5) {
            throw new Error('these voicings only work with a 9th chord')
        }

        // create chord voicings
        let openMin9thVoicing = numbersArray;
        let closedMin9thVoicing = [].concat(numbersArray[0], numbersArray.slice(-2), numbersArray.slice(1, 3)) 
        let drop5Min9thVoicing = [].concat(closedMin9thVoicing[0], closedMin9thVoicing.slice(-1), closedMin9thVoicing.slice(1, 4));

        // create norman hutchins voicing that has a four in it
        const tonic = numbersArray[0];
        let tonicIndex;
        let perfectFour;
        
        // determine if it's a note or number value
        if (Number(tonic)) {
            tonicIndex = numbersIntervalArr.indexOf(tonic);
            perfectFour = numbersIntervalArr[tonicIndex+5];
        } else {
            tonicIndex = notesArraySharp.indexOf(tonic);
            perfectFour = notesArraySharp[tonicIndex+5];
        }

        let normanHutchinsMin9thVoicing = [].concat(drop5Min9thVoicing, perfectFour, drop5Min9thVoicing[2])

        // return answer with string interpolation
        const min9thObj = 
        {
            'open min9': openMin9thVoicing,
            'closed min9': closedMin9thVoicing,
            'drop5 min9': drop5Min9thVoicing,
            'Norman Hutchins min9': normanHutchinsMin9thVoicing,
        }

        return min9thObj
        
        // return `${openMin9thVoicing.join(' - ')} --> open Min9th    \n${closedMin9thVoicing.join(' - ')} --> closed Min9th    \n${drop5Min9thVoicing.join(' - ')} --> drop5 Min9th
        // `;
    }
    
    major11thVoicings() {
        //let numbersArray = new jazzChordNumbers(this.array).numberGenerator();
        let numbersArray = this.array;

        // check if array contains a minor chord, hence the b3
        let minorChordIndicator = numbersArray.find(value => value === 'b3');
        if (minorChordIndicator) {
            throw new Error('a major 11th voicing cannot be built with a minor chord');
        }

        // same but with a dominant chord
        let dominantChordIndicator = numbersArray.find(value => value === 'b7');
        if (dominantChordIndicator) {
            throw new Error('a major 11th voicing cannot be built with a dominant chord');
        }

        if (numbersArray.length !== 6) {
            throw new Error('these voicings only work with an 11th chord')
        }

        // create chord voicings
        let openMaj11thVoicing = numbersArray;
        let closedMaj11thVoicing = [].concat(numbersArray[0], numbersArray.slice(3, 5), numbersArray[1], numbersArray.slice(-1), numbersArray[2]) 
        let kennyBarronMaj11thVoicing = [].concat(closedMaj11thVoicing[0], closedMaj11thVoicing.slice(-1), closedMaj11thVoicing.slice(2, 4), closedMaj11thVoicing[1], closedMaj11thVoicing[4]);

        // return answer with string interpolation

        const maj11Obj = 
        {
            'open maj11': openMaj11thVoicing,
            'closed maj11': closedMaj11thVoicing,
            'Kenny Barron maj11': kennyBarronMaj11thVoicing,
        }

        return maj11Obj

        // return `${openMaj11thVoicing.join(' - ')} --> open Maj11th    \n${closedMaj11thVoicing.join(' - ')} --> closed Maj11th    \n${kennyBarronMaj11thVoicing.join(' - ')} --> Kenny Barron Maj11th
        // `;
    }
    
    minor11thVoicings() {
        //let numbersArray = new jazzChordNumbers(this.array).numberGenerator();
        let numbersArray = this.array;

        // check if array contains a minor chord, hence the b3
        let majorChordIndicator = numbersArray.find(value => value === '3');
        if (majorChordIndicator) {
            throw new Error('a minor 11th voicing cannot be built with a major chord');
        }
        if (numbersArray.length !== 6) {
            throw new Error('these voicings only work with an 11th chord')
        }

        // create chord voicings
        // TODO fix herbie hancock 7th note && add 'So What' voicing
        let openMin11thVoicing = numbersArray;
        let closedMin11thVoicing = [].concat(numbersArray[0], numbersArray.slice(3, 5), numbersArray[1], numbersArray.slice(-1), numbersArray[2]) 
        let kennyBarronMin11thVoicing = [].concat(closedMin11thVoicing[0], closedMin11thVoicing.slice(-1), closedMin11thVoicing.slice(2, 4), closedMin11thVoicing[1], closedMin11thVoicing[4]);

        // Herbie Hancock Voicing 
        const tonic = numbersArray[0];
        let tonicIndex;
        let naturalSev;
        let perfectFour;

        // determine if it's a note or number value, then add the 7
        if (Number(tonic)) {
            tonicIndex = numbersIntervalArr.indexOf(tonic);
            naturalSev = numbersIntervalArr[tonicIndex+11];
        } else {
            tonicIndex = notesArraySharp.indexOf(tonic);
            naturalSev = notesArraySharp[tonicIndex+11];
        }

        // logs for testing
        //console.log(`tonicIndex: ${tonicIndex}`);
        //console.log(`naturalSev: ${naturalSev}`);

        let herbieHanMin11thVoicing = [].concat(kennyBarronMin11thVoicing.slice(0, 2), kennyBarronMin11thVoicing[3], kennyBarronMin11thVoicing.slice(-1), naturalSev, kennyBarronMin11thVoicing[2]);

        // So What voicing, which adds the four
        if (Number(tonic)) {
            perfectFour = numbersIntervalArr[tonicIndex+5];
        } else {
            perfectFour = notesArraySharp[tonicIndex+5];
        }
        
        let soWhatMin11thVoicing = [].concat(tonic, perfectFour, numbersArray[3], numbersArray[1], numbersArray[2]);
        
        // return answer with string interpolation
        const min11thObj = 
        {
            'open min11': openMin11thVoicing,
            'closed min11': closedMin11thVoicing,
            'Kenny Barron min11': kennyBarronMin11thVoicing,
            'Herbie Hancock min11': herbieHanMin11thVoicing,
            '\'So What\' min11': soWhatMin11thVoicing,
        }

        return min11thObj


        // return `${openMin11thVoicing.join(' - ')} --> open Min11th    \n${closedMin11thVoicing.join(' - ')} --> closed Min11th    \n${kennyBarronMin11thVoicing.join(' - ')} --> Kenny Barron Min11th    \n${herbieHanMin11thVoicing.join(' - ')} --> Herbie Hancock Min11th    \n${soWhatMin11thVoicing.join(' - ')} --> So What Min11th Voicing
        // `;
    }
    
    major13thVoicings() {
        //let numbersArray = new jazzChordNumbers(this.array).numberGenerator();
        let numbersArray = this.array;

        // check if array contains a minor chord, hence the b3
        let minorChordIndicator = numbersArray.find(value => value === 'b3');
        if (minorChordIndicator) {
            throw new Error('a major 13jth voicing cannot be built with a minor chord');
        }
        // same but for a dominant chord
        let dominantChordIndicator = numbersArray.find(value => value === 'b7');
        if (dominantChordIndicator) {
            throw new Error('a major 13th voicing cannot be built with a dominant chord');
        }
        if (numbersArray.length !== 7) {
            throw new Error('these voicings only work with an 13th chord')
        }

        // create chord voicings
        let openMaj13thVoicing = numbersArray;
        let Maj13thNo11thVoicing = [].concat(openMaj13thVoicing.slice(0, 3), openMaj13thVoicing.slice(-1), openMaj13thVoicing.slice(3, 5), openMaj13thVoicing[1]);

        // return answer with string interpolation
        const maj13thObj = 
        {
            'open maj13': openMaj13thVoicing,
            'maj13th without 11': Maj13thNo11thVoicing,

        }

        return maj13thObj

        //return `${openMaj13thVoicing.join(' - ')} --> open Maj13th    \n${Maj13thNo11thVoicing.join(' - ')} --> Maj13thNo11th
        //`;
    }
    
    dominant13thVoicings() {
        let numbersArray = this.array;

        // check if array contains a minor chord, hence the b3
        let minorChordIndicator = numbersArray.find(value => value === 'b3');
        if (minorChordIndicator) {
            throw new Error('a dominant 13th voicing cannot be built with a minor chord');
        }
        // same but for a dominant chord
        let dominantChordIndicator = numbersArray.find(value => value === '7');
        if (dominantChordIndicator) {
            throw new Error('a dominant 13th voicing cannot be built with a major chord');
        }
        if (numbersArray.length !== 7) {
            throw new Error('these voicings only work with an 13th chord')
        }

        // create chord voicings
        let openDom13thVoicing = numbersArray;

        let Dom13thVoicing1 = [].concat(openDom13thVoicing[0], openDom13thVoicing[2], openDom13thVoicing[1], openDom13thVoicing.slice(-1), openDom13thVoicing.slice(3, 5));

        let Dom13thVoicing2 = [].concat(Dom13thVoicing1[0], Dom13thVoicing1[2], Dom13thVoicing1.slice(-2), Dom13thVoicing1[3]);

        let Dom13thVoicing3 = [].concat(Dom13thVoicing2[0], Dom13thVoicing2[2], Dom13thVoicing2[1], Dom13thVoicing2.slice(-1), Dom13thVoicing2.slice(-2, -1));

        let Dom13thVoicing4 = [].concat(Dom13thVoicing3.slice(0, 4), Dom13thVoicing3[0]);

        let upperStructureTriad = [].concat(Dom13thVoicing2.slice(0, 4), openDom13thVoicing.slice(-2));

        // return answer with string interpolation
        const dom13thObj = 
        {
            'open dom13': openDom13thVoicing,
            'dom13 voicing1': Dom13thVoicing1,
            'dom13 voicing2': Dom13thVoicing2,
            'dom13 voicing3': Dom13thVoicing3,
            'dom13 voicing4': Dom13thVoicing4,
            'Upper Structure Triad': upperStructureTriad,
        }

        return dom13thObj

        // return `${openDom13thVoicing.join(' - ')} --> open Dom13th    \n${Dom13thVoicing1.join(' - ')} --> dom13thVoicing1    \n${Dom13thVoicing2.join(' - ')} --> dom13thVoicing2    \n${Dom13thVoicing3.join(' - ')} --> dom13thVoicing3    \n${Dom13thVoicing4.join(' - ')} --> dom13thVoicing4    \n${upperStructureTriad.join(' - ')} --> Upper Structure Triad
        // `;
    }

    // augmented and diminished methods
    augVoicing() {

        const augObj = 
        {
            'aug chord': this.array,
        }

        return augObj;
    }

    dimVoicing() {
        let dimObj = {}

        // to replace #11 with b5 if numbers are used

        if (this.array[0] === '1') {
            dimObj = {
                'dim chord': ['1', 'b3', 'b5']
            }
        } else {
            dimObj = {
                'dim chord': this.array,
            }
        }

        return dimObj;
    }
}


// logs
// test for Fmin... using sharps instead of flats now
// const fmin9 = new jazzChord('f', 'min').chordExtension('9')
// console.log(`fmin9:`);
// console.log(fmin9);

// const fmin9Numbers = new jazzChordNumbers(fmin9).numberGenerator()
// console.log(`fmin9Numbers:`);
// console.log(fmin9Numbers);


// const fmin9Nums = new jazzChordNumbers(fmin9).minor9thVoicings()
// console.log(`fmin9Nums:`);
// console.log(fmin9Nums);



// const cDim = new jazzChord('c', 'dim').chordGenerator();
// console.log(cDim);
// const cDimNums = new jazzChordNumbers(cDim).numberGenerator();
// console.log(cDimNums);

// console.log(new jazzChordNumbers(cDim).dimVoicing())


// console.log(`cMaj13:`);
// console.log(cMaj13);


// const cMaj13 = new jazzChord('c', 'min').chordExtension('11')
// console.log(`cMaj13:`);
// console.log(cMaj13);

// const cMaj13Nums = new jazzChordNumbers(cMaj13).numberGenerator()
// console.log(`\ncMaj13Nums:`);
// console.log(cMaj13Nums);

// const cMaj13NotesVoicings = new jazzChordNumbers(cMaj13).minor11thVoicings()
// console.log(`\ncMaj13NotesVoicings:`);
// console.log(cMaj13NotesVoicings);

// const cMaj13NumsVoicings = new jazzChordNumbers(cMaj13Nums).minor11thVoicings()
// console.log(`\ncMaj13NumsVoicings:`);
// console.log(cMaj13NumsVoicings);
