import React ,{useState}from "react";

export const Login=(props)=>{
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
    <div className="auth-form-container">
        <h2>Log In</h2>
         <form className="login-form">
            <label for="email">Email</label>
            <input value={email} type="email" placeholder="youremail@email.com" id="email" name="email"/>
            <label for="password">Password</label>
            <input value={pass} type="password" placeholder="*******" id="password" name="password"></input>
            <button>Log In</button>

         </form>
         <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Don't have an account?Register Here</button>
    </div>
    )
}