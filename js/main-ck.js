$(window).load(function(){$(".flexslider").flexslider({animation:"fade"})});(function(){var e=window.getComputedStyle(document.body,":after").getPropertyValue("content");e==="twenty"&&function(){$("#mobnav").removeClass("hidden");$("#mainnav").addClass("hidden");$("#mobnav").addClass("active");$("#mobnav>ul ul").siblings("a").addClass("icon");$(".open").on("click",function(e){e.preventDefault();$("div.wrapper").addClass("mobilemenu");$(this).css({display:"none",visibility:"hidden"});$(".close").css({display:"block",visibility:"visible"});$("#mobnav ul ul").removeClass("mobdropdown")});$(".close").on("click",function(e){e.preventDefault();$("div.wrapper").removeClass("mobilemenu");$(this).css({display:"none",visibility:"hidden"});$(".open").css({display:"block",visibility:"visible"})});$("#mobnav>ul>li a").on("click",function(e){e.preventDefault();if($(this).closest("li").children("ul").hasClass("mobdropdown"))$("#mobnav ul ul").removeClass("mobdropdown");else{$("#mobnav ul ul").removeClass("mobdropdown");$(this).parents().children("ul").addClass("mobdropdown")}})}()})();