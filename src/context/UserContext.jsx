import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';
import axiosInstance from '../hooks/axiosInstance';

// Create the User Context
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Initial user state
    const [token, setToken] = useState(localStorage.getItem("token"));
    const login = (email, password) => {
        axiosInstance
            .post("/api/auth/login", { email, password })
            .then((response) => {
                console.log(response, "response1");
                const { token } = response.data;
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                localStorage.setItem("token", token);
                setToken(token);
                setUser({ email });
            })
            .catch((err) => console.log(err));
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    };


    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            // You can use token to fetch user data or check if the token is valid
            console.log(token, "rokeasdasd");
            if (axios.defaults.headers.common["Authorization"]) {
                console.log(axios.defaults.headers, "axios.defaults.headers");
                axiosInstance
                    .get("/api/protected/profile")
                    .then((response) => {
                        console.log(response, "response2");
                        setUser(response.data?.user)
                    })
                    .catch(() => setUser(null));
            }
        }
    }, [token]);

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use User Context
export const useUser = () => {
    return useContext(UserContext);
};
