'use strict'; 

module.exports = function(app){

	console.log(window.location.pathname); 
	app.directive('createBlogForm', function(){
		return{
			restrict 	: 'A',
			templateUrl	:'/views/create_blog_form.html',
			replace		: true
		}

	});
}