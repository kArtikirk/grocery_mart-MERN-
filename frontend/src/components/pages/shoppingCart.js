import React from "react";
//import{Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { removeItemsFromCart } from "../../actions/cartAction";
export function Shoppingcart() {

    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);

    const deleteCartItems = (id) => {
        dispatch(removeItemsFromCart(id));
      };
    

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
                            <td>₹{item.price}</td>
                            <td><button className="removebuttonStyle" onClick= {()=>deleteCartItems(item.product)}  >Remove</button></td>
                            </>
                           
                        </tr> ))}
                        <tr>

                            <th colspan="2">Total</th>
                            <th>{`₹${cartItems.reduce((acc, item) => acc +item.price,0)}`}</th>
                            
                        </tr>
                                    
                    <tr>
                        <td><a href="/products" class="btn btn-primary">Continue Shopping</a></td>
                        <td colspan="3"><a href="#" class="pull-right btn btn-success">Checkout</a></td>
                    </tr>
                </tbody>
            </table>

        </div>

        </body >


)
}


