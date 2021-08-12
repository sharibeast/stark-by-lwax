import Head from 'next/head';
import React from 'react';
import Nav from '../nav/nav';
import Footer from '../footer/footer';

export default function layout({ children }) {
  return (
    <>
      <header>
        <Nav />
      </header>
      {children}
      <Footer />
    </>
  );
}
