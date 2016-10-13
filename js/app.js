$(document).ready(function(){
    var menuBurger = $(".menu__burger");

    $("body").on("mouseup touchend ", function(e) {
        var bool1 = menuBurger.hasClass("open");
        var bool2 = !menuBurger.next().is(e.target);                                        // menu is not a target of an event
        var bool3 = menuBurger.next().has(e.target).length === 0;                           // nor menu items
        var bool4 = !(menuBurger.is(e.target)) && (menuBurger.has(e.target).length === 0);  // nor burger itself
        if (bool1 && bool4 && bool2 && bool3 && bool4) {
            menuBurger.removeClass('open');
            menuBurger.next().slideUp();
        }
    });

	$('.menu__burger').on("click", function(){
		menuBurger.toggleClass('open');
        menuBurger.next().slideToggle();
	});
});
