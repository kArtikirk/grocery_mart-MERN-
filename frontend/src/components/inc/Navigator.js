import React from "react";
import{Link} from "react-router-dom"
import logo  from '../images/logo.jpg'
import "../inc/Navigator.css"
export function Navigator() {
  return (
        <div class="fluid">
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <img src={logo} class=" logo-design" alt="Logo"/>
                <div class="container-fluid">
                    <Link to='/'class="navbar-brand">Home</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to='/about'class="nav-link active">About</Link>
                        </li>
                        <li class="nav-item w-100" style= {{width:"auto"}}>
                        <Link to='/contact'class="nav-link active">Contact</Link>
                        </li>

                        <li class="nav-item">
                            <Link to='/login'class="nav-link active">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/register'class="nav-link active">Register</Link>
                        </li>

                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link to='/fruits'class="dropdown-item">Fruits</Link></li>
                            <li><Link to='/vegetables'class="dropdown-item">Vegetables</Link></li>
                            <li><Link to='/spices'class="dropdown-item">Spices</Link></li>
                            <li><Link to='/others'class="dropdown-item">Others</Link></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
                
        </div>    
  );
}