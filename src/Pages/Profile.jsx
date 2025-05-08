import React, { useContext } from 'react';
import { ContextAPI } from '../Components/AuthProvider';

const Profile = () => {
    const { user } = useContext(ContextAPI);
    return (
        <div className='max-w-full md:max-w-3xl lg:max-w-3xl mx-auto p-4 text-center my-[200px] bg-secondary' >
            <h1 className='text-gray-200 text-4xl font-bold my-10'>Profile</h1>
            <div className="grid grid-cols-1">
                <div className=" space-y-4">
                    <div className="relative">
                        <img className='w-[100px] md:w-[200px] lg:w-[200px] mx-auto rounded-2xl border-2 border-gray-400' src={user?.photoURL} alt="" />
                    </div>
                </div>
                <div className="text-start space-y-6">
                    <h1 className='text-gray-200 text-2xl font-bold'>Name: {user?.displayName}</h1>
                    <h1 className='text-gray-200 text-2xl '> Email: {user?.email}</h1>
                    <button  className="w-full btn btn-primary">Update Profile</button>
                </div>
            </div>

        </div>
    );
};

export default Profile;