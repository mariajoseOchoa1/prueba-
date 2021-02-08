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
    
<section id="hero-banner" className="bg-hero-banner-3 bg-fill bg-right-bottom bg-no-repeat m-0 p-0">
      <div className="container mt-0 mx-auto ">
        <div className="bg-gradient-to-r from-white">
          <div className="">
          
            <div className="bg-white bg-opacity-50 text-center pt-12 p-8 md:text-left md:w-2/5 md:pr-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-blue">
              Mucho más en higiene Institucional
              </h1>
              <p className="text-lg lg:text-xl mt-6 font-light">
                Somos su aliado en higiene institucional, con nosotros podrá mejorar la satisfacción de sus usuarios, clientes y colaboradores a través de soluciones adecuadas de higiene.
              </p>
              <p className="mt-8 md:mt-12">
                <Button className="bg-primary hover:bg-primary-lighter rounded-lg active:bg-primary-darker" size="lg">Soluciones para su negocio</Button>
              </p>
              <p className="mt-4 text-gray-600"></p>
            </div>        
          </div>
        </div>
      </div>
</section>

<section id="features" className="py-10 md:py-20 bg-gradient-to-br from-gray-300 via-white to-gray-300">
      <div className="container mx-auto">
        <div className="w-full bg-fill bg-no-repeat bg-products">
          <h2 className="text-3xl font-semibold text-center">Nuestra propuesta de valor</h2>
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
    
<section id="productos" className="pt-20">
  <div className="container mx-auto bg-white bg-opacity-50 bg-white bg-oppacity-50">
    <h2 className="text-center sm:text-3xl text-2xl font-medium title-font mt-10 mb-10">Un portafolio completo y especializado de productos de limpieza</h2>
    <SplitSection 
        primarySlot={
          <div className="p-16">
          <p className="md:w-full text-left leading-relaxed text-base text-gray-700 text-justify">
          Fabricamos y comercializamos productos líderes del mercado, reconocidos por su calidad, innovación, y excelente costo en uso.
          Adaptamos nuestra oferta de productos a las necesidades específicas de cada cliente, a través de un asesoramiento profesional, seguimiento y entrenamiento permanentes.
          </p>
          <Link to="/productos" className="mt-4 text-blue-500 inline-flex items-center">Conocer más
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
  </div>


        }
        secondarySlot={
          <PictureWebp className="float-right" filename="productos" description="Productos de limpieza"/>
        }/>
    
    <div className="w-full mx-auto mb-20">
      <Button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Descargue el Catálogo Institucional completo </Button>
    </div>          
  </div>  
</section>
   
<SplitSection id="services"
       className="bg-gradient-to-br from-white via-gray-400 to-white mb-12"
      primarySlot={
        <div className="bg-white bg-opacity-50 rounded-lg   px-6 pt-8 pb-6 ml-25">
          <h3 className="text-3xl font-semibold leading-tight">Servicios de limpieza y desinfección Especializados</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Brindamos servicios especializados para ayudarle a resolver hasta sus necesidades más complejas en higiene institucional, todo esto con un solo proveedor. 
          </p>
          <Link to="/servicios" className="mt-4 text-blue-500 inline-flex items-center">Conocer más
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      }
      secondarySlot={<PictureWebp className="" filename="services" description="Técnicos cazabacterias realizando una desinfección profunda de lugares con aglomeración de personas y poca ventilación natural y exposición a la luz solar, como medida de prevención de la transmisión indirecta del COVID-19."/>}
/>
    
<SplitSection id="rse"
      reverseOrder className="bg-gradient-to-r from-green-600 via-white to-green-200 "
      primarySlot={
        <div className="pl-8 pr-6 pt-8 pb-6 bg-white bg-opacity-50 rounded-lg">
          <h3 className="text-3xl font-semibold leading-tight">
            Somos una empresa socialmente responsable.
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed ">
          Somos una empresa responsable, transparente y solidaria. Nuestra empresa ha sido reconocida a nivel local por su gestión en responsabilidad social empresarial. Formamos parte del UN Global Compact y nos adherimos al Global Reporting Initiative.  
          </p>
          <Link to="/responsabilidad-social" className="mt-4 text-blue-500 inline-flex items-center">Conocer más
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      }
      secondarySlot={<PictureWebp filename="rse-split" description="Unilimpio es una empresa con responsabilidad social empresarial"/>}
/>
    
    
<section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Lo que nuestros clientes dicen</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
</section>
  
<LeadForm/>
<NewsletterSub/>
    
    
  </Layout>
);
