var size = null;
size = $('body:after').val();

if ($('body:after').val()==="twenty") {
	$(function() {
		$('#mobnav').removeClass('hidden');
		$('.open').click(function() {				//use a class, since your ID gets mangled
			$('#mobnav').addClass('active');		//add the class to the clicked element
		});
	});
}	// End if twenty