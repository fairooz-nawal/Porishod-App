import React, { useContext, useState } from 'react';
import { ContextAPI } from '../Components/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { Link,  useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    const { signInUser, signUpWithGoogle } = useContext(ContextAPI);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location)
    const handleSubmitFormLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        setError('');
        if (passwordRegex.test(password)) {
            //creating new User
            signInUser(email, password)
                .then((result) => {
                    const user = result.user;
                    // console.log(user);
                    toast.success('Login Done Successfully!!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    navigate(location?.state || '/');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error("You typed the wrong Email or Password", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    navigate('/auth/login');
                });
        }
        else {
            setError('Wrong PassWord');
        }


    }

    const handleGoogleSignIn = () => {
        signUpWithGoogle()
            .then((result) => {
                const user = result.user;
                // console.log(user);
                toast.success('Login Done Successfully!!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate(location?.state || '/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error("You typed the wrong Email or Password", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate('/auth/login');
            });
    }

    const registrationLocation = () => {
        navigate('/auth/register', { state: location.state });
    }
    return (
        <div className='bg-secondary'>
            <ToastContainer />
            <div className="hero bg-secondary min-h-screen ">
                <div className="card text-gray-200 border-2 border-primary  space-y-4 w-full max-w-sm shrink-0 shadow-2xl my-[200px] md:my-[100px] lg:my-[100px] p-5 ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmitFormLogin}>
                            <label className="label text-lg ">Email</label>
                            <input type="email" className="input text-black" name="email" placeholder="Enter YourEmail" />
                            <label className="label text-lg ">Password</label>
                            <input type="password" className="input text-black" name="password" placeholder="Password" /><br /><br />
                            <Link>Forgot password?</Link><br />
                            <div>Haven't registered yet? <button onClick={registrationLocation} className='btn bg-primary text-white font-semibold p-5' to="/auth/register">Register Now</button></div>
                            <button className="btn bg-primary hover:bg-amber-500 text-white mt-4">Login</button><br />
                            <button onClick={handleGoogleSignIn} className="btn bg-white hover:bg-amber-500 text-gray-700 mt-4"><FcGoogle></FcGoogle> Sign in with Google </button>
                        </form>
                    </div>

                    {error && <p className='text-red-500 text bold'>{error}</p>}
                </div>
            </div>
            <hr className='border-1 border-gray-800' />
        </div>
    );
};

export default Login;