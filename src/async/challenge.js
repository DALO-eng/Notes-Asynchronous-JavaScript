import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

async function anotherFunction(urlApi) {
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    console.log(products);
    console.log(product);
  } catch (error) {
    console.error(error);
  }
}

anotherFunction(API);
