'use strict'; 

require('angular/angular');
require('angular-route');
var blogsApp = angular.module('blogsApp', ['ngRoute']);

// controllers
require('./controllers/blogs_controller')(blogsApp);
// services
require('./services/resources_routes')(blogsApp);
//directives
require('./views/directives/create_blog_directive.js')(blogsApp);

// Routes
blogsApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/blogs', {

		templateUrl	: './views/blogs_templates.html',
		controller 	: 'blogsController'
	})
	.when('/about',{
		templateUrl:'./views/about.html'
	})
	.when('/',{
		redirectTo:'/blogs'
	})
	.otherwise({
		templateUrl:'./views/four_oh_four.html'	
	})

}]);
