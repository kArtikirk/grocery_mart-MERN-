// Imports
import { Frt } from "./components/pages/frt";
//import { Sidebar } from "./components/inc/Sidebar";
import { Spices } from "./components/pages/spc";
import { Vegetables } from "./components/pages/vegetables";
import { Navigator } from "./components/inc/Navigator";
import { Home } from "./components/pages/home";
import { Aboutus } from "./components/pages/aboutUs";
//import { ContactUs } from "./components/pages/ContactUs";
import { Shoppingcart } from "./components/pages/shoppingCart";
import { Other } from "./components/pages/oth";
import { Login } from "./components/pages/login";
import {BrowserRouter as Router, Route,Routes,Navigate} from "react-router-dom";
import { Register } from "./components/pages/Register";
import  Allproduct  from "./components/pages/allproducts";
import  Search  from "./components/pages/Search.js";
import { Veg } from "./components/pages/veg";
import { useAuth } from "./components/pages/firebase";
import ProductDetails from "./components/pages/productDetails";
import  Dashboard  from "./components/admin/Dashboard";
import Chatbot from "./components/Chatbot/chatbot";
//<Navigator/><Header1/>
import AddNewProduct from "./components/admin/newProduct"
function App() {

  const currentUser= useAuth()

  return (
    <Router>  
    
      <div >
        
        <Navigator/>
        <aside>
          
          <li style={{color:"black"},{fontWeight:"bolder"}}> Welcome, { currentUser?.email.split('@')[0] }</li>
          
        </aside>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/admin/product/new" element={<AddNewProduct/>}/>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          {/* <Route path="/contact" element={<ContactUs/>}/> */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/fruits" element={<Frt/>}/>
          <Route path="/spices" element={<Spices/>}/>
          <Route path="/vegetables" element={<Veg/>}/>
          <Route path="/others" element={<Other/>}/>
          <Route path="/products" element={<Allproduct/>}/>
          <Route path="/products/:keyword" element={<Allproduct/>}/>
          <Route exact path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/cart" element={currentUser ? <Shoppingcart/> : <Navigate to='/login'/>}/>
          <Route path="/chatbot" element={<Chatbot/>}/>
        </Routes>
          
      </div>
    </Router>
  
  );
}

export default App;
