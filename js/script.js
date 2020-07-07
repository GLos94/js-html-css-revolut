$(document).ready(function() {

  var itemCliccato = $('.menu-navbar li');
  var dropActive = $('.dropdown-square.active');
  itemCliccato.click(function () {
  dropActive.removeClass('active');
    $(this).siblings().addClass('active');
    console.log(dropActive);
   })

   if (dropActive.hasClass('active')) {
     itemCliccato.mouseenter(function () {
        $('.dropdown-square').toggle();
      });
   }

   $('dropdown-square').eq();
   console.log('dropdown-square'.length);

 });


   // $(document).ready(function() {
   //  $('.menu-navbar li').mouseenter(function() {
   //    $('.dropdown-square').toggle();
   //   });
   // });
