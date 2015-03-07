angular.module('shortly.shorten', [
])

.controller('ShortenController', function ($scope, $location, Links, Validate
 ){
  // Your code here
  $scope.link = '';
  $scope.status;
  $scope.add = function() {
    Links.createLinks($scope.link)
    .then(function(data) {
      console.log('successful add to databse', data);
      $scope.link = '';
    })
    .catch(function(error) {
      console.log('shorten links error', error);
    });
    console.log('created', $scope.link);
  };

  $scope.validateLink = function() {
    if( Validate.validateURL($scope.link) ) {
      $scope.add();
      $scope.status = 'Link successfully shortened and added to database';
    } else {
      $scope.status = 'Link failed to be added, check url';
    }
  };
});
