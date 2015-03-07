angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = '';
  $scope.add = function() {
    Links.createLinks($scope.link)
    .then(function(data) {
       console.log('successful add to databse', data);
       $scope.link = '';
    })
    .catch(function(error) {
      console.log('shorten links error', error);
      $scope.link = '';
    });
    console.log('created', $scope.link);
  };
});
