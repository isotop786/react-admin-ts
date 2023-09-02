import React, { Component, useState,useEffect } from 'react'
import Nav from './Nav'
import Menu from './Menu'
import { Link,useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom"
import {AiOutlineLogout} from 'react-icons/ai'
import Cookies from 'js-cookie';
import axios from 'axios';

const Wrapper =(props)=> {

  const [isRedirect, setRedirect] = useState(false);
  const naviagate = useNavigate();

  useEffect(()=>{
  
        // (
        //   async ()=>{
        //     try{
        //       const {data} = await axios.get('user');
        //     }catch(err){
        //       naviagate('/login')
        //     }
            
        //   }
        // )()

        if(!localStorage.getItem("auth_token")){
            naviagate('/login')
        }   
      
        
        
  },[])
    
    // constructor(props ){
    //     super(props);
    //     this.state = {isRedirect: false}
    // }
    
    // componentDidMount(){
    //     if(!localStorage.getItem("auth_token")){
    //         this.setState({isRedirect: true})   
    //         // window.location = "/login"
    //     }    
    // }

    return (
      <>
        {/* {this.state.isRedirect && <Navigate to={"/login"} replace={true}/>} */}
        <Nav/>
        <div className="container-fluid">
            <div className="row">
                <Menu/>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 py-2 ">
                {props.children}
            </main>
            </div>
        </div>
      </>
    )
  }

export default Wrapper