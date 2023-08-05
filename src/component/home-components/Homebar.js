import React from "react";

import "./Homebar.css";

import arrow2 from "../../media/arrow2.svg";

export default function Homebar() {
    return <div className="homebar-father"> 
        <div className="homebar">
            <div className="homebar-child1">
                <div className="dis2">
                    <div>Headphones Type</div>
                    <img src={arrow2} />
                </div>
                <div className="dis2">
                    <div>Price</div>
                    <img src={arrow2} />
                </div>
                <div className="dis2">
                    <div>Review</div>
                    <img src={arrow2} />
                </div>
                <div className="dis2">
                    <div>Color</div>
                    <img src={arrow2} />
                </div>
                <div className="dis2">
                    <div>Material</div>
                    <img src={arrow2} />
                </div>
                <div className="dis2">
                    <div>Offer</div>
                    <img src={arrow2} />
                </div>
                <div className="dis2">
                    <div>Filter</div>
                    <img src={arrow2} />
                </div>
            </div>
            <div className="dis3">
                <div>Sort By</div>
                <img src={arrow2} />
            </div>
        </div>
    </div>
} 