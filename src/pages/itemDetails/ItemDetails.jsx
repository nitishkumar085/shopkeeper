import React,{useState,useEffect} from "react"
import './itemDetails.css'
import {useParams} from 'react-router-dom'

const ItemDetails=()=>{
  const [productData,setProductData] = useState({})
  const [productIamge,setProductImage] = useState("")
  const queryData=useParams()
  
  useEffect(()=>{
  fetch(`https://dummyjson.com/products/${queryData.id}`)
  .then((res)=>res.json())
    .then(data=>{setProductData(data);setProductImage(data.thumbnail)})
  },[queryData.id])

  const getImage=(val)=>{
    setProductImage(val)
  }
  console.log(productData)
  // const filterdatta= data.filter()
  
return(
  <div className="itemDetails_container">
    <div className="itemDetails_container-main">
      <div className="itemsImages">
    {productData.images && productData.images.map((val,i)=><img key={i} src={val} loading="lazy" className="itemProductImages" alt="" onClick={()=>getImage(val)}/>)}
       
      </div>
      <div className="itemProductImage"><img src={productIamge} alt="" style={{width:"80%",height:"80%"}}/></div>
      <div style={{border:"1px solid green", width:"45%",height:"100%"}}>

        <p>{productData.title}</p>
        
      </div>
    </div>
  </div>
)
}

export default ItemDetails