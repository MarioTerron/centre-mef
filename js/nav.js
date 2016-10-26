$(function() {
  $('.header, .header--sm, .contact, .location, .charities').prepend('<div class="overlay">');
  $('#nav-open').click(function() {$('html').addClass('active');});
  $('#nav-close').click(function() {$('html').removeClass('active');});
  $('.nav__item').click(function() {$('html').removeClass('active');});
});
