import React, { useState } from 'react'

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const signUp = (event) => {
        event.prevenDefault();
        console.log("Sign Up!");
    }

  return (
    <div>
        <form action="">
            <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder='Confirm your Password' onChange={(e) => setConfirmPassword(e.target.value)} />
            <button onClick={signUp}>Sign Up</button>
        </form>
    </div>
  )
}
