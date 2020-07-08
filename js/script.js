$(document).ready(function() {
  $('.menu-navbar li').mouseenter(function() {
    $(this).children('.dropdown-square').show();
  });

  $('.menu-navbar li').mouseleave(function() {
      $(this).children('.dropdown-square').hide();
  });


  $('.fa-bars').click(function(){
      $('.menu-mobile').show();
      $('.fa-bars').hide();
      $('.close').show();
  });

  $('.close').click(function(){
      $('.menu-mobile').hide();
      $('.close').hide();
      $('.fa-bars').show();
  });

// apertura e chiusura dropdown menu
  $('.menu-mobile li').click(function() {
    $(this).children('.dropdown-mobile').toggle();
  });


});
