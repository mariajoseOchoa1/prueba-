import React from 'react';
import Mailchimp from '../Mailchimp';
import { Link } from "gatsby";
import SocialIcons from "../SocialIcons";
import LogoUni from "../../svg/LogoUni";


const Footer = () => (
  <footer className="text-white body-font bg-primary">
  
  
  <div className="container px-5 py-24 mx-auto z-0">
    <div className="flex flex-wrap md:text-left text-center">
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <div className="w-32 md:w-36 mx-auto mb-8"><LogoUni/></div>
        
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-left">
        <h3 className="title-font font-medium tracking-widest text-sm mb-3">CONTÁCTENOS</h3>
        <nav className="list-none mb-10">
          <li className="text-white">
            De los eucaliptos E1-140<br/>
            y psje. Juncos<br/>
            170307<br/>
            Quito, Ecuador
          </li>
          <li className="text-white">
            <span className="text-primary-xlighter">Para pedidos y servicio al cliente:</span><br/>
            En Ecuador, llámenos sin costo: <br/>
            1800 UNILIM (864-546)<br/>
            ó Chatee con un operador:<br/>
            Whats-app: +593 99 7345385<br/>             
          </li>
          <li className="text-white">
          <span className="text-primary-xlighter">Horario de atención:</span><br/>
          Lun - Vie, 8:30 - 17:00 GMT -5:00.
          </li>
          <li className="text-white">
            Consultas, información, sugerencias: <Link to="contact">escríbanos</Link>.
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-secondary tracking-widest text-sm mb-3">SERVICIO AL CLIENTE</h2>
        <nav className="list-none mb-10">
          <li>
            <Link to="/distribuidores-autorizados" className="text-white hover:text-gray-400">Distribuidores autorizados</Link>
          </li>
          <li>
            <a href="https://unilimpio.app/ecommerce" target="_blank" className="text-white hover:text-gray-400">Portal B2B</a>
          </li>
          <li>
            <Link to="/politica-de-devolucion" className="text-white hover:text-gray-400">Política de devolución</Link>
          </li>
          <li>
            <Link to="/donde-esta-mi-pedido" className="text-white hover:text-gray-400">¿Donde está mi pedido?</Link>
          </li>
          <li>
          <a href="https://unilimpio.com/centro-de-ayuda/" className="text-white hover:text-gray-400">Centro de ayuda</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-secondary tracking-widest text-sm mb-3">PRODUCTOS</h2>
          <nav className="list-none mb-10">
            <li>
              <Link to="/productos/quimicos" className="text-white hover:text-gray-400">Productos Químicos</Link>
            </li>
            <li>
              <Link to="/productos/quimicos/amonio-cuaternario" className="text-white hover:text-gray-400"> Amonio cuaternario</Link>
            </li>
            <li>
            <Link to="/productos/higiene-de-manos/jabon-liquido" className="text-white hover:text-gray-400">Jabón Líquido de manos</Link>
            </li>
            <li>
            <Link to="/productos/higiene-de-manos/gel-antibacterial" className="text-white hover:text-gray-400">Gel Antibacterial</Link>
            </li>
            <li>
            <Link to="/productos/dispensadores" className="text-white hover:text-gray-400">Dispensadores</Link>
            </li>
          </nav>
        
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-secondary tracking-widest text-sm mb-3">ACERCA DE</h2>
        <nav className="list-none mb-10">
          <li>
           <Link to="/presentación" className="text-white hover:text-gray-400"> Presentación</Link>
          </li>
          <li>
           <Link to="/presentación#historia" className="text-white hover:text-gray-400"> Historia</Link>
          </li>
          <li>
           <Link to="/responsabilidad-social" className="text-white hover:text-gray-400"> Responsabilidad Social</Link>
          </li>
          <li>
           <Link to="/empleo" className="text-white hover:text-gray-400"> Trabajar en Unilimpio</Link>
          </li>
        </nav>
        <h3 className="title-font font-medium text-secondary tracking-widest text-sm mb-3">SÍGANOS EN REDES SOCIALES</h3>
        <SocialIcons color="#FFFFFF"/>
      </div>
      
    </div>
  </div>
  
  <div className="bg-gray-700">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
          © 1999-2021 Unilimpio - Todos los derechos reservados
          <br/>
          
                                
      </p>
      <span className="pl-4 text-gray-500 text-sm text-center sm:text-left">
        <Link to="terminos-y-condiciones">Términos y condiciones de uso</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="privacy-policy">Política de privacidad</Link>
      </span>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">UNILIMPIO - Mucho más en higiene Institucional</span>
    </div>
  </div>
</footer>
);

export default Footer;
