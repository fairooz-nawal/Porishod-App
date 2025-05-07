import React from 'react';
import { Slide } from "react-awesome-reveal";
import CountUp from 'react-countup';
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoHappyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa6";
const Hightlight = () => {
    return (
        <div className='max-w-full md:max-w-5xl lg:max-w-7xl mx-auto p-4 text-center py-[50px] md:py-[100px] lg:py-[100px] bg-secondary mb-10 space-y-4'>
            <p className='text-yellow-600 font-semibold text-2xl'>Highlights</p>
            <h1 className='text-white text-2xl md:text-3xl lg:text-3xl font-bold'>Our Services and Happy customers</h1><br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-4 shadow-2xl rounded-2xl bg-primary text-gray-100 p-4 hover:bg-white hover:text-primary flex-row items-center lg:p-10">
                    <div className="w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center mx-auto"><RiCustomerServiceFill className='text-7xl text-primary ' /></div>
                    <p className=' text-2xl font-bold '>Total Sevices</p>
                    <div className="space-y-4">
                        <h1 className=' text-2xl md:text-3xl lg:text-5xl font-bold '><CountUp
                            start={0}
                            end={108}
                            duration={5.75}
                            onEnd={() => console.log('Ended! 👏')}
                            onStart={() => console.log('Started! 💨')}
                        >
                            {({ countUpRef, start }) => (
                                <div>
                                    <span ref={countUpRef} />
                                    <button onClick={start}>+</button>
                                </div>
                            )}
                        </CountUp></h1>
                    </div>
                </div>
                <div className="space-y-4 shadow-2xl rounded-2xl bg-primary text-gray-100  p-4 hover:bg-white hover:text-primary lg:p-10">
                    <div className="w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center mx-auto"><IoHappyOutline className='text-5xl text-primary font-bold' /></div>
                    <p className=' text-2xl font-bold '>Happy Customers</p>
                    <div className="space-y-4">
                        <h1 className=' text-2xl md:text-3xl lg:text-5xl font-bold'><CountUp
                            start={0}
                            end={20000}
                            duration={2.75}
                            onEnd={() => console.log('Ended! 👏')}
                            onStart={() => console.log('Started! 💨')}
                        >
                            {({ countUpRef, start }) => (
                                <div>
                                    <span ref={countUpRef} />
                                    <button onClick={start}>+</button>
                                </div>
                            )}
                        </CountUp></h1>
                    </div>
                </div>
                <div className="space-y-4 shadow-2xl rounded-2xl bg-primary text-gray-100  p-4 hover:bg-white hover:text-primary lg:p-10">
                    <div className="w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center mx-auto"><FaRegUser className='text-5xl text-primary' /></div>
                    <p className=' text-2xl font-bold '>Total Employees</p>
                    <div className="space-y-4">
                        <h1 className=' text-2xl md:text-3xl lg:text-5xl font-bold'><CountUp
                            start={0}
                            end={500}
                            duration={4.75}
                            onEnd={() => console.log('Ended! 👏')}
                            onStart={() => console.log('Started! 💨')}
                        >
                            {({ countUpRef, start }) => (
                                <div>
                                    <span ref={countUpRef} />
                                    <button onClick={start}>+</button>
                                </div>
                            )}
                        </CountUp></h1>
                    </div>
                </div>
                <div className="space-y-4 shadow-2xl rounded-2xl bg-primary text-gray-100  p-4 hover:bg-white hover:text-primary lg:p-10">
                    <div className="w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center mx-auto"><FaRegCompass className='text-5xl text-primary' /></div>
                    <p className=' text-2xl font-bold '>Total Partners</p>
                    <div className="space-y-4">
                        <h1 className=' text-2xl md:text-3xl lg:text-5xl font-bold'><CountUp
                            start={0}
                            end={100}
                            duration={5.75}
                            onEnd={() => console.log('Ended! 👏')}
                            onStart={() => console.log('Started! 💨')}
                        >
                            {({ countUpRef, start }) => (
                                <div>
                                    <span ref={countUpRef} />
                                    <button onClick={start}>+</button>
                                </div>
                            )}
                        </CountUp></h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hightlight;