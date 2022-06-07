import React from 'react';
import {Navigate} from 'react-router-dom'

export default function ProtectedRoute({
    user,
    redirectPath = '/',
    children,
  }:{user:boolean,redirectPath?:string,children:any}) {
    
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };