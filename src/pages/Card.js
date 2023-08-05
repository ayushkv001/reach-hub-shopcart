import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

import "./Card.css";

export default function Card() {
    const [product,setProduct] = useState({});
    let {id} = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=> setProduct(json))
    },[])
    


    return <div className="card">
        <div className="title">
            <h3>Title : {product.title}</h3>
        </div>
        <div className="bottom">
            <div className="description">
                <div>Description : {product.description}</div>
                <div>Rating : {product.rating.rate}</div>
                <div>Price : {product.price}</div>
                <div><Link to="/"><button className="btn4">Go Back</button></Link></div>
            </div>
            <div className="card-image">
                <img src={product.image}/>
            </div>
        </div>
        
    </div>
}