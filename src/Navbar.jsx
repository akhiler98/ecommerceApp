import { Link } from 'react-router-dom';
import './Navbar.css'
export const Navbar = () =>{

    return(
        <div className="navbar">
            <p>FLIPKART</p>
            <input type="text" className='navbar_search' placeholder='search for products'/>
            <button className='navbar_btn'><Link to="/signup">signup</Link> </button>
            <a href="" className='navbar_link'>Become a Seller</a>
            <a href="" className='navbar_link'>More </a>
            <a href="" className='navbar_link'>Cart</a>
           
        </div>
        
    )
}