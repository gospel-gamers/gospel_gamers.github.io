import React from "react"
import bronzeMedal from '../images/bronze.png'
import silverMedal from '../images/silver.png'
import goldMedal from '../images/gold3.png'


export default function AudioParagraph(props) {
    let medalImg;

    if (props.image === 'bronze') {
        medalImg = bronzeMedal
    } else if (props.image === 'silver') {
        medalImg = silverMedal
    } else if (props.image === 'gold')
        medalImg = goldMedal
    return (
        <div className={props.className}>
            <p>{props.text}</p>
            <img src={medalImg} className="wedding--medals--images"/>
        </div>

    )
}