
import './Signup.css'
import { useEffect } from "react";
import { useState } from "react";
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';





export const Signup = () =>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')


    const navigate = useNavigate();

    
    const signup = async(e) =>{
      e.preventDefault();

      const data = {name,email,phone,password};
      const url = 'http://www.ekart.test/api/signup'
      
      const myResponse = await fetch(url, {
        "method": "POST",
        "body": JSON.stringify(data),
        "headers": {
          'Content-Type': 'application/json'
        }
      })
      const myUsableResponse = await myResponse.json()
      // console.log(myUsableResponse)
      localStorage.setItem('user-info',JSON.stringify(myUsableResponse))
       navigate('/login');
      
      
    }

    
    
    
    

    return(
        
     <>
      
        <Navbar />

        <div className="signup-form">

          <div className='signup-form_content'>
            <h2>Looks like you are new here!</h2>
            <h5>Signup to get started</h5>
            <button><Link to="/login">existing user?Login</Link></button>
          </div>

            <form action="" method='post' className='form'>

         
           <div className='card'>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} name='name' className='input'/>
           </div>
            
            <div className='card'>
              <label htmlFor="">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' className='input'/>
            </div>

            <div className='card'>
               <label htmlFor="">Phone</label>
               <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} name='phone' className='input'/>
            </div>

            <div className='card'>
              <label htmlFor="">Password</label>
              <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} name='password' className='input'/>
            </div>

            
              <button className='signupbutton' onClick={signup}>Signup</button>
            
          
            </form>

            
    
        </div>
      </>  
    )
}