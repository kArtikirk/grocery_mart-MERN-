import React from "react";
import Apples from "../images/Apples.jpg" 
import Mangoes from "../images/Mangoes.jpg"
import Bananas from "../images/Bananas.jpg"
import Strawberries from "../images/Strawberries.jpg"
import "../inc/product.css";
import{Link} from "react-router-dom"

export function Fruits() {
    return (
        <div>
            <h1>Fruits</h1>
            <div id='Products'className="col-sm-6" >
                <div className="row-col-sm-6">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Fruits</h5>
                                <img id="image" src={Apples} class="card-img-top" alt="Apples img"   />
                                <p className="card-text">Apples</p>
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
                                <h5 className="card-title">Fruits</h5>
                                <img id="image" src={Mangoes} class="card-img-top" alt="Apples img"   />
                                <p className="card-text">Mangoes</p>
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
                                <h5 className="card-title">Fruits</h5>
                                    <img id="image" src={Bananas} class="card-img-top" alt="Apples img"   />
                                <p className="card-text">Bananas</p>
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
                                <h5 className="card-title">Fruits</h5>
                                <img id="image" src={Strawberries} class="card-img-top" alt="Apples img"    />
                                <p className="card-text">Strawberries</p>
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






// export class Products extends React.Component{
//     render(){
    //     return <div id='Products'className="col-sm-6">
            
    //             <div className="row-col-sm-6">
    //                 <div className="col-sm-6">
    //                     <div className="card">
    //                         <div className="card-body">
    //                             <h5 className="card-title">Fruits</h5>
    //                                 <img src={Apples} alt="Apples img" height= "150px" width="150px" position="auto"/>
    //                             <p className="card-text">Apples</p>
    //                             <a href="" class="btn btn-primary">Add to cart</a>
    //                         </div>
    //                     </div>
                        
    //                 </div>    
    //             </div>
    //             <div className="row-col-sm-6">
    //                 <div className="col-sm-6">
    //                     <div className="card">
    //                         <div className="card-body">
    //                             <h5 className="card-title">Fruits</h5>
    //                                 <img src={Mangoes} alt="Mangoes img" height= "150px" />
    //                             <p className="card-text">Mangoes</p>
    //                             <a href="" class="btn btn-primary">Add +</a>
    //                         </div>
    //                     </div>
                        
    //                 </div>    
    //             </div>
    //             <div className="row-col-sm-6">
    //                 <div className="col-sm-6">
    //                     <div className="card">
    //                         <div className="card-body">
    //                             <h5 className="card-title">Fruits</h5>
    //                                 <img src={Bananas} alt="Bananas img" height= "150px" />
    //                             <p className="card-text">Bananas</p>
    //                             <a href="" class="btn btn-primary">Add +</a>
    //                         </div>
    //                     </div>
                        
    //                 </div>    
    //             </div>
    //             <div className="row-col-sm-6">
    //                 <div className="col-sm-6">
    //                     <div className="card">
    //                         <div className="card-body">
    //                             <h5 className="card-title">Fruits</h5>
    //                             <img src={Strawberries} alt="Strawberries img" height= "150px" />
    //                             <p className="card-text">Strawberries</p>
    //                             <a href="" class="btn btn-primary">Add +</a>
    //                         </div>
    //                     </div>
                        
    //                 </div>    
    //             </div>
    //     </div>
    // }
// }