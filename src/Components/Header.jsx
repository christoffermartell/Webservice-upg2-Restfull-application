import React from 'react'
import "../App.css";
import {Link} from "react-router-dom"

export default function Header() {


    
        const navStyle = {
            color : "white"
        };
    


    return (
        <div className="card bg-secondary text-center text-light rounded-0">
            <h1 className="display-4">
                <i className="fas fa-dice-d20"></i>
                <span className="text-dark mr-3">SpringBoot </span>X React
            </h1>
            <nav>
                <ul className="nav-links">
     
                    <Link style={navStyle} to="/"><li>Login</li></Link>
                    <Link style={navStyle} to="/home"><li>Home</li></Link>
                    <Link style={navStyle} to="/register"><li>Register</li></Link>
                </ul>
            </nav>
            
        </div>
    )
}
