import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/users/Users';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Products from '../pages/products/Products';
import AddProduct from '../pages/products/AddProduct';
import Orders from '../pages/orders/Orders';
import Messages from '../pages/message/Messages';
import Read from '../pages/message/Read';

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
        <Route path='/products/add' element={<AddProduct/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/messages/:id' element={<Read/>}/>
        </Routes>
      </>
    )
  }
}

export default RouterComponent