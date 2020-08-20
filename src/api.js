import axios from "axios";

export const getProducts = () => axios.get("http://localhost:4242/products");
