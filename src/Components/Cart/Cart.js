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
            <div className="cartBtn">
                <button>Proceed To Payment</button>
            </div>
        </div>
    );
};

export default Cart;