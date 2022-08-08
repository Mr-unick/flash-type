import React from "react";
import "./challenge-section.css";
import Test from "../test/test";
import Typewriter from 'typewriter-effect';

const Chal=()=>{return (<div className='challenge-section'>
        <div>
            <Typewriter
                        options={{
                            strings: ['Take A Speed Test Now!'],
                            autoStart: true,
                            loop: true,}}
                    />
        </div>
        <Test words={4} characters={14} wpm={20}/>
        </div>);}
export default Chal;