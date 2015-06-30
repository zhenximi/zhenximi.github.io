$(function() {

  "use strict";

  var topoffset = 50; //variable for menu height
  var wheight = $(window).height(); //get the height of the window
  $('.fullheight').css('height', wheight); //set to window tallness  


  //replace IMG inside carousels with a background image
  $('#page-top .cover-img img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });

  //adjust height of .fullheight elements on window resize
  $(window).resize(function() {
    wheight = $(window).height(); //get the height of the window
    $('.fullheight').css('height', wheight); //set to window tallness  
  });

});