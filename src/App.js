import React,{useEffect} from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./auth";
import {useDispatch} from 'react-redux'
import Home from './pages/home/Home'
import AddProduct from './pages/addProduct/addProduct'
import Login from './pages/login/login'
import {FetchProduct} from './apiCalls/apiCalls'
function App() {
  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(FetchProduct())
  },[])
  
  return (
    <div className="App">
      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute exact path={"/"}>
          <Home/>
        </PrivateRoute>
        <PrivateRoute path={"/addproduct"}>
          <AddProduct/>
        </PrivateRoute>
          </Switch>

    </div>
  );
}

export default App;
