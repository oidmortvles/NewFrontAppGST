import React, { useState } from 'react';
import './SearchLens.css';

function SearchLens() {

    const windowWidth = window.innerWidth;
    const [searchPlace, setSearchPlace] = useState(windowWidth<=800);

    const ampliarSearchPlace = () =>{
        setSearchPlace(!searchPlace);
        console.log('Ancho de la ventana:', windowWidth);
    }   

return (
    <div className='searchLensContainer'>
        <button className='searchLens' onClick={ampliarSearchPlace}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
        </button>

        <input 
        type='text' 
        className={`searchPlace ${searchPlace ? 'visibleSearchPlace':''}`}
        placeholder='Buscar'/>
    </div>
  )
}

export default SearchLens