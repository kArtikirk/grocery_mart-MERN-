
import {
    ADD_TO_CART,
  } from "../constants/cardConstant";
  
  import axios from "axios";
 
//  const quantity=1// c  quantity  line no 10 getState
  // Add to CartgetSatte
  export const addItemsToCart = (id) => async (dispatch,getState) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);
  
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
       
      },
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  
