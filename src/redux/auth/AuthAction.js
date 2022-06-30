
export const Authaction=(data)=>{
    console.log(data);
    return {type:"AUTHENTICATION",payload:data}
}

export const LOGOUT=()=>{
    return {type:"LOGOUT"}
}
