import React from 'react';
// import './App.css';
import { Nav } from './components/Nav';
import Menu from './components/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div>
  <BrowserRouter>
  <Nav/>

<div className="container-fluid">
  <div className="row">

      <Menu/>

    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 py-2 ">
      
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
     
  
    </main>
  </div>
</div>
</BrowserRouter>
    </div>
  );
}

export default App;
