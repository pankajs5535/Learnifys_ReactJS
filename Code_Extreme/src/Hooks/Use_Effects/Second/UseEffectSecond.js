import React from 'react'
import { useState, useEffect } from 'react'

function UseEffectSecond() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(responce => responce.json())
            .then(data => setProducts(data.products))
    }, []);


    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(item => (
                    <tr key={item.id}>
                        <th>{item.id}</th>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default UseEffectSecond


// ✅ useState → Store data
// ✅ useEffect → Call API on page load
// ✅ fetch() → Get data from server
// ✅ setProducts() → Update state
// ✅ map() → Display data in a table