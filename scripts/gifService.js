angular
.module("gifChat")
.service("gifService", function($http) {

  this.getDataFromServer = function(passingchatTextfromview){
    var baseURl = "http://api.giphy.com/v1/gifs/search?q="+passingchatTextfromview+"&api_key=dc6zaTOxFJmzC";
    return $http.get(baseURl)
    .then(function(response){
      console.log(response); // IMP
      return response.data.data; //Keys in OBJ
    })
    .catch(function(err){
      return console.error(log);
    });
  };

}); //gifService
