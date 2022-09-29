import React, {useState} from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

import '../../../styles/main/Favoritos.css'


const Favoritos = (props)=>{
    const displayNone = {
        display: 'none'
    }

    const displayInlineBlock = {
        display: 'flex'
    }

    const [toggle, setToggle] = useState(true);

    const changeToggle = ()=>{
        setToggle(!toggle);
    }

    return(
        <>
            <div className="outlineHeart" style={toggle ? displayInlineBlock : displayNone} onClick={changeToggle}>
                <AiOutlineHeart />
            </div>
            <div className="fillHeart dn" style={toggle ? displayNone : displayInlineBlock} onClick={changeToggle}>
                <AiFillHeart />
            </div>
        </>
        
    );
}

export default Favoritos;