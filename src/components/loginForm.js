import React ,{useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import { Button, Space } from 'antd';
function LoginForm({login,error}) {
    const[details,setDetails]=useState({name:"",email:"",password:""});
    const submitHandle=(e)=>{
        e.preventDefault();
        login(details);
    }
  return (
    <form onSubmit={submitHandle}>
        <div className='form-inner'>
           <h2>Login</h2>
           <div className='form-group'>
            <label htmlFor='name'>Name:</label><br></br>
            <input  type='name' name='name' id='name' onChange={e => setDetails({...details,name:e.target.value})} value={details.name}></input>
           </div>
           <div className='form-group'>
            <label htmlFor='email'>Email:</label><br></br>
            <input type='email' name='email' id='email' onChange={e => setDetails({...details,email:e.target.value})} value={details.email}></input>
           </div>
           <div className='form-group'>
            <label htmlFor='PAssword'>Password:</label><br></br>
            <input type='password' name='Password' id='Password'onChange={e => setDetails({...details,password:e.target.value})} value={details.password}></input><br></br>
            <a href=''>ForgotPassword?</a><br></br><br></br>
            <input type='submit' value="Login"></input>          
           </div>  
           <div className='form-group'>
           <hr></hr>
           <Link to='/register' style={{color: "black",marginLeft:"85px"}}>---------Register Page🫰---------</Link><br></br><br></br>
            </div>        
        </div>
    </form>
    
  )
}
export default LoginForm