import { useState } from "react";

function ProductStock() {

    const [stock, setStock] = useState(50);

    return (
        <div>

            <h2>Product Stock</h2>

            <h3>Available Stock : {stock}</h3>

            <button onClick={() => setStock(stock + 10)}>
                Add Stock
            </button>

            <button onClick={() => setStock(stock - 10)}>
                Sell Product
            </button>

        </div>
    );
}

export default ProductStock;