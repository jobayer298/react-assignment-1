import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faStar } from '@fortawesome/free-solid-svg-icons'
const Products = (props) => {
    const {img,name,stock,price} = props.product
    return (
        <div className="products">
            <div className="image">
                <img src={img} alt="" />
            </div>  
            <div className="product-info">
                <h3>{name}</h3>
                <small>In stock:{stock}</small>
                <h2>Price:{price}$</h2>
                <div className="star">
                    <FontAwesomeIcon className="" icon={faStar}/>
                    <FontAwesomeIcon className="" icon={faStar}/>
                    <FontAwesomeIcon className="" icon={faStar}/>
                    <FontAwesomeIcon className="" icon={faStar}/>
                    <FontAwesomeIcon className="" icon={faStar}/>
                </div>
                <button onClick={()=> props.cartEvent(props.product)}><FontAwesomeIcon className="cartIcon" icon={faCartPlus}/>Add To Cart</button>
            </div>
        </div>
    );
};

export default Products;