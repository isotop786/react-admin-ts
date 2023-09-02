import React from 'react'
import { Link,useLocation } from 'react-router-dom'

const Menu:React.FC = () => {
    const location = useLocation();
  return (
    <nav style={{height:"100vh"}} id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to={"/"}  className="nav-link active"  style={location.pathname=="/" ? {fontWeight:"bold"} : {}}>
                Dashboard
            </Link>
          </li>
          
         
          <li className="nav-item">
            <Link to={'/users'} className="nav-link" style={location.pathname=="/users" ? {fontWeight:"bold"} : {}}>
              <span data-feather="users"></span>
              Users
            </Link>
          </li>
         
          <li className="nav-item">
            <Link to={'/products'} className="nav-link" style={location.pathname=="/products" ? {fontWeight:"bold"} : {}}>
              <span data-feather="users"></span>
              Products
            </Link>
          </li>
      
        </ul>

      </div>
    </nav>
  )
}

export default Menu