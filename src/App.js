import React from 'react'
import Header from './Components/Header.js';
import LandingPage from './Components/LandingPage.js';
import Projects from './Components/Projects.js';
import About from './Components/About.js';
import Contacts from './Components/Contacts.js';
import Footer from './Components/Footer.js';


const App = () => {
  return (
    <div className='bg-slate-400'>
     
    <Header />
    <LandingPage />
    <Projects />
    <About />
    <Contacts />
    <Footer />
    
    </div>  )
}

export default App