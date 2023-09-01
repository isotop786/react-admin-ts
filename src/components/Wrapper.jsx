import React, { Component, useState } from 'react'
import { Nav } from './Nav'
import Menu from './Menu'
import { Link,useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom"

export class Wrapper extends Component {
    
    constructor(props){
        super(props);
        this.state = {isRedirect: false}
    }
    
    componentDidMount(){
        if(!localStorage.getItem("auth_token")){
            this.setState({isRedirect: true})   
            // window.location = "/login"
        }    
    }
  render() {

    return (
      <>
        {this.state.isRedirect && <Navigate to={"/login"} replace={true}/>}
        <Nav/>
        <div className="container-fluid">
            <div className="row">
                <Menu/>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 py-2 ">
                {this.props.children}
            </main>
            </div>
        </div>
      </>
    )
  }
}

export default Wrapper