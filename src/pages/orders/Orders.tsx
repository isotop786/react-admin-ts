import React,{useState,useEffect} from 'react'
import Wrapper from '../../components/Wrapper'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { OrderItem } from '../../models/OderItem'
import { Order } from '../../models/Oder'

const Orders = () => {
    const [orders,setOrders] = useState([])

    useEffect(()=>{
        (
            async() =>{
                const {data} = await axios.get('orders'); 
                // console.log(data)
                setOrders(data)
            }
        )()
    },[])
  return (
    <Wrapper>
         {orders.length >0 ? ( 
            <div className="table-responsive">
                
            <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Order Items</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order: Order)=>(
                <tr key={order.id}>
               
                <td>{order.first_name+" "+order.last_name}</td>
                <td>{order.email}</td>
                <td>
                    <th>Product title</th>
                    <th>Product Price</th>
                    <th>Product Quantity</th>
                    {order.order_items.map((items: OrderItem)=>(
                    <tr key={items.id}>
                        <td>{items.product_title}</td>
                        <td>{items.price}</td>
                        <td>{items.quantity}</td>
                    </tr>
                ))}</td>
                <td>
                  <button className='btn btn-info' >Ship</button>
                  <button className='btn btn-danger' >Delete</button>
                </td>
              </tr>
              ))}
              
            </tbody>
          </table>
          </div>
        ) : (<div className='row' style={{position:"absolute",top:"50%",left:"45%"}}>
            <div className="d-flex align-items-center">
        <strong role="status">Order data loading...</strong>
        <div className="spinner-border ms-auto" aria-hidden="true"></div>
      </div></div>)}
    </Wrapper>
  )
}

export default Orders