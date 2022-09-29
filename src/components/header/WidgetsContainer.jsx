// IMPORT COMPONENTS
import React from 'react';
import {AiFillHeart, AiOutlineClose, AiOutlineHeart, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'
import {BsCart} from 'react-icons/bs'
import {FaRegCommentAlt} from 'react-icons/fa'
import CartWidget from './CartWidget.jsx'

// IMPORT STYLES
import '../../styles/header/HeaderIcons.css'

const CartWidgets = ()=>{
    return(
        <div className='headerIconsContainer'>
            <span><AiOutlineSearch className='headerIcon' /></span>
            <span><AiOutlineUser className='headerIcon' /></span>
            <span><AiOutlineHeart className='headerIcon' /></span>
            <CartWidget className='headerIcon'/>
        </div>
    );
}

export default CartWidgets;