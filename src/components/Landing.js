import React from "react";
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';


function Landing()
{
    return(
      // <BrowserRouter>
        <div>
        <div role="navigation">
    <div className="p-3 bg-light">
      <div className="container"style={{backgroundColor:"#16AF00"}}>
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-3 d-none d-md-block">
            
            <div className="mt-1 text-secondary">
              <h2 style={{color: "white"}}>BUEL<i className="fa fa-leaf" style={{fontSize:"30px",color:"white"}}></i></h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 text-center">
            <div className="display-6" style={{color: "white", fontSize: "25px", fontWeight: "bold"}}>Let's Save the Earth!!<i className="fa fa-globe" aria-hidden="true" style={{color: "white", fontSize: "25px"}}></i></div>
            {/* <!-- <div className="text-secondary" style="color: white;">One step portal for all...</div> --> */}
          </div>
          <div className="col-lg-3 col-md-3 text-end d-none d-md-block" style={{display: "inline"}}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width: "200px",display: "inline"}}/>
            <button className="btn btn-outline-success" type="submit" id="btn" style={{backgroundColor:"#ADFF2F"}}>Search</button>
            
          </div>
        </div>
      </div>
    </div>

    <div className="border-bottom border-top" id="subNavContainer" style={{backgroundColor:"white"}}>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars me-2"></i>
            Menu</button>

          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <Link className="nav-link mx-2 active" aria-current="page" to="/News" style={{color: "darkgreen"}}>News</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link mx-2 active" aria-current="page" to="." style={{color: "darkgreen"}}>Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 active" href="#" style={{color: "darkgreen"}}>Our Offering</a>
              </li>
                <li className="nav-item dropdown">
                <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "darkgreen", fontWeight: "bold"}}>
                 Bio-Disel Suppliers
                  
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{backgroundColor: "#ADFF2F"}}>
                  {/* <li><a className="dropdown-item" href="#">Farmer</a></li>
                  <li><a className="dropdown-item" href="#">Warehouse</a></li>
                  <li><a className="dropdown-item" href="#">Manufacturer</a></li>
                  <li><a className="dropdown-item" href="#">Distributor</a></li> */}
                </ul>

              </li>
              <li className="nav-item dropdown">
                <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "darkgreen", fontWeight: "bold"}}>
                 Policies & Compliances
                  
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{backgroundColor: "#ADFF2F"}}>
                  {/* <li><a className="dropdown-item" href="#">Farmer</a></li>
                  <li><a className="dropdown-item" href="#">Warehouse</a></li>
                  <li><a className="dropdown-item" href="#">Manufacturer</a></li>
                  <li><a className="dropdown-item" href="#">Distributor</a></li> */}
                </ul>

              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 active" href="#" style={{color: "darkgreen"}}>Tech Support</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "darkgreen", fontWeight: "bold"}}>
                 <i className="fa fa-user-circle" style={{color:"green",fontSize:"23px"}}></i>

                  Login
                  
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{backgroundColor: "#ADFF2F"}}>
                <li><Link style={{backgroundColor:"#ADFF2F"}} to="/farmer" className="dropdown-item nav-link active">Farmer</Link></li>
                <li><Link style={{backgroundColor:"#ADFF2F"}} to="/manufacturer" className="dropdown-item nav-link active">Manufacturer</Link></li>
                <li><Link style={{backgroundColor:"#ADFF2F"}} to="/warehouse" className="dropdown-item nav-link active">Warehouse</Link></li>
                <li><Link style={{backgroundColor:"#ADFF2F"}} to="/consumer" className="dropdown-item nav-link active">Consumer</Link></li>
                                
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
</div>

        
</div>


 
    );
}

    
export default Landing;