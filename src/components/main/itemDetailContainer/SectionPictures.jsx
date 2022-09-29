import React from 'react';

const SectionPictures = (props)=>{
    return(
        <div>
            <img src={props.src} alt={props.alt}/>
        </div>
    );
}

export default SectionPictures;