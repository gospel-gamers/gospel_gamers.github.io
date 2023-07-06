import React from "react"
//import ReactDOM from "react-dom"


export default function Footer(props) {
    return (
        <div className={!props.darkMode ? 'footer--bar' : 'footer--bar--dark'}>
                <h3 className={!props.darkMode ? 'footer--cpr' : 'footer--cpr--dark'}>© 2023 gospel_gamers</h3>

                <h3 className={!props.darkMode ? 'footer--social' : 'footer--social--dark'}>social media</h3>

        </div>
    )
}