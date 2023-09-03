import React,{useEffect,useState} from 'react'
import Wrapper from '../../components/Wrapper'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Message } from '../../models/Message';
import {BsFillPrinterFill} from 'react-icons/bs'

const Read = () => {
    let { id } = useParams();
    const [message,setMessage] = useState<Message>()
    useEffect(()=>{
        (
            async ()=>{
                const {data} = await axios.get('messages/'+id)
                // console.log(data)
                setMessage(data)
            }
        )()
    },[])
  return (
    <Wrapper>
        <div className="row my-3 px-2">
            <div className="d-flex justify-content-end">

                <button className='btn btn-dark' onClick={()=>window.print()}><BsFillPrinterFill size={18}/> Print</button>
            </div>
        </div>
        <div className="row my-4 px-2">
            <div className="col-md-12">
                <p className='mb-3 lead'><strong>Subject: </strong><span>{message?.subject}</span></p>
                <p className='mb-3 '><strong>From: </strong><span>{message?.sender_email}</span></p>
                <div className="card">
                    <div className="card-body">
                        {message?.message_body}
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Read