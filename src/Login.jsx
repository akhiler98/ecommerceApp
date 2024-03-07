
import './Signup.css'
import { useEffect } from "react";
import { useState } from "react";
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export const Login =() => {

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkemail, setCheckemail] = useState('')
    const [checkpassword, setCheckpassword] = useState('')

    const navigate = useNavigate();

    const login = async(e) =>{
        e.preventDefault();
        const data = {email,password};
  
        const url = 'http://www.ekart.test/api/login'
        
        const myResponse = await fetch(url, {
          "method": "POST",
          "body": JSON.stringify(data),
          "headers": {
            'Content-Type': 'application/json'
          }
        })
        const myUsableResponse = await myResponse.json()
        localStorage.setItem('user-info',JSON.stringify(myUsableResponse))

       if(myUsableResponse.status == 200){
        navigate('/')
       }

       if(myUsableResponse.status == 401){
        setCheckemail('email is not valid')
       }else{
        setCheckemail('')
       }
       
       if(myUsableResponse.status == 400){
        setCheckpassword('password is not correct')
       }else{
        setCheckpassword('')
       }
        
        
        // console.log(myUsableResponse)
         
        
      }
   




  return (
    <>
    <Navbar />
    
         <div className="signup-form">

<div className='signup-form_content'>
  <h2>Already have an account</h2>
  <h5>Login to get access to your orders and wishlist</h5>
  <button><Link to="/signup">New to here!create account</Link></button>
</div>

  <form action="" method='post' className='form'>


 
 
  <>
  <div className='card'>
    <label htmlFor="">Email</label>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' className='input'/>
    <p>{checkemail}</p>
  </div>

 

  <div className='card'>
    <label htmlFor="">Password</label>
    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} name='password' className='input'/>
    <p>{checkpassword}</p>
  </div>

  </>

 
    <button className='signupbutton' onClick={login}>Login</button>
  

  </form>

  

</div>
    </>
  )
}

