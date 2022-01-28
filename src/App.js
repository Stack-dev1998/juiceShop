import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import DetailPage from "./components/productDetailPage";
import CartPage from "./components/cartPage";
import CheckOutpage from "./components/checkOutpage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/product-detail/:id" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/check-out" element={<CheckOutpage />} />
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
