import React from 'react';
import './Products.css'
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
                <button onClick={()=> props.cartEvent(props.product)}>Add To Cart</button>
            </div>
        </div>
    );
};

export default Products;