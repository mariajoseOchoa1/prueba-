

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
          <h1 className="font-bold text-xl text-center" >Toalla de Manos en Z Biosolutions  </h1>
          <h2 className="font-semibold text-lg text-secondary text-center">color blanca y natural </h2>
          <p className="mt-8 text-md font-light leading-relaxed text-justify">
          Toalla de manos ideal para el secado e higiene de manos. Puede utilizar en baños, cocinas, salones, restaurants o establecimientos comerciales. Cuenta con máximo poder de absorción y retención de líquidos. Elaborado con procesos ecológicos y socialmente responsables.
          </p>
          <br/>
          
        </div>
      }
      secondarySlot={<PictureWebp className="" filename="toalla-z-blanca" description="Imagen del producto toalla z "/>}
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
