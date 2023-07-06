import React from "react"
//import ReactDOM from "react-dom"


export default function ScaleOptions(props) {
    return (
        <button onClick={props.chordTypeBool} className={props.className}>{props.text}</button>
    )
}