import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total= cart.reduce((total,product) => total + product.price,0)
        
     let shipping = 0;
     if (total > 35) {
         shipping = 0;
     }
     else if (total > 15) {
         shipping = 4.99;
     }
     else if (total > 0) {
         shipping = 12.99
     }
     const tax = (total / 10).toFixed(2);
     const grandtotal = (total + shipping + Number(tax)).toFixed(2);

     const formatNumber = num => {
         const precision = num.toFixed(2);
         return Number(precision);
     }
    return (
        <div>
            <h4 className='cart-style'> Order Summary </h4>
            <p className='cart-style'> Items ordered:{cart.length}</p>
            <p className='cart-style'><small>Shipping Cost: ${shipping}</small></p>
            <p className='cart-style'><small>Tex + VAT: ${tax}</small></p>
            <p className='cart-style'>Product Price: ${formatNumber(total)}</p>
            <p className='cart-style'>Total Price: ${grandtotal}</p>
            <button className='main-button cart-style'onClick> <FontAwesomeIcon icon={faShoppingCart} /> Review Your Order</button>
        </div>
    );
};

export default Cart;