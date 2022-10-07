import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import './HomeStyles.css';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Faq from './Faq';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home;
