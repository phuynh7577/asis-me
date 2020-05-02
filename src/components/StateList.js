import React from "react"
import { Link } from "react-router-dom";



const StateList = props => (
    <>
    <h1><strong>STATES</strong></h1>
     <ul >
        {props.info.map(info => (
                <li key={info.states}>
                    <Link to={{pathname: `/state/${info.states}`, state: {info: info.states}}}>{info.states}</Link>
                </li> 
            ))}  
        </ul> 
    </>
)



export default StateList;