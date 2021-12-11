import React from "react";



export function Sidebar() {
  return (
    <div id='sidebar'class="container-fluid">
            
             <ul class="list-group">
               <li class="list-group-item active" aria-current="true">Categories</li>
               <li class="list-group-item">Fruits</li>
               <li class="list-group-item">Spices</li>
               <li class="list-group-item">Vegetables</li>
               <li class="list-group-item">Others</li>
             </ul>
         </div>
  );
}