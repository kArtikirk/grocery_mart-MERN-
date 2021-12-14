import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Search = ({history}) => {

    const [keyword, setKeyword] = useState("")
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.pushState(`/products/${keyword}`)
        } else {
            history.pushState("/products")
        }

    };
    return (<Fragment>
         
            <form class="d-flex">
        
                    <input class="form-control me-2" onSubmit={searchSubmitHandler} type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" onChange={(e) => setKeyword(e.target.value)}  type="submit">Search
            
                </button> 
        </form>
       
    </Fragment>
    );

}
export default Search;