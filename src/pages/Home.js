import React, { useEffect, useState } from "react";

import "./Home.css";

import Header from "../component/Header";
import offer from "../media/offer.png";
import Homebar from "../component/home-components/Homebar";
import CardOne from "../component/home-components/CardOne";



const Home = () => {

    const [product,setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
    },[])





    return <div className="home">
        <div className="offer-image">
            <img src={offer}/>
        </div>
        <Homebar/>
        <div className="stuff">
            <div className="heading">
                <h1>Headphones For You!</h1>
            </div>
            <div className="cards">
                {
                    product.map(({description,image,price,rating,title,key,id}) => {
                        return <CardOne
                            description={description}
                            image={image}
                            price={price}
                            rating={rating.rate}
                            title={title}
                            id={id}
                            key={key}
                        />
                    })
                }
            </div>
        </div>
    </div>
};

export default Home;