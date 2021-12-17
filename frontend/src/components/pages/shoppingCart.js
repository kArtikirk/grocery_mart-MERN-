import React from "react";
//import{Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
export function Shoppingcart() {

    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
    return (
        <body>

            <div id="ContainerCart" class="container card   w-auto ">
                <h1 className="">Shopping Cart</h1>
                <table class=" table table-bordered">
                    <tbody id="Cartbackground">
                        <tr>
                            <th>Item</th>
                            <th>QTY</th>
                            <th> Price</th>
                           
                        </tr>
                        {cartItems &&
                            cartItems.map((item) => (
                        <tr>
                           
                            <>
                            <td>{item.name}</td>
                            <td>1 <a ></a></td>
                            <td>{item.price}</td>
                            
                            </>
                           
                        </tr> ))}
                        <tr>
                            <th colspan="3"><span class="pull-right">Total</span></th>
                            <th>£250.00</th>
                        </tr>
                                                {/* <tr>
                                <th colspan="3"><span class="pull-right">VAT 20%</span></th>
                                <th>£50.00</th>
                            </tr> */}
                                < tr >
                            {/* <th colspan="3"><span class="pull-right">Total</span></th>
                            <th>£300.00</th> */}
                        </tr>
                    <tr>
                        <td><a href="#" class="btn btn-primary">Continue Shopping</a></td>
                        <td colspan="3"><a href="#" class="pull-right btn btn-success">Checkout</a></td>
                    </tr>
                </tbody>
            </table>

        </div>

        </body >


)
}


