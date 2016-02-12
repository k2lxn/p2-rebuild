
$(document).ready(function(){
	$('.main').css('padding-bottom', $('.footer').height()); // Push content up above footer
}); 

// Move footer down when page resizes
var bumpIt = function() {  
  	$('.main').css('padding-bottom', $('.footer').height());
	},
	didResize = false;

bumpIt();

$(window).resize(function() {
	didResize = true;
});

setInterval(function() {
	if(didResize){
		didResize = false;
		bumpIt();
	}
}, 250);