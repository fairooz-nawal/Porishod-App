import React, { useContext } from 'react';
import { ContextAPI } from '../Components/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import {  useLocation, useNavigate } from 'react-router';

const UpdateUser = () => {
    const { updateUser,user,setUser} = useContext(ContextAPI);
        const navigate = useNavigate();
        const location = useLocation();
        const handleSubmitForm = (e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const photo = e.target.Photo.value;

            updateUser({displayName: name, photoURL: photo})
             .then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo});
                  })
                  .catch((error) => {
                    // console.log(error);
                    setUser(user);
                  });
            toast.success('Profile Updated Successfully!!', {
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
        }
    
    return (
       <div className='bg-secondary'> 
               <ToastContainer />
                   <div className="hero bg-secondary min-h-screen ">
                       <div className="card text-gray-200 border-2 border-primary  space-y-4 w-full max-w-sm shrink-0 shadow-2xl my-[200px] md:my-[100px] lg:my-[100px] p-5 ">
                           <div className="text-center lg:text-left">
                               <h1 className="text-5xl font-bold">Update Profile now!</h1>
                           </div>
                           <div className="card-body">
                               <form onSubmit={handleSubmitForm}>
                                   <label className="label text-lg ">Name</label>
                                   <input type="text" className="input text-black" name="name" defaultValue={user.displayName} placeholder="Enter Your Full name" />
                                   <label className="label text-lg ">Photo URL</label>
                                   <input type="text" className="input text-black" name="Photo" defaultValue={user.photoURL} placeholder="Enter Your Photo" />
                                   
                                   <button className="btn bg-primary hover:bg-amber-500 text-white mt-4">Update Profile</button><br />        
                               </form>
                           </div>
       
                       </div>
                   </div>
                   <hr  className='border-1 border-gray-800'/>
               </div>
    );
};

export default UpdateUser;