import React, { createContext, useState, useEffect } from "react";
export const Context = createContext();

const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
//	const [isLoaded, setIsLoaded] = useState(false);
	const [token, setToken] = useState("");

	return (
		<div>
				<Context.Provider
				value={{
					token,
					setToken,
					isAuthenticated,
					setIsAuthenticated
				}}
			>
				{children}
				</Context.Provider>
			)
		</div>
	);
};
export default AuthProvider;
