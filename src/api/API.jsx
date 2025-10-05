// src/API.jsx
import axios from "axios";

const API = axios.create({
    baseURL: "https://heath-on-back.onrender.com/api",
    // baseURL: "http://localhost:4000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;
