import React, { useState, useEffect } from "react"
// import jazzChordLogic
import { jazzChord } from '../coding/jazzChordLogic'
import { jazzChordNumbers } from '../coding/jazzChordLogic'


export default function ChordVoicings(props) {


    // selected chord state
    // const [selectChord, setSelectChord] = useState(false)
    // ! delete this state...?
    const [selectedChordCSS, setSelectedChordCSS] = useState('chord--type')

    // event handler functions

    const printId = (numId) => {
        // console.log(`\nprint ID:`)
        // console.log(numId)
    }

    // important objects
    let chordObj = {}
    let chordObjNums = {}

    // if/else block to populate objects above

    if (props.chordType === 'maj9th') {
        const chordArr = new jazzChord(props.startKey, 'maj').chordExtension('9')
        const chordArrNums = new jazzChordNumbers(chordArr).numberGenerator()
        chordObj = new jazzChordNumbers(chordArr).major9thVoicings()
        chordObjNums = new jazzChordNumbers(chordArrNums).major9thVoicings()

    } else if (props.chordType === 'maj11th') {
        const chordArr = new jazzChord(props.startKey, 'maj').chordExtension('11')
        const chordArrNums = new jazzChordNumbers(chordArr).numberGenerator()
        chordObj = new jazzChordNumbers(chordArr).major11thVoicings()
        chordObjNums = new jazzChordNumbers(chordArrNums).major11thVoicings()

    } else if (props.chordType === 'maj13th') {
        const chordArr = new jazzChord(props.startKey, 'maj').chordExtension('13')
        const chordArrNums = new jazzChordNumbers(chordArr).numberGenerator()
        chordObj = new jazzChordNumbers(chordArr).major13thVoicings()
        chordObjNums = new jazzChordNumbers(chordArrNums).major13thVoicings()

    } else if (props.chordType === 'dom13th') {
        const chordArr = new jazzChord(props.startKey, 'maj').chordExtension('dom13')
        const chordArrNums = new jazzChordNumbers(chordArr).numberGenerator()
        chordObj = new jazzChordNumbers(chordArr).dominant13thVoicings()
        chordObjNums = new jazzChordNumbers(chordArrNums).dominant13thVoicings()

    } else if (props.chordType === 'min9th') {
        const chordArr = new jazzChord(props.startKey, 'min').chordExtension('9')
        const chordArrNums = new jazzChordNumbers(chordArr).numberGenerator()
        chordObj = new jazzChordNumbers(chordArr).minor9thVoicings()
        chordObjNums = new jazzChordNumbers(chordArrNums).minor9thVoicings()

    } else if (props.chordType === 'min11th') {
        const chordArr = new jazzChord(props.startKey, 'min').chordExtension('11')
        const chordArrNums = new jazzChordNumbers(chordArr).numberGenerator()
        chordObj = new jazzChordNumbers(chordArr).minor11thVoicings()
        chordObjNums = new jazzChordNumbers(chordArrNums).minor11thVoicings()

    } else if (props.chordType === 'aug') {
        const chordArr = new jazzChord(props.startKey, 'aug').chordGenerator()
        const chordArrNums = new jazzChordNumbers(chordArr).numberGenerator()
        chordObj = new jazzChordNumbers(chordArr).augVoicing()
        chordObjNums = new jazzChordNumbers(chordArrNums).augVoicing()
        // try using custom name and such
        // return (
        //     <div className='chordTypes--section'>
        //             <div className={props.className}>
        //                 <div className={props.className2}>{`${props.startKey}+ chord`} </div>
        //                 <div className={props.className2}>{`${chordArr.join(' - ')}`} </div>
        //                 <div className={props.className2}>{`${chordArrNums.numbers.join(' - ')}`} </div>
        //             </div>
        //     </div>
        //         )
    } else if (props.chordType === 'dim') {
        const chordArr = new jazzChord(props.startKey, 'dim').chordGenerator()
        const chordArrNums = new jazzChordNumbers(chordArr).numberGenerator()
        chordObj = new jazzChordNumbers(chordArr).dimVoicing()
        chordObjNums = new jazzChordNumbers(chordArrNums).dimVoicing()
    }

    // create array of chord voicings
    let chordNotesArr = []
    let chordNumsArr = []
    let chordNameArr = []

    // for... in loop through objects to populate the arrays above
    for (const chord in chordObj) {
        chordNotesArr.push(Array.from(chordObj[chord]))
    }
    for (const chord in chordObjNums) {
        chordNumsArr.push(Array.from(chordObjNums[chord]))
    }
    for (const chord in chordObj) {
        chordNameArr.push(Array.from(chord))
    }

    // give each chord and id value and push to finalArr
    let finalArr = []
    let counter = 1;
    for (let i=0; i<chordNameArr.length; i++) {
        // populate finalArr with proper id name values
        let idVal;
        counter === 1 ? idVal = 'one' : counter === 2 ? idVal = 'two' : counter === 3 ? idVal = 'three' : counter === 4 ? idVal = 'four' : counter === 5 ? idVal = 'five' : idVal = 'six'
        finalArr.push({ id: idVal, name: chordNameArr[i], notes: chordNotesArr[i], numbers: chordNumsArr[i]})
        counter++
    }

    // logs
    // console.log(`\nfinalArr`)
    // console.log(finalArr)
    
    let notes;
    let nums;
    const selectedChordFnc = event => {
        // console.log(`\nselectedChordFnc runs here...`)
        // setSelectChord(prevState => !prevState) // is this needed anymore?

        // grab html id tag of event 
        const id = event.currentTarget.id 
        // console.log(id);
        // define element chord and grab its values to display on the keyboard
        const element = document.getElementById(id)
        // console.log(element)

        notes = element.children[1].innerHTML.split(' - ')
        // console.log(notes)
        nums = element.children[2].innerHTML.split(' - ')
        // console.log(nums)

        props.showChord(notes, nums, id, props.chordType)

        // can I replace this section right here by changing the classname of the element above?... just a thought
        // change the css of the event box that triggered this function
        // if (event.currentTarget.style.backgroundColor) {
        //     event.currentTarget.style.backgroundColor = null;
        //     event.currentTarget.style.color = null;
        //   } else {
        //     event.currentTarget.style.backgroundColor = 'salmon';
        //     event.currentTarget.style.color = 'white';
        //     event.currentTarget.style.border = 'solid';
        //   }
    };


    return (
        <div className='chordTypes--section'>

            {finalArr.map((voicing) => (
                <div className={props.className} id={voicing.id} key={voicing.id} onClick={selectedChordFnc}>
                    <div className={props.className2}>{`${voicing.name.join('')}`} </div>
                    <div className={props.className3}>{`${voicing.notes.join(' - ')}`} </div>
                    <div className={props.className4}>{`${voicing.numbers.join(' - ')}`} </div>
                </div>
            ))}


        </div>
        
    )
}