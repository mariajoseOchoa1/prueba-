

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
          <h1 className="font-bold text-xl text-center">Dispensador de Jabón Líquido o Gel Antibacterial Unilimpio </h1>
          <h2 className="font-semibold text-lg text-secondary text-center">con botella rellenable de 800ml</h2>
          <p className="mt-8 text-md font-light leading-relaxed text-justify">
          Dispensador ideal para todo tipo de decoraciones en el sector de salud, hoteles, restaurantes y planteles educativos, gracias a su sistema de dosificación, cada push arroja un ml del producto. Elaborado con polipropileno impermeable contra el moho.
          </p>
         
        </div>
      }
      secondarySlot={<PictureWebp className="" filename="dispensador-jabon-gel-unilimpio" description="Imagen del producto dispensador para jabón líquido o gel antibacterial Unilimpios "/>}
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
