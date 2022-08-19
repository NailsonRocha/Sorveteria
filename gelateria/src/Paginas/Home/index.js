import React from 'react';
import './estilo.css';

import Topo from '../../Componentes/Topo';
import Rodape from '../../Componentes/Rodape';

export default function Home () {
    return (
        <div className='home'>
            
            <Topo />

            <main>
                <section className='banner'>
                    
                    <div className='box-banner'>
                        <h1 className='title-banner'>SORVETE ARTESANAL</h1>
                    </div>
                </section>

                <section className='sabores'>
                    
                    <div className='box-sabores'>
                    <img className='imagem-sabores' src='../assets/banner-sabores.jpg' alt='Sorvete'/>
                    </div>

                    <div className='box-sabores'>
                        <h2 className='title-sabores'>NOSSOS SABORES</h2>

                        <span className='span-sabores'> Novos e deliciosos!</span>

                        <p className='texto-sabores'>Sorvete bom é aquele feito com os melhores ingredientes!
                            Aqui na gelateria todos os nossos produtos são naturais,
                            à base de frutas e sem nenhum conservante! Também temos
                            opções sem lactose e sem açúcar. Venha conhecer e perceber
                            que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                        </p>
                    </div>
                </section>

                <section className='eventos'>
            
                    <div className='box-eventos'>
                        <h3 className='title-eventos'>NOSSOS EVENTOS</h3>

                        <span className='span-eventos'> Delicias com sorvete!</span>

                        <p className='texto-eventos'>
                        Mais do que uma sorveteria, uma extensão da sua casa!
                        Estamos aqui prontinhos para te atender e oferecer os 
                        melhores eventos com os melhores sorvete  da sua vida!
                        Venha nos conhecer e passar um tempo aqui com a gente.
                        </p>
                    </div>

                    <div className='box-eventos'>
                        <img className='imagem-eventos' src='../assets/eventos-image.jpg' alt='Eventos'/>
                    </div>

                </section>

                <section className='sobre'>
                    <div className='box-sobre'>
                        <img className='imagem-sobre' src='../assets/sobre-image.jpg' alt='Sobre'/>
                    </div>

                    <div className='box-sobre'>
                        <h3 className='title-sobre'>SOBRE NÓS</h3>

                        <span className='span-sobre'> Alegria em cada conquista!</span>

                        <p className='texto-sobre'>
                        Venha tomar o melhor sorvete da região aqui com a gente!
                        Nós estamos a anos no mercado produzindo o que tem de melhor
                        para o nosso cliente e você não pode ficar fora dessa. Venha
                        nos fazer uma visita e aproveite o melhor atendimento e o melhor
                        sorvete da cidade.
                        </p>
                    </div>

                </section>
            </main>
            
            <Rodape />
        </div>
    );
}