import React,{useState} from 'react'
import './product.css'
import {useDispatch}from 'react-redux'
import {updateStock} from '../../apiCalls/apiCalls'
function Product({product_name,category_name,category_id,price,product_id,stock,stock_qty}) {
    const dispatch=useDispatch()
    const [stockIn,SetstockIn]=useState(false)
   const [qty,SetQty]=useState({qty:0})
    
    const handleSubmit=(e,product_id)=>{
        e.preventDefault()
        if(qty.qty===0){
          return  alert("empty field")
        }console.log(qty);
        dispatch(updateStock({product_id,qty:qty.qty}))
        SetstockIn(false)
    }
        
    return (
    <div className='product'>
        <img src={'data:image/png;base64,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'} className='productImage'/>
        <p><span>producName: </span>{product_name}</p>
        <p><span>category: </span>{category_name}</p>
        <p><span>price: </span>{price}</p>
        <p><span>stockRemains: </span>{stock}</p>
        {!stockIn && <p><span>stock: </span>{stock_qty}</p>}
        {stockIn && <form onSubmit={(e)=>handleSubmit(e,product_id)}>
            <input onChange={(e)=>SetQty({qty:e.target.value})} placeholder='stock'/>
            <button>update</button>
            </form>}
        {!stockIn&&<button onClick={()=>SetstockIn(true)}>changeStock</button>}
    </div>
  )
}

export default Product