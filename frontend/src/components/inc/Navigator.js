import React from "react";
import { Link } from "react-router-dom"
import logo from '../images/logo.jpg'
import Search from "../pages/Search";
import "../inc/Navigator.css"
//import { Allproducts } from "../pages/allproducts";
//import { ContactUs } from "../pages/ContactUs";



export function Navigator() {
    return (
        <div class="fluid">
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <img src={logo} class=" logo-design" alt="Logo" />
                <div class="container-fluid">
                    <Link to='/' class="navbar-brand">Home</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to='/about' class="nav-link active">About</Link>
                            </li>
                            <li class="nav-item w-100" style={{ width: "auto" }}>

                                <Link to='/contact' class="nav-link active"data-bs-toggle="modal" data-bs-target="#ContactUs">Contact</Link>
                            </li>
                            <div class="modal fade" id="ContactUs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <div className="modal-tytle-box">
                                                <h5 class="modal-title-styling" id="exampleModalLabel">Contact Us</h5>
                                            </div>
                                            <p>



                                                grocery_mart@abc.com <br />
                                                grocery_mart_support@abc.com<br />
                                                grocery_mart_Order@abc.com<br />

                                            </p>
                                        </div>



                                    </div>
                                </div>
                            </div>
                            <li class="nav-item">
                                <Link to='/login' class="nav-link active">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/register' class="nav-link active">Register</Link>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to='/fruits' class="dropdown-item">Fruits</Link></li>
                                    <li><Link to='/vegetables' class="dropdown-item">Vegetables</Link></li>
                                    <li><Link to='/spices' class="dropdown-item">Spices</Link></li>
                                    <li><Link to='/others' class="dropdown-item">Others</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li> <Link to='/products' class="dropdown-item">All Products</Link>
                                    </li>
                                </ul>
                            </li>
                            


                        </ul>
                        <Search/> 

                    </div>
                </div>
            </nav>

        </div>
    );
}