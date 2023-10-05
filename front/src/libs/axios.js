import axios from "axios";

const instance = axios.create({
    baseURL: "https://bula.vercel.app",
});

export default instance;
