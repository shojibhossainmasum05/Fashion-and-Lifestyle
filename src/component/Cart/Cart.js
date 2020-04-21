import React from 'react';
import { text } from '@fortawesome/fontawesome-svg-core';

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
            <h4> Order Summary </h4>
            <p> Items ordered:{cart.length}</p>
            <p><small>Shipping Cost: ${shipping}</small></p>
            <p><small>Tex + VAT: ${tax}</small></p>
            <p>Product Price: ${formatNumber(total)}</p>
            <p>Total Price: ${grandtotal}</p>
        </div>
    );
};

export default Cart;