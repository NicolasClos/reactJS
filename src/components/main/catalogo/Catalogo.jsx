import React, {useState, useEffect} from 'react';

import '../../../styles/main/Catalogo.css'

const Catalogo = (props)=>{
    return(
        <div id={props.id} className="catalogoContainer">
            <div className="catalogoDiv">
                <h3>iPhones</h3>
            </div>
            <div className="catalogoDiv">
                <h3>Macbooks</h3>
            </div>
            <div className="catalogoDiv">
                <h3>Apple Watches</h3>
            </div>
        </div>
    );
}

export default Catalogo;
