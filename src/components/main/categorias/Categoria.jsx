import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import {getCategory} from '../../../assets/Data'
import Item from '../itemListContainer/Item'

export default function Categoria(props){

    const categoryId = useParams().categoria;
    
    let [data, setData] = useState({});
    useEffect(()=>{
        getCategory(categoryId).then(data => setData(data));
    })

    return(
        <div className="">
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