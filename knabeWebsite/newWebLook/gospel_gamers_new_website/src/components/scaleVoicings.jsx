import React, { useState, useEffect } from "react"
// import jazzChordLogic
import { jazzChord } from '../coding/jazzChordLogic'
import { jazzChordNumbers } from '../coding/jazzChordLogic'
import scaleType from "../coding/scaleLogic"


export default function ScaleVoicings(props) {

    const printId = (numId) => {
        // console.log(`\nprint ID:`)
        // console.log(numId)
    }

    // important objects
    let scaleObj = {}
    // let scaleObjNums = {}

    // if/else block to populate scaleObj above

    if (props.typeOfScale === 'ionian') {
        scaleObj = new scaleType(props.startKey).ionian()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'dorian') {
        scaleObj = new scaleType(props.startKey).dorian()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'phrygian') {
        scaleObj = new scaleType(props.startKey).phrygian()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'lydian') {
        scaleObj = new scaleType(props.startKey).lydian()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'mixolydian') {
        scaleObj = new scaleType(props.startKey).mixolydian()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'aeolian') {
        scaleObj = new scaleType(props.startKey).aeolian()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'locrian') {
        scaleObj = new scaleType(props.startKey).locrian()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'naturalMinor') {
        scaleObj = new scaleType(props.startKey).naturalMinor()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'harmonicMinor') {
        scaleObj = new scaleType(props.startKey).harmonicMinor()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'melodicMinor') {
        scaleObj = new scaleType(props.startKey).melodicMinor()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'minorPentBlues') {
        scaleObj = new scaleType(props.startKey).minorPentBlues()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'majorPentBlues') {
        scaleObj = new scaleType(props.startKey).majorPentBlues()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'minorPent') {
        scaleObj = new scaleType(props.startKey).minorPent()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'majorPent') {
        scaleObj = new scaleType(props.startKey).majorPent()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'majorBebop') {
        scaleObj = new scaleType(props.startKey).majorBebop()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'minorBebop') {
        scaleObj = new scaleType(props.startKey).minorBebop()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'dominantBebop') {
        scaleObj = new scaleType(props.startKey).dominantBebop()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'dorianBebop') {
        scaleObj = new scaleType(props.startKey).dorianBebop()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'superLocrian') {
        scaleObj = new scaleType(props.startKey).superLocrian()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'nineTone') {
        scaleObj = new scaleType(props.startKey).nineTone()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'algerian') {
        scaleObj = new scaleType(props.startKey).algerian()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'arabic') {
        scaleObj = new scaleType(props.startKey).arabic()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'augmented') {
        scaleObj = new scaleType(props.startKey).augmented()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'balinese') {
        scaleObj = new scaleType(props.startKey).balinese()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'byzantine') {
        scaleObj = new scaleType(props.startKey).byzantine()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'chinese') {
        scaleObj = new scaleType(props.startKey).chinese()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'diminished') {
        scaleObj = new scaleType(props.startKey).diminished()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'domDiminished') {
        scaleObj = new scaleType(props.startKey).domDiminished()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'egyptian') {
        scaleObj = new scaleType(props.startKey).egyptian()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'eightTone') {
        scaleObj = new scaleType(props.startKey).eightTone()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'enigmaticMinor') {
        scaleObj = new scaleType(props.startKey).enigmaticMinor()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'enigmaticMajor') {
        scaleObj = new scaleType(props.startKey).enigmaticMajor()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'ethiopian') {
        scaleObj = new scaleType(props.startKey).ethiopian()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'hawaiian') {
        scaleObj = new scaleType(props.startKey).hawaiian()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'hindu') {
        scaleObj = new scaleType(props.startKey).hindu()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'hirajoshi') {
        scaleObj = new scaleType(props.startKey).hirajoshi()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'hungarianGypsy') {
        scaleObj = new scaleType(props.startKey).hungarianGypsy()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'hungarianMajor') {
        scaleObj = new scaleType(props.startKey).hungarianMajor()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'iberian') {
        scaleObj = new scaleType(props.startKey).iberian()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'iwato') {
        scaleObj = new scaleType(props.startKey).iwato()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'japanese') {
        scaleObj = new scaleType(props.startKey).japanese()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'lydianDominant') {
        scaleObj = new scaleType(props.startKey).lydianDominant()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'neopolitanMinor') {
        scaleObj = new scaleType(props.startKey).neopolitanMinor()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'ocatonic') {
        scaleObj = new scaleType(props.startKey).ocatonic()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'oriental') {
        scaleObj = new scaleType(props.startKey).oriental()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'prometheus') {
        scaleObj = new scaleType(props.startKey).prometheus()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'romanianMinor') {
        scaleObj = new scaleType(props.startKey).romanianMinor()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'spanishGypsy') {
        scaleObj = new scaleType(props.startKey).spanishGypsy()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'wholeTones') {
        scaleObj = new scaleType(props.startKey).wholeTones()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } else if (props.typeOfScale === 'yo') {
        scaleObj = new scaleType(props.startKey).yo()
        const scaleArrNums = new jazzChordNumbers(scaleObj.notes).scaleNumberGenerator()
        scaleObj.numbers = scaleArrNums;
        // console.log(`\nscaleObj`)
        // console.log(scaleObj)
    } 
    // console.log(`\nscaleObj:`)
    // console.log(scaleObj)


    // scale fnc below
    let notes;
    let nums;

    const selectedScaleFnc = event => {
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

        props.showScale(notes, nums, id, props.typeOfScale)

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


        <div className={props.className} id={props.id} key={props.id} onClick={selectedScaleFnc}>
            <div className={props.className2}>{props.text}</div>
            <div className={props.className3}>{scaleObj.notes.join(' - ')}</div>
            <div className={props.className4}>{scaleObj.numbers.join(' - ')}</div>
        </div> 

    )
}