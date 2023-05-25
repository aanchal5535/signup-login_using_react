import { useState } from "react";

export const Register=(props)=>{
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');  
    const [name,setName]=useState('')


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
  return(
    <div className="auth-form-container">
        <h2>Register </h2>
    <form className="register">
    <label for="email">Full Name</label>
       <input value={name} type="email" placeholder="Fullname" id="name" name="name"/>
       <label for="email">email</label>
       <input value={email} type="email" placeholder="youremail@email.com" id="email" name="email"/>
       <label for="password">Password</label>
       <input value={pass} type="password" placeholder="*******" id="password" name="password"></input>
       <button>Sign Up</button>

    </form>
    <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account?Login Here</button>
</div>
  )
}