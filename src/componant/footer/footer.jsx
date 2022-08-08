import React from "react";
import instalogo from "./../../accet/insta.png"
import ytlogo from "./../../accet/yt.png"
import "./footer.css";


const Footer=()=>{return (<div className='footer'>
    <div className='footer-link'>
    <div className='mail'><img src={instalogo}alt='logo'></img><a href='https://nikhillende9121@gmail.com' className='link'><p>nikhillende9121@gmail.com</p></a></div>
    <div className='wp'><img src={ytlogo}alt='logo'></img><p>7448080267</p></div>
    </div>
    </div>
    );}
export default Footer;