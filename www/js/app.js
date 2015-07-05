(function(){
angular.module('App', ['ionic','angularMoment'])
.config(function($stateProvider,$urlRouterProvider) {
$stateProvider
    .state('feed', {
      url: '/feed',
      templateUrl: 'views/app/feed.html',
      controller: 'FeedController'
    })
    ;
$urlRouterProvider.otherwise("/feed");
})
.constant('FURL', '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=http://feeds.feedburner.com/Sinergizar')
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
}());
