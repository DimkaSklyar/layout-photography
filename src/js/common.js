$(document).ready(function() {


var touch = $('#touch-menu');
    var menu = $('.nav');
 
    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});


    // $('.block').each(function(){
    //     $(this).width($(this).width() - ($(this).width()%1));
    // });

});