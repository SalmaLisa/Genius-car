import React from 'react';
import About from '../components/About/About';
import Banner from '../components/Banner/Banner';
import Features from '../components/Features/Features';
import Products from '../components/Products/Products';
import Services from '../components/Services/ServiceCard';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Products></Products>
      <Features></Features>
    </div>
  );
};

export default Home;