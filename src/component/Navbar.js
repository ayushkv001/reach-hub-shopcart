import React from "react";

import "./Navbar.css";

import cart from "../media/cart.svg";
import arrow2 from "../media/arrow2.svg";
import search from "../media/search.svg";
import cart2 from "../media/cart2.svg";
import person from "../media/person.svg";

export default function Navbar() {
    return <div className="navbar">
        <div className="navbar-child dis">
            <img src={cart}/>
            <div>Shopcart</div>
        </div>
        <div className="navbar-child dis">
            <div>Categories</div>
            <img src={arrow2} />
        </div>
        <div className="dis">Deals</div>
        <div className="dis">What's new</div>
        <div className="dis">Delivery</div>
        <div className="navbar-child dis">
            <input type="text" placeholder="Search Product"/>
            <button><img src={search}/></button>
        </div>
        <div className="navbar-child dis">
            <img src={person}/>
            <div>Account</div>
        </div>
        <div className="navbar-child dis">
            <img src={cart2}/>
            <div>Cart</div>
        </div>
    </div>
} 