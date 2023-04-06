const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; // ! Is only need if we are gonna use it on a not browser env
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlAPI, callback) {
  // * Creates a XMLHttpRequest instance
  let xhttp = new XMLHttpRequest();
  // * Initialize it (method, url, async?)
  xhttp.open("GET", urlAPI, true);
  // * Select response format
  // ? xhttp.responseType = "json";
  // * Send petition (body: optional)
  xhttp.send();

  /*
   * Detects each step of the petition -> 0,4
   ? Instead of using onreadystatechange, we can use a function for each step:
   ? Ex xhttp.onloaded = xhttp.readyState === 4  
   */
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4) {
      // * Petition status code
      if (xhttp.status === 200) {
        // * Response body -> responseText | response
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error" + urlAPI);
        return callback(error, null);
      }
    }
  };
}

fetchData(`${API}/products`, (error, data) => {
  if (error) return console.error(error);
  console.log(data[0]);
  fetchData(`${API}/products/${data[0].id}`, (error1, data1) => {
    if (error1) return console.error(error1);
    console.log(data1.title);
  });
});
