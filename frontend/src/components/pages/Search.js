import React, { Fragment, useState } from "react"
import { useNavigate } from "react-router-dom";


const Search = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("")
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
           
            navigate(`/products/${keyword}`)
        } else {
            navigate("/products")
        }
    };
    return (<Fragment>
         
            <form class="d-flex"onSubmit={searchSubmitHandler}>
        
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={(e) => setKeyword(e.target.value)}  />
                   
                    <button class="btn btn-outline-success"  type="submit">Search
            
                </button> 
        </form>
       
    </Fragment>
    );

}
export default Search;