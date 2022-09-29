import React, {useState, useEffect} from 'react'
import SectionPictures from './SectionPictures'
import SectionInfo from './SectionInfo'
import SectionBuy from './SectionBuy'
import {getItem} from '../../../../../proyecto/src/assets/Data'
import {useParams} from 'react-router-dom'

export default function ItemDetail(props){

    const id = useParams().id;
    
    let [data, setData] = useState({});
    useEffect(()=>{
        getItem(id).then(data => setData(data));
    })

    return(
        <div className={props.className}>
            <div className='sectionPictures'>
                <SectionPictures id={data.id} src={data.img} alt={data.nombre}/>
            </div>
            <div className='sectionInfo'>
                <SectionInfo
                    nombreCompleto={data.nombreCompleto}
                    condicion={data.condicion}
                    maxCuotas={data.maxCuotas}
                    cantidadventas={data.cantidadVendidos}
                    precio={data.precio}
                />
            </div>
            <div className='sectionBuy'>
                <SectionBuy 
                    stock={data.stock}
                    precio={data.precio}
                />
            </div>
        </div>
    );
}