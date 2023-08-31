import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Register from '../pages/Register';
import Login from '../pages/Login';

export class RouterComponent extends Component {
  render() {
    return (
      <>
        <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        </Routes>
      </>
    )
  }
}

export default RouterComponent