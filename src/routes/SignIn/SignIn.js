import React from "react";
import { Navigate, useParams } from "react-router-dom";
import './SignIn.css'


export default function SignIn(props) {
   //PROPS
      //authenticatedUser - boolean
      //setAuthenticatedUser - function
   const params = useParams()
   let redirectRoute =""
   Object.keys(params).map(param => redirectRoute += "/" +params[param] )


   const submitSignIn = (e) => {
      e.preventDefault()
      console.log("sign in!")
      const usernameInput = document.getElementById("username").value
      const passwordInput = document.getElementById("password").value
      handleSignIn(usernameInput, passwordInput)
   }

   async function handleSignIn(usernameInput, passwordInput) {
      await fetch('https://mongodb-test-ziu4.onrender.com/users', {
         method: "POST",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify({
            username: usernameInput,
            password: passwordInput
         })
      })
         .then((response) => response.json())
         .then((data) => {
            if (data.userAuthenticated) {
               props.setAuthenticatedUser(true)
               return <Navigate to={redirectRoute} replace />
            } else {
               props.setAuthenticatedUser(false)
            }
         })
         .catch(error => console.log(error))
   }


   if (!props.authenticatedUser) {
      return (
         <div className="sign-in">
            <h2>Sign In</h2>
            <form onSubmit={submitSignIn}>
               <div className="form-input">
                  <label htmlFor="username">Username:</label>
                  <input type="text" name="username" id="username" />
               </div>
               <div className="form-input">
                  <label htmlFor="password">Password:</label>
                  <input type="password" name="password" id="password" />
               </div>
               <button type="submit">Submit</button>
            </form>
         </div>
      )
   } else {
      return <Navigate to={"../" + redirectRoute} />
   }
}