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
  $('#nav-icon4').click(function(){
    $(this).toggleClass('open');
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
      if ($(window).scrollTop() > 70 && $(window).scrollTop() < heightLimit && runonce == false) {
        var target = $('#design')
        $('html,body').animate({
              scrollTop: target.offset().top
            }, 300);
        runonce = true;
      }
    });
  });
});

//fix modal can't scroll with arrow up and down
$('.modal a:first-child').focus();

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  if ($(window).scrollTop() < $(window).height()*0.7) {
  $('#frontpage').css({
    'transform' : 'translate(0px, -'+ wScroll /5+'%)'
  });    
  }
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
  var mywindow1 = $("#tapture-project");
  var mypos = mywindow1.scrollTop();
  var up = false;
  var newscroll;  
  mywindow1.scroll(function () {
    newscroll = mywindow1.scrollTop();
      if (newscroll > mypos && !up) {
          $('#tapture-go-top').addClass('hidden');
          up = !up;
      } else if(newscroll < mypos && up) {
          $('#tapture-go-top').delay( 1000 ).removeClass('hidden');
          $('#tapture-go-top').delay( 1000 ).addClass('bounceUp');
          up = !up;
      }
      mypos = newscroll;
  });
});

$(function() {
  var mywindow2 = $("#shift-project");
  var mypos = mywindow2.scrollTop();
  var up = false;
  var newscroll; 
  mywindow2.scroll(function () {
    newscroll = mywindow2.scrollTop();
      if (newscroll > mypos && !up) {
          $('#shift-go-top').addClass('hidden');
          up = !up;
      } else if(newscroll < mypos && up) {
          $('#shift-go-top').delay( 1000 ).removeClass('hidden');
          $('#shift-go-top').delay( 1000 ).addClass('bounceUp');
          up = !up;
      }
      mypos = newscroll;
  });

});

$(function() {
  var mywindow3 = $("#wekart-project");
  var mypos = mywindow3.scrollTop();
  var up = false;
  var newscroll;
  mywindow3.scroll(function () {    
    newscroll = mywindow3.scrollTop(); 
      if (newscroll > mypos && !up) {
          $('#wekart-go-top').addClass('hidden');
          up = !up;
      } else if(newscroll < mypos && up) {
          $('#wekart-go-top').delay( 1000 ).removeClass('hidden');
          $('#wekart-go-top').delay( 1000 ).addClass('bounceUp');
          up = !up;
      }
      mypos = newscroll;
  });

});


$(function() {
  var mywindow3 = $("#simple-review-project");
  var mypos = mywindow3.scrollTop();
  var up = false;
  var newscroll;
  mywindow3.scroll(function () {    
    newscroll = mywindow3.scrollTop(); 
      if (newscroll > mypos && !up) {
          $('#simple-review-go-top').addClass('hidden');
          up = !up;
      } else if(newscroll < mypos && up) {
          $('#simple-review-go-top').delay( 1000 ).removeClass('hidden');
          $('#simple-review-go-top').delay( 1000 ).addClass('bounceUp');
          up = !up;
      }
      mypos = newscroll;
  });

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
          $('.navbar').css('background-color', 'rgba(255, 255, 255, .9)'); 
          $('#nav-toggle').css('border-bottom', '1px solid rgba(3, 3, 3, .85)'); 
        }
  });
});


$(function() {

  "use strict";

  var menuOffset = 50; //variable for menu height
  var wheight = $(window).innerHeight(); //get the height of the window
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
    if ($(window).width() > 768) {
      wheight = $(window).innerHeight(); //get the height of the window
      $('.fullheight').css('height', wheight - menuOffset); //set to window tallness
      $('.fullscreen').css('height', wheight);
    }
  });

  
});

$(document).ready(function() {

    $(".fancybox").fancybox({
      openEffect  : 'elastic',
      closeEffect : 'elastic',

      helpers : {
        title : {
          type : 'inside'
        }
      }
    });

});

// var myVideo1 = $('#player_uid_195758569_1'); 
// $('#tapture-button-iphone').hover(function(){
//     myVideo1.get(0).play();
//     $('#tapture-button-iphone').addClass('hidden');
// });

// var myVideo2 = $('#tapture-video-watch'); 
// $('#tapture-button-watch').hover(function(){
//     myVideo2.get(0).play();
//     console.log("button is hovered")
//     $('#tapture-button-watch').addClass('hidden');
// });
