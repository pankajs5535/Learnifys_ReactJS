import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products";
import Suppliers from "./Suppliers";
import Contact from "./Contact";

function RouterFirst() {
    return (
        <BrowserRouter>

            <Navbar/>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Products />} />
                <Route path="/suppliers" element={<Suppliers />} />
                <Route path="/contact" element={<contact />} />
            </Routes>
        </BrowserRouter >
    )
}

export default RouterFirst