import React, { Fragment, useState } from "react"
import { useNavigate } from "react-router-dom";
import "../inc/search.css"

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
    return (
        <>

        {/* <form class="d-flex"onSubmit={searchSubmitHandler}>
        
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={(e) => setKeyword(e.target.value)}  />
                   
                    <button class="btn btn-outline-success"  type="submit">Search
            
                </button> 
        </form>
        */}
        <tr className="searchnbtnalign">

            <td >

                <input className=" searchStyle" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setKeyword(e.target.value)} /></td>



            <td >

                <button className="searchbutnstyling" onClick={searchSubmitHandler} type="submit">Search</button></td>



        </tr>
        </>
    );


}
export default Search;