import React from 'react';
import { Link } from 'gatsby';
import PictureWebp from '../components/PictureWebp'

const SplitSectionB2b = ({className}) => (
  <section id="b2b" className={`bg-gradient-to-br from-white via-gray-400 to-white   ${className}`}>
    <div className="container mx-auto items-center flex flex-col lg:flex-row">
      <div className="lg:w-1/2">
    
              <div className="bg-white bg-opacity-50 rounded-lg   px-6 pt-8 pb-6 ml-25">
                <h3 className="text-3xl font-semibold leading-tight">Plataforma e-commerce B2B para realizar sus pedidos</h3>
                <p className="mt-8 text-xl font-light leading-relaxed">
                  Realice sus pedidos de forma rápida y fácil, al alcance de un clic, gracias a nuestra plataforma B2B, disponible 24 horas, 7 días a la semana, 365 días al año. 
                </p>
                <Link to="/portal-b2b" className="mt-4 text-blue-500 inline-flex items-center">Conozca más
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
      </div>
      <div className="mt-10 lg:mt-0 w-full lg:w-1/2 order-last lg:order-first">
              <PictureWebp className="" filename="b2b" description="Técnicos cazabacterias realizando una desinfección profunda de lugares con aglomeración de personas y poca ventilación natural y exposición a la luz solar, como medida de prevención de la transmisión indirecta del COVID-19."/>
      </div>
    </div>
  </section>
);

export default SplitSectionB2b;
