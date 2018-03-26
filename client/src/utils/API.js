import axios from "axios"; 
const APIKEY = "1c700ade439d4f0c942f0f54cbed43f6"; 
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKEY + "&q="; 

export default {   
  search: function(search) {     
    return axios.get(`${BASEURL}${search}`);   
  },

  getArticles: function() {
    return axios.get("/api/saved");
  },

  saveArticle: function(articleData) {
    console.log(articleData);
    return axios.post("/api/saved", articleData);
  },

  deleteArticle: function(id) {
    return axios.delete("api/saved/" + id);
  }
};

