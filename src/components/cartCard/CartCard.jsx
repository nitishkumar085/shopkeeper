import React from 'react'
import './cartCard.css'
import {useDispatch} from 'react-redux'
import { adjustQuantity,deleteItem } from '../../slices/productSlice'

function CartCard({val}) {
    const dispatch = useDispatch()
    const addQuantity = ()=>{
        dispatch(adjustQuantity({id:val[0],method:"add"}))
    }

    const reduceQuantity = ()=>{
        dispatch(adjustQuantity({id:val[0],method:"sub"}))
    }

    const deleteItem1 =()=>{
        dispatch(deleteItem({id:val[0]}))
    }
  return (
    <div className='card1'>
        <div className='img1'><img src={val[1].thumbnail} alt=""  /></div>
        <div className='details1'>
        <div className='title3'>{val[1].title}</div>
        <div className='discription3'>{val[1].description}</div>
        <div className='details2'>
        <div className='price3'>Price:{val[1].price}$</div>
        <div className='rating1'>Rating:{val[1].rating}</div>
        <div className='quantity1'>quantity:<button onClick={addQuantity}>+</button><span>{val[1].quantity}</span><button onClick={reduceQuantity}>-</button></div>
        </div>
        </div>
        <div onClick={deleteItem1}>X</div>
    </div>
  )
}

export default CartCard