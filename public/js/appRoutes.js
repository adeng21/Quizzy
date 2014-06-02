angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  }).
  when('/quiztime', {
    templateUrl: 'views/quiz.html',
    controller: 'QuizController'
  }).
  when('/results', {
    templateUrl: 'views/results.html',
    controller: 'ResultsController'
  });
  $locationProvider.html5Mode(true);
}]);
