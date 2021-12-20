import {createStore,combineReducers,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productDetailsReducer, productReducer,newProductReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';
import {addItemsToCart} from "./actions/cartAction"

const reducer = combineReducers({
    products:productReducer,
    newProduct:newProductReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer  //to add product to cart
});


let initialState={
    cart:{
        cartItems:localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            :[],
    }
};

const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );

export default store;



