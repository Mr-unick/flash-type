import React from "react";
import "./nav.css";
import gitlogo from "./../../accet/git.png"
import instalogo from "./../../accet/insta.png"
import ytlogo from "./../../accet/yt.png"
import flash from './../../accet/flash.png'

const Nav=()=>{return (<div className='nav'>
            <div className='left-nav'>
                <img src={flash}alt='logo'></img>
                <p className='text-logo'>FLASHTYPE</p>
            </div>
            <div className='right-nav'>
                <a href='https://github.com/Nikhil9121/' className='link'><img src={gitlogo}alt='logo'></img></a>
                <a href='https://www.instagram.com/mr_unick_/' className='link'><img src={instalogo}alt='logo'></img></a>
                <a href='https://www.youtube.com/channel/UCGbsTX6SHcXT_svCa57NiAQ' className='link'><img src={ytlogo}alt='logo'></img></a>
            </div>
        </div>);}
export default Nav;