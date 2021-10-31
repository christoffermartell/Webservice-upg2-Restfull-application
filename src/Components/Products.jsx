import React, {useState, useEffect, useContext} from 'react'
import { Context } from './AuthProvider'
import { useHistory } from "react-router-dom";



const Products = () => {

    const {token, setIsAuthenticated,setToken } = useContext(Context);
    const [createProduct, setCreatePruduct] = useState({name: "", description: "", price: ""});
    const [product, setProduct] = useState([]);
    const [favorites, setFavorites] = useState([]);

    let history = useHistory();
    
/*
    useEffect(() => {
		fetchproducts();
		
	}, []);
*/
    const changeProductData = (e) => {
        setCreatePruduct({...createProduct, [e.target.name]: e.target.value});
    };

    

    const productHandler = (e) => {
        e.preventDefault();
        const buildProduct = async () => {
        const res = await fetch ("http://localhost:8080/product/create",{
            method: "put",
            body: JSON.stringify(createProduct),
            headers: {
                token: token,
                "Content-Type": "application/json",
            },
        });

        if(res.status === 200) {
        const data = await res.text();
        console.log(data);
    }else {
        alert("Something went wrong");
    };
    }

    buildProduct();
    fetchproducts();
    fetchfavorites();
    };
    
    

    const fetchproducts = async () => {
		const res = await fetch("http://localhost:8080/product/all", {
			method: "GET",
			headers: {
				token: token,
			},
		});
        if(res){
        const data = await res.json();
		setProduct(data);
        }
		
	};

    const yourFavorits = async (product) => {
        const productName = product.name;
        await fetch("http://localhost:8080/product/add-favorite",{
            method: "put",
            body: productName,
            headers: {token:token}
        })
        alert("You added " + product.name + " to your favorites")
        fetchfavorites();
    };

    const fetchfavorites = async () => {
        const res = await fetch("http://localhost:8080/product/favorites",{
            method:"GET",
            headers: {token:token}
        })
        const data = await res.json();
        console.log(data);
        setFavorites(data)
    }






    const logoutHandler = () => {
        const logout = async () => {
            const res = await fetch("http://localhost:8080/user/logout", {
                method: "post",
                headers: {token:token}
            })
            if(res){
                setIsAuthenticated(false)
                history.push("/login")
            }
           
        }
        logout();
    }





    return (
        <div>
            <h3>Your favorites</h3>
            <ul >
				{favorites.map((favorite, i) => {
					return (		
							<div key={i} style={{listStyle: "none"}}>Name: {favorite.name} Description: {favorite.description} Price: {favorite.price}</div>

					);
				})}
			</ul>
           
        <div>    
        <div className="w-25 p-3" >
            
            <form onSubmit={productHandler}>
                <input 
                    type="text"
                        name="name"
                            className="form-control rounded-0" 
                        placeholder="Name"
                    onChange={changeProductData}
                 >

                 </input>
                 <input 
                    type="text"
                        name="description"
                            className="form-control rounded-0" 
                        placeholder="Description"
                    onChange={changeProductData}
                 >

                 </input>
                 <input 
                    type="text"
                        name="price"
                            className="form-control rounded-0" 
                        placeholder="Price"
                    onChange={changeProductData}
                 >

                 </input>
                <button className="form-control rounded-0 btn-secondary" type="submit">Create

                </button>
            </form><br/><br/>

            <h3>Products</h3>
            <button onClick={fetchproducts}>Refresh</button>
            <br/><br/>
            <ul className="form-controll rounded-0" >
            {product.map((product,i)=>{
                return (
                    <li className="form-controll rounded-0" key ={i} >

                       name: {product.name} description: {product.description} price: {product.price}<br/>
                       <i onClick={() =>yourFavorits(product)} className="far fa-heart"></i>
                       <br/><br/> 
                    </li>
                    
                    
                )
            })}

            </ul>
            
            
            
        </div>
        <button  type="submit" onClick={logoutHandler}>Logout</button>
        </div>
        
        </div>
    )

}

export default  Products;
    



