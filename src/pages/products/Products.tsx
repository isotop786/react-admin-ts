import React,{useState,useEffect} from 'react'
import Wrapper from '../../components/Wrapper'
import { Product } from '../../models/Product'
import axios from 'axios'
import { transform } from 'typescript'
import { Link } from 'react-router-dom'


function Products() {

    const [products,setProducts] = useState([])

    useEffect(()=>{
        (
            async() =>{
                const {data} = await axios.get('products'); 
                // console.log(data)
                setProducts(data)
                
            }
        )()
    },[])

  return (
    <Wrapper>
        {products.length >0 ? ( 
            <div className="table-responsive">
                <div className='d-flex justify-content-end my-3'>
                    <Link to={'/products/add'} className='btn btn-success'>Add Product</Link>
                </div>
            <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: Product)=>(
                <tr key={product.id}>
                <td>
                    <img width={"200px"} className='img-thumbnail' src={product.image}/>
                </td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <button className='btn btn-warning' >Edit</button>
                  <button className='btn btn-danger' >Delete</button>
                </td>
              </tr>
              ))}
              
            </tbody>
          </table>
          </div>
        ) : (<div className='row' style={{position:"absolute",top:"50%",left:"45%"}}>
            <div className="d-flex align-items-center">
        <strong role="status">Products are loading...</strong>
        <div className="spinner-border ms-auto" aria-hidden="true"></div>
      </div></div>)}
    </Wrapper>
  )
}

export default Products