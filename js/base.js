$(function(){
	var $nav = $('.nav')
	$nav.on({
        mouseenter: function () {
            $(this).find('.subNav').stop(true, true).slideDown(500);
        },
        mouseleave: function () {
            $(this).find('.subNav').stop(true, true).delay(300).slideUp(500);
        }
    });
	
});