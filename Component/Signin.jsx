import React from 'react'
import { useState } from 'react'
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { app } from './Firebase';


const auth = getAuth(app);

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function register() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('success')
            })
            .catch((error) => {
                alert('incorect username or password')
            });
    }

    return (
        <div>
            <h1>Sign In</h1>
            <input type="text" value={email} name='email' onChange={(e) => { setEmail(e.target.value) }} />
            <input type="text" value={password} name='password' onChange={(e) => { setPassword(e.target.value) }} />
            <button onClick={register}>SignIn</button>
        </div>
    )
}