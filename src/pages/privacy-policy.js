import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'gatsby';


import PageData from "../data/privacy-policy-data";


export default () => (
    <Layout>
      
        <section id="" className="p-10">
            
                {PageData.map(data => (
                    <div className="container font-serif"> 
                        <h1 className="text-lg font-bold">{ data.title }</h1>
                        <p>{ data.content }</p>  
                    </div>
                ))}
        
            
        </section>
      
    </Layout>
  );