import axios from "axios";

export const HTTP = axios.create({
  baseURL: 'https://fakestoreapi.com/products/categories',
});

// export const productsHTTP = axios.create({
//   baseURL: 'https://fakestoreapi.com/products',
// });