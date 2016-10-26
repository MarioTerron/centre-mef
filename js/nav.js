$(function() {
	$('.header, .header--sm').prepend('<div class="overlay">');
    $('.contact').prepend('<div class="overlay">');
	$('.location').prepend('<div class="overlay">');
	$('.charities').prepend('<div class="overlay">');
  	$('#nav-open').click(function() {$('html').addClass('active');});
  	$('#nav-close').click(function() {$('html').removeClass('active');});
  	$('.nav__item').click(function() {$('html').removeClass('active');});
});
