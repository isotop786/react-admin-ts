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
        const {data} = await axios.get('users?page=1')
        // console.log(res)
        // console.log("Cookie"+res)
        setUsers(data.data)

      }
      
    )()
  },[])

    return (
        <Wrapper>
        <div className="table-responsive">
          {users ? (
            <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: User)=>(
                <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td></td>
                <td></td>
              </tr>
              ))}
              
            </tbody>
          </table>
          ):(<div>User's data Loading...</div>)}
        
      </div>
      </Wrapper>
    )
  }


export default Users