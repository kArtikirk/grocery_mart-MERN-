import {ADD_TO_CART} from "../constants/cardConstant"

export const cartReducer =(state ={cartItems :[]},action) =>{
    switch (action.type){
        case ADD_TO_CART:
            const item = action.payload;
            const isItemExist = state.cartItems.find(
                (i) =>i.name===item.name
            );

            
      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.name === isItemExist.name ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
      default:
        return state;
    }
};
