import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <div>

            <NavLink to="/">Home</NavLink> |{" "}

            <NavLink to="/products">Products</NavLink> |{" "}

            <NavLink to="/suppliers">Suppliers</NavLink> |{" "}

            <NavLink to="/contact">Contact</NavLink>

            <hr />

        </div>
    );
}

export default Navbar;