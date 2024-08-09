import React from 'react'
import Hero from '../components/Hero';
import transition from '../Utilities/transition';

const Home = () => {
    return (
        <div>
            <Hero />
        </div>
    )
}

export default transition(Home);
