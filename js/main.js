$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade"
  });
});

(function() {
	var size = window.getComputedStyle(document.body,':after').getPropertyValue('content');
	// var size = $('body:after').css('content');
	// console.log(size);
	if (size === 'twenty') {

		(function() {

		// Initialising Mobile Navigation
			$('#mobnav').removeClass('hidden');
			$('#mainnav').addClass('hidden');
			$('#mobnav').addClass('active');
			$('#mobnav>ul ul').siblings('a').addClass('icon');	// icon-angle in Nav-Elements with dropdown-sub-nav-elements

		// Open/Close Navigation + Toggle Nav-Buttons
			$('.open').on('click', function(e) {
				e.preventDefault();		//preventing the anchor tags from following any links or changing the address in the address bar
				$('div.wrapper').addClass('mobilemenu');
					// .css('position','fixed');
				$(this).css(
					{'display':'none',
					'visibility':'hidden'
					});
				$('.close').css(
					{'display':'block',
					'visibility':'visible'
					});
				$('#mobnav ul ul').removeClass('mobdropdown');			// Hide all dropdowns
			});
			$('.close').on('click', function(e) {
				e.preventDefault();		//preventing the anchor tags from following any links or changing the address in the address bar
				$('div.wrapper').removeClass('mobilemenu');
				$(this).css(
					{'display':'none',
					'visibility':'hidden'
					});
				$('.open').css(
					{'display':'block',
					'visibility':'visible'
					});
			});

		// Dropdown-Elements in Mobile Nav

			// set class 'mobdropdown'
			$('#mobnav>ul>li a').on('click', function(e) {
				e.preventDefault();		//preventing the anchor tags from following any links or changing the address in the address bar
				if ($(this).closest('li').children('ul').hasClass('mobdropdown')) {		//if dropdown already open -> close it
						$('#mobnav ul ul').removeClass('mobdropdown');
					}
				else {
					$('#mobnav ul ul').removeClass('mobdropdown');	//first remove all 'mobdropdown' classes
					$(this).parents().children('ul')				//then add class to specific ul
					.addClass('mobdropdown');
				}
			});

		})();
	}

})();
