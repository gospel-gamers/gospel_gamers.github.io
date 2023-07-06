// The keys and notes variables store the piano keys
const keys = ['c2-key', 'd2-key', 'e2-key', 'f2-key', 'g2-key', 'a2-key', 'b2-key', 'c2-sharp-key', 'd2-sharp-key', 'f2-sharp-key', 'g2-sharp-key', 'a2-sharp-key', 'c3-key', 'd3-key', 'e3-key', 'f3-key', 'g3-key', 'a3-key', 'b3-key', 'c3-sharp-key', 'd3-sharp-key', 'f3-sharp-key', 'g3-sharp-key', 'a3-sharp-key', 'c4-key', 'd4-key', 'e4-key', 'f4-key', 'g4-key', 'a4-key', 'b4-key', 'c4-sharp-key', 'd4-sharp-key', 'f4-sharp-key', 'g4-sharp-key', 'a4-sharp-key', 'c5-key', 'd5-key', 'e5-key', 'f5-key', 'g5-key', 'a5-key', 'b5-key', 'c5-sharp-key', 'd5-sharp-key', 'f5-sharp-key', 'g5-sharp-key', 'a5-sharp-key', 'c6-key', 'd6-key', 'e6-key', 'f6-key', 'g6-key', 'a6-key', 'b6-key', 'c6-sharp-key', 'd6-sharp-key', 'f6-sharp-key', 'g6-sharp-key', 'a6-sharp-key', 'c7-key'];

// create notes array of all keys with their respective id's
const notes = [];
keys.forEach(key => 
    {
        notes.push(document.getElementById(key));
    }
)

// functions that change the color of the keys when called
const keyPlay = (event) => 
{
  event.target.style.backgroundColor = '#6df0c2';
}
const keyReturn = (event) => 
{
  event.target.style.backgroundColor = '';
}

// function with event handler properties that runs when mouse is pressed and released
let eventAssignment = (note) => 
{
  note.onmousedown = function() {
    keyPlay(event);
  }
  note.onmouseup = function() {
    keyReturn(event);
  }
}

// for each loop that runs each note in the notes array through the eventAssignment function
notes.forEach(eventAssignment);

// logic for html forms from jazzChordGenerator js and scaleGenerator
// export the functions and use them here:



// formerly used to display lyrics but not needed anymore, very useful for understanding the use of js 
/*
// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function() {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
}

// Write anonymous event handler property and function for the second progress button

nextTwo.onclick = function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';
  lastLyric.style.display = 'inline-block';

  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = 'B';
}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function() {
  startOver.hidden = false;
  nextThree.hidden = true;

  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';
  
  document.getElementById('letter-note-one').innerHTML = "F";
  document.getElementById('letter-note-two').innerHTML = "F";
  document.getElementById('letter-note-three').innerHTML = "E";
  document.getElementById('letter-note-four').innerHTML = "C";
  document.getElementById('letter-note-five').innerHTML = "D";
  document.getElementById('letter-note-six').innerHTML = "C";
  lastLyric.style.display = 'none';
};

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}

*/