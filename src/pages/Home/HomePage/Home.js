import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner/Banner';
import Services from '../components/Services/Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default Home;