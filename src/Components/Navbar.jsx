import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo2.jpg'
import { useContext } from 'react';
import { ContextAPI } from './AuthProvider';
const Navbar = () => {
    
    const { user} = useContext(ContextAPI);
    
    const link = <>
        <li><NavLink className={({ isActive }) =>
            isActive ? "bg-primary text-white hover:bg-yellow-400 ml-2 font-semibold" : "text-gray-300 hover:bg-yellow-600 hover:text-white ml-2 font-semibold"
        } to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "bg-primary text-gray-300 hover:bg-yellow-400 ml-2 font-semibold" : "text-gray-300 hover:bg-yellow-600 hover:text-white ml-2 font-semibold"
        } to="/bill">Bill</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "bg-primary text-gray-300 hover:bg-yellow-400 ml-2 font-semibold" : "text-gray-300 hover:bg-yellow-600 hover:text-white ml-2 font-semibold"
        } to="/profile">My Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-secondary text-accent shadow-sm fixed top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <div className="flex gap-2 items-center border-2 border-primary rounded-2xl p-2"> 
                    <img className='w-[40px] h-[40px] hidden md:block lg:block object-cover rounded-full overflow-hidden' src={logo} alt="" /> 
                    <span className='font-bold text-3xl md:text-2xl lg:text-2xl text-gray-300'>PORISHOD</span>
                </div>

                

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                { user ? 
                    <>
                        <button><img className='w-[60px] h-[60px] object-cover rounded-full overflow-hidden' src={user?.photoURL} alt="" /></button>
                    </>
                    :
                    <>
                        <Link className="btn btn-outline btn-warning hover:bg-primary " to="/auth/login">Login</Link>
                        <Link className="btn btn-outline btn-warning hover:bg-primary " to="/auth/register">Registration</Link>
                    </>
                    } 
                </div>
            </div>
        </div>
    );
};

export default Navbar;