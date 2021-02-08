

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
          <h1 className="font-bold text-xl text-center">Jabón Líquido Autodispensado Dr.Clean </h1>
          <h2 className="font-semibold text-lg text-secondary text-center">para una adecuada higiene de manos, tanto
en el hogar como en el ámbito profesional.</h2>
          <p className="mt-8 text-md font-light leading-relaxed text-justify">
          Jabón Líquido Antibacterial Dr. Clean® ha sido formulado para brindar una óptima higiene de manos. Remueve suavemente la suciedad de las manos mientras brinda humectación y protección antibacterial. Su ingrediente antimicrobiano de última generación elimina el 99,9% de gérmenes causantes de enfermedades en 30 seg.*. Apto para uso frecuente, ya que ha sido enriquecido con glicerina que humecta la piel y protege las manos de la resequedad por el lavado frecuente. Es más higiénico que el jabón en barra ya que el contenido se encuentra sellado y no acumula gérmenes. Expertos médicos a nivel mundial recomiendan el lavado frecuente de las manos como el método más efectivo para prevenir el contagio de enfermedades causadas por microrganismos patógenos, incluyendo virus envueltos como el SARS-CoV2.
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
      secondarySlot={<PictureWebp className="" filename="jabon-autodispensado" description="Imagen del producto jabón líquido antibacterial autodisopensado Dr.Clean "/>}
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
