import React from 'react';
import card1 from "../assets/card-1.jpg";
import card2 from "../assets/card-2.jpg";
import card3 from "../assets/card-3.png";
import card4 from "../assets/card-4.png";
import { Slide } from "react-awesome-reveal";
const Partner = () => {
    return (
        <div className='max-w-full md:max-w-5xl lg:max-w-7xl mx-auto p-4 text-center py-[50px] md:py-[100px] lg:py-[100px]'>
            <div className="w-full md:w-3/4 lg:w-3/4 mx-auto p-5 space-y-4">
                <p className='text-orange-600 font-semibold text-2xl'>Our Partners</p>
                <h1 className='text-gray-800 text-2xl md:text-3xl lg:text-5xl font-bold'>We Work With</h1>
                <p className='text-gray-600'>Our app is your one-stop solution for all your utility bill payments and financial needs in Bangladesh. We have partnered with leading utility companies such as DESCO, NESCO, and WASA, as well as top banks and financial institutions, to bring you a seamless and convenient payment experience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 md:p-10 lg:p-10 ">
                <Slide direction="left">
                    <div className="space-y-4 shadow-2xl border-2 border-gray-300 text-gray-800 rounded-2xl p-4 hover:bg-blue-500 hover:text-white">
                        <img className='w-full md:w-[300px] lg:w-[300px] md:h-[170px] lg:h-[170px] rounded-2xl border-2 border-gray-400' src={card1} alt="" />
                        <div className="h-[300px] space-y-4">
                            <h1 className=' text-lg md:text-xl lg:text-xl font-bold '>DESCO - Your Trusted Electricity Partner</h1>
                            <p className=''>(DESCO) is one of the largest electricity distribution companies in Bangladesh. With our app, you can easily pay your DESCO electricity bills online.</p>
                        </div>

                    </div>
                    <div className="space-y-4 shadow-2xl border-2 border-gray-300 text-gray-800 rounded-2xl p-4 hover:bg-yellow-300 hover:text-white">
                        <img className='w-full md:w-[300px] lg:w-[300px] md:h-[170px] lg:h-[170px] rounded-2xl border-2 border-gray-400' src={card2} alt="" />
                        <div className="h-[300px] space-y-4">
                            <h1 className=' text-lg md:text-xl lg:text-xl font-bold overflow-y-scroll'>NESCO - Empowering Your Home & Business</h1>
                            <p className=''>We have partnered with NESCO to provide you with convenient and secure electricity bill payment options. Our app allows you to pay your NESCO electricity bills quickly and easily</p>
                        </div>
                    </div>
                </Slide>
                <Slide direction="right">
                    <div className="space-y-4 shadow-2xl border-2 border-gray-300 text-gray-800 rounded-2xl p-4 hover:bg-green-500 hover:text-white">
                        <img className='w-full md:w-[300px] lg:w-[300px] md:h-[170px] lg:h-[170px] rounded-2xl border-2 border-gray-400' src={card3} alt="" />
                        <div className="h-[300px] space-y-4">
                            <h1 className=' text-lg md:text-xl lg:text-xl font-bold'>WASA - Your Water Supply Partner</h1>
                            <p className=''>Dhaka Water Supply and Sewerage Authority (WASA) is responsible for providing clean water and sanitation services to the people of Dhaka.With our app, you can pay your WASA water bills online </p>
                        </div>
                    </div>
                    <div className="space-y-4 shadow-2xl border-2 border-gray-300 text-gray-800 rounded-2xl p-4 hover:bg-purple-500 hover:text-white">
                        <img className='w-full md:w-[300px] lg:w-[300px] md:h-[170px] lg:h-[170px] rounded-2xl border-2 border-gray-400' src={card4} alt="" />
                        <div className="h-[300px] space-y-4">
                            <h1 className=' text-lg md:text-xl lg:text-xl font-bold'>DPDC - Powering Your Life</h1>
                            <p className=''>(DPDC) is a leading electricity distribution company in Bangladesh, serving the Dhaka metropolitan area. Our partnership with DPDC ensures that you have a seamless and reliable electricity bill payment experience. </p>
                        </div>
                    </div>
                </Slide>


            </div>
        </div>
    );
};

export default Partner;