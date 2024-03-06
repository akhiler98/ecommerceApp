import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './ProductDetail.css'
import { Navbar } from "./Navbar";


function ProductDetail() {
   const[product,setProduct] = useState('')
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


  return (
    <>
    <Navbar/>
    <div className="mainContainer">
        <div className="container-image">
             <img src={product.image} alt="" />
            <div className="container-buttons">
                <button className="button">ADD TO CART</button>
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