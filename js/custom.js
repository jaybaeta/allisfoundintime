// $('.dropdown-toggle').addClass(flipInX)
//   .one(animation_end, function(){ 
//     $(this).removeClass(flipinX);
//   });




//   $(function() {
//     $('.dropdown-toggle').hover(function() {
//         $('.dropdown').addClass('open');
//         $('.dropdown-menu').addClass('animated flipInX');

//     });
//     $('.dropdown').on('hide.bs.dropdown', function () {
//         $('.dropdown-menu').removeClass('animated flipOutX');
//     });
// });



//   function animationClick(element, animation){
//   element = $(element);
//   element.click(
//     function() {
//       element.addClass('animated ' + animation);
//       //wait for animation to finish before removing classes
//       window.setTimeout( function(){
//           element.removeClass('animated ' + animation);
//       }, 2000);
//     }
//   );
// };


$(".dropdown-toggle").click(function() {
  $('.dropdown-menu').toggleClass('animated flipInX');
});
