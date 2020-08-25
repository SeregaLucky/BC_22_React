import axios from "axios";
axios.defaults.baseURL = "http://localhost:4242";

export const getProducts = () => axios.get("/products");
export const getIdProduct = (id) => axios.get(`/products/${id}`);
