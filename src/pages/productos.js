import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Button from '../components/Button';
import CustomerCard from '../components/CustomerCard';
import FeatureCard from '../components/FeatureCard';
import ProductCard from '../components/ProductCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';

import { Link } from 'gatsby';
import customerData from '../data/customer-data';
import featuresData from '../data/features-data';
import productsData from '../data/products-data';

import PictureWebp from "../components/PictureWebp";
import LeadForm from "../components/LeadForm";
import SplitSectionB2b from '../components/SplitSectionB2b';
import SplitSection from '../components/SplitSection';



export default () => (

  <Layout>
  
<section id="productos" className="pt-6">
  <div className="container mx-auto bg-white bg-opacity-50">
    <h1 className="text-center sm:text-3xl text-2xl font-medium title-font">Productos</h1>
    <SplitSection 
        primarySlot={
          <div className="px-8 py-10 bg-gray-200 rounded-xl">
            <h2 className="text-xl">Un portafolio completo de productos de limpieza para resolver todas sus necesidades de higiene institucional.</h2>
            <p className="md:w-full text-left leading-relaxed text-base text-gray-700">
              Fabricamos y comercializamos productos líderes del mercado, reconocidos por su calidad, innovación, y excelente costo en uso.
              Adaptamos nuestra oferta de productos a las necesidades específicas de cada cliente, a través de un asesoramiento profesional, seguimiento y entrenamiento permanentes.
            </p>
          </div>
        }
        secondarySlot={
          <PictureWebp className="float-right" filename="productos" description="Productos de limpieza"/>
        }/>
    <div className="w-full">
      <h2 className="text-md text-blue-500 tracking-widest font-medium title-font text-center">Líneas de Productos</h2>        
      <div className="flex flex-wrap">
      
        {productsData.map(product => (
            
              <ProductCard product={ product } />
            
        ))}
      
      </div>
      
    </div>
    <div className="w-full mx-auto mb-20">
      <Button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Descargue el Catálogo Institucional completo </Button>
    </div>          
  </div>  
</section>

<SplitSectionB2b/>
   
<LeadForm/>
    
  </Layout>


);
