import React from 'react';
import Banner from '../Components/Banner/Banner';
import Partner from '../Components/Partner';
import About from '../Components/About';
import Services from '../Components/Services';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partner></Partner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;