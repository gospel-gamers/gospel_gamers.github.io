import React from "react"
import { useState } from 'react'
//import AudioTitle from "./audioTitle";
import AudioParagraph from "./audioParagraph"


export default function AudioPricings(props) {
    // booleans to change paragraph text
    const [singleMix, setSingleMix] = useState(true)
    const [epMix, setEpMix] = useState(false)
    const [lpMix, setLpMix] = useState(false)
    const [singleMaster, setSingleMaster] = useState(true)
    const [epMaster, setEpMaster] = useState(false)
    const [lpMaster, setLpMaster] = useState(false)

    function singleMixBool() {
        if (!singleMix) {
            setSingleMix(true)
            setEpMix(false)
            setLpMix(false)
        }
    }

    function epMixBool() {
        if (!epMix) {
            setEpMix(true)
            setLpMix(false)
            setSingleMix(false)
        }
    }

    function lpMixBool() {
        if (!lpMix) {
            setLpMix(true)
            setEpMix(false)
            setSingleMix(false)
        }
    }

    function singleMasterBool() {
        if (!singleMaster) {
            setSingleMaster(true)
            setLpMaster(false)
            setEpMaster(false)
        }
    }

    function epMasterBool() {
        if (!epMaster) {
            setEpMaster(true)
            setLpMaster(false)
            setSingleMaster(false)
        }
        
    }

    function lpMasterBool() {
        if (!lpMaster) {
            setLpMaster(true)
            setEpMaster(false)
            setSingleMaster(false)
        }
        
    }

    return (
        <div>
            <div className={!props.darkMode ? 'audio--titles' : 'audio--titles--dark'}>
                <h1>Mixing</h1>
                <h1>Mastering</h1>
            </div>

            <div className={!props.darkMode ? 'audio--pricings' : 'audio--pricings--dark'}>

                <div className={!props.darkMode ? 'audio--mixing' : 'audio--mixing--dark'}>
                    <ul className={!props.darkMode ? 'mixing--list' : 'mixing--list--dark'}>
                        <h3 onClick={singleMixBool}>Single</h3>
                        <h3 onClick={epMixBool}>EP</h3>
                        <h3 onClick={lpMixBool}>LP</h3>
                    </ul>

                    {singleMix && <AudioParagraph 
                    className={!props.darkMode ? 'audio--paragraph' : 'audio--paragraph--dark'}
                    text='Mixing audio is an underappreciated art form.                    
                    I have been mixing in studio and live settings for nearly a decade. Now I mix for recording artists from my home studio.
                    My rate is $250 per song, which includes:
                    
                    an initial first mix,
                    a second revised mix after you give it a listen 
                    and one final mix with correct levels for mastering.
                    Bundle your savings with an EP or LP!
                    '
                    />}
                    {epMix && <AudioParagraph 
                    className={!props.darkMode ? 'audio--paragraph' : 'audio--paragraph--dark'}
                    text={`An Extended Play (EP) four to six tracks and is under 30 minutes in duration. My rate changes to $200 per song with the same qualifications as before for each song:                     
                    an initial first mix,
                    a second revised mix after you give it a listen 
                    and one final mix with correct levels for mastering.`}
                    />}
                    {lpMix && <AudioParagraph 
                    className={!props.darkMode ? 'audio--paragraph' : 'audio--paragraph--dark'}
                    text={`A Long Play (LP) has seven or more tracks and is over 30 minutes in duration. My rate changes to $150 per song with the same qualifications as before for each song:                     
                    an initial first mix,
                    a second revised mix after you give it a listen 
                    and one final mix with correct levels for mastering.`}
                    />}

                </div>

                <div className={!props.darkMode ? 'audio--mastering' : 'audio--mastering--dark'}>
                    <ul className={!props.darkMode ? 'mastering--list' : 'mastering--list--dark'}>
                        <h3 onClick={singleMasterBool}>Single</h3>
                        <h3 onClick={epMasterBool}>EP</h3>
                        <h3 onClick={lpMasterBool}>LP</h3>
                    </ul>

                    {singleMaster&& <AudioParagraph 
                    className={!props.darkMode ? 'audio--paragraph' : 'audio--paragraph--dark'}
                    text={`So you get this awesome mix going on your home speakers.                   
                    But wait... why can't I hear it on my phone?
                    And why does it distort all of a sudden in my car?
                    
                    Welcome to the world of mastering.                   
                    
                    My rate for mastering is $250 per song, which includes:
                    
                    an initial first master,
                    a second revised master after you give it a listen and
                    one final master ready for release.`}
                    />}
                    {epMaster&& <AudioParagraph 
                    className={!props.darkMode ? 'audio--paragraph' : 'audio--paragraph--dark'}
                    text={`An Extended Play (EP) four to six tracks and is under 30 minutes in duration. My rate changes to $200 per song with the same qualifications as before for each song: an initial first master, a second revised master after you give it a listen and one final master ready for release.`}
                    />}
                    {lpMaster&& <AudioParagraph 
                    className={!props.darkMode ? 'audio--paragraph' : 'audio--paragraph--dark'}
                    text={`A Long Play (LP) has seven or more tracks and is over 30 minutes in duration. My rate changes to $150 per song with the same qualifications as before for each song: an initial first master, a second revised master after you give it a listen and one final master ready for release.`}
                    />}

                </div>

            </div>
        </div>
    )
}