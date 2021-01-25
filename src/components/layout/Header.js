import React from 'react';
import Navbar from "../Navbar/Navbar";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../SEO/seo";


export default function Header() {

  return(
    <header className="sticky top-0 bg-white shadow-md">
      <SEO />
      <Navbar />
    </header>
  )
}