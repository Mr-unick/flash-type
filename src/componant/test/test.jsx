import React from "react";
import "./test.css";
import Try from "../try/try";

const Test=({
    words,
    characters,
    wpm,
})=>{return (<div className='test-container'>
        <Try words={words} characters={characters} wpm={wpm}/>
        </div>);}
export default Test;