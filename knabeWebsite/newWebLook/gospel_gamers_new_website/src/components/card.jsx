import React from "react"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
//import ReactDOM from "react-dom"
import BioImg from '../images/berlin2.jpg'
import MusicImg from '../images/guitar2.jpg'
import AudioImg from '../images/mixer3.jpg'
import WeddingImg from '../images/wedding7.jpg'
import CodingImg from '../images/web.jpg'
import ContactImg from '../images/web6.jpg'
import BioImgDark from '../images/berlin5.jpg'
import MusicImgDark from '../images/mic.jpg'
import AudioImgDark from '../images/speakers.jpg'
import WeddingImgDark from '../images/wedding11.jpg'
import CodingImgDark from '../images/web7.jpg'
import ContactImgDark from '../images/web11.jpg'


const pictureObj = 
{
    1: BioImg,
    2: MusicImg,
    3: AudioImg,
    4: WeddingImg,
    5: CodingImg,
    6: ContactImg,
    11: BioImgDark,
    12: MusicImgDark,
    13: AudioImgDark,
    14: WeddingImgDark,
    15: CodingImgDark,
    16: ContactImgDark,
}


const routeObj =
{
    1: '/bio',
    2: '/music',
    3: '/audio',
    4: '/weddings',
    5: '/coding',
    6: '/contact',
    11: '/bio?darkMode=true',
    12: '/music?darkMode=true',
    13: '/audio?darkMode=true',
    14: '/weddings?darkMode=true',
    15: '/coding?darkMode=true',
    16: '/contact?darkMode=true',
}

export default function Card(props) {
    return (
        <div className={!props.darkMode ? 'card' : 'card--dark'}>
            <Link to={routeObj[props.id]}>
                <img src={pictureObj[props.id]} className={!props.darkMode ? 'card--image' : 'card--image--dark'}/>
            </Link>

            <div className={!props.darkMode ? 'card--container' : 'card--container--dark'}>
                <p className={!props.darkMode ? 'card--message' : 'card--message--dark'}>{props.message}</p>
            </div>
        </div>
    )
}