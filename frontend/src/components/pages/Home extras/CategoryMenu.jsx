import React from 'react'
import '../../inc/CategoryMenu.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import Pulses from'./ProdutImages/PulsesImg.jpg'
import Fruits from './ProdutImages/FruitsImg.jpg'
import Vegetables from './ProdutImages/Vegetables.jpg'
import Spices from './ProdutImages/SpicesImg.jpg'


export default function CategoryMenu() {
    return (<>
    
        <div className="container1">
            <h1>CATEGORIES</h1>
        </div>
        <div id='Products' className="col-sm-6">
            

                <div className="row-col-sm-6">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                    <img src={Fruits} alt="Mangoes img" height= "150px" position="auto" />
                                    <br/>
                                    <Link to="/fruits" class="card-title">Fruits </Link>
                            </div>
                        </div>
                        
                    </div>    
                </div>
                <div className="row-col-sm-6">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                    <img src={Vegetables} alt="Vegetables img" height= "150px" position="auto"/><br/>
                                    <Link to="/vegetables" class="card-title">Vegetables</Link>
                            </div>
                        </div>
                        
                    </div>    
                </div>
                <div className="row-col-sm-6">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <img src={Spices} alt="Strawberries img" height= "150px" position="auto"/><br/>
                                <Link to="/spices" class="card-title">Spices</Link>
                            </div>
                        </div>
                        
                    </div>    
                </div>
                <div className="row-col-sm-6">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                    <img src={Pulses} alt="Apples img" height= "150px"  position="auto"/><br/>
                                    <Link to="/others" class="card-title">Others</Link>
                            </div>
                        </div>
                        
                    </div>    
                </div>
        </div>
        
    </>
    )
}
