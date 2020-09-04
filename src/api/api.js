import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4242';

export const getAllNamesAPI = () => axios.get('/names');

export const addNameAPI = name => axios.post('/names', { name: name });

export const deleteNameAPI = id => axios.delete(`/names/${id}`);
