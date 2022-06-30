
import React from 'react'
import Product from '../product/product'
import {useSelector} from 'react-redux'
import ProductCard from '../product/product'

function ProductContainer() {
    const {ProductReducer:{product}}=useSelector((state)=>state)
    console.log(product);
  return (
    <div>
        {
            product.map((item,ind)=>{
            return <ProductCard key={ind} {...item}/>
            })
        }
    </div>
  )
}

export default ProductContainer