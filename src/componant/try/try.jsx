import React from "react";
import "./try.css";

const Try=({words,characters,wpm})=>{return (<div className='test-container'>
    <div className='headline'><p>Test Result </p></div>
        <div className='result'>
            <p><b>words</b>{words}</p>
            <p><b>Characters</b>{characters}</p>
            <p><b>wpm</b>{wpm}</p>
        </div>
        <div onclick={()=>{
            window.open('')
        }}
            className='reset'></div>
        </div>);}
export default Try;