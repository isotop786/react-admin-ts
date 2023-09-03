import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import {MdOutlineSpaceDashboard} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'
import {MdProductionQuantityLimits} from 'react-icons/md'

const Menu:React.FC = () => {
    const location = useLocation();
  return (
    <nav style={{height:"100vh"}} id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to={"/"}  className="nav-link active "  style={location.pathname=="/" ? {fontWeight:"bold",display:"flex",alignItems:"center"} : {}}>
                <MdOutlineSpaceDashboard color='#111' size={20}/> <span>Dashboard</span>
            </Link>
          </li>
          
         
          <li className="nav-item">
            <Link to={'/users'} className="nav-link" style={location.pathname=="/users" ? {fontWeight:"bold"} : {}}>
              <span data-feather="users"></span>
              <AiOutlineUser color='#111' size={20}/> Users
            </Link>
          </li>
         
          <li className="nav-item">
            <Link to={'/products'} className="nav-link" style={location.pathname=="/products" ? {fontWeight:"bold"} : {}}>
              <span data-feather="users"></span>
               <MdProductionQuantityLimits color='#111' size={20}/> Products
            </Link>
          </li>
      
        </ul>

      </div>
    </nav>
  )
}

export default Menu