import React from "react";
import CategoryMenu from './Home extras/CategoryMenu'
import Footer from './Home extras/Footer'
import Slider from './Home extras/Slider'


export function Home() {
    return(
        
        <div>
            
            <Slider/>
            <CategoryMenu/>
            
            <Footer/>
        </div>
        
    )

}