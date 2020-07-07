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
      $('.jumbotron').hide();
      $('.download-jumbo').hide();
  });

  $('.close').click(function(){
      $('.menu-mobile').hide();
      $('.close').hide();
      $('.fa-bars').show();
      $('.jumbotron').show();
      $('.download-jumbo').show();
  });



  $('.menu-mobile li').click(function() {
    $(this).children('.dropdown-mobile').toggle();

  });


});
