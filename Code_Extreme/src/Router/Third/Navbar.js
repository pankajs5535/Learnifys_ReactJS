import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <div>

            <NavLink to="/">Home</NavLink> |{" "}

            <NavLink to="/login">Login</NavLink>

            <hr />

        </div>
    );
}

export default Navbar;