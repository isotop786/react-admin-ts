import React, { useState, useEffect } from 'react'
import Wrapper from '../../components/Wrapper'
import axios from 'axios'
import Cookies from 'js-cookie';

import { User } from '../../models/Users';

const Users = ()=> {
  
  const [users , setUsers]  = useState([])

  useEffect(()=>{
    (
      async()=>{
        const {data} = await axios.get('users')
        // console.log(data)
        // console.log("Cookie"+res)
        setUsers(data)

      }
      
    )()
  },[])

    return (
        <Wrapper>
        
          {users?.length > 0 ? (
            <div className="table-responsive">
            <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: User)=>(
                <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <button className='btn btn-warning' >Edit</button>
                  <button className='btn btn-danger' >Delete</button>
                </td>
              </tr>
              ))}
              
            </tbody>
          </table>
          </div>
          ):(
          <>
        (<div className='row' style={{position:"absolute",top:"50%",left:"45%"}}>
            <div className="d-flex align-items-center">
        <strong role="status">Users are loading...</strong>
        <div className="spinner-border ms-auto" aria-hidden="true"></div>
      </div></div>)
          </>)}
        
      
      </Wrapper>
    )
  }


export default Users