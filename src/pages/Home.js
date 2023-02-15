import React,{useState} from 'react';

import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import LoginForm from '../components/loginForm';

export default function Home() {
    const adminUser={
        email:"naveenkarthickkr@gmail.com",
        password:"Naveen"
      }
      const register=(e)=>{
        console.log(e);
      }
      const[userEvent,setUser]=useState({name:" ",email:""});
      const[error,setError]=("");
      const login = (details)=>{
        console.log(details);
        if( details.email==adminUser.email && details.password==adminUser.password){
          console.log("Login");
          setUser({
            name:details.name,
            email:details.email
          });
        }else{
          console.log("DETAILS DOES NOT MATCH");
          alert("details does not match");
        }
      }
      
      const logout = ()=>{
        console.log("Logout");
        setUser({
          name:"",
          email:""
          });
    
      }
      return (
        <div className="App">
         {(userEvent.email !="")?(
            <div className='Welcome'>
               <h2>Welcome,<span>{userEvent.name}</span></h2>
               <button onClick={logout}>Logout</button>
            </div>
          ):(
          <LoginForm login={login} error={error}/>
          //<Register login={register} error={error}/>
        )}
        </div>
      );
}