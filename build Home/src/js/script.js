$(document).ready(function(){
			
'use strict';

$(function() {
	$('.feed__banner__title').click(function() {
		
		$('.feed__banner__title span').html('+');
		if($(this).hasClass('feed__banner__title-active')) {
			$(this).removeClass('feed__banner__title-active');
			$(this).next().slideUp();
		} 
		
		else {
			$('.feed__banner__text').slideUp();
			$('.feed__banner__title').removeClass('feed__banner__title-active');
			$(this).addClass('feed__banner__title-active');
			$(this).children('span').html('-');
			$(this).next().slideDown();
		}
	});
});
			
});		
						
