angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
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

  $scope.signOut = function(){
    Auth.signout();
  };

  $scope.getLinks();


})

.directive('ngShortenLink', function() {
  return { //function here is responsible for linking directive to element that it is on
    restrict: 'AE',
    template: "<a href='{{link.url}}'> {{link.url}}</a> <a href=\"{{link.base_url + '/api/links/' + link.code}}\"> \"{{link.base_url + '/:' + link.code}}\"</a>"
  };
});

// <div ng-repeat="link in data | orderBy:'visits' | filter:searchText">
//   <a href='{{link.url}}'> {{link.url}}</a>
//   <a href="{{link.base_url + '/api/links/' + link.code}}"> "{{link.base_url + '/:' + link.code}}"</a>
//   <div> {{ link.visits }} </div>
// </div>
