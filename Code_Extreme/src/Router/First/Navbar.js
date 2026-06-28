import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>

            <Link to="/">Home</Link> |
            <Link to="/product">Products</Link> |
            <Link to="/suppliers">Suppliers</Link> |
            <Link to="/contact">Contact</Link>

            <hr />


        </div>
    )
}

export default Navbar