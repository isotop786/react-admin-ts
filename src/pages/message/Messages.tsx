import React,{useEffect,useState} from 'react'
import Wrapper from '../../components/Wrapper'
import axios from 'axios';
import { Message } from '../../models/Message';
import { Link } from 'react-router-dom';

const Messages = () => {
    const [messages,setMessages] = useState([])

    useEffect(()=>{
        (
            async() =>{
                const {data} = await axios.get('messages'); 
                // console.log(data)
                setMessages(data)
            }
        )()
    },[])
  return (
    <Wrapper>
         {messages.length >0 ? ( 
            <div className="table-responsive">
                
            <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Sender</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message: Message)=>(
                <tr key={message.id}>
               
                <td>{message.subject}</td>
                <td>{message.sender_email}</td>
                <td>{message.message_body.substring(0,100)+"..."}</td>
                <td>
                  <Link to={'/messages/'+message.id} className='btn btn-info' >Read</Link>
                  <button className='btn btn-danger' >Delete</button>
                </td>
              </tr>
              ))}
              
            </tbody>
          </table>
          </div>
        ) : (<div className='row' style={{position:"absolute",top:"50%",left:"45%"}}>
            <div className="d-flex align-items-center">
        <strong role="status">Messages are loading...</strong>
        <div className="spinner-border ms-auto" aria-hidden="true"></div>
      </div></div>)}
    </Wrapper>
  )
}

export default Messages