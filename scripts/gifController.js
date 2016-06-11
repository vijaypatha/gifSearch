angular
.module("gifChat")
.controller("gifController", function($scope,gifService){

$scope.test = "Yes!";

$scope.getDataFromService = function(){
  gifService.getDataFromServer($scope.chatText)
  .then(function(dataFromResponse){
    console.log(dataFromResponse);
    $scope.dataToView = dataFromResponse;
  });
};

}); //gifController
