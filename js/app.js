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

    // smooth scroll
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    // this fixes smooth scroll when #nav menu is fixed
                    var stickyMenuModifier;
                    (target.attr("id") === "home" || target.attr("id") === "nav") ? stickyMenuModifier = 0 : stickyMenuModifier = menuHeight;
                    // close mobile menu on scroll
                    // console.log(target.attr("id"));
                    // console.log($(target) == $("#home"));
                    // console.log(target == $("#nav"));
                    console.log(stickyMenuModifier);
                    menuBurger.removeClass('open');
                    menuBurger.next().slideUp();
                    $('html, body').animate({
                        scrollTop: (target.offset().top - stickyMenuModifier)
                    }, 800);
                    return false;
                }
            }
        });
    });

    // events that handle making menu fixed
    var menuContainer = $("#nav");
    var scrollValueAfterWhichMakeFixed = menuContainer.offset().top;
    var html = $("html");
    var menuHeight = menuContainer.height();
    var headingAfterMenu = $(".about__title");
    var HeadingMarginMin = headingAfterMenu.css("margin-top");
    var headingMarginMax = parseInt(headingAfterMenu.css("margin-top")) + menuHeight + "px";
    // fixing and unfixing menu based on present scroll value
    $(window).on("scroll", function() {
        if (html.scrollTop() >= scrollValueAfterWhichMakeFixed) {
            menuContainer.addClass("nav--fixed");
            headingAfterMenu.css("margin-top", headingMarginMax);
        } else {
            menuContainer.removeClass("nav--fixed");
            headingAfterMenu.css("margin-top", HeadingMarginMin);
        }
    });
});
