import React, { Fragment, useEffect } from "react";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import "../inc/product.css"

import SpicesN from "./spices";

export const Spices = ({ match }) => {

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);
    // const keyword= useParams();
    // const keyword = match.params.keyword;
    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);
    return (

        <Fragment>
            <h1>Spices</h1>
            <div className="container" >

                {/* {products && products.map((product)=>(

                    <Product product={product}/> //changes added key
                ))}
                 */}
                {products && products.filter(prod => prod.category ==='Spices').map((filteredproduct) => (

                    <SpicesN product={filteredproduct} /> //changes added key
                ))}

            </div>
        </Fragment>
    )

}
