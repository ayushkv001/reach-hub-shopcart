import { useNavigate } from "react-router-dom";
import "./CardOne.css";

export default function CardOne({description,image,price,rating,title,id,key}) {

    const navigate = useNavigate();

    const onClick = () => {
        navigate(`product/${id}`)
    }

    return <div className="cardone">
        <h6>{title}</h6>
        <img src={image} />
        <div>Price {price} || Rating : {rating}</div>
        <div className="btn-father">
            <div><button className="btn">Add To Cart</button></div>
            <div><button className="btn" onClick={onClick}>See Product</button></div>
        </div>
        
    </div>
}