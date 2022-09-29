import React from 'react';

const SectionInfo = (props)=>{
    return(
        <div>
            <p>{props.condicion} | {props.cantidadventas} vendidos</p>
            <h3>{props.nombreCompleto}</h3>
            <div>
                {/* 
                    ESTRELLITAS DE PUNTUACION DEL VENDEDOR 
                    CANTIDAD DE OPINIONES
                */}
            </div>
            <div className='precioContainer'>
                <p>$ {props.precio*1.125}<span> 11% OFF</span></p>
                <p>en <span>{props.maxCuotas}x $ {Math.round(props.precio/props.maxCuotas)} sin interés</span></p>
                <a href='http://localhost:3000/'>Ver los metodos de pago</a>
            </div>
        </div>
    );
}

export default SectionInfo;