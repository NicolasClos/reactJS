// IMPORT COMPONENTS
import React from 'react';
import Widgets from './WidgetsContainer'
import {Link} from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'

// IMPORT STYLES
import '../../styles/header/NavbarDesktop.css'

// IMPORT IMAGES
import logo from '../../assets/nclos.png'

export default function Navbar(){
    return(
        <>
            <div className="headerDiv"></div>
            <header className="header">
                <div className="headerImgContainer">
                    <Link to='/'><img className='headerImg' alt='logo' src={logo} /></Link>
                </div>
                <nav className="nav">
                    <ul className='navUl'>
                        <li className='navLi'><Link className='navLink' to='/'>Inicio</Link></li>
                        <div className="navLi dropdown">
                            <li className="categoriasLink dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</li>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/categoria/:categoriaId">iPhone</Link></li>
                                <li><Link className="dropdown-item" to="/categoria/:categoriaId">Macbook</Link></li>
                                <li><Link className="dropdown-item" to="/categoria/:categoriaId">Apple Watch</Link></li>
                            </ul>
                        </div>
                        <li className='navLi'><Link className='navLink' to='/catalogo'>Catálogo</Link></li>
                        <li className='navLi'><Link className='navLink' to='/ofertas'>Ofertas</Link></li>
                    </ul>
                </nav>
                <Widgets />
                <div className="headerImgContainer2">
                    <img className='headerImg2' alt='logo' src={logo} />
                </div>
            </header>
        </>
    );
}