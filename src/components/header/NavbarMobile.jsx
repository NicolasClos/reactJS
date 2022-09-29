// IMPORT COMPONENTS
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { AiOutlineHome} from "react-icons/ai"
import {MdOutlineLocalOffer} from "react-icons/md"
import {BiCategory, BiBookContent} from "react-icons/bi"
import Button from './ButtonMobile'
import {Link} from 'react-router-dom'

// IMPORT STYLES
import '../../styles/header/NavbarMobile.css'

const variants = {
    open:{
        clipPath: 'circle(2000px at 30px 30px)' ,
    },
    closed:{
        clipPath: 'circle(25px at 30px 30px)'
    }
}

export default function HeaderPhone({funcion}){

    const [toggle, setToggle] = useState(false);

    const changeState = ()=>{
        setToggle(!toggle);
    }

    return(
        <>
            <motion.header className="headerM" variants={variants} transition={{duration:0.5}} animate={toggle ? 'open' : 'closed'}>
                <Button
                    toggle={changeState}
                />
                <div>
                    <h2 className="tituloHeaderM"> iStore </h2>
                    <h3 className="subtituloHeaderM">APPLE RESELLER</h3>
                </div>
                
                <div className='headerMDiv'>
                    <ul className='headerMUl'>
                        <li className='headerMLi'><Link className='headerMLink' to='/'><span><AiOutlineHome className='iconLi'/></span><span>Inicio</span></Link></li>
                        <li className='headerMLi'><Link className='headerMLink' to='/'><span><BiCategory className='iconLi'/></span><span>Categorias</span></Link></li>
                        <li className='headerMLi'><Link className='headerMLink' to='/'><span><BiBookContent className='iconLi'/></span><span>Catálogo</span></Link></li>
                        <li className='headerMLi'><Link className='headerMLink' to='/'><span><MdOutlineLocalOffer className='iconLi'/></span><span>Ofertas</span></Link></li>
                        
                    </ul>
                </div>
            </motion.header>
        </>
    );
}
