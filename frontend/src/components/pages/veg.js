import React, { Fragment, useEffect } from "react";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import "../inc/product.css"
import VegetableN from "./vegetables";

export const Veg = ({ match }) => {

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);
    // const keyword= useParams();
    // const keyword = match.params.keyword;
    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);
    return (

        <Fragment>
            <h1>Vegetables</h1>
            <div className="container" >

                {/* {products && products.map((product)=>(

                    <Product product={product}/> //changes added key
                ))}
                 */}
                {products && products.filter(prod => prod.category ==='Vegetables').map((filteredproduct) => (

                    <VegetableN product={filteredproduct} /> //changes added key
                ))}

            </div>
        </Fragment>
    )

}