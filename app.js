
//app var
var app = {};

(function($){
	"use strict";


/*************************
  Predefined Variables
*************************/

	var $window = $(window),
	$document = $(document);


	app.event = function () {

		// $("#button").click(function(){

		// 	$("#monCarre").animate({
		// 		left:"200px",
		// 		height:"300px",
		// 		width:"300px",
		// 		fontSize:"40px"
		// 	},3000);

		// });

	}

	//Document ready functions
	$document.ready(function () {
		app.event();
	});

})(jQuery);