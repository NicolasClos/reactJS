// IMPORT COMPONENTS
import React from 'react';
import NavbarMobile from './components/header/NavbarMobile'
import NavbarDesktop from './components/header/NavbarDesktop'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/main/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/main/itemDetailContainer/ItemDetailContainer'

// IMPORT STYLES
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarMobile />
        <NavbarDesktop />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/producto/:id' element={<ItemDetailContainer />} />
          <Route path='/categorias/:categoriasId' element={<Categoria />} />
          <Route path='/catalogo' element={<Catalogo />}/>
          <Route path='/ofertas' element={<Ofertas />}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
