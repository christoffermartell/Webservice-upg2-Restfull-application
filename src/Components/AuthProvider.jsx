import React, { createContext, useState, useEffect } from "react";
import AuthService from "./AuthService";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<div>
			{isLoaded ? (
				<AuthContext.Provider
					value={{
						isAuthenticated,
						setIsAuthenticated,
				//		activeUser,
				//		setActiveUser,
					}}
				>
					{children}
				</AuthContext.Provider>
			) : (
				<h1>Loading</h1>
			)}
		</div>
	);
};
export default AuthProvider;
