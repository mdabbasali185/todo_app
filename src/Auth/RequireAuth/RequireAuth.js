import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSpinner} from '@fortawesome/free-solid-svg-icons'

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    // loading  
    return <div className='text-center d-flex align-items-center text-danger justify-content-center' style={{height:'100vh'}}> <FontAwesomeIcon icon={faSpinner} className='fa-pulse fa-10x'></FontAwesomeIcon> </div>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequireAuth;