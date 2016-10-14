$(document).ready(function(){
    // it's the best solution that came to my mind to eliminate #header resize on mobile when browser toolbar disappears on scroll
    var height = $(window).height();
    if(height < 560) {
        $("#home").height(560);
    } else {
        $("#home").height(height);
    }


    // events handling menu on mobile
    var menuBurger = $(".menu__burger");
    
    $("body").on("click", function(e) {
        var bool1 = menuBurger.hasClass("open");
        var bool2 = !menuBurger.next().is(e.target);                                        // menu is not a target of an event
        var bool3 = menuBurger.next().has(e.target).length === 0;                           // nor menu items
        var bool4 = !(menuBurger.is(e.target)) && (menuBurger.has(e.target).length === 0);  // nor burger itself
        if (bool1 && bool4 && bool2 && bool3 && bool4) {
            menuBurger.removeClass('open');
            menuBurger.next().slideUp();
        }
    });

	menuBurger.on("click", function(){
		menuBurger.toggleClass('open');
        menuBurger.next().slideToggle();
	});

    // setting up unslider plugin
    $(".my-slider").unslider({
        infinite: true,
        autoplay: true,
        delay: 4500,
        arrows: false
    });
});
