import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { ContextAPI } from './AuthProvider';

const ProtectedRoute = ({children}) => {
    const {user} = useContext(ContextAPI);
    const location = useLocation();
  
    if(!user){
        return <Navigate state={location?.pathname} to="/auth/login"></Navigate>
    }
    
    return (
        <div>
            {children }
        </div>
    );
};

export default ProtectedRoute;