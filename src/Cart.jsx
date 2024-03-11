import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import './Cart.css'
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

function Cart() {

    const[product,setProduct] = useState([])
    const[quantity,setQuantity] = useState(0)
    
    
 
 
     const fetchData = async () => {
        const userId = JSON.parse(localStorage.getItem("user-info")).user.id
         const response = await fetch('http://www.ekart.test/api/cart/'+userId);
         const data = await response.json();
         console.log(data);
         setProduct(data)  
     }


     const remove =async(product_id)=>{
        const user_id = JSON.parse(localStorage.getItem("user-info")).user.id
        const response = await fetch(`http://www.ekart.test/api/cart/delete/${product_id}/user/${user_id}`);
        const data = await response.json();
        console.log(data);
        fetchData()
     }

     useEffect(() => {
         fetchData()
     }, [])


     const handleChange=(e)=>{
        setQuantity(e.target.value)
     }

   

  return (
    <>
    <Navbar/>

    {
    localStorage.getItem("user-info")
    ?
    <div className="cart-container">
        <h3>Shopping Cart</h3>
        {
            product.map(item =>{
                return(
                    <>
                <div className="cart-card">
                    <div className="cart-image">
                        <img className="images" src={item.image} alt="" />
                    </div>
                    <div className="cart-content">
                        <h3>{item.name}</h3>
                        <p>color:{item.color}</p>
                        <p><strong>price:</strong>{item.price}</p>
                        <div>
                           <select value={item.quantity} onChange={handleChange}>
                
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                          </select>
                        </div>
                        <button onClick={()=>{remove(item.id)}}>Delete</button>
                    </div>
                </div>
                    </>
                )
            })
        }

        {
        product.length == 0 ?
        <div className="cartIsEmpty">your cart is empty <Link to="/">CLICK HERE TO CONTINUE SHOPPING</Link></div>
        :
        <div className="checkout">
            <p><strong>Total Items:</strong></p>
            <p><strong>Total price:</strong></p>
            <button className="checkout-button">Proceed To Checkout</button>
        </div>
      
        }

    </div>
    :
    <div className="emty-cart">
        <h3>Sign in to get access to your cart</h3>
        <div className="emty-cart_buttons">
        <button><Link to="/login">SIGN IN</Link></button>
        <button><Link to="/signup">SIGN UP</Link></button>
        </div>
       
    </div>
   }
    </>
  )
}

export default Cart