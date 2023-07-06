import React from "react"


export default function AudioTitle(props) {
    return (
        <h3 className='audio--title' onClick={props.epMixBool}>{props.text}</h3>
    )
}