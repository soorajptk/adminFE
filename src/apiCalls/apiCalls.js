import axios from 'axios'
import {Authaction} from '../redux/auth/AuthAction'
import {fetchProduct}from '../redux/product/ProductAction'
import {fetchSingleProduct} from '../redux/product/ProductAction'

axios.interceptors.request.use((request)=>{
    const userLocal=localStorage.getItem('admin')
    if(userLocal){
      const admin=JSON.parse(userLocal)
      request.headers.Authorization=`Bearer ${admin?.token}`
    }
    return request
    })
  
export const loginAuth=(data)=>{
    return async(dispatch)=>{
        try {
            const response= await axios({method:"post",url:"http://localhost:5000/api/v1/admin/login",data})
           await dispatch(Authaction(response.data))
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}


export const FetchProduct=()=>{
    return async(dispatch)=>{
        try {
            const response= await axios({method:"get",url:"http://localhost:5000/api/v1/product",headers:{"Authorization":'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImlhdCI6MTY1NTI4Mzc2MSwiZXhwIjoxNjU3ODc1NzYxfQ.6ZcpRkFO1kOCp4MGohF9zWIgCHyIqYmN3tz02fl_vlE'}})
               await dispatch(fetchProduct(response.data))
        } catch (error) {
            console.log(error);
        }
    }
}


export const updateStock=(data)=>{
    return async(dispatch)=>{
        try {
            const response= await axios({method:"post",url:"http://localhost:5000/api/v1/admin/updatestock",data})
            console.log(response);
            await dispatch(FetchProduct())
            //    await dispatch(fetchProduct(response.data))
        } catch (error) {
            console.log(error);
        }
    }
}


export const addProduct=(data)=>{
    console.log(data);
    return async(dispatch)=>{
        try {
            const response= await axios({method:"post",url:"http://localhost:5000/api/v1/admin/addproduct",data})
            console.log(response);
            await dispatch(FetchProduct())
        } catch (error) {
            console.log(error);
        }
    }
}
export const SingleProduct=(Product_id)=>{
    return async(dispatch)=>{
        try {
            const response= await axios({method:"get",url:`http://localhost:5000/api/v1/admin/singleproduct/${Product_id}`})
            await dispatch(fetchSingleProduct(response.data.response[0]))
        } catch (error) {
            console.log(error);
        }
    }
}
export const updateProduct=(data)=>{
    return async(dispatch)=>{
        try {
            console.log(data);
           await axios({method:"post",url:`http://localhost:5000/api/v1/admin/updateproduct`,data})
          await dispatch(FetchProduct())
        } catch (error) {
            console.log(error);
        }
    }
}
export const addoffer=(data)=>{
    return async(dispatch)=>{
        try {
           await axios({method:"post",url:`http://localhost:5000/api/v1/admin/offerproduct`,data})
          await dispatch(FetchProduct())
        } catch (error) {
            console.log(error);
        }
    }
}