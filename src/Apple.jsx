import { useEffect } from "react";
import { useState } from "react";
import './Mobile.css'

export const Apple = () =>{
    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch('http://www.ekart.test/api/apple');
        const datas = await response.json();
        setData(datas)
        
    }
    useEffect(() => {
        fetchData()
    }, [])
   

    return(
    <>
    <div className="mobiles_header">
        <h2>Apple Smartphones</h2>
        <button className="mobiles_btn">VIEW ALL</button>
    </div>
    <div className="mobiles_list">

    {
        data.map((item,index)=>{
            return(
                <div className="mobiles_list-card">
                    <div className="image-div">
                       <img src={item.image} className="image" alt="" />
                    </div>
                    <div className="mobiles_list-card_content">
                      <p>{item.name}</p>
                      <h6>{item.rating}</h6>
                       <h3>{item.price}</h3>
                    </div>
            </div>
            )
        })
      }
   </div>
  </>

    )
}