import "./App.css";
import Addproduct from "./Components/Addproduct";
import Header from "./Components/Header";
import React, { useState, useEffect } from "react";
import { LoginPage } from "./Components/LoginPage";
import { RegisterUser } from "./Components/RegisterUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	const FetchProducts = () => {
		const allProducts = "http://localhost:8080/product/all";
		const [products, setProdcuts] = useState([]);

		function getProducts() {
			const gettAllProducts = async () => {
				const response = await fetch(allProducts);
				const result = await response.json();
				setProdcuts(result);
				console.log(result);
			};
			gettAllProducts();
		}
		useEffect(() => {
			getProducts();
		}, []);

		return (
			<div>
				<ul>
					{products.map((product) => (
						<li key={product.id}>
							{product.name}
							<br />
							{product.description}
							{product.price}
						</li>
					))}
				</ul>
			</div>
		);
	};

	//	FetchProducts();

	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/" exact component={LoginPage} />
					<Route path="/register" exact component={RegisterUser} />
					<Route path="/home" exact component={Addproduct} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
