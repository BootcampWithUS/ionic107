(function(){
angular.module('App').controller('FeedController', function (FURL,$scope, $state, $http) {
  $scope.feed = {};
  $scope.stories = [];

  $scope.updateFeed = function(total){
  $scope.feed = "//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + total + "&callback=JSON_CALLBACK&q="+FURL;
  //console.log("Feed URL" + $scope.feed);
  };

  $scope.init = function(){
    $scope.updateFeed(10);
    $http.jsonp($scope.feed).then(function(resp) {
    //console.log('Success', resp);
    // For JSON responses, resp.data contains the result
    angular.forEach(resp.data.responseData.feed.entries, function(child){
    //console.log(child.title);
    $scope.stories.push(child);
    });
  }, function(err) {
    console.error('ERR', JSON.stringify(err));
    // err.status will contain the status code
  });
  };

});
}());
