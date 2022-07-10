
export const fetchProduct=(data)=>{
    console.log(data);
    return {type:"PRODUCT",payload:data}
}
export const fetchSingleProduct=(data)=>{
    return {type:"SINGLEPRODUCT",payload:data}
}
