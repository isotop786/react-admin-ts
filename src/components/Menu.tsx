import React from 'react'
import { Link } from 'react-router-dom'

const Menu:React.FC = () => {
  return (
    <nav style={{height:"100vh"}} id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to={"/"}  className="nav-link active">
                Dashboard <span className="sr-only">(current)</span>
            </Link>
          </li>
          
         
          <li className="nav-item">
            <Link to={'/users'} className="nav-link" >
              <span data-feather="users"></span>
              Customers
            </Link>
          </li>
      
        </ul>

      </div>
    </nav>
  )
}

export default Menu