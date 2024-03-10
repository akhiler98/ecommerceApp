import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './ProductDetail.css'
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";


function ProductDetail() {
   const[product,setProduct] = useState('')
   const[response,setResponse] = useState('')
   const [isVisible, setIsVisible] = useState(true);
   let {id} = useParams()
   


    const fetchData = async () => {
        const response = await fetch('http://www.ekart.test/api/samsung/'+id);
        const data = await response.json();
        console.log(data);
        setProduct(data)
        
    }
    useEffect(() => {
        fetchData()
    }, [])

    const addToCart= async ()=>{
        const userId = JSON.parse(localStorage.getItem("user-info")).user.id

        const productData = {'product-id': product.id,'user-id': userId,'price':product.price,'quantity': 1};
        const url = 'http://www.ekart.test/api/cart'
        
        const myResponse = await fetch(url, {
          "method": "POST",
          "body": JSON.stringify(productData),
          "headers": {
            'Content-Type': 'application/json'
          }
        })
        const myUsableResponse = await myResponse.json()
        setResponse(myUsableResponse)

        const timer = setTimeout(() => {
            setIsVisible(false);
          }, 4000);
          setIsVisible(true)
          return () => clearTimeout(timer);
  

    }

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       setIsVisible(false);
    //     }, 4000);

    //     return () => clearTimeout(timer);
    //   }, [response]);


  return (
    <>
    <Navbar/>
    {isVisible && (<div className="alert">{response} </div>)}
    <div className="mainContainer">
        <div className="container-image">
             <img src={product.image} alt="" />
            <div className="container-buttons">
                <button className="button" onClick={addToCart}>ADD TO CART</button>
                <button className="button">BUY NOW</button>
            </div>
        </div>
        <div className="container-content">
            <h3>{product.name}</h3>
            <h2>{product.price}</h2>
            <p>COLOR: {product.color}</p>
            <p>RAM: {product.ram}</p>
            <p>SPECIFICATION:{product.specification}</p>
            <p>DESCRIPTION: {product.description}</p>
        </div>
    </div>
    </>
  )
}

export default ProductDetail