// IMPORT COMPONENTS
import React, {useState, useEffect} from 'react';
import Item from './Item';
import Data, {getData} from '../../../../../proyecto/src/assets/Data'


// ASIGNO ESTILOS AL CONTENEDOR MAIN
const stylesItemList = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
}

export default function ItemList(props){

    

    useEffect(()=>{
        getData().then( respuesta => setData(respuesta))
    }, [])

    let [data, setData] = useState([]);
    
    return(
        <div style={stylesItemList}>
            {
                data && data.map(producto=>{
                    return(
                    
                    <Item
                        key={producto.id}
                        id={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        img={producto.img}
                    />)
                })
            }
        </div>
    );
}

