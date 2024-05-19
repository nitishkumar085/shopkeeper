import React, { useEffect } from 'react';
import './dashboard.css'
import { useDispatch,useSelector } from 'react-redux'
import {addPoductData,addCategory} from '../../slices/productSlice.js'
import axios from 'axios'
import Card from '../../components/card/Card'
import Banner from '../../components/Banner/Banner'
import Menu from '../../components/menu/Menu'

function Dashboard() {
        const dispatch = useDispatch()
        const data = useSelector(state=>state.products.list)
  
    useEffect(()=>{
        axios.get("https://dummyjson.com/products?limit=100")
        .then((res)=>{ dispatch(addPoductData(res.data.products))
                      let category=[]
                      for(let val of res.data.products)
                        {
                            if(!category.includes(val.category))
                               {
                                  category.push(val.category)
                               }

                        }
                      dispatch(addCategory(category))
                     }
              
             )
        .catch((err)=>console.error(err))
    },[dispatch])

    
  return (
    <div className='mainConatiner'>
        
        <Banner/>
        <Menu/>
        <div className="products">
            <h3> smartphones</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "smartphones"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
            
        </div>
        <div className="products">
                
            <h3> laptops</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "laptops"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
            
        </div>
        <div className="products">
        
           
            <h3> fragrances</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "fragrances"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div>
        <div className="products">
        
            <h3>  skincare</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "skincare"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div>
        <div className="products">
        
            <h3>   groceries</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "groceries"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div>
        <div className="products">
        
            <h3>  home-decoration</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "home-decoration"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div>
        <div className="products">
       
            <h3>furniture</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "furniture"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div>
        <div className="products">
           <h3>tops</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "tops"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div>
        <div className="products">
        <h3>   womens-dresses</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "womens-dresses"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div >
        <div className="products">
        
        <h3>   womens-shoes</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "womens-shoes"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div>
        <div className="products">
        
        <h3>   mens-shirts</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "mens-shirts"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div>
        <div className="products">
        mens-shoes
        <h3>   mens-shoes</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "mens-shoes"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div>
        <div className="products">
     
        <h3>   mens-watches</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "mens-watches"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div>
        <div className="products">
       
        <h3>    womens-watches</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "womens-watches"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div>
        <div className="products">
       
        <h3>   womens-bags</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "womens-bags"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div>
        <div className="products">
        
        <h3>  womens-jewellery</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "womens-jewellery"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div>
        <div className="products">
        
        <h3>  sunglasses</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "sunglasses"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div>
        <div className="products">
       
        <h3> automotive</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "automotive"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div>
        <div className="products">
       
            <h3>motorcycle</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "motorcycle"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div>
        
        <div className="products">
        
             <h3>lighting</h3>
            <div className='list'>
            {
                data.filter((val)=>{return val.category === "lighting"})
                .map((val)=>{return(<Card key={val.id}val={val}/>)})
            }
            </div>
        </div>
       
    </div>
  )
}

export default Dashboard