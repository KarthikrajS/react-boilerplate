import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.REACT_APP_API_URL || "http://localhost:4000", // Default to localhost
    headers: {
        "Content-Type": "application/json",
    },
});
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;
