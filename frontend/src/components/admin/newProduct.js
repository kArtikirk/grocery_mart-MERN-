import React, { Fragment } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// import Sidebar from './sidebar'
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors, createProduct } from '../../actions/productAction'
import { NEW_PRODUCT_RESET } from '../../constants/productConstants'
import { useNavigate } from 'react-router'

const AddNewProduct =()  => {
    
    const dispatch = useDispatch();
    const navigate=useNavigate();
  
    const { error, success } = useSelector((state) => state.newProduct);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    useEffect(() => {
        if (error) {
         
          dispatch(clearErrors());
        }
    
        if (success) {
          
            navigate("/admin/dashboard");
          dispatch({ type: NEW_PRODUCT_RESET });
        }
      }, [dispatch,  error, navigate, success]);

    const createProducthandler = (e) => {
        e.preventDefault();
    
        const myForm = new FormData();
    
        // myForm.append("name", name);
        // myForm.append("description", description);
        // myForm.append("price", price);
        // myForm.append("category", category);
    
        {
            myForm.name=name;
            myForm.description=description;
            myForm.price=price;
            myForm.category=category;

        }
        console.log(myForm)

        console.log(name)
        
        dispatch(createProduct(myForm));
      };

    return (
        <Fragment >
             <h1>Add Products</h1>
            <div className='container'>
           
            <form
                onSubmit={createProducthandler}
              style={{marginLeft:'10px'}}  >

                <div class="form-group">
                    <label htmlFor="Item_Name">Item-Name</label>
                    <input type="text" class="form-control" id="Item-Name" placeholder="Enter name"
                        required
                        value={name} onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div class="form-group">
                    <label htmlFor="decription">decription</label>
                    <input type="text" class="form-control" id="decription" placeholder="Enter decription"
                        value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div class="form-group">
                    <label htmlFor="Price">Price</label>
                    <input type="number" class="form-control" id="Price" placeholder="Enter Price"
                        required 
                        onChange={(e) => setPrice(e.target.value)} />

                </div>
                <div class="form-group">
                    <label htmlFor="category">category</label>
                    <input type="text" class="form-control" id="category" placeholder="Enter category" required
                        value={category} onChange={(e) => setCategory(e.target.value)} />

                </div>
                <button type="submit" class="btn btn-primary"  >Submit</button>
            </form>
             </div>
        </Fragment>
    )
}
export default AddNewProduct;



