import React from 'react';
import { useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shops.css'
const Shops = () => {
    const firstTen = fakeData.slice(0,10)
    const[products,setProducts] = useState(firstTen)
    const[cart,setCart] = useState([])
    const cartEvent = (product) => {
        const cartItem = [...cart ,product]
        setCart(cartItem)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                {
                    products.map(product => <Products cartEvent={cartEvent} product={product}></Products>)
                }
                </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shops;