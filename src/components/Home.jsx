import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import './HomeStyles.css';
import Pricing from './Pricing';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Pricing />
        <Testimonials />
    </div>
  )
}

export default Home;
