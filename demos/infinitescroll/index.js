angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope) {
  $scope.noMoreItemsAvailable = false;

  $scope.loadMore = function() {
    $scope.items.push({ id: $scope.items.length});

    if ( $scope.items.length == 99 ) {
      $scope.noMoreItemsAvailable = true;
    }
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };

  $scope.items = [];

});
