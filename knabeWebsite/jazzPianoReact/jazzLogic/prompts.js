// prompts for user to interact with :D
// define prompt
const prompt = require('prompt-sync')();

// prompts to determine starting note and chord type
const whatNoteQ = prompt('What note will be your tonic note? Type # for sharps and b for flats.\n');
const whatChordQ = prompt('Do you want a major, minor, augmented or diminished chord? Type maj or press enter for major, type min or - for minor, type aug or + for augmented and dim or ° for diminished.\n');

// return chords if they are augmented or diminished
if (whatChordQ === 'aug' || whatChordQ === '+' || whatChordQ === 'dim' || whatChordQ === '°') {
    return console.log(new jazzChord(whatNoteQ, whatChordQ).chordGenerator().join(' - '));
}

// prompt and logic to see if chord extensions are desired, if not then return the chord
//let wantChordExtension = false;
const wantChordExtQ = prompt('Do you want to add jazzy chord extensions to your major or minor chord? Type yes if so, and type no if not.\n')

if (wantChordExtQ !== 'yes') {
    return console.log(new jazzChord(whatNoteQ, whatChordQ).chordGenerator().join(' - '));
}

// logic to determine which chord extension and what voicings to use

// declare variables
let whatFlavorNoteQ;
let wantVoicings = false;
let wantNumbers = false;
let wantNotes = false;
// let w;

// logic for major / dominant chord extensions and then for minor chord extensions
if (whatChordQ === 'maj' || !whatChordQ) {
    whatFlavorNoteQ = prompt('Would you like to make your current major triad chord a major 7th, 9th, 11th or 13th chord or possibly a dominant 13th chord? Type 7, 9, 11, 13 or dom13 respectively.\n')
    
    // determine if voicings are wanted, if not then return the chord
    let wantVoicingsQ = prompt('Do you want additional smooth voicings with your chord extension? Type yes if so and no if not.\n');
    if (wantVoicingsQ === 'yes') {
        wantVoicings = true;
    } else {
        wantVoicings = false;
    }

    if (!wantVoicings) {
        return console.log(new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ).join(' - '));
    }

    // determine if notes, numbers or both are wanted
    let wantNotesOrNumbersQ = prompt('Do you want your chord voicings in notes, numbers or both? Type notes, numbers or both respectively.\n');
    if (wantNotesOrNumbersQ === 'notes') {
        wantNotes = true;
    } else if (wantNotesOrNumbersQ === 'numbers') {
        wantNumbers = true;
    } else {
        wantNotes = true;
        wantNumbers = true;
    } 

    // booleans to determine which chord voicings should be spit out using an object;
    let maj7thChord = false;
    let maj9thChord = false;
    let maj11thChord = false;
    let maj13thChord = false;
    let dom13thChord = false;

    // ternary operation for determining which voicings to use
    whatFlavorNoteQ === '7' ? maj7thChord = true : whatFlavorNoteQ === '9' ? maj9thChord = true : whatFlavorNoteQ === '11' ? maj11thChord = true : whatFlavorNoteQ === '13' ? maj13thChord = true : dom13thChord = true; 

    // spits out voicings with notes, numbers or both
    if (wantNotes && wantNumbers) {
        if (maj7thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log([console.log(chord), console.log(chordNumbers)]);
        } else if (maj9thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return  console.log([console.log((new jazzChordNumbers(chord).major9thVoicings())), console.log((new jazzChordNumbers(chordNumbers).major9thVoicings()))]);
        } else if (maj11thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log([console.log((new jazzChordNumbers(chord).major11thVoicings())), console.log((new jazzChordNumbers(chordNumbers).major11thVoicings()))]);
        } else if (maj13thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log([console.log((new jazzChordNumbers(chord).major13thVoicings())), console.log((new jazzChordNumbers(chordNumbers).major13thVoicings()))]);
        } else {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log([console.log((new jazzChordNumbers(chord).dominant13thVoicings())), console.log((new jazzChordNumbers(chordNumbers).dominant13thVoicings()))]);
        }

    } else if (wantNotes) {
        if (maj7thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(chord);
        } else if (maj9thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(new jazzChordNumbers(chord).major9thVoicings());
        } else if (maj11thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(new jazzChordNumbers(chord).major11thVoicings());
        } else if (maj13thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(new jazzChordNumbers(chord).major13thVoicings());
        } else {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(new jazzChordNumbers(chord).dominant13thVoicings());
        }
    } else if (wantNumbers) {
        if (maj7thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return new jazzChordNumbers(chord).numberGenerator();
        } else if (maj9thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log(new jazzChordNumbers(chordNumbers).major9thVoicings());
        } else if (maj11thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log(new jazzChordNumbers(chordNumbers).major11thVoicings());
        } else if (maj13thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log(new jazzChordNumbers(chordNumbers).major13thVoicings());
        } else {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log(new jazzChordNumbers(chordNumbers).dominant13thVoicings());
        }
    }

} else if (whatChordQ === 'min' || whatChordQ === '-') {
    whatFlavorNoteQ = prompt('Would you like to make your current minor triad chord a minor 7th, 9th or 11th chord? Type 7, 9, or 11 respectively.\n')
    
    // determine if voicings are wanted, if not then return the chord
    let wantVoicingsQ = prompt('Do you want additional smooth voicings along with your chord extension? Type yes if so and no if not.\n');
    if (wantVoicingsQ === 'yes') {
        wantVoicings = true;
    } else {
        wantVoicings = false;
    }

    if (!wantVoicings) {
        return console.log(new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ).join(' - '));
    }

    // determine if notes, numbers or both are wanted
    let wantNotesOrNumbersQ = prompt('Do you want your chord voicings in notes, numbers or both? Type notes, numbers or both respectively.\n');
    if (wantNotesOrNumbersQ === 'notes') {
        wantNotes = true;
    } else if (wantNotesOrNumbersQ === 'numbers') {
        wantNumbers = true;
    } else {
        wantNotes = true;
        wantNumbers = true;
    }

    // booleans to determine which chord voicings should be spit out using an object;
    let min7thChord = false;
    let min9thChord = false;
    let min11thChord = false;
    //let min13thChord = false;

    // logic for determining which voicings to use
    // TODO fix herbie hancock min11th setting

    whatFlavorNoteQ === '7' ? min7thChord = true : whatFlavorNoteQ === '9' ? min9thChord = true : min11thChord = true; 
    // spits out voicings with notes, numbers or both
    if (wantNotes && wantNumbers) {
        if (min7thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log([console.log(chord), console.log(chordNumbers)]);
        } else if (min9thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return  console.log([console.log((new jazzChordNumbers(chord).minor9thVoicings())), console.log((new jazzChordNumbers(chordNumbers).minor9thVoicings()))]);
        } else if (min11thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log([console.log((new jazzChordNumbers(chord).minor11thVoicings())), console.log((new jazzChordNumbers(chordNumbers).minor11thVoicings()))]);
        } 

    } else if (wantNotes) {
        if (min7thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(chord);
        } else if (min9thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(new jazzChordNumbers(chord).minor9thVoicings());
        } else if (min11thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(new jazzChordNumbers(chord).minor11thVoicings());
        } else {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(new jazzChordNumbers(chord).minor11thVoicings());
        }
    } else if (wantNumbers) {
        if (min7thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return new jazzChordNumbers(chord).numberGenerator();
        } else if (min9thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log(new jazzChordNumbers(chordNumbers).minor9thVoicings());
        } else if (min11thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log(new jazzChordNumbers(chordNumbers).minor11thVoicings());
        }
    } 

} 
