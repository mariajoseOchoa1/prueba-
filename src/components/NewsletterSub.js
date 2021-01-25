import React from 'react';
import { Link } from 'gatsby';
import PictureWebp from './PictureWebp';
import Button from '../components/Button';

const NewsletterSub = ({className}) => (
  <section id="newslettersub" className="my-12">

          <div className="container bg-gray-400 rounded-md shadow-md w-4/5 mx-auto">
          <div className="py-8 ">
            
              <div className="w-full mx-auto">
                <h2 className="text-primary text-center text-lg font-bold">Suscríbase a nuestra Newsletter</h2>
                <p className="text-primary text-center text-sm my-2">
                  Manténgase actualizado con artículos de interés, novedades de Unilimpio y nuestras últimas promociones.  
                  <br/>
                </p>
                <div className="w-1/2 mx-auto">
                  <input type="text" id="email" name="email" placeholder="E-mail" aria-label="E-mail"  className="w-1/2 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-gray-200 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  <button className="ml-4 text-white bg-primary-lighter border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded">Suscribirse</button>
                </div>
              </div>
                         
            
            
            
          </div>
        </div>

    </section>
);

export default NewsletterSub;
