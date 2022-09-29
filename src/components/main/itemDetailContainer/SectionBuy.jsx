import React from 'react';
import ItemCount from '../itemListContainer/ItemCount'

const SectionBuy = (props)=>{

    let precio = props.precio;
    let x = Math.round(precio/150)

    return(
        <div className="sectionBuyContainer">
            <div className="envioContainer">
            </div>
            <div className="buyContainer">
                <h4>Stock disponible</h4>
                <div>
                    <ItemCount />
                    <p>({props.stock} disponibles)</p>
                </div>
                <p><span>Puntos de compra.</span> Sumás {x} puntos</p>
            </div>
        </div>
    );
}

export default SectionBuy;