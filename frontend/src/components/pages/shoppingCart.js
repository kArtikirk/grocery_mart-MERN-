import React from "react";
//import{Link} from "react-router-dom"
import "../inc/cart.css"

export function Shoppingcart() {
    return(
            <div class="container">
                <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                    <div class="d-flex w-50 justify-content-between">
                    <h5 class="mb-1">Your Cart</h5>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-50 justify-content-between">
                    <h5 class="mb-1">Turmeric</h5>
                    <small class="text-muted">50</small>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-50 justify-content-between">
                    <h5 class="mb-1">Cloves</h5>
                    <small class="text-muted">60</small>
                    </div>
                </a>
            </div>
        </div>            
    )

}