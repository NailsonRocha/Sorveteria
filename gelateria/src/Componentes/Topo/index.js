import React from 'react';
import './estilo.css';
import {Link} from 'react-router-dom';

 const Topo = () => ( 
        <header className='header'>
            <div className='box-header'>
                <img className='img-header' src='../assets/logo.png' alt='Logo'/>
                    
                <nav className='nav-header'>

                    <Link className='link-header' to='/'>Home</Link>
                    <Link className='link-header' to='/pagina-sabores'>Sabores</Link>
                    <Link className='link-header' to='pagina-sobre'>Sobre</Link>

                </nav>
            </div>
            
        </header>
);

export default Topo;