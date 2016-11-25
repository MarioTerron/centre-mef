$(function() {
	$('.header, .header--sm, .charities, .location, .contact').prepend('<div class="overlay">');
  	$('#nav-open').click(function() {$('html').addClass('active');});
  	$('#nav-close').click(function() {$('html').removeClass('active');});
  	$('.nav__item').click(function() {$('html').removeClass('active');});
	$('.overlay').click(function() {$('html').removeClass('active');});
});
