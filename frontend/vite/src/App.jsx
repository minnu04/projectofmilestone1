import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loginpage from "./pages/Loginpage"
import IndividualProduct from "./pages/IndividualProduct"
import Login from "./components/login";
//import Signup from "./components/signup";
import SellerProcutPage from "./pages/SellerProductPage";
import CreateProduct from "./components/Createproduct";
import NavBar from "./components/nav";
import IndividualProduct from "./pages/IndividualProduct";
import Cart from './pages/cart'
import Profile from'./pages/Profile'
function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Loginpage />}></Route>
        <Route path="/create" element={<CreateProduct/>}></Route>
        <Route path="/modify"element={<SellerProcutPage/>}></Route>
        <Route path="/pro"element={<IndividualProduct/>}></Route>
        <Route path="/cart"element={<Cart/>}></Route> 
        <Route path="/profile"element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;