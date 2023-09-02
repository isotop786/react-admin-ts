import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/users/Users';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Products from '../pages/products/Products';

export class RouterComponent extends Component {
  render() {
    return (
      <>
        <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        </Routes>
      </>
    )
  }
}

export default RouterComponent