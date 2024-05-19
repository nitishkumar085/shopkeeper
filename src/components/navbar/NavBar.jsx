import React,{useState,useEffect} from 'react'
import './navBar.css'
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'

function NavBar() {
  const [isLogin,setIslogin] = useState(false)
  const [userName,setUserName] = useState("")
  
    const navigate = useNavigate()
    const data = Object.entries( useSelector(state=>state.products.cart))
    const goToCart=()=>{
      navigate("/checkout")
    }
let check = localStorage.getItem("token")
  useEffect(()=>{
    let name = localStorage.getItem("name") 
   
    if(localStorage.getItem("token"))
    {
        setIslogin((value)=>!value)
      setUserName(name)
    }
    else
    {
      setIslogin(value=>!value)
    }
  },[check])
 
const goToHome=()=>{
      navigate("/")
  
}
  console.log(userName,isLogin)
  const loginAccout=()=>{
    
    navigate("/login")
  }
  const logoutAccout=()=>{
    setIslogin(!isLogin)
    localStorage.removeItem("token")
    localStorage.removeItem("name")
    navigate("/")
  }
  return (
    <div id="navContainer">
      { console.log(userName)}
          <div id="appIcon" onClick={goToHome}>
            <img src='https://media.istockphoto.com/id/1029895828/vector/shopping-bag-with-cart-logo-design-illustrator.jpg?s=612x612&w=0&k=20&c=HE8fwTY9FmqkEMY9qI-NFeQEo-g0cxE5xu6_fvZZrY0=' alt=""/>
            <p onClick={goToHome}>SHOP CART</p>
          </div>
          <div id="search">
            <input type="search" placeholder='search'/>
            <div></div>
          </div>
          <div id="userDetails">
            
            {isLogin && isLogin? <button onClick={loginAccout}>Login</button>:<div style={{display:"flex"}}><p>{userName}</p><button onClick={logoutAccout}>Logout</button></div>}
          </div>

          <div id="cartIcon" onClick={goToCart}>
          <i className="fa fa-shopping-cart"></i>
          <span>{data.length}</span>
          </div>
        
    </div>
  )
}

export default NavBar