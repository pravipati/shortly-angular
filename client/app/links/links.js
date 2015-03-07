angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = Links
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log('error', error);
  });

  // $scope.getLinks();

});
