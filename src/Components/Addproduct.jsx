import React, {useState, useEffect} from 'react'
import { LoginPage } from './LoginPage'

/*
const FetchProducts = () => {
    const allProducts = "http://localhost:8080/all"
    const [products, setProdcuts] = useState([]);

     function getProducts () {
         const gettAllProducts = async () => {
             const response = await fetch(allProducts);
             const result = await response.json();
             setProdcuts(result);
             console.log(result);
         };
         gettAllProducts();
     }
    useEffect(()=>{
        getProducts();
    },[]);

    return (
        <div>
            <ul>{products.map(product => (
                <li key={product.id}>
                    {product.name}<br/>
                    {product.description}
                    {product.price}
                </li>
            ))}

            </ul>
        </div>
    )
}
*/




export default function Addproduct() {
    return (
        <div className="w-25 p-3" >
            <form>
                <input type="text" className="form-control rounded-0" placeholder="Create prdocut.."></input>
                <button className="form-control rounded-0 btn-secondary" type="submit">Create

                </button>
            </form>
            
        </div>
    )
}


