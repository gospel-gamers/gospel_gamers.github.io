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
        <div>
            <div className={!props.darkMode ? 'wedding--titles' : 'wedding--titles--dark'}>
                <h1>Weddings</h1>
            </div>
            <div className={!props.darkMode ? 'wedding--titles--info' : 'wedding--titles--info--dark'}> I began playing music and running sound for the weddings of friends about a decade ago. This turned into being a musician, audio engineer and DJ for weddings and other events.

            For weddings, I have three packages available.
            Contact me for pricings on other events.</div>

            <div className={!props.darkMode ? 'wedding--pricings' : 'wedding--pricings--dark'}>

                <div className={!props.darkMode ? 'wedding--main' : 'wedding--main--dark'}>
                    <ul className={!props.darkMode ? 'wedding--list' : 'wedding--list--dark'}>
                        <h3 onClick={singleMixBool}>Bronze</h3>
                        <h3 onClick={epMixBool}>Silver</h3>
                        <h3 onClick={lpMixBool}>Gold</h3>
                    </ul>

                    {singleMix && <AudioParagraph 
                    className={!props.darkMode ? 'wedding--paragraph' : 'wedding--paragraph--dark'}
                    text=' I began playing music and running sound for the weddings of friends about a decade ago. This turned into being a musician, audio engineer and DJ for weddings and other events.

                    For weddings, I have three packages available.
                    Contact me for pricings on other events
                    Bronze Plan (Audio or Music):

                    Wedding service audio or music
                    $500 for wedding service music
                    $500 for wedding service audio
                    '
                    />}
                    {epMix && <AudioParagraph 
                    className={!props.darkMode ? 'wedding--paragraph' : 'wedding--paragraph--dark'}
                    text={`Silver Plan (Audio and DJ):

                    $1300 for Wedding service audio,
                    cocktail hour and reception DJ`}
                    />}
                    {lpMix && <AudioParagraph 
                    className={!props.darkMode ? 'wedding--paragraph' : 'wedding--paragraph--dark'}
                    text={`Gold Plan (Audio, Cocktail Live Music & DJ):

                    $1600 for Wedding service audio,
                    cocktail hour live music and reception DJ`}
                    />}

                </div>

            </div>
        </div>
    )
}