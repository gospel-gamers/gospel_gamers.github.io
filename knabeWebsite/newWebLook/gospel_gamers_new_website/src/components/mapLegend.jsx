import React from "react"
//import ReactDOM from "react-dom"


export default function MapLegend(props) {
    return (    
        <section className={props.className}>
            <h2>Scale Degree Map Legend:</h2>
            <section>
                <div className='legend--1'>
                    <h5>
                        1
                    </h5>
                </div>
                <div className='legend--b3'>
                    <h5>
                        b3
                    </h5>
                </div>
                <div className='legend--3'>
                    <h5>
                        3
                    </h5>
                </div>
                <div className='legend--4'>
                    <h5>
                        4
                    </h5>
                </div>
                <div className='legend--b5'>
                    <h5>
                        b5
                    </h5>
                </div>
                <div className='legend--5'>
                    <h5>
                        5
                    </h5>
                </div>
                <div className='legend--b6'>
                    <h5>
                        b6
                    </h5>
                </div>
                <div className='legend--b7'>
                    <h5>
                        b7
                    </h5>
                </div>
                <div className='legend--7'>
                    <h5>
                        7
                    </h5>
                </div>
                <div className='legend--9'>
                    <h5>
                        9
                    </h5>
                </div>
                <div className='legend--11'>
                    <h5>
                        11
                    </h5>
                </div>
                <div className='legend--sharp11'>
                    <h5>
                        #11
                    </h5>
                </div>
                <div className='legend--13'>
                    <h5>
                        13
                    </h5>
                </div>
            </section>
        </section>

        // <section id={props.id} className={props.className}><section className={props.className2}>{props.text}</section></section>
    )
}