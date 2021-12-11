import React, { useState } from "react";
import '../inc/Headerstyle.css'
import logo  from '../images/Logo.png'
//import headerbg  from '../images/header-bg.jpg'
import { Link,Routes,Route } from "react-router-dom";
//import ContactUs  from "./components/pages/ContactUs";
// import navbarbg from '../images/navbarbg.jpg'




export function Header1() {

    const [show, setShow] = useState(false);
    return (
        <>
            <div className="navbarbg-img">
                
            
            <section className=" navbar-bgn" >
            
                <nav class="navbar navbar-expand-lg ">

                <img src={logo} class=" logo-design" alt="Logo"/>
                    {/* Logo */}
                        
                    

                    <div class="container">
                        <button class="navbar-toggler"
                            type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => setShow(!show)}>
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        {/* navigation buttons */}

                        <div class={`collapse navbar-collapse ${show ? "show" : ""}`} id="navbarSupportedContent">
                            <ul class="nav ms-auto ">
                                <li class="nav-bar-item-style">
                                    <a class="nav-link  " aria-current="page" href="/">Home</a>
                                </li>

                                <li class="nav-bar-item-style ">
                                    <a class="nav-link  " href="/about" role="button">
                                        About
                                    </a>

                                </li>
                                <li class="nav-bar-item-style">
                                    <Link class="nav-link contact-us-margin  " to="./contact">Contact us</Link>
                                </li>
                            </ul>


                            {/* search Signup */}




                            <form class="d-flex">
                                <input class="search-bar-style  " type="search" placeholder="What are you looking for?" aria-label="Search" />
                                <Link to='/'class="nav-link active">
                                <button class="  btn-style btn-style-hover search-btn-style-margin " type="submit">Search</button>
                                </Link>
                                <i class="fas fa-search"></i>
                                <Link to='/login'class="nav-link active">
                                <button class=" btn-style btn-style-hover btn-style-margin" type="submit">Login</button>
                                </Link>
                                <Link to='/login'class="nav-link active">
                                <button class=" btn-style btn-style-hover" type="submit">Signup</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </nav>

                
            </section>


             {/* second line of navbar */}


            <div className=" grocery-tab-design">

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
            </div>


        

            </div>

           


          



        
        {/* <Routes>
            <Route path="/Contactus" element={<ContactUS/>} />

            
        </Routes> */}
        </>
    );
}

