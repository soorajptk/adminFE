import React, { useState } from "react";
import './login.css'
import { Link, useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";
import {loginAuth} from '../../apiCalls/apiCalls'

function Login() {
    const [credentials,setCredentials]=useState({admin_name:"",admin_password:""})
    const history=useHistory()
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        const {name,value}=e.target
        setCredentials({...credentials,[name]:value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(credentials.admin_name===""||credentials.admin_password===""){
            return alert("please provide your credentials")
        }
        await dispatch(loginAuth(credentials))
        history.push('/')
    }
    return (
    <div className="loginContainer">
      <form onSubmit={(e)=>handleSubmit(e)} className="loginInnerContainer">
          <div className="login">
        <label htmlFor="name">name</label>
        <input  type="text" value={credentials.admin_name} onChange={(e)=>handleChange(e)} id="name"  name="admin_name" />
        <label htmlFor="password">password</label>
        <input type="text" id="password" value={credentials.admin_password} onChange={(e)=>handleChange(e)}   name="admin_password" />
        <button type="submit" className="loginBtn">Login</button>
        </div>
        </form>
    </div>
  );
}

export default Login;
