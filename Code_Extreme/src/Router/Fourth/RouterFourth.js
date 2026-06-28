import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import ProductDetails from "./ProductDetails";

function RouterFourth() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/product/:id" element={<ProductDetails />} />

            </Routes>

        </BrowserRouter>

    );
}

export default RouterFourth;