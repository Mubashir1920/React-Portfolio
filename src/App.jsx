import React from 'react'
import Header from './components/header';
import { Route, Routes, useLocation } from 'react-router'
import Footer from './components/Footer';
import TechStack from './Pages/TechStack';
import Home from './Pages/Home';
import { AnimatePresence } from 'framer-motion';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import About from './Pages/About';
function App() {


  const location = useLocation()
  return (
    <div >
      <Header />
      <AnimatePresence mode='wait' >
        <Routes key={location.pathname} location={location} >
          <Route exact path='/' element={<Home />} />
          <Route exact path='/TechStack' element={<TechStack />} />
          <Route exact path='/Projects' element={<Projects />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/Contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />

    </div>
  );
}

export default App;
