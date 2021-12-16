
import {
    ADD_TO_CART,
  } from "../constants/cartConstants";
  
  import axios from "axios";
 
  
  // Add to Cart
  export const addItemsToCart = (name, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/product/${name}`);
  
    dispatch({
      type: ADD_TO_CART,
      payload: {
        // product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        // image: data.product.images[0].url,
        // stock: data.product.Stock,
        quantity,
      },
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  