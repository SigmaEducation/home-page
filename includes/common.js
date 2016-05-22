// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// jQuery for filling in the contact field when a product-interest button is clicked.
$(".product-interest").click(function(){
    var product_name = $(this).data("product");
    var message = "I would like to know more about using " + product_name + ". ";
    $("textarea#message").prepend(message);
});




 new WOW().init();
 
 
 
 jQuery(document).ready(function ($) {
	$('#home-slider').flexslider({
	pauseOnHover: false,    
	slideshow: true,                //Boolean: Animate slider automatically
	slideshowSpeed: 6000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
	animationSpeed: 600,
	animation: "fade",              //String: Select your animation type, "fade" or "slide"
	easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
	direction: "horizontal",
	controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
	useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
	touch: true, 
	directionNav: false
	});
  });
  
  
jQuery(document).ready(function ($) {
	$('.testimonial').flexslider({
	pauseOnHover: true,    
	slideshow: false,                //Boolean: Animate slider automatically
	slideshowSpeed: 5000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
	animationSpeed: 1300,
	animation: "slide",              //String: Select your animation type, "fade" or "slide"
	easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
	direction: "horizontal",
	controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
	useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
	touch: true, 
	directionNav: false
	});
  });


