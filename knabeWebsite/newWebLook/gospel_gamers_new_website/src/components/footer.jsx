import React from "react"
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
//import ReactDOM from "react-dom"


export default function Footer(props) {
    return (
        <div className={!props.darkMode ? 'footer--bar' : 'footer--bar--dark'}>
                <h3 className={!props.darkMode ? 'footer--cpr' : 'footer--cpr--dark'}>© 2023 gospel_gamers</h3>

                <div className={!props.darkMode ? 'footer--social' : 'footer--social--dark'}>
                    <a href="https://www.youtube.com/channel/@gospel_gamers" target="_blank"><FaYoutube /></a>
                    <a href="https://www.instagram.com/gospel_gamers/" target="_blank"><FaInstagram /></a>
                    <a href="https://github.com/gospel-gamers" target="_blank"><FaGithub /></a>
                </div>

        </div>
    )
}