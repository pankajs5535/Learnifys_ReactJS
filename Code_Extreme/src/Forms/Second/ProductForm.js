import React from 'react'
import { useState } from 'react'

function ProductForm() {

    const [productName, setproductName] = useState("");
    const [price, setPrice] = useState("");


    return (

        <>
            <div>ProductForm</div>
            <input type="text" onChange={(e) => setproductName(e.target.value)}
                value={productName} placeholder="Enter Product Name" />


            <input type="text" onChange={(e) => setPrice(e.target.value)}
                value={price} placeholder="Enter Price" />

            <br /><br />

            <button>Save Product</button>

            <h3>Product : {productName}</h3>
            <h3>Price : ₹ {price}</h3>


        </>

    )
}

export default ProductForm