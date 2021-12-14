import React from "react";
import { Link } from "react-router-dom"
//import "./productStyling.css"
import Apples from "../images/Apples.jpg"
import "../inc/product.css"

const Product = ({ product }) => {
    return (
        <div className="d-flex" to={product._id} >
             {/* <img class="card-img-top" src={product.images[0].url} alt={product.name} /> */}

            <div id="Products"  >
                <div className="row-col-sm-6 d-flex flex-wrap">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <img class="card-img-top" src={Apples} alt="product-image" />
                                    <p className="card-text1">{product.name}</p>
                                    <p className="card-text1">₹{product.price} /- </p>
                                    {/* <p className="card-text">{product.category}</p> */}
                                    {/* <p className="card-text1">{product.images}</p> */}

                                    <Link to='/cart' class="nav-link active btn-styling">
                                        <a href="" class="btn btn-primary">Add to cart   </a>
                                    </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >


    )
};

export default Product;