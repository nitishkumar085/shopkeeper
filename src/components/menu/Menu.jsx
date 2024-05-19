import React from 'react'
import {useSelector} from 'react-redux'
import './menu.css'

function Menu() {
  const data = useSelector((state)=>{return state.products.category})
  
   const list = data.map((val,ind)=>{return(<p key={ind}>{val}</p>)})
  
  return (
    <div id="menuOption">
      {list}
    </div>
  )
}

export default Menu