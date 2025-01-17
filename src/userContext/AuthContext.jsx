import { jwtDecode } from 'jwt-decode'
import React, { createContext, useEffect, useState } from 'react'
import api from "../context/api"

export const AuthContext = createContext({ isAuthenticated: false, user: null, setIsAuthenticated: () => {} });

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null); 
    const [username, setUsername] = useState("")

    const handleAuth = () => {
        const token = localStorage.getItem("access");
        if (token) {
            const decoded = jwtDecode(token);
            const expiry_data = decoded.exp;
            const current_time = Date.now() / 1000;
            if (expiry_data >= current_time) {
                setIsAuthenticated(true);
                setUser(decoded);  
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }
        }
    };


    function get_username(){
        api.get("get_username")
        .then(res => {
            setUsername(res.data.username)
        })

        .catch(err => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        handleAuth(); 
        get_username();
    }, []);

    const authValue = { isAuthenticated, setIsAuthenticated, user , get_username, username};
    return <AuthContext.Provider value={authValue}>
        {children}
    </AuthContext.Provider>;
}
