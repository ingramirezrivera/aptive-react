import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import './HomeStyles.css';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Faq from './Faq';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
    </div>
  )
}

export default Home;
