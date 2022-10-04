// IMPORT COMPONENTS
import React from 'react';
import NavbarMobile from './components/header/NavbarMobile'
import NavbarDesktop from './components/header/NavbarDesktop'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/main/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/main/itemDetailContainer/ItemDetailContainer'
import Catalogo from './components/main/catalogo/Catalogo'
import Ofertas from './components/main/ofertas/Ofertas'
import Categoria from './components/main/categorias/Categoria'

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
          <Route path='/catalogo' element={<Catalogo />}/>
          <Route path='/ofertas' element={<Ofertas />} />
          <Route path='/categorias/:categoryId' element={<Categoria />} />
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
