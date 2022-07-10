import React,{useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {addProduct} from '../../apiCalls/apiCalls'
import {useHistory} from 'react-router-dom'
function AddProduct() {
    const [product,setProduct]=useState({product_name:"",decscription:"",category_id:"",price:"",stock:"",image:""})
    const dispatch=useDispatch()
    const history=useHistory()

    const handleChange=(e)=>{

        const {name,value}=e.target
        setProduct({...product,[name]:value})
    }
    const handleUpload=async(e)=>{
      setProduct({...product,image:e.target.files[0]})
      // try{
      //   console.log(data);
      //     const response=await axios.post('http://localhost:5000/api/v1/admin/uploadimage',data)
      //     console.log(response.data.image.src);
      //     setProduct({...product,image:response.data.image.src})
      // }catch(err){
  
      // }
      }
  console.log(product);
  
    const handleSubmit=(e)=>{
        e.preventDefault()
        let data=new FormData()
        Object.keys(product).forEach(item=>{
          data.append(item,product[item])
        })
      
        dispatch(addProduct(data))
        alert('successfully added')
        history.push('/')
    }
    return (
    <div>
        <form className='addproduct' onSubmit={(e)=>handleSubmit(e)}>
          <input type='file' onChange={handleUpload}/>
            <div>
            <label htmlFor='product_name'>Product Name</label>
            <input id='product_name' value={product.product_name} name='product_name' onChange={(e)=>handleChange(e)}/>
            </div>
             <div>
             <label htmlFor='description'>Description</label>
             <textarea id="description" onChange={(e)=>handleChange(e)} name='decscription' value={product.description}/>   
            </div>   
            <div>
            <label htmlFor='category'>category</label>
            <select name="category_id" id="category"
              defaultValue={"default"}
               onChange={(e)=>handleChange(e)}>
              <option value={"default"}>select</option>
              <option value="1">Mobiles</option>
                <option value="2">Fashion</option>
              <option value="3">Home</option>
              <option value="4">Grocery</option>
              </select>
              
            </div>
            <div>
            <label htmlFor='price'>price</label>
            <input id='price' value={product.price} name='price' onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
            <label htmlFor='stock'>stock</label>
            <input value={product.stock} name='stock' onChange={(e)=>handleChange(e)}/>
            </div>
            <button>addProduct</button>
        </form>
        <button onClick={()=>history.push('/')}>Home</button>

    </div>
  )
}

export default AddProduct