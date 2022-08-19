import React from 'react';
import './estilo.css';

export default function Rodape () {
    return (
        <footer className='footer'>

            <div className='box-footer'>
                <div className='imagem'>
                    <img className='imagem-footer' src='../assets/logo.png' alt='Logo'/>
                </div>

                <div className='endereco'>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>

                <div className='contato'>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>

                <div className='horarios'>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div>
                <p>Galateria. Orgulhosamente desenvolvido por Nailson Rocha</p>
            </div>
        </footer>
    );
}