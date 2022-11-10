import React, { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../context/authContext/AuthContext';
const PrivateRouter = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthProvider)
    if (loading) {
        return <div className='d-flex justify-content-center'><Spinner animation="border" variant="primary" /></div>
    }
    if (user && user?.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRouter;