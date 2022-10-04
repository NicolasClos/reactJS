import React, {useState}from 'react';
import ItemCount from '../itemListContainer/ItemCount'

const SectionBuy = (props)=>{

    let precio = props.precio;
    let x = Math.round(precio/150)

    const [toggle, setToggle] = useState(false)

    function changeToggle(){
        setToggle(!toggle);
    }

    return(
        <div className="sectionBuyContainer">
            <div className="envioContainer">
            </div>
            <div className="buyContainer">
                <h4>Stock disponible</h4>
                <div>
                    {toggle === false ? <ItemCount onBuyNow={changeToggle}/> : <button>Finalizar Compora</button>} 
                    <p>({props.stock} disponibles)</p>
                </div>
                <p><span>Puntos de compra.</span> Sumás {x} puntos</p>
            </div>
        </div>
    );
}

export default SectionBuy;