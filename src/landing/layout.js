import React from 'react';
import Header from './header'
import { Outlet } from 'react-router-dom';
import FooterLanding from './footer';

// import '../App.css';

const LayoutLanding = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <FooterLanding />
    </>
  )
}

export default LayoutLanding
