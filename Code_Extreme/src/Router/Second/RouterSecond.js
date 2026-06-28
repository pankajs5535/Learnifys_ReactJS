import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products";
import Suppliers from "./Suppliers";
import Contact from "./Contact";

function RouterSecond() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/suppliers" element={<Suppliers />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>

        </BrowserRouter>

    );
}

export default RouterSecond;