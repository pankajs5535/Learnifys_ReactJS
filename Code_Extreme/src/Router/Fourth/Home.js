import { Link } from "react-router-dom";

function Home() {

    return (
        <div>

            <h2>Product List</h2>

            <ul>
                <li><Link to="/product/101">LED Bulb</Link></li>
                <li><Link to="/product/102">Copper Wire</Link></li>
                <li><Link to="/product/103">Switch Board</Link></li>
            </ul>

        </div>
    );
}

export default Home;