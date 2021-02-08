
import React from 'react';
import { Link } from 'gatsby';




import LabelText from '../../components/LabelText';
import Layout from '../../components/layout/Layout';
import Button from '../../components/Button';
import FeatureCard from '../../components/FeatureCard';


import featuresData from '../../data/productos/absorbentes/features-data';


import PictureWebp from "../../components/PictureWebp";
import SplitSection from '../../components/SplitSection';
import SplitSectionB2b from '../../components/SplitSectionB2b';



export default () => (
  <Layout>
    
<section id="product-line" className="pt-6 bg-gradient-to-br from-gray-300 via-white to-gray-300">
  <div className="container mx-auto">
    <h1 className="text-center sm:text-3xl text-2xl font-medium title-font mb-8">Absorbentes</h1>
    <SplitSection className=""
        primarySlot={
          <div className="bg-white bg-opacity-50 rounded-xl p-10">
            <h2 className="text-xl font-bold text-blue-600 mb-5">Desarrollados con materia prima de la mejor calidad y amigables con el ambiente.</h2>
            <p className="md:w-full text-left leading-relaxed text-base text-gray-700 text-justify ">
            Nuestra línea de absorbentes ha sido creada para tener un máximo poder de absorción y retención de líquidos. Elaborada con soluciones ecológicas de higiene en suavidad y textura para mayor bienestar en cuidado personal. Procesos socialmente responsables.<br/>
          
              
            </p>
          </div>
        }
        secondarySlot={
          <PictureWebp className="float-right" filename="absorbentes" description="Absorbentes Unilimpio"/>
        }/>
    <div className="w-full">
      <h2 className="font-medium title-font text-center my-8 text-opacity-100">Categorías</h2>        
      <div className="flex flex-wrap">
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 ">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-3 text-center">
            Toallas de Mano 
          </h3>
          <Link to="/productos/absorbentes/toalla-z" className="text-blue-500 inline-flex items-center">
              Toalla Z Bio Blanca
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link to="/productos/absorbentes/toalla-de-manos-bio" className="text-blue-500 inline-flex items-center">
             Toalla de Manos Bio x2 unidades  
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link to="/productos/absorbentes/toalla-de-manos-center-pull" className="text-blue-500 inline-flex items-center">
            Toalla de Manos Center Pull
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link to="/productos/absorbentes/limpion-industrial" className="text-blue-500 inline-flex items-center">
            Limpión Industrial 
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>

        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-3 text-center">
            Papel Higiénico
          </h3>
          <Link to="/productos/absorbentes/papel-higienico-bio-200-metros" className="text-blue-500 inline-flex items-center">
              Papel Higiénico Jumbo bio 200 Metros 
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link to="/productos/absorbentes/papel-higienico-bio-250-metros" className="text-blue-500 inline-flex items-center">
              Papel Higiénico Jumbo bio 250 Metros 
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          
          <Link to="/productos/quimicos/amonio-cuaternario" className="text-blue-500 inline-flex items-center">
              
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-3 text-center">
            Servilletas  
          </h3>
          <Link to="/productos/absorbentes/servilleta-bio" className="text-blue-500 inline-flex items-center">
             Servilleta Bio  
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link to="/productos/absorbentes/servilleta-dispensada" className="text-blue-500 inline-flex items-center">
             Servilleta en Z Dispensada  
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
        </div>
        
          
      
      
      
      
      </div>
    </div>
             
  </div>  
</section>


<section id="features" className="py-10 md:py-20 ">
      <div className="container mx-auto">
        <div className="w-full bg-fill bg-no-repeat bg-products">
          <h2 className="text-3xl font-semibold text-center">¿Por qué elegir nuestro productos químicos?</h2>
          <p className="md:w-2/3 mx-auto text-center my-4">
            Al elegirnos, nuestros clientes reciben:
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center">
          
            {featuresData.map(feature => (
            <div key={feature.featureName} className="w-full p-4 lg:w-1/3">
              <FeatureCard feature={feature} />
            </div>
            ))}
          
          
        </div>
      </div>
</section>

<SplitSectionB2b/>
    
<section id="lead-form" className="bg-call-center my-20 bg-top bg-no-repeat bg-fill">
      <div className="container mx-auto mx-0 py-40 bg-white bg-opacity-50 text-center">
        <div className="w-4/6 p-8 mx-auto bg-white bg-opacity-50 rounded-xl shadow-lg">
          <h2 className="text-2x1 md:text-4xl font-semibold">Estamos listos para atenderlo.</h2>
          <p className="mx-auto my-8 text-xl font-light w-3/4">
           Nuestros asesores estarán gustosos de ponerse en contacto con usted en breve para brindarle mayor información o agendar una visita presencial o cita virtual según su preferencia.
          </p>
          <div className="flex flex-wrap mx-auto justify-center">  
            <input type="text" id="empresa" name="empresa" placeholder="Empresa" aria-label="E-mail"  className="w-full md:w-1/3 mx-2 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-gray-200 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            <input type="text" id="E-mail" name="email" placeholder="E-mail" aria-label="email" className="w-full md:w-1/3 mx-2 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-gray-200 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>  
            <input type="text" id="contacto" name="contacto" placeholder="Persona de Contacto" aria-label="Contacto" className="w-1/3 mx-2 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-gray-200 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>  
            <input type="text" id="telefono" name="telefono" placeholder="telefono" aria-label="telefono" className="w-full md:w-1/3 mx-2 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-gray-200 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>  
            <input type="text" id="sector" name="sector" placeholder="Sector" aria-label="Sector"  className="w-full md:w-1/3 mx-2 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-gray-200 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            <input type="text" id="numempleados" name="numempleados" placeholder="Numero de empleados" aria-label="Num Empleados"  className="w-1/3 mx-2 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-gray-200 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            <Button className="mt-6 rounded-xl transition duration-200 ease-in-out bg-secondary shadow-md hover:bg-secondary-lighter hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 focus:outline-none" size="lg">Deseo ser contactado por un asesor</Button>
          </div>  
        </div>
      </div>
</section>

    
    
  </Layout>
);

