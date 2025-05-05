import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo2.jpg'
const Navbar = () => {
    const link = <>
        <li><NavLink className={({ isActive }) =>
            isActive ? "bg-primary text-white hover:bg-red-600 ml-2 font-semibold" : "text-accent hover:bg-red-600 hover:text-white ml-2 font-semibold"
        } to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "bg-primary text-white hover:bg-red-600 ml-2 font-semibold" : "text-accent hover:bg-red-600 hover:text-white ml-2 font-semibold"
        } to="/bill">Bill</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "bg-primary text-white hover:bg-red-600 ml-2 font-semibold" : "text-accent hover:bg-red-600 hover:text-white ml-2 font-semibold"
        } to="/profile">My Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-white text-white shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <div className="flex gap-2 items-center bg-white "> <img className='w-[40px] h-[40px]  object-cover rounded-full overflow-hidden' src={logo} alt="" /> <span className='font-bold text-2xl text-accent'>PORISHOD</span></div>
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn bg-primary text-white hover:bg-yellow-600 rounded-full ml-2 font-semibold" to="/">Login</Link>
                <Link className="btn bg-primary text-white hover:bg-yellow-600 rounded-full ml-2 font-semibold" to="/">Registration</Link>
            </div>
        </div>
    );
};

export default Navbar;