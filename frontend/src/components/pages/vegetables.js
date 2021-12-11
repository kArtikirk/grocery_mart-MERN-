import React from "react";
import Tomatoes from "../images/Tomatoes.jpg" 
import Garlic from "../images/Garlic.jpg"
import Cucumber from "../images/Cucumber.jpg"
import Capsicum from "../images/Capsicum.jpg"
import { Link } from "react-router-dom";
import '../inc/product.css';



export function Vegetables() {
    return (
        <div><h1>Vegetables</h1>
            <div id='Products'className="col-sm-6">
                    
                <div className="row-col-sm-6">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Vegetables</h5>
                                    <img src={Tomatoes} class="card-img-top" alt="Tomatoes img"  />
                                <p className="card-text">Tomatoes</p>
                                <a href="" class="btn btn-primary">Add to cart<Link to='/cart'class="nav-link active">Shopping Cart</Link></a>
                            </div>
                        </div>
                        
                    </div>    
                </div>
                <div className="row-col-sm-6">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Vegetables</h5>
                                    <img src={Cucumber} class="card-img-top" alt="Cucumber img"  />
                                <p className="card-text">Cucumber</p>
                                <a href="" class="btn btn-primary">Add to cart<Link to='/cart'class="nav-link active">Shopping Cart</Link></a>
                            </div>
                        </div>
                        
                    </div>    
                </div>
                <div className="row-col-sm-6">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Vegetables</h5>
                                    <img src={Garlic} class="card-img-top" alt="Garlic img"  />
                                <p className="card-text">Garlic</p>
                                <a href="" class="btn btn-primary">Add to cart<Link to='/cart'class="nav-link active">Shopping Cart</Link></a>
                            </div>
                        </div>
                        
                    </div>    
                </div>
                <div className="row-col-sm-6">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Vegetables</h5>
                                <img src={Capsicum} class="card-img-top" alt="Capsicum img"  />
                                <p className="card-text">Capsicum</p>
                                <a href="" class="btn btn-primary">Add to cart<Link to='/cart'class="nav-link active">Shopping Cart</Link></a>
                            </div>
                        </div>
                        
                    </div>    
                </div>
        </div>
    </div>
    );
  }
