import React from 'react';
import Header from './header'
// import Footer from '../components/footer'
import { Outlet } from 'react-router-dom';

// import '../App.css';

const LayoutLanding = () => {
  return (
    <>
      <Header />
      <Outlet/>
      {/* <Footer /> */}
    </>
  )
}

export default LayoutLanding
