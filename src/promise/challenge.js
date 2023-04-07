import fetch from "node-fetch"; // ! Just for console
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlAPI) {
  return fetch(urlAPI); // * ITS A PROMISE
}

fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => console.log(products))
  .catch((error) => console.error(error));
