import React, { useState } from 'react';

import '../../../styles/main/itemCount.css';

const ItemCount = (props)=>{

    const [num, setNum] = useState(1);

    const itemRest = ()=>{
        if(num === 1){
            return 0;
        }
        return(setNum(num - 1))
    }

    const itemSum = ()=>{
        if(num === props.stock){
            return 0;
        }
        return(setNum(num + 1))
    }

    const onAddToCart = ()=>{
        if(num === 1){
            console.log("Producto agregado al carrito")
        } else if(num > 1){
            console.log("Productos agregados al carrito")
        }
    }

    return(
        <>
            <div className='btnContainer'>
                <button className="btnResta" onClick={itemRest}>-</button>
                <span className="numero">{num}</span>
                <button className="btnSuma" onClick={itemSum}>+</button>
            </div>
            <button className="btnBuyNow" onClick={props.onBuyNow}>Comprar ahora</button>
            <button className="btnAddToCart" onClick={onAddToCart}>Agregar al carrito</button>
        </>
    );
}

export default ItemCount;