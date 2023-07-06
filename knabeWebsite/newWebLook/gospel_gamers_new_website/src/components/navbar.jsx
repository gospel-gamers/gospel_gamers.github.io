import React from "react"
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// logos and pics
import mainLogo from '../images/gg-black.png';
import mainLogoDarkMode from '../images/gg-white.png';
import menuLogo from '../images/menu-icon-2.png';
import offToggle from '../images/switch-off.png';
import onToggle from '../images/switch-on.png';
import sunLogo from '../images/icons8-sun-48.png';
import moonLogo from '../images/icons8-night-mode-64.png';
import lightModeLogo from '../images/dark-mode1.png'
import darkModeLogo from '../images/dark-mode2.png'

export default function NavBar(props) {
    
    //
    //const [darkMode, setDarkMode]= React.useState(false);

    // function handleToggle() {
    //     setDarkMode(prevState => !prevState)
    // }
    
    return (

        <div className={!props.darkMode ? 'nav--bar' : 'nav--bar--dark'}>
            
            <div className={!props.darkMode ? 'nav--logoDiv' : 'nav--logoDiv--dark'}>
                <img src={!props.darkMode ? mainLogo : mainLogoDarkMode} className={!props.darkMode ? 'nav--mainLogo' : 'nav--mainLogo--dark'}/>
                <h6 className={!props.darkMode ? 'nav--logoTitle' : 'nav--logoTitle--dark'}>gospel_gamers</h6>
            </div>


            <ul className={!props.darkMode ? 'nav--items' : 'nav--items--dark'}>
                    <li>Bio</li>
                    <li>Music</li>
                    <li>Audio</li>
                    <li>Weddings</li>
                    <li>Coding</li>
                    <li>Contact</li>
            </ul>

            {/*<!-- Rounded switch --> */}
            <label className="switch">
                <input type="checkbox" onClick={props.toggleDarkMode}/>
                <span className="slider round"></span>
            </label>

            {/* sun and moon logos */}

            {!props.darkMode && <img src={lightModeLogo} className='button--sunLogo'/>}
            {props.darkMode && <img src={darkModeLogo} className='button--moonLogo'/>}

            {/*!props.darkMode && <img src={offToggle} onClick={props.toggleDarkMode} className='button--lightMode'/> */}
            {/*props.darkMode && <img src={onToggle} onClick={props.toggleDarkMode} className='button--darkMode'/ >*/}
            {/*<img src={menuLogo} className='nav--menuLogo'/> */}
        </div>


    )
}