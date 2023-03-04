const home = $('#home');
const activity = $('#activity');
const navbar = $('.navbar');
let timer;
let target = $('.atividades');

$(".nav-item").on("mouseover", function(){
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });
  
  $(".nav-item").on("mouseout", function(){
    $(".nav-item").removeClass("active");
    if($(window).scrollTop() <= 1048){
     $('#home').addClass("active");
    } else {
      $('#activity').addClass("active");
    }
  });
  
  $('#content1, header').on({
    mouseenter: function() {
      $(document).on('mousemove', mousemoveHandler);
    },
    mouseleave: function() {
      $(document).off('mousemove', mousemoveHandler);
    }
  });
  
  function mousemoveHandler(e) {
    let bubles = $('<bubles>');
    let x = e.pageX;
    let y = e.pageY;
    bubles.css({
        'left': x + "px",
        'top': y + "px"
    });
    let size = Math.random() * 10;
    bubles.css({
        'width': 1 + size + "px",
        'height': 1 + size + "px"
    });
  
    $('body').append(bubles);
    setTimeout(function() {
      bubles.remove();
    }, 1100);
  }
  

$(document).on('scroll', function(){
  requestAnimationFrame(function(){
    const scrollTop = $(document).scrollTop();
    if(scrollTop <= 1048){
      home.addClass("active")
      activity.removeClass('active');
    } else{
      home.removeClass("active");
      activity.addClass('active');
    }
  });
});

$(window).scroll(function(){
 navbar.toggleClass('scrolled',$(this).scrollTop()>50);
})

$(".icon").on("mouseover", function(){
  if($(document).scrollTop() <= 20){
    $(this).css("color", "white").delay(200);
  } else {
    $(this).css("color", "#068D9D").delay(200);
  }
});
$(".icon").on("mouseout", function(){
  $(this).css("color", "black").delay(200);
});

$(window).on('load', function(){
  $('.bg-image').toggleClass('bounce-in-top')
  $('#title, #title2').toggleClass('tracking-in-expand-fwd-bottom')
})

$('#bttn-act').on('click', function() {
    $('html, body').animate({
      scrollTop: target.offset().top
  }, 600);
});

$('.scroll-text').on('click', function() {
  $('html, body').animate({
    scrollTop: target.offset().top
  }, 600);
});

$(".arrow").click(function(event) {
  event.preventDefault();
  $("html, body").animate({  scrollTop: target.offset().top
  }, 600);
});

activity.click(function(event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: target.offset().top
  }, 600);
});

$('.atividades').on('mouseenter', function(){
  if (!$('.white-board').hasClass('gradient-border')) {
    $('.white-board').toggleClass('gradient-border');
  }
});

$('.atividades').on('mouseleave', function(){
  if ($('.white-board').hasClass('gradient-border')) {
    $('.white-board').toggleClass('gradient-border');
  }
});

$('.atividades').on('mouseenter', function(){
  if (!$('.white-board').hasClass('gradient-border')) {
    $('.white-board').toggleClass('gradient-border');
  }
});

$('.atividades').on('mouseenter', function(){
  if ($('.atividades h2').hasClass('text-blur-out')) {
    $('.atividades h2').removeClass('text-blur-out').addClass('text-focus-in');
  } else {
    $('.atividades h2').addClass('text-focus-in');
  }
});

$('.atividades').on('mouseleave', function(){
  if ($('.atividades h2').hasClass('text-focus-in')) {
    $('.atividades h2').removeClass('text-focus-in').addClass('text-blur-out');
  } else {
    $('.atividades h2').addClass('text-blur-out');
  }
});
