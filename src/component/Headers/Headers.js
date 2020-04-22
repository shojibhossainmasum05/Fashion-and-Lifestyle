import React from 'react';
import logo from '../../images/logo.png';
import './Headers.css';
const Headers = () => {
    return (
        <div className='Headers'>
            <img src= {logo} alt="You wait, the picture will come soon"/>
            <nav className='nav-style'>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Headers;