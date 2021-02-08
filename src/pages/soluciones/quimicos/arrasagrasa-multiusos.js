

import React from 'react';
import Button from '../../../components/Button';

import FeatureCard from '../../../components/FeatureCard';
import ProductCard from '../../../components/ProductCard';
import LabelText from '../../../components/LabelText';
import Layout from '../../../components/layout/Layout';
import SplitSection from '../../../components/SplitSection';
import { Link } from 'gatsby';
import PictureWebp from "../../../components/PictureWebp";

import featuresData from '../../../data/productos/quimicos/features-data';
import productsData from '../../../data/productos/quimicos/amonio-cuaternario-data';
import SplitSectionB2b from '../../../components/SplitSectionB2b';
import LeadForm from '../../../components/LeadForm';


export default () => (
  <Layout>
    
   
<SplitSection
      id="product-detail" className="bg-gradient-to-br from-white via-gray-400 to-white"
      primarySlot={
        <div className="bg-white bg-opacity-50 rounded-lg px-6 pt-8 pb-6 ml-25">
          <h1 className="font-bold text-xl text-center">Arrasagrasa Multiusos Ozz </h1>
          <h2 className="font-semibold text-lg text-secondary text-center">Desengrasante biodegradable con acción sanitizante</h2>
          <p className="mt-8 text-md font-light leading-relaxed text-justify">
          Arrasagrasa Multiusos Ozz® es un desengrasante para cocina de aplicación directa. Está diseñado para remover grasa vegetal de forma rápida y eficaz de todo tipo de superficies sin dañarlas, como: acero inoxidable, granito, mármol, vitrocerámica, cerámica, plástico, vidrio, entre otros. Es especialmente efectivo para remover la sensación grasosa de superficies plásticas que los detergentes de vajilla comunes no pueden remover, al mismo tiempo que evita el cracking o desgaste de las mismas. Su fórmula contiene una novedosa tecnología sinérgica de solventes de origen vegetal, no tóxicos, que lo hacen un desengrasante ideal para uso en superficies de cocina que pueden tener contacto con alimentos. Además, le brindan propiedades sanitizantes por lo que elimina el 99,9% de micro-organismos (3-log de reducción de carga) en 1 minuto de contacto con la superficie.
          </p>
          <br/>
          <Button className="bg-primary shadow-md hover:bg-primary-darker rounded-xl" >
              Ficha Técnica
          </Button>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Button className="bg-primary shadow-md rounded-xl hover:bg-primary-darker" >
              Hoja de Seguridad
          </Button>
        </div>
      }
      secondarySlot={<PictureWebp className="" filename="arrasagrasa-multiusos-ozz" description="Imagen del producto arrasagrasa multiusos ozz "/>}
/>
    
<section id="features" className="py-10 md:py-20 bg-gradient-to-br from-gray-300 via-white to-gray-300">
      <div className="container mx-auto">
        <div className="w-full bg-fill bg-no-repeat bg-products">
          <h2 className="text-3xl font-semibold text-center">¿Por qué elegirnos?</h2>
          <p className="md:w-2/3 mx-auto text-center my-4">
            Mucho más que un proveedor de productos de limpieza, nos motiva ser aliados estratégicos de nuestros clientes.<br/>
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
    
     <LeadForm/>         
    
  </Layout>
);
