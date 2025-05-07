import React from 'react';
import { Slide } from "react-awesome-reveal";
import { FaAward } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineSavings } from "react-icons/md";
const Services = () => {
    return (
        <div className='max-w-full md:max-w-5xl lg:max-w-7xl mx-auto p-4 text-center py-[50px] md:py-[100px] lg:py-[100px]'>
            <div className="w-full md:w-3/4 lg:w-3/4 mx-auto p-5 space-y-4">
                <p className='text-orange-600 font-semibold text-2xl'>Our Pwerful Feature</p>
                <h1 className='text-gray-800 text-2xl md:text-3xl lg:text-5xl font-bold'>Services We provide</h1>
                <p className='text-gray-600'>Our app offers a comprehensive range of services to cater to your utility bill payments and financial needs.Pay your electricity bills (DESCO, NESCO), water bills (WASA), and other utility bills with ease. Additionally, you can also recharge your mobile phone, pay your internet bills, and settle your credit card dues.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 md:p-10 lg:p-10 ">
                <Slide direction="left">
                    <div className="space-y-4 shadow-2xl border-2 border-gray-300 text-gray-800 p-4 hover:bg-red-500 hover:text-white flex-row items-center lg:p-10">
                        <div className="w-[50px] h-[50px] bg-red-500 rounded-full flex items-center justify-center mx-auto"><FaAward className='text-2xl text-white ' /></div>
                        <p>Award Winner</p>
                        <div className="space-y-4">
                            <h1 className=' text-lg md:text-xl lg:text-xl font-bold '>DESCO <br /> Your Trusted Electricity Partner</h1>
                        </div>
                    </div>
                    <div className="space-y-4 shadow-2xl border-2 border-gray-300 text-gray-800  p-4 hover:bg-blue-500 hover:text-white lg:p-10">
                        <div className="w-[50px] h-[50px] bg-blue-500 rounded-full flex items-center justify-center mx-auto"><RiCustomerServiceFill className='text-2xl text-white text-center' /></div>
                        <p>24/7 service</p>
                        <div className="space-y-4">
                            <h1 className=' text-lg md:text-xl lg:text-xl font-bold'>NESCO <br /> Empowering Your Home & Business</h1>
                        </div>
                    </div>
                </Slide>
                <Slide direction="right">
                    <div className="space-y-4 shadow-2xl border-2 border-gray-300 text-gray-800  p-4 hover:bg-green-500 hover:text-white lg:p-10">
                        <div className="w-[50px] h-[50px] bg-green-500 rounded-full flex items-center justify-center mx-auto"><VscWorkspaceTrusted className='text-2xl text-white text-center' /> </div>
                        <p>100% Trusted</p>
                        <div className="space-y-4">
                            <h1 className=' text-lg md:text-xl lg:text-xl font-bold'>WASA <br /> Your Water Supply Partner</h1>
                        </div>
                    </div>
                    <div className="space-y-4 shadow-2xl border-2 border-gray-300 text-gray-800 p-4 hover:bg-yellow-500 hover:text-white lg:p-10">
                        <div className="w-[50px] h-[50px] bg-yellow-500 rounded-full flex items-center justify-center mx-auto"><MdOutlineSavings  className='text-2xl text-white ' /></div>
                        <p>Time -Saving</p>
                        <div className="space-y-4">
                            <h1 className=' text-lg md:text-xl lg:text-xl font-bold'>DPDC <br /> Powering Your Life and business</h1>
                        </div>
                    </div>
                </Slide>


            </div>
        </div>
    );
};

export default Services;