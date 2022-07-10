import React,{useEffect,useRef, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {SingleProduct,updateProduct} from '../../apiCalls/apiCalls'
import {useHistory,useParams} from 'react-router-dom'

function UpdateProduct() {
   const {id}=useParams()
   const productName=useRef()
   const description=useRef()
   const price=useRef()
   const stock=useRef()
   const {singleProduct:Product}=useSelector(state=>state.ProductReducer)
    const dispatch=useDispatch()  
    const [product,setProduct]=useState({product_name:"",decscription:"",category_id:"",price:"",stock_qty:""})

    const history=useHistory()
    useEffect(()=>{
      dispatch(SingleProduct(id))
    },[id])
    useEffect(()=>{
        setProduct(Product)
    },[Product])
    
    const handle=(data)=>{
     return   data.reduce((product,item)=>{
            const {name,value}=item.current
            product[name]=value
            return product
        },{})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
    let ar= [productName,description,price,stock]
        let prdt=handle(ar)
        dispatch(updateProduct({...prdt,product_id:id}))
        alert('updated successfully')
        history.push('/')
    }
    
    
    return (
    <div>
        <form className='addproduct' onSubmit={(e)=>handleSubmit(e)}>
            <div>
            <label htmlFor='product_name'>Product Name</label>
            <input id='product_name' defaultValue={product?.product_name} ref={productName} name='product_name' />
            </div>
             <div>
             <label htmlFor='description'>Description</label>
             <textarea id="description"  name='decscription' ref={description} defaultValue={product?.decscription}/>   
            </div>   
            <div>

            </div>
            <div>
            <label htmlFor='price'>price</label>
            <input id='price' defaultValue={product?.price} name='price' ref={price}/>
            </div>
            <div>
            <label htmlFor='stock'>stock</label>
            <input defaultValue={product?.stock_qty} ref={stock} name='stock' />
            </div>
            <button>UpdateProduct</button>
        </form>
        <button onClick={()=>history.push('/')}>Home</button>

    </div>
  )
}

export default UpdateProduct