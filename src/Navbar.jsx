import { Link } from 'react-router-dom';
import './Navbar.css'
import { useEffect, useState } from 'react';
import { Signup } from './Signup';
import { useNavigate } from 'react-router-dom';


export const Navbar = () =>{
    const[auth,setAuth] = useState('')
    const[profile,setProfile] = useState('')
    const navigate = useNavigate();

    const loginAuth = ()=>{

        if(localStorage.getItem("user-info")){
            if (JSON.parse(localStorage.getItem("user-info")).status == 200){
                setAuth('Logout')
                setProfile(JSON.parse(localStorage.getItem("user-info")).user.name)
            }else{
                setAuth('Signup')
            }      
        }else{
            setAuth('Signup')
            setProfile('')
        }
    }
   
    const logout = ()=>{
        localStorage.clear()
        loginAuth() //calling this function to reset setAuth ans stProfile to display signup and remove username from nav
        navigate('/');
       
    }
    

    useEffect(()=>{
        loginAuth()
      },[])

    return(
        <>
       
        <div className="navbar">
            <p>FLIPKART</p>
            <input type="text" className='navbar_search' placeholder='search for products'/>
            
            {auth == 'Signup' //checking which buuton has to display in navbar signup or logout
              ?
              <button className='navbar_btn'><Link to="/signup">Signup</Link> </button> 
              :
              <button className='navbar_btn' onClick={logout}>Logut</button>
            }
            
            <h4>{profile}</h4>
            <a href="" className='navbar_link'>Become a Seller</a>
            <a href="" className='navbar_link'>More </a>
            <Link to="/cart/:user-id">Cart</Link>
           
        </div>
        </>
        
    )
}