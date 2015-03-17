'use strict';

module.exports = function(app){


	app.controller('blogsController',['$scope', 'resource', function($scope, resource){
		$scope.blogs=[];
		var Blog = resource('blogs'); 

		$scope.getAll = function(){
			Blog.getAll(function(data){
				$scope.blogs=data;
			});
		};


		$scope.create = function(blog){

			Blog.create(blog, function(data){
				$scope.blogs.push(data);
			});
		};

		$scope.save = function(blog){
			Blog.save(blog, function(data){
				blog.editing = false;
			});
		};

		$scope.remove = function(blog){
			Blog.remove(blog,function(data){
				$scope.blogs.splice($scope.blogs.indexOf(blog), 1)
			});

		};

		$scope.toggleEdit = function(blog){
			console.log("am i running?");
			if(blog.editing){
				blog.title = blog.oldTitle; 
				blog.editing = false; 
			} else{
				blog.oldTitle = blog.title; 
				blog.editing = true; 

			}
		};



	}]);



};