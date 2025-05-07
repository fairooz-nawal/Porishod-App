import React from 'react';
import Banner from '../Components/Banner/Banner';
import Partner from '../Components/Partner';
import About from '../Components/About';
import Services from '../Components/Services';
import Hightlight from '../Components/hightlight';
import Subscribe from '../Components/Subscribe';
import { ToastContainer, toast } from 'react-toastify';
const Home = () => {
    return (
        <div>
            <ToastContainer />
            <Banner></Banner>
            <Partner></Partner>
            <About></About>
            <Services></Services>
            <Hightlight></Hightlight>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;