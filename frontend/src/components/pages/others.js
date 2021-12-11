import React from "react";
import Olive_oil from "../images/Olive_oil.jpg" 
import Rice from "../images/Rice.jpg"
import Wheat from "../images/Wheat.jpg"
import Salt from "../images/Salt.jpg"
import "../inc/product.css";
import{Link} from "react-router-dom"

export function Others() {
    return (
        <div>
            <h1>Others</h1>
            <div id='Products'className="col-sm-6" >
                <div className="row-col-sm-6">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Others</h5>
                                <img id="image" src={Olive_oil} class="card-img-top" alt="Olive oil img"   />
                                <p className="card-text">Olive oil</p>
                                <a href="" class="btn btn-primary">Add to cart
                                    <Link to='/cart'class="nav-link active">Shopping Cart</Link>
                                </a>
                            </div>
                        </div>
                        
                    </div>    
                </div>
                <div className="row-col-sm-6">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Others</h5>
                                <img id="image" src={Rice} class="card-img-top" alt="Rice img"   />
                                <p className="card-text">Rice</p>
                                <a href="" class="btn btn-primary">Add to cart
                                <Link to='/cart'class="nav-link active">Shopping Cart</Link>
                                </a>
                            </div>
                        </div>
                        
                    </div>    
                </div>
                <div className="row-col-sm-6">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Others</h5>
                                    <img id="image" src={Wheat} class="card-img-top" alt="Wheat img"   />
                                <p className="card-text">Wheat</p>
                                <a href="" class="btn btn-primary">Add to cart
                                    <Link to='/cart'class="nav-link active">Shopping Cart</Link>
                                </a>
                            </div>
                        </div>
                        
                    </div>    
                </div>
                <div className="row-col-sm-6">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Others</h5>
                                <img id="image" src={Salt} class="card-img-top" alt="Salt img"    />
                                <p className="card-text">Salt</p>
                                <a href="" class="btn btn-primary">Add to cart
                                    <Link to='/cart'class="nav-link active">Shopping Cart</Link>
                                </a>
                            </div>
                        </div>
                        
                    </div>    
                </div>
        </div>
    </div>
    );
  }




