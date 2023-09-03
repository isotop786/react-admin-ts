import React, {useState,useEffect} from 'react'
import {AiOutlineLogout} from 'react-icons/ai'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
 

 const Nav = ()=> {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        first_name:''
    })

    useEffect( () =>{
        (
            async()=>{
                const {data} = await axios.get('user',{withCredentials: true})
                setUser(data);
            }
        )();



    },[])


        function logout()
        {
            const confirm = window.confirm("Are you sure to signout?")
            if(confirm){
                // alert(0)
                
                axios.post('https://nestadmin.onrender.com/api/logout')
                .then(res=> navigate('/login'))
                .catch(err => {
                    console.log(err)
                    navigate('/login')
                })

                localStorage.clear();
                navigate('/login')
            }
        }

        return(
            <nav style={{height:"3.5rem"}} className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">MERN CRM</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
                <ul className="navbar-nav px-3">

                    <li className="nav-item text-nowrap">
                    <span>{user?.first_name}</span>
                    </li>
                    <li className="nav-item text-nowrap">
                    <a onClick={e =>{ e.preventDefault(); logout()}} className="nav-link" href="#">Sign out <AiOutlineLogout color='red' size={20}/></a>
                    </li>
                </ul>
        </nav>
        )
    }
export default Nav;