// TODO: import axios module
const axios = require("axios");
// TODO: use dotenv module to get environmental variables if necessary
const dotenv = require("dotenv");
// TODO: do not make a commit with GitHub api key or access token in any file. (Only applies if your app uses access tokens or api keys.)

function api (response) {
  // TODO: Return promise for GitHub api response to get user data.
  // (Hint: Use axios to send a get request and return the promise created by calling axios.get())
  function getUser(username) {
    const queryUrl = "https://api.github.com/users/"+{username}+"/repos?per_page=100";

    axios.get(queryUrl).then(function(res) {
      const repo = res.data;
      console.log(repo)
    });
  };
};


module.exports = api;
