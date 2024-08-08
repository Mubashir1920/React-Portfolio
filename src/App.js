import React, { useEffect } from 'react'
import Header from './components/header';
import { Route, Routes } from 'react-router'
import Hero from './components/Hero';
import Footer from './components/Footer';
import { PacmanLoader } from 'react-spinners'


function App() {

  const Loader =  () => {

    const body = document.body
    body.addEventListener('DomContentLoaded', () => {
      <PacmanLoader color="#420cc5" />
    })

  }

  useEffect(()=>{
    Loader();
  },[Loader])


  return (
    <div >
      <Header />
      <Hero />
      <Footer />

    </div>
  );
}

export default App;
