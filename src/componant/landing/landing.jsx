import React from "react";
import "./landing.css";
import logo from './../../accet/bb.png';
import Typewriter from 'typewriter-effect';


const Landing=()=>
        {return (
        <div  className='landing'>
            <div  className='left-land'>
                <p className='header'>CAN YOU TYPE....</p>
                <Typewriter
                        options={{
                            strings: ['FAST?', 'QUICK?','CORRECT?'],
                            autoStart: true,
                            loop: true,}}
                    /></div>
            <div  className='right-land'><img src={logo} alt='logo'></img></div>
    
        </div>);
    }

export default Landing;