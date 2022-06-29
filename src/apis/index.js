import axios from "axios";

export const baseURL = "https://lofo-server.herokuapp.com";
// export const baseURL = "http://localhost:5000";


// auth
export const googleLogin = (googleToken) => axios.post(baseURL + '/api/googlelogin', { googleToken })

// items
export const fetchItems = axios.get(baseURL + "/api/items");
export const fetchItemById = (id) => axios.get(baseURL + "/api/items/" + id);
export const deleteItem = (id) => axios.delete(baseURL + "/api/items/" + id);
export const createItem = (doc) => axios.post(baseURL + "/api/items/", doc);

// lost found items
export const fetchLofoItems = axios.get(baseURL + "/api/lost-found");
export const createLofoItem = (doc) => axios.post(baseURL + "/api/lost-found", doc);
export const deleteLofoItem = (id) => axios.delete(baseURL + "/api/lost-found/" + id);

// orders
// export const fetchOrders = axios.get(baseURL + `/api/user/orders`)

// notifications
export const notify = (id, notification) => axios.put(baseURL + `/api/lost-found/notify/${id}`, { notification })