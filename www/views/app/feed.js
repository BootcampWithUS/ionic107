(function(){
angular.module('App').controller('FeedController', function (FURL,$scope, $state, $http) {
  $scope.stories = [];
  $scope.getStories = function(){
    console.log("FURL=" + FURL);

    $http.jsonp(FURL).then(function(resp) {
    console.log('Success', resp);
    // For JSON responses, resp.data contains the result
    angular.forEach(resp.data.responseData.feed.entries, function(child){
    //console.log(child.title);
    $scope.stories.push(child);
  });
  }, function(err) {
    console.error('ERR', JSON.stringify(err));
    // err.status will contain the status code
  })

  };

  $scope.message = {
   text: 'hello world!',
   time: new Date()
  };

  $scope.init = function(){
    $scope.getStories();
  };

});
}());
