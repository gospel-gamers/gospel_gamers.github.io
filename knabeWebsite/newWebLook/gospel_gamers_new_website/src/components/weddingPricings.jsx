import React from "react"
import { useState } from 'react'
//import AudioTitle from "./audioTitle";
import AudioParagraph from "./audioParagraph"

export default function WeddingPricings(props) {
    // booleans to change paragraph text
    const [singleMix, setSingleMix] = useState(true)
    const [epMix, setEpMix] = useState(false)
    const [lpMix, setLpMix] = useState(false)
    const [singleMaster, setSingleMaster] = useState(true)
    const [epMaster, setEpMaster] = useState(false)
    const [lpMaster, setLpMaster] = useState(false)

    // arrays with groom, bride and wedding emojis
    const weddArr = ['⛪'] // , '💒' '🔔', '💞']
    const groomArr = ['🤵🏼', '🤵🏻', '🤵🏽', '🤵🏾', '🤵🏿']
    const brideArr = ['👰🏼', '👰🏻', '👰🏽', '👰🏾', '👰🏿']

    // Function that selects a random element from an input array
    function getRandomElement(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
      }

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

    return (
        <div className={!props.darkMode ? 'wedding--content' : 'wedding--content--dark'}>
            <div className={!props.darkMode ? 'wedding--titles' : 'wedding--titles--dark'}>
                <h1>Plan your perfect day {getRandomElement(groomArr)} {getRandomElement(weddArr)} {getRandomElement(brideArr)} !</h1>
            </div>


            <div className={!props.darkMode ? 'wedding--pricings' : 'wedding--pricings--dark'}>

                <div className={!props.darkMode ? 'wedding--main' : 'wedding--main--dark'}>
                    <ul className={!props.darkMode ? 'wedding--list' : 'wedding--list--dark'}>
                        <div onClick={singleMixBool} className={!props.darkMode ? 'wedding--bronze' : 'wedding--bronze--dark'}>
                            <h3 >Bronze</h3>
                        </div>
                        
                        <div onClick={epMixBool} className={!props.darkMode ? 'wedding--silver' : 'wedding--silver--dark'}>
                            <h3 >Silver</h3>
                        </div>

                        <div onClick={lpMixBool} className={!props.darkMode ? 'wedding--gold' : 'wedding--gold--dark'}>
                            <h3>Gold</h3>
                        </div>
                        
                        
                    </ul>

                    {singleMix && <AudioParagraph 
                    className={!props.darkMode ? 'wedding--paragraph' : 'wedding--paragraph--dark'}
                    image='bronze'
                    text='
                    $500 for ceremony music;
                    $750 for ceremony audio
                    '
                    />}
                    {epMix && <AudioParagraph 
                    className={!props.darkMode ? 'wedding--paragraph' : 'wedding--paragraph--dark'}
                    image='silver'
                    text={`

                    $1500 for Ceremony audio,
                    Cocktail Hour and Reception DJ`}
                    />}
                    {lpMix && <AudioParagraph 
                    className={!props.darkMode ? 'wedding--paragraph' : 'wedding--paragraph--dark'}
                    image='gold'
                    text={`

                    $1750 for Ceremony audio,
                    Live Cocktail Hour music and Reception DJ`}
                    />}

                </div>

            </div>

            <div className={!props.darkMode ? 'wedding--titles--info' : 'wedding--titles--info--dark'}> About a decade ago, I began playing music and running audio for the weddings of friends. This has grow into being a musician, emcee and DJ for weddings and other events. I have three packages available for weddings - contact me for pricings on other events.
            </div>

        </div>
    )
}