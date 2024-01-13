import React from 'react'
import Header from './../Header/Header';
import Nav from './../Nav/Nav';
import About from './../About/About';
import Experience from './../Experience/Experience';
import Testimonial from './../Testimonials/Testimonial';
import Contact from './../Contact/Contact';
import Footer from './../Footer/Footer';
import Services from './../Services/Services';
import Portfolio from './../Portfolio/Portfolio';
import './index.css';
const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  )
}

export default App