$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade"
  });
});

if ($('body:after').val('twenty')) {

	$(function() {									//run when the DOM is ready
		$('#mobnav').removeClass('hidden');
		$('.open').click(function() {				//use a class, since your ID gets mangled
			$('#mobnav').addClass('active');		//add the class to the clicked element
		});
	});
}