import "./App.css";
import Products from "./Components/Products";
import Header from "./Components/Header";
import React, { useState, useEffect } from "react";
import { LoginPage } from "./Components/LoginPage";
import { RegisterUser } from "./Components/RegisterUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./Components/Routes/PrivateRoute";
import { UnPrivateRoute } from "./Components/Routes/UnPrivateRoute";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<UnPrivateRoute exact path="/" component={LoginPage} />
					<UnPrivateRoute
						exact
						path="/register"
						component={RegisterUser}
					/>
					<PrivateRoute exact path="/home" component={Products} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
