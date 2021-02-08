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
    <PictureWebp className="object-contain" filename="grupo-unilimpio" description="responsabilidad social unilimpio"/>
    
    <div className="bg-white bg-opacity-50 rounded-lg px-6 pt-8 pb-6 ml-30 mb-20">
          <h1 className="text-5xl font-bold mt-10 text-center text-blue-700 ">Somos Salud y Bienestar </h1>
        
          <p className="mt-8 text-md text-2xl text-gray-700 text-sm font-light leading-relaxed text-center mx-64"> 
          Somos una empresa orgullosamente Ecuatoriana, que desde hace más de 3 décadas brindamos salud y bienestar a las personas a través de limpieza e higiene.
Los productos y servicios de Unilimpio están ahí para ayudarle a proteger su salud, la de su familia y la de sus colaboradores en cualquier parte que se encuentre.  
          </p>
          <br/>
        </div>

        <SplitSection id="rse"
      reverseOrder className="bg-gradient-to-r from-blue-100 via-white to-blue-500 "
      primarySlot={
        <div className="bg-white bg-opacity-50 rounded-lg px-6 pt-8 pb-6 ml-25">
        
          <p className="mt-1.5 text-xl font-light leading-relaxed text-center ">
          Reportaje realizado por Mucho Mejor Ecuador sobre el proceso de fabricación de nuestros productos de limpieza.   
          </p>
          
        </div>
      }
      secondarySlot={<iframe width="560" height="315" src="https://www.youtube.com/embed/B412e9m5H2g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" description="video responsabilidad social unilimpio float-right" allowfullscreen ></iframe>}
/>

<br/>

        <div className="bg-white bg-opacity-50 rounded-lg px-6 pt-8 pb-6 ml-30 mb-20">
          <h2 className="text-3xl font-bold mt-10 text-center text-blue-700 ">NUESTRA HISTORIA </h2>
          <br/>
        
          <p className=" text-md text-2xl text-gray-700 text-lg font-light leading-relaxed text-justify mx-64"> 
          Unilimpio S.A es una empresa que nació en 1986 con el nombre de Prolimco, a lo largo de su historia evoluciona y en 1999 adquiere el nombre de UNILIMPIO S.A. Nos dedicamos a proveer sistemas de limpieza para la industria, las instituciones y el hogar. Nuestro propósito es proveer bienestar a las personas a través de soluciones de higiene.
          <br/>
Tras 34 años, nos hemos convertido en un grupo empresarial constituido por empresas especializadas en diferentes campos de la higiene, con operaciones en Colombia y Ecuador, exportaciones a Perú, 150 colaboradores directos y a través de más de 30 proveedores ayudamos a crear muchos empleos más.
<br/>
Nos diferenciamos de la competencia por tener el más amplio portafolio de productos de limpieza, asesores profesionales en limpieza, buenas prácticas de manufactura, de calidad y de seguridad alimentaria.
Unilimpio se caracteriza por la innovación constante. Con nosotros la limpieza se vuelve divertida, segura para los usuarios, el ambiente y finalmente rentable para todos en la cadena de abastecimiento.
<br/>

"La higiene es bienestar, es salud".  
          </p>
          <br/>
          
        </div>

    <table class="mejoras mb-20">
    <thead class="titulo" >
      <tr>
        <td className= "text-purple-500 text-center text-secondary"><h2>2001</h2></td>
        <td><h2>2009</h2></td> 
        <td><h2>2012</h2></td>   
        <td><h2>2016</h2></td> 
        <td><h2>2018</h2></td>   
        <td><h2>2019</h2></td>          
      </tr> 
    </thead> 
    <tr>
      <td><h2>Certificación ISO 9001.</h2></td>  
      <td><h2>Miembro de la Internacional Sanitary Supply Association ISSA.</h2></td>  
      <td><h2>Certificación ISO 4500 e ISO 14000.</h2></td> 
      <td><h2>mplementación de un manejo profesional de Responsabilidad Social con el marco de conducta de ISO 26000.</h2></td> 
      <td><h2>Miembro del Pacto Global de Naciones Unidas.</h2></td> 
      <td><h2>Certificación en Buenas Prácticas de Manufactura.</h2></td>  
    </tr>  
    
      
    </table>   
        
 <div class="grid grid-cols-4 justify-items-auto px-20" id="contenedorgrande"> 
    
    
     
  
    
          <div id="contenedor" class="place-items-center px-10">
              <PictureWebp className="object-contain" filename="niña-con-gel" description="responsabilidad social unilimpio"/>
              <h2>NUESTRA PASIÓN</h2>
              <p>El bienestar de las
              <br/> personas a través de 
              <br/> soluciones de higiene.</p>
          </div>
     
          <div id="contenedor" class="place-items-center px-10"> 
              <PictureWebp className="object-contain " filename="señora-laboratorio" description="responsabilidad social unilimpio"/>
              <h2>NUESTRO FUTURO</h2>
              <p>Ser la primera opción de
              <br/>
               higiene institucional reconocida 
               <br/>
               por su oferta de valor y su 
               <br/>
               Responsabilidad Social 
               <br/>
               Empresarial.</p>
          </div>
     
          <div id="contenedor" class="place-items-center px-10">
              <PictureWebp className="object-contain" filename="valores" description="responsabilidad social unilimpio"/>
              <h2>NUESTROS VALORES</h2>
              <p>Fe
              <br/>
                
                Compromiso 
                <br/>
                Honestidad 
                <br/>
                Solidaridad 
                <br/>
                Respeto 
                <br/>
                Excelencia </p>
          </div>
     
          <div id="contenedor" class="place-items-center px-10">
              <PictureWebp className="object-contain" filename="factores-de-exito" description="responsabilidad social unilimpio"/>
              <h2>FACTORES DE ÉXITO</h2>
              <p>Enfoque al cliente 
                 <br/>
                 Trabajo en equipo 
                 <br/>
                 Mejora Continua e Innovación
                 <br/>
                 Comunicación 
                 <br/>
                 Profesionalismo
                 <br/>
                 Empoderamiento </p>
          </div>
     
        
    </div>








<div className="bg-white bg-opacity-50 rounded-lg px-6 pt-8 pb-6 ml-30 mb-20">

  
          <h1 className="text-4xl font-bold mt-10 text-center text-blue-700 ">Nuestras Marcas</h1>
        </div>





       


        <div class="grid grid-cols-5 gap-4">
  <div><PictureWebp className="object-contain ml-8 align="right filename="niña-con-gel" description="responsabilidad social unilimpio"/></div>
  
  <div> <PictureWebp className="object-contain" filename="niña-con-gel" description="responsabilidad social unilimpio"/></div>
  <div><PictureWebp className="object-contain align="right filename="niña-con-gel" description="responsabilidad social unilimpio"/></div>
  <div><PictureWebp className="object-contain align="right filename="niña-con-gel" description="responsabilidad social unilimpio"/></div>
  <div><PictureWebp className="object-contain align="right filename="niña-con-gel" description="responsabilidad social unilimpio"/></div>
  <div><PictureWebp className="object-contain ml-16 align="right filename="niña-con-gel" description="responsabilidad social unilimpio"/></div>
  <div><PictureWebp className="object-contain align="right filename="niña-con-gel" description="responsabilidad social unilimpio"/></div>
  <div><PictureWebp className="object-contain align="right filename="niña-con-gel" description="responsabilidad social unilimpio"/></div>
  <div><PictureWebp className="object-contain align="right filename="niña-con-gel" description="responsabilidad social unilimpio"/></div>
</div>























       
    



   

    

    

  

<NewsletterSub/>
    
    
  </Layout>
);
