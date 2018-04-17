$('.nav-toggle').on('click', function(){
		$('#topmenu').toggleClass('active');
		});
		
$(document).ready(function () {
			  $('.sub > a').click(function(){
			    $('.sub ul').slideUp();
			     if ($(this).next().is(":visible")){
			         $(this).next().slideUp();
			     } else {
			     $(this).next().slideToggle();
			     }
			    return false;
			  });
			     $('.topmenu > ul > li > a').click(function(){
				 $('.topmenu > ul > li > a, .sub a').removeClass('active');
				 $(this).addClass('active');
				}),
			     $('.sub ul li a').click(function(){
				 $('.sub ul li a').removeClass('active');
				 $(this).addClass('active');
				});
});