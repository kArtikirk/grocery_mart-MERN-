import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../actions/productAction';
import "./productDetailsstyling.css"
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { addItemsToCart } from "../../actions/cartAction";

const ProductDetails = () => {
  const { id } = useParams()

  const { product } = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);
  
  const addToCartHandler = () => {
    dispatch(addItemsToCart(id));
     };

  return (

    <Fragment >

      <div>
        <main>
          <li class="productdetailscard" id="card_1">
            
            <div class="card__content">
            <figure>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`} />))}

              </figure>
              <div>
                
                <h2>{product.name}</h2>
                <h2>{product.price}</h2>
                <h2>{product.description}</h2><br />
                <div>
                  <div>
                    <div>
                      <button className='incdecbutnstyle'>-</button>
                      <input className='inputtagstyle' value="1"></input>
                      <button className='incdecbutnstyle'>+</button>
                    </div>
                    <button  className='addtocartstyle' onClick={addToCartHandler}>Add to Cart</button>
                  </div>
                </div>
              </div>
              
            </div>
          </li>

        </main>
      </div>
    </Fragment>
  )
};
export default ProductDetails

