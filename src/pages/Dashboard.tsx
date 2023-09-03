import React, { Component,useEffect } from 'react'
import Wrapper from '../components/Wrapper'
import { Verticle } from './dashboard/Verticle'
import { Horizontal } from './dashboard/Horizontal'
import { LineChart } from './dashboard/Line'
import { ProductPie } from './dashboard/ProductPie'

function Dashboard() {
  useEffect(()=>{

  },[])
    return (
        <Wrapper>
            
        <div className='row mt-4 pt-4'>
            <div className="col-md-6">
                <Verticle/>
            </div>
            <div className="col-md-6">
                <Horizontal/>
            </div>
        </div>
        <div className='row my-4'>
            <div className="col-md-6">
               <LineChart/>
            </div>
            <div className="col-md-6" style={{height:"400px",textAlign:"center"}}>
                <ProductPie/>
            </div>
        </div>
        {/* <ToastContainer /> */}
      </Wrapper>
    )
  }


export default Dashboard