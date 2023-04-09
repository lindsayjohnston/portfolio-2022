import React from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import SignIn from "../SignIn/SignIn";


export default function ProtectedRoute (props){
   //PROPS
      //authenticatedUser- bool
      //authRoute - string

   const location = useLocation()



   if(!props.authenticatedUser){
      return <Navigate to={props.authRoute + location.pathname} replace/>
   }

   return props.children
}