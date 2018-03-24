const axios = require("axios");
const request = require("request");
// const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const apiUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  // Gets all books
function getArticles() {
    // return axios.get({
    //   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    //   qs: {
    //     'api-key': "1c700ade439d4f0c942f0f54cbed43f6"
    //     },
    //   }, function(err, response, body) {
    //   body = JSON.parse(body);
    //   let results = [];
    //   for (let i = 0; i < 10; i++) {
    //     results.push(body.response.docs[i]);
    //   }
    //   return(results);
    //   }
    // );
    axios.get(apiUrl + '?api-key' + '1c700ade439d4f0c942f0f54cbed43f6')
      .then(function (response) {
        // pokemonName.innerHTML = response.data.forms[0].name;
        // pokemonImage.src = response.data.sprites.front_default;
        console.log(response);
      })
      .catch(function (error) {
        // pokemonName.innerHTML = "(An error has occurred.)";
        // pokemonImage.src = "";
        console.log(error);
    });
  }




getArticles();