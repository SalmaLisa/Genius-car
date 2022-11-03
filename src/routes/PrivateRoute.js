import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({ children}) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return <div className='w-full min-h-screen flex justify-center items-center'>
      <progress className="progress w-20 "></progress>
    </div>
  }
  if (user?.uid) {
    return children
  }
  return <Navigate to='/login' state={{from:location}} replace />
};

export default PrivateRoute;