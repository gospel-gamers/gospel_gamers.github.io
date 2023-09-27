import React from "react"
import './toggleMenuBar.css'
// import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// logos and pics
import mainLogo from '../images/gg-black.png';
import mainLogoDarkMode from '../images/gg-white.png';
import menuLogo from '../images/menuX.png';
import offToggle from '../images/switch-off.png';
import onToggle from '../images/switch-on.png';
import sunLogo from '../images/icons8-sun-48.png';
import moonLogo from '../images/icons8-night-mode-64.png';
import lightModeLogo from '../images/dark-mode1.png'
import darkModeLogo from '../images/dark-mode2.png'


export default function MenuBar(props) {

    return (

        <div className={!props.darkMode ? 'menu--bar' : 'menu--bar--dark'}>
            
            <div className={!props.darkMode ? 'menu--logoDiv' : 'menu--logoDiv--dark'}>
                <Link to={`/?darkMode=${props.darkMode}`}>
                    <img src={!props.darkMode ? mainLogo : mainLogoDarkMode} className={!props.darkMode ? 'menu--mainLogo' : 'menu--mainLogo--dark'}/>
                </Link>
                <Link to={`/?darkMode=${props.darkMode}`}>
                    <h6 className={!props.darkMode ? 'menu--logoTitle' : 'menu--logoTitle--dark'}>gospel_gamers</h6>
                </Link>

            </div>


            <ul className={!props.darkMode ? 'menu--items' : 'menu--items--dark'}>
                    <li><Link to={`/bio?darkMode=${props.darkMode}`} className={!props.darkMode ? 'menu--atag' : 'menu--atag--dark'}>Bio</Link></li>
                    <li><Link to={`/music?darkMode=${props.darkMode}`} className={!props.darkMode ? 'menu--atag' : 'menu--atag--dark'}>Music</Link></li>
                    <li><Link to={`/audio?darkMode=${props.darkMode}`} className={!props.darkMode ? 'menu--atag' : 'menu--atag--dark'}>Audio</Link></li>
                    <li><Link to={`/weddings?darkMode=${props.darkMode}`} className={!props.darkMode ? 'menu--atag' : 'menu--atag--dark'}>Weddings</Link></li>
                    <li><Link to={`/coding?darkMode=${props.darkMode}`} className={!props.darkMode ? 'menu--atag' : 'menu--atag--dark'}>Coding</Link></li>
                    <li><Link to={`/contact?darkMode=${props.darkMode}`} className={!props.darkMode ? 'menu--atag' : 'menu--atag--dark'}>Contact</Link></li>
            </ul>

            {/*<!-- Rounded switch --> */}
            {/* <label className="switch">
                <input type="checkbox" onClick={props.toggleDarkMode}/>
                <span className="slider round"></span>
            </label> */}

            {/* sun and moon logos */}

            {!props.darkMode && <img src={lightModeLogo} className='button--sunLogo--menuBar' onClick={props.toggleDarkMode}/>}
            {props.darkMode && <img src={darkModeLogo} className='button--moonLogo--menuBar'onClick={props.toggleDarkMode}/>}


            {/*  hamburger dropdown menu for smaller screens */}
            <div className={!props.darkMode ? 'menu--toggle' : 'menu--toggle--dark'} onClick={props.toggleMenu}>
                <img className={!props.darkMode ? 'menuX' : 'menuX--dark'} src={menuLogo}/>
            </div>


            {/*!props.darkMode && <img src={offToggle} onClick={props.toggleDarkMode} className='button--lightMode'/> */}
            {/*props.darkMode && <img src={onToggle} onClick={props.toggleDarkMode} className='button--darkMode'/ >*/}
            {/*<img src={menuLogo} className='nav--menuLogo'/> */}
        </div>


    )
}