/*!
 * Myscripts.js for portifolio
 * Copyright (c) 2015 Zhenxi MI - zhenxi.mi<at>gmail<d>com | http://zhenximi.me
 * https://github.com/zhenximi/zhenximi.github.io/tree/master/js
 * @author Zhenxi Mi
 * @version 1.0
 */

// Onload
window.onload=function(){
  // Reset last scroll position
  setTimeout(function(){
      scrollTo(0,-1);
  },0);

  //Detect client's local time
  var now = new Date(),
  h = now.getHours(),
  greeting;
  if (h < 4 || h > 21){
    greeting = "good night!";
  }
  else if (h >= 4 && h <= 12) {
    greeting = "good morning!";
  }
  else if (h > 12 && h <= 18) {
    greeting = "good afternoon!";
  }
  else if (h > 18 && h <= 21) {
    greeting = "good evening!";
  }
  $('#greetings').append("<span>" + greeting + "</span>");
  console.log("Hi, " + greeting + " This is Zhenxi Mi.\nThank you for visiting my portifolio site.\nPlease contact me via zhenxi.mi@gmail.com.");
};

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
    $(document).ready(function() {
      if ($(window).scrollTop() > 100 && $(window).scrollTop() < heightLimit && runonce == false) {
        var target = $('#design')
        $('html,body').animate({
              scrollTop: target.offset().top
            }, 500);
        runonce = true;
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

var myVideo1 = $('#tapture-video-iphone'); 
$('#tapture-button-iphone').click(function(){
    myVideo1.get(0).play();
    $('#tapture-button-iphone').addClass('hidden');
});

var myVideo2 = $('#tapture-video-watch'); 
$('#tapture-button-watch').click(function(){
    myVideo2.get(0).play();
    $('#tapture-button-watch').addClass('hidden');
});
