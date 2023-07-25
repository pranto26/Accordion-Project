import React from 'react';
import faqs from "./data/faq.js"
import Accordion from './components/Accordion.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div>
      <Header/>
      <Accordion data={faqs}/>
      <Footer/>
      
    </div>
  );
};

export default App;