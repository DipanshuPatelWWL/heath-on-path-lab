// src/API.jsx
import axios from "axios";

const API = axios.create({
    baseURL: "https://heath-on-back.onrender.com/api", // backend base URL
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;
