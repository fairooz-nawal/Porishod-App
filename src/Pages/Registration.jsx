import React from 'react';

const Registration = () => {

    const handleSubmitForm = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.Photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const newUser = {name,photo,email,password};
        console.log(newUser);
    }
    return (
        <div className='bg-secondary'>
            <div className="hero bg-secondary min-h-screen ">
                <div className="card text-gray-200 border-2 border-primary  space-y-4 w-full max-w-sm shrink-0 shadow-2xl p-5 ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmitForm}>
                            <label className="label text-lg ">Name</label>
                            <input type="text" className="input text-black" name="name" placeholder="Enter Your Full name" />
                            <label className="label text-lg ">Photo URL</label>
                            <input type="text" className="input text-black" name="Photo" placeholder="Enter Your Photo" />
                            <label className="label text-lg ">Email</label>
                            <input type="email" className="input text-black" name="email" placeholder="Enter YourEmail" />
                            <label className="label text-lg ">Password</label>
                            <input type="password" className="input text-black" name="password" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-primary hover:bg-amber-500 text-white mt-4">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;