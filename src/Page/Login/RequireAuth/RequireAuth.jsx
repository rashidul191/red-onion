import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, Navigate } from "react-router-dom";
import auth from "../../../firebase.init";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    console.log(user)
  let location = useLocation();

  if(loading){
    return <p>loading...</p>
  }

  if(!user){
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
 
  return children;
};

export default RequireAuth;
