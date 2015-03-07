angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = [];

  console.log('in links Controller after a code request');

  $scope.getLinks = function(){
    Links.getLinks($scope.data)
    .then(function(links) {
      links.forEach(function(link) {
         $scope.data.push(link);
      });
    })
    .catch(function(error) {
      console.log('get links error', error);
    });
  };
  $scope.getLinks();


});
