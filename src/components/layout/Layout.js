import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Navbar from '../Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main className="text-gray-700">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
