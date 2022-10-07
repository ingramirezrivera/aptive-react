import React from "react";
import { Routes, Route } from 'react-router-dom';
import Pricing from "./routes/Pricing";
import Contact from "./routes/Contact";
import Faq from "./routes/Faq";
import Home from "./components/Home";
import Hero from "./routes/Hero";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
}

export default App;
