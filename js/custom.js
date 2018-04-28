// Rotate chevron when opening dropdown

$('.dropdown-chevron').on('click', function() {
  $(this).find('.fas').toggleClass('dropdown-chevron-up dropdown-chevron-down');
});

$('#dropdown-animate').on('hide.bs.dropdown', function (e) {
  var i = $(e.relatedTarget).find('.fas');
  i.removeClass('dropdown-chevron-down').addClass('dropdown-chevron-up');
});

// Flip in dropdown using animate.css

$('#dropdown-animate').on('show.bs.dropdown', function () {
  $('.dropdown-menu').addClass('animated flipInX').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd',
  	function() {
  		$(this).removeClass('animated flipInX');
  	});
});

$('#dropdown-animate').on('hide.bs.dropdown', function (e) {
	e.preventDefault();
  	$('.dropdown-menu').addClass('animated flipOutX').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd',
  	function() {
  		$(this).removeClass('show animated flipOutX');
  		$('.dropdown').removeClass('show');
  	});
});

