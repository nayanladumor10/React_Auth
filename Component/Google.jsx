import React from 'react'
import { useState } from 'react'
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { app } from './Firebase';
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const auth = getAuth();

export default function Google() {
    const [name,setname] = useState('')
    const [url,seturl] = useState("");
    const provider = new GoogleAuthProvider();

    function register(e){
        e.preventDefault();
        signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          console.log(user);
          setname(user.displayName);
          seturl(user.photoURL)
          
        }).catch((error) => {
         
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);

        });
    } 




  return (
    <div>
            <h1>Sign In</h1>
            <button onClick={register}>SignIn</button> <br />
            <span>{name}</span>
        </div>
  )
}
