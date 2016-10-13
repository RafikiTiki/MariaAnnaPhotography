$(document).ready(function(){
	$('.menu__burger').on("click", function(){
		$(this).toggleClass('open');
        $(this).next().slideToggle();
	});
});
