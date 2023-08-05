import React from "react";

import arrow from "../media/arrow.svg";

import phone from "../media/phone.svg";
import "./Header.css"

export default function Header() {
    return <div className="header">
        <div className="header-child">
            <div className="image"> <img src={phone} alt="svg" /> </div>
            <div>+91 7263946294</div>
        </div>
        <div>Get 50% off on Selected Items | Shop now</div>
        <div className="header-child">
            <div className="header-child-child">Eng <img src={arrow}/></div>
            <div>Location <img src={arrow}/></div>
        </div>
    </div>
} ;

