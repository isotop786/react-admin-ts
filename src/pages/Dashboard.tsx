import React, { Component } from 'react'
import Wrapper from '../components/Wrapper'
import { Verticle } from './dashboard/Verticle'
import { Horizontal } from './dashboard/Horizontal'
import { LineChart } from './dashboard/Line'
import { ProductPie } from './dashboard/ProductPie'

export class Dashboard extends Component {
  render() {
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
        <div className='row'>
            <div className="col-md-6">
               <LineChart/>
            </div>
            <div className="col-md-6" style={{height:"400px",textAlign:"center"}}>
                <ProductPie/>
            </div>
        </div>
      </Wrapper>
    )
  }
}

export default Dashboard