import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"

import React from 'react'

function PrivateRoute({ children, ...rest }) {
    const {AuthReducer:{admin}}=useSelector((state)=>state)
    return (
        <Route {...rest} render={()=> admin ? children :<Redirect to={'/login'}/>} ></Route>
  )
}

export default PrivateRoute