import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart
    let totalPrice = 0
    for (let i=0; i<cart.length;i++){
        totalPrice += cart[i].price
    }

    let ShipppingPrice = 0
    for (let i=0; i<cart.length;i++){
        ShipppingPrice += cart[i].shipping
    }
    return (
        <div className="cart">
            <h2>Ordered Summary</h2>
            <h3>Items Ordered : {cart.length}</h3>
            <h3>Price : {totalPrice.toFixed(2)}</h3>
            <h3>Price : {ShipppingPrice.toFixed(2)}</h3>
            <h3>TotalPrice : {(totalPrice+ShipppingPrice).toFixed(2)}</h3>
        </div>
    );
};

export default Cart;