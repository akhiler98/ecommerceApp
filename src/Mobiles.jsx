import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { Navbar } from './Navbar'
import { Samsung } from "./Samsung";
import { Apple } from "./Apple";
import './Mobile.css'





export const Mobiles = () =>{
    
    return(
        <>
        
        <Navbar />

   <div className="container">
    <div className="container_header">
       <h1>SHOP BY BRAND</h1>
    </div>
    <div className="mobiles">

    
      
      <Samsung />
      <Apple />
        

        <div className="mobiles_header">
            <h2>Redmi Smartphones</h2>
            <button className="mobiles_btn">VIEW ALL</button>
        </div>
        <div className="mobiles_list">
            <div className="mobiles_list-card">
                <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/y/5/-original-imagwu894yyhyyce.jpeg?q=70" className="redmi-image" alt="" />
                <p>Redmi note 13pro 5G(purple,512gb)</p>
                <h6>4.3</h6>
                <h3>czk 20000</h3>
            </div>

            <div className="mobiles_list-card">
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/y/5/-original-imagwu894yyhyyce.jpeg?q=70" className="redmi-image" alt="" />
            <p>Redmi note 13pro 5G(purple,512gb)</p>
                <h6>4.3</h6>
                <h3>czk 20000</h3>
            </div>

            <div className="mobiles_list-card">
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/y/5/-original-imagwu894yyhyyce.jpeg?q=70" className="redmi-image" alt="" />
            <p>Redmi note 13pro 5G(purple,512gb)</p>
                <h6>4.3</h6>
                <h3>czk 20000</h3>
            </div>

            <div className="mobiles_list-card">
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/y/5/-original-imagwu894yyhyyce.jpeg?q=70" className="redmi-image" alt="" />
            <p>Redmi note 13pro 5G(purple,512gb)</p>
                <h6>4.3</h6>
                <h3>czk 20000</h3>
            </div>

            <div className="mobiles_list-card">
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/y/5/-original-imagwu894yyhyyce.jpeg?q=70" className="redmi-image" alt="" />
            <p>Redmi note 13pro 5G(purple,512gb)</p>
                <h6>4.3</h6>
                <h3>czk 20000</h3>
            </div>
        </div>




    </div>
   </div>
   </>
   
) 
}