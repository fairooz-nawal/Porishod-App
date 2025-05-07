import React from 'react';
import bg from '../assets/bg.jpg'
import { FaAward } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { Slide } from "react-awesome-reveal";
const About = () => {
    return (
        <div className="max-w-full md:max-w-5xl lg:max-w-7xl mx-auto p-4 text-center">
            <div className='relative h-[600px] flex'>
                <div className="w-full md:w-full lg:w-1/2">
                    <Slide direction="up">
                        <img className='w-full h-[600px]' src={bg} alt="" />
                    </Slide>
                </div>
                <div className="absolute left-2 right-2 top-[6%]  md:top-[10%] md:left-[5%] lg:top-[5%] lg:left-[40%]  bg-secondary text-white p-5 md:p-10 lg:p-20">
                    <div className="w-full  md:w-full lg:w-2/3 space-y-4">
                        <Slide direction="up">
                            <p className='text-yellow-600 font-semibold text-2xl'>About Us</p>
                            <h1 className='text-white text-2xl md:text-3xl lg:text-3xl font-bold'>The Modern Way to Make Succesful Business</h1>
                            <div className="grid grid-cols-3 gap-5">
                                <div className="flex-row justify-center items-center space-x-2">
                                    <div className="w-[50px] h-[50px] bg-yellow-500 rounded-full flex items-center justify-center"><FaAward className='text-2xl text-white ' /></div>
                                    <p>Award Winner</p>
                                </div>
                                <div className="flex-row justify-center items-center space-x-2">
                                    <div className="w-[50px] h-[50px] bg-blue-500 rounded-full flex items-center justify-center"><RiCustomerServiceFill className='text-2xl text-white text-center' /></div>
                                    <p>24/7 service</p>
                                </div>
                                <div className="flex-row justify-center items-center space-x-2">
                                    <div className="w-[50px] h-[50px] bg-green-500 rounded-full flex items-center justify-center"><VscWorkspaceTrusted className='text-2xl text-white text-center' /> </div>
                                    <p>100% Trusted</p>
                                </div>
                            </div>
                            <p>BillPay BD is a mobile app in Bangladesh that allows users to pay various utility bills, including electricity, water, gas, internet, TV, and phone bills, in one place, making bill payments quick, easy, and hassle-free.</p>
                            <button className="btn bg-primary hover:bg-yellow-600 text-white">Read More</button>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;