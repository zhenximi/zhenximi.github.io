/*!
 * Myscripts.js for portifolio
 * Copyright (c) 2015 Zhenxi MI - zhenxi.mi<a>gmail<d>com | http://zhenximi.me
 * https://github.com/zhenximi/zhenximi.github.io/tree/master/js
 * @author Zhenxi Mi
 * @version 1.0
 */

console.log('Hi, there!\nThank you for visiting my portifolio site.\nPlease contact me via zhenxi.mi@gmail.com.')

// Onload

window.onload=function(){
    $('#frontpage').addClass("fadeIn");
    $('#frontpage').css('opacity',1);
    // Reset last scroll position
    setTimeout(function(){
        scrollTo(0,-1);
    },0);
}

//Fire CSS animations after page loaded
$(window).load(function() {
  $("body").removeClass("preload");
});

//Fix the problem with menu didn't collapse after clicked 
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

//Snapping section
// $(document).ready(function() {
//     $(document).scrollsnap({
//         snaps: '.snap',
//         proximity: 150
//     });
// });
$(function() {
  var runonce = false;
  var heightLimit = $(window).height() - 110;
  $(window).bind('scroll', function () {
    console.log($(window).scrollTop());
    console.log($(window).height());
    console.log('h',heightLimit);
    $(document).ready(function() {
      if ($(window).scrollTop() > 100 && $(window).scrollTop() < heightLimit && runonce == false) {
        var target = $('#design')
        $('html,body').animate({
              scrollTop: target.offset().top
            }, 500);
        runonce = true;
        console.log('here');
      }
    });
  });
});



// Nav position
$(window).bind('scroll', function () {
  var pageHeight = $(window).height() - 50;
  if ($(window).width() > 768) {
    if ($(window).scrollTop() > pageHeight){
            $("#navbar").addClass('fixed');
            $("#design").addClass('top-offset');
            // $('#logo').addClass('logo-fix');
        } else {
            $("#navbar").removeClass('fixed');
            $("#design").removeClass('top-offset');
            // $('#logo').removeClass('logo-fix');
        }
  }     
});

$(function() {
  "use strict";
  $('body').scrollspy({
    target: '#navbar', offset:15
  });
  $("#myScrollspy").scrollspy({target: ".navbar"});
    $(".navbar").on("activate.bs.scrollspy", function(){
        var x = $(".nav li.active > a").text();
        if (x == "ABOUT ME") {
          $('.navbar').css('background-color', 'transparent'); 
          $('#nav-toggle').css('border-bottom', '0px solid rgba(3, 3, 3, .85)'); 
        } else {
          $('.navbar').css('background-color', 'rgba(255, 255, 255, 1)'); 
          $('#nav-toggle').css('border-bottom', '1px solid rgba(3, 3, 3, .85)'); 
        }
  });
});


$(function() {

  "use strict";

  var menuOffset = 50; //variable for menu height
  var wheight = $(window).height(); //get the height of the window
  if ($(window).width() > 768) {
    $('.fullheight').css('height', wheight - menuOffset); //set to window tallness 
    $('.fullscreen').css('height', wheight); 
  } else {
    $("#navbar").addClass('fixed');
    $('.fullheight').css('height', wheight); //set to window tallness
    $('.fullscreen').css('height', wheight);
  }
  


  //adjust height of .fullheight elements on window resize
  $(window).resize(function() {
    wheight = $(window).height(); //get the height of the window
    $('.fullheight').css('height', wheight - menuOffset); //set to window tallness
    $('.fullscreen').css('height', wheight);
  });

});