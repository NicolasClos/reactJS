// IMPORT COMPONENTS
import React from 'react';
import {BsCart} from 'react-icons/bs'

const CartWidget = (props)=>{
    return(
        <span><BsCart className={props.className} /></span>
    );
}

export default CartWidget;