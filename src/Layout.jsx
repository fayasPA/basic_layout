import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './utils/ScrollToTop.js';

const Layout = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className="">
      <div className="flex-grow md:pb-0">

        <Navbar />

        <main >
          <Outlet />
        </main>

        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Layout;
