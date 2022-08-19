import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Paginas/Home';
import Sabores from '../Paginas/Sabores';
import Sobre from '../Paginas/Sobre';


const Rotas = () => ( 

    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/pagina-sabores'  element={<Sabores/>}/>
            <Route path='/pagina-sobre' element={<Sobre/>}/>  
        </Routes>
    </BrowserRouter>
);

export default Rotas;