import React from 'react';
import logo1 from '../../images/logo1.png';
import "./Nav.css";
const Nav = () => {
    return (
        <div>
            <div className="header">
                <img src={logo1} alt="" />
                <nav className="main-menu">
                    <ul>
                        <li><a href="/shop">Latest Deals</a></li>
                        <li><a href="/order">Free Shipping</a></li>
                        <li><a href="/manage">Catagories</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Nav;