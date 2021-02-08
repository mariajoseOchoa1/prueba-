import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/Layout';
import CustomerCard from '../components/CustomerCard';
import FeatureCard from '../components/FeatureCard';

import customerData from '../data/customer-data';
import featuresData from '../data/features-data';

import PictureWebp from "../components/PictureWebp";
import Button from '../components/Button';
import LabelText from '../components/LabelText';

import SplitSection from '../components/SplitSection';
import LeadForm from "../components/LeadForm";
import NewsletterSub from "../components/NewsletterSub";


export default () => (

  
  
  <Layout>
    <PictureWebp className="object-contain" filename="responsabilidad-social" description="responsabilidad social unilimpio"/>
    
    <div className="bg-white bg-opacity-50 rounded-lg px-6 pt-8 pb-6 ml-30 mb-20">
          <h2 className="text-3xl mt-10 text-center text-blue-700 ">La Sustentabilidad como factor de éxito </h2>
        
          <p className="mt-8 text-md  text-gray-700 text-lg font-light leading-relaxed text-center mx-64"> 
          En Unilimpio creemos firmemente que ser sustentables es el único modelo de gestión de empresas que es válido hoy por hoy. Ninguna ganancia económica el día de hoy puede justificar el comprometer los recursos y medios de subsistencia de las futuras generaciones. 
          </p>
          <br/>
          
        </div>

        <PictureWebp className="" filename="rse-split" description="responsabilidad social unilimpio object-center"/>
    

        <div className="bg-white bg-opacity-50 rounded-lg px-6 pt-8 pb-6 ml-30">
          <h2 className="text-3xl mt-10 text-center text-blue-700 mb-10">Compromiso de lucha contra la corrupción </h2>
        
          <p className="mt-8 text-md  text-gray-700 text-lg font-light leading-relaxed text-center mx-64 mb-28 ml-25 ">
          Unilimpio ha declarado y formalizado su compromiso de luchar contra la corrupción en cada uno de los encadenamientos productivos a los que pertenecemos. Contribuimos con la sociedad y el desarrollo económico haciendo negocios de forma ética y transparente, sin ceder ante solicitud de coimas para ganar licitaciones o contratos. Así mismo pertenecemos a una alianza de empresas, tanto de Ecuador como de la región, entre las cuales compartimos el mismo llamado a la acción y el mismo código moral. 
          </p>
          <br/>
          
        </div>

    

<SplitSection id="rse"
      reverseOrder className="bg-gradient-to-r from-green-100 via-white to-green-200 "
      primarySlot={
        <div className="bg-white bg-opacity-50 rounded-lg   px-6 pt-8 pb-6 ml-25">
          <h2 className="text-3xl text-center font-semibold leading-tight text-blue-700  ml-30">
            Transparencia
          </h2>
          <p className="mt-8 text-xl font-light leading-relaxed ">
          En una época en la que cualquiera puede llamarse amigable con el medio ambiente, en Unilimpio creemos en la necesidad de comunicarnos con nuestras partes interesadas de una forma honesta, clara y transparente sobre los esfuerzos que realizamos día a día para lograr que nuestra operación sea cada vez más sustentable. Para esto, a partir del año 2018 nos hemos adherido a GRI (Global Reporting Iniciative), modelo Internacional de transparencia en la comunicación de información relacionada a desarrollo económico y sustentabilidad.  
          </p>
          
        </div>
      }
      secondarySlot={<PictureWebp filename="transparencia" description="Unilimpio es una empresa con responsabilidad social empresarial"/>}
/>

   
<SplitSection id="services"
       className="bg-gradient-to-r from-blue-200 via-white to-blue-100 mt-12"
       
      primarySlot={
        <div className="bg-white bg-opacity-50 rounded-lg   px-6 pt-8 pb-6 ml-25 ">
          <h2 className="text-3xl text-center font-semibold leading-tight text-blue-700  ml-30">Adheridos al Pacto Global</h2>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Desde 2018, Unilimpio forma parte del Pacto Global iniciativa global que cuenta con el auspicio de las Naciones Unidas y que busca que las organizaciones privadas a nivel mundial se involucren activamente en la consecución de los Objetivos de Desarrollo Sustentable (ODS) para el 2030.
          </p>
          
          
        </div>
      }
      secondarySlot={<PictureWebp className="" filename="pacto-global" description="Técnicos cazabacterias realizando una desinfección profunda de lugares con aglomeración de personas y poca ventilación natural y exposición a la luz solar, como medida de prevención de la transmisión indirecta del COVID-19."/>}
/>
    

    

  

<NewsletterSub/>
    
    
  </Layout>
);
