import React from 'react';
import { Outlet, Navigate    } from "react-router-dom";

const ProtectedRoutes = ({user}) => {
  console.log(user);
  return user.login ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes
