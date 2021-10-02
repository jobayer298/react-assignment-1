import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
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
            <div className="cartHeading">
                <h1>Ordered Summary</h1>
            </div>
            {/* <h3>Items Ordered : {cart.length}</h3> */}
            <div className="allInfo">
                <div className="itemsInfo">
                <small>Sub Total</small><br />
                <small>Shipping Cost</small><br />
                <small>Total</small>
            </div>
            <div className="price">
                <small>{totalPrice.toFixed(2)}</small><br />
                <small>{ShipppingPrice.toFixed(2)}</small><br />
                <small><b>{(totalPrice+ShipppingPrice).toFixed(2)}</b></small>
            </div>
            </div>
            {/* <div className="subtotal">
                <small>Sub Total</small>
                <small>{totalPrice.toFixed(2)}</small>
            </div>
            <div className="shipping">
                <small>Shipping Cost</small>
                <small>{ShipppingPrice.toFixed(2)}</small>
                
            </div>
            <div className="total">
                <small>Total</small>
                <small>{(totalPrice+ShipppingPrice).toFixed(2)}</small>
            </div> */}
            <div className="cartBtn">
                <button>Proceed To Payment</button>
            </div>
        </div>
    );
};

export default Cart;