import React from "react";
import Cardamom from "../images/Cardamom.jpg" 
import Cloves from "../images/Cloves.jpg"
import Turmeric from "../images/Turmeric.jpg"
import Cinnamon from "../images/Cinnamon.jpg"
import { Link } from "react-router-dom";
import '../inc/product.css';



export function Spices() {
    return (
        <div><h1>Spices</h1>
            <div id='Products'className="col-sm-6">
                <div className="row-col-sm-6">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Spices</h5>
                                    <img src={Cardamom} class="card-img-top" alt="Cardamom img" />
                                <p className="card-text">Cardamom</p>
                                <a href="" class="btn btn-primary">Add to cart<Link to='/cart'class="nav-link active">Shopping Cart</Link></a>
                            </div>
                        </div>
                        
                    </div>    
                </div>
                <div className="row-col-sm-6">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Spices</h5>
                                    <img src={Cloves} class="card-img-top" alt="Cloves img" />
                                <p className="card-text">Cloves</p>
                                <a href="" class="btn btn-primary">Add to cart<Link to='/cart'class="nav-link active">Shopping Cart</Link></a>
                            </div>
                        </div>
                        
                    </div>    
                </div>
                <div className="row-col-sm-6">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Spices</h5>
                                    <img src={Turmeric} class="card-img-top" alt="Turmeric img"  />
                                <p className="card-text">Turmeric</p>
                                <a href="" class="btn btn-primary">Add to cart<Link to='/cart'class="nav-link active">Shopping Cart</Link></a>
                            </div>
                        </div>
                        
                    </div>    
                </div>
                <div className="row-col-sm-6">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Spices</h5>
                                <img src={Cinnamon} class="card-img-top" alt="Cinnamon img"  />
                                <p className="card-text">Cinnamon</p>
                                <a href="" class="btn btn-primary">Add to cart<Link to='/cart'class="nav-link active">Shopping Cart</Link></a>
                            </div>
                        </div>
                        
                    </div>    
                </div>
        </div>
    </div>
    );
  }
