import React from 'react';
import bg from '../assets/bg-2.jpg'
const Subscribe = () => {
    return (
        <div className='max-w-full md:max-w-5xl lg:max-w-7xl mx-auto p-4 text-center'>
            <div className="hero  min-h-screen rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse gap-0">
                    <div className="text-center lg:text-left">
                        <img src={bg} alt="" />
                    </div>
                    <div className=" text-white w-full max-w-xl shrink-0 shadow-2xl bg-secondary">
                        <div className="card-body p-10">
                            <h1 className="text-3xl lg:text-5xl font-bold">Subcribe to Us</h1>
                            <fieldset className="fieldset">
                                <label className="text-start text-lg">Name</label>
                                <input type="text" className="input text-gray-800 font-semibold" placeholder="text" />
                                <label className="text-start text-lg ">Password</label>
                                <input type="password" className="input text-gray-800 font-semibold" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-primary mt-4">Login</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;