// IMPORT COMPONENTS
import React from 'react';
import Favoritos from './favoritos'
import {Link} from 'react-router-dom'

// IMPORT STYLES AND ASSETS
import '../../../styles/main/Item.css'

const Item = (props)=>{
    return(
        <div id={props.id} className={props.className}>
            <div className='productoContainer'>
                <div className='productoImagenContainer'>
                    <img className='productoImagen' src={props.img} alt='Imagen del producto'/>
                </div>
                <div className='productoInfoContainer'>
                    <h3 className='productoNombre'>{props.nombre}</h3>
                    <h3 className='productoPrecio'>$ {props.precio}</h3>
                </div>
                <div className='verMasContainer'>
                    <Link to={`/producto/${props.id}`} className><button className='verMas'>Ver Más</button></Link>
                </div>
                <span className='spanFavoritos'><Favoritos /></span>
            </div>
        </div>
    )
}

export default Item;