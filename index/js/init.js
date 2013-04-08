// JavaScript Document
(function($) {
	$(document).ready();
	
    $('.slide').cycle({
		speed:  'fast',
		pager:  '#breadcrumb',  
    	next:   '#next', 
    	prev:   '#prev',

		pagerAnchorBuilder: function(idx, slide) { 
        return '<a href="#"></a>'; 
    }
	});

	$('.slide2').cycle({
		fx:      'scrollLeft',
		speed:  4000,
		});	

})(jQuery);
