// Rotate chevron when opening dropdown

$('.dropdown-chevron').on('click', function() {
  $(this).find('.fas').toggleClass('dropdown-chevron-up dropdown-chevron-down');
});

$('.article-list-animate').on('hide.bs.dropdown', function (e) {
  var i = $(e.relatedTarget).find('.fas');
  i.removeClass('dropdown-chevron-down').addClass('dropdown-chevron-up');
});

// Flip dropdown of article list using animate.css

$('.article-list-animate').on('show.bs.dropdown', function () {
  $('.article-list-menu-animate').addClass('animated flipInX').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd',
  	function() {
  		$(this).removeClass('animated flipInX');
  	});
});

$('.article-list-animate').on('hide.bs.dropdown', function (e) {
	e.preventDefault();
  	$('.article-list-menu-animate').addClass('animated flipOutX').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd',
  	function() {
  		$(this).removeClass('show animated flipOutX');
  		$('.article-list-animate').removeClass('show');
  	});
});

// Flip dropdown of language menu using animate.css

$('.language-animate').on('show.bs.dropdown', function () {
  $('.language-menu-animate').addClass('animated flipInX').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd',
    function() {
      $(this).removeClass('animated flipInX');
    });
});

$('.language-animate').on('hide.bs.dropdown', function (e) {
  e.preventDefault();
    $('.language-menu-animate').addClass('animated flipOutX').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd',
    function() {
      $(this).removeClass('show animated flipOutX');
      $('.language-animate').removeClass('show');
    });
});

