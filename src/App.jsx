import React from 'react'
import Header from './components/header';
import { Route, Routes, useLocation } from 'react-router'
import Footer from './components/Footer';
import TechStack from './Pages/TechStack';
import Home from './Pages/Home';
import { AnimatePresence } from 'framer-motion';

function App() {


  const location = useLocation()
  return (
    <div >
      <Header />
      <AnimatePresence mode='wait' >
        <Routes key={location.pathname} location={location} >
          <Route exact path='/' element={<Home />} />
          <Route exact path='/TechStack' element={<TechStack />} />
        </Routes>
      </AnimatePresence>
      <Footer />

    </div>
  );
}

export default App;
