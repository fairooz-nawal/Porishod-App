import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { ContextAPI } from './AuthProvider';

const ProtectedRoute = ({children}) => {
    const {user} = useContext(ContextAPI);
    if(!user){
        return <Navigate to="/auth/login"></Navigate>
    }
    
    return (
        <div>
            {children}
        </div>
    );
};

export default ProtectedRoute;