// Imports
import { Fruits } from "./components/pages/fruits";
//import { Sidebar } from "./components/inc/Sidebar";
import { Spices } from "./components/pages/spices";
import { Vegetables } from "./components/pages/vegetables";
import { Navigator } from "./components/inc/Navigator";
import { Home } from "./components/pages/home";
import { Aboutus } from "./components/pages/aboutUs";
import { ContactUs } from "./components/pages/ContactUs";
import { Shoppingcart } from "./components/pages/shoppingCart";
import { Others } from "./components/pages/others";
import { Login } from "./components/pages/login";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { Register } from "./components/pages/Register";
//import { Header1 } from "./components/inc/Header";
//<Navigator/><Header1/>


function App() {
  return (
    <Router>
    
      <div >
        
      <Navigator/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<Aboutus/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/fruits" element={<Fruits/>}/>
          <Route path="/spices" element={<Spices/>}/>
          <Route path="/vegetables" element={<Vegetables/>}/>
          <Route path="/others" element={<Others/>}/>
          <Route path="/cart" element={<Shoppingcart/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;