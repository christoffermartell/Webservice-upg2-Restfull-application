import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import AuthService from "./AuthService";


export const LoginPage = () => {

	const [user, setUser] = useState({ username: "", password: "" });
   
//	const  {setisAuthenticated } = useContext(AuthContext);
	let history = useHistory();

	const changeUserData = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const loginUser = async (e) => {
		e.preventDefault();
		const token = await AuthService.login(user);
	

		if (token) {
//			setisAuthenticated(token);
            alert("Successfully loggin ")
            console.log("Token has been created" + token);
			history.push("/home");
		}else{
            alert("Something went wrong")
        }
	};

    

    

	return (
		<div style={{ maxWidth: "60rem", textAlign: "center", margin: "auto" }}>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					type="text"
					name="username"
					placeholder="Username"
					onChange={changeUserData}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					onChange={changeUserData}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
