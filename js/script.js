$(document).ready(function() {

	//menu scroll
	$('.nav-link-wrapper a').click(function () {
				$('html, body').animate({
					scrollTop: $($(this).attr('href')).offset().top
				}, 500);
				return false;
			});

	//radio button selection
	$('.option span,.option img').click(function(){
		$(this).parent().toggleClass('optionSelected');	
		if($(this).parent().hasClass('optionSelected')){
			$(this).parent().find('img').attr('src','img/radio-selected.png');		
		}
		else{
			$(this).parent().find('img').attr('src','img/radio.png');			
		}
		
	});

	//offer close button click
	$('.close-button img').click(function(){
		$('.promotional-offers').hide();
	});

	//needle circle hover	
	$(".point-circle").hover(function(){
	    $(this).parent().css("border", "2px solid red");

	  /*  if($(this).parents('.needle-point').hasClass('point-a')){
	    	$(this).parents('.needle-point').css('top','-50%');
	    }else if($(this).parents('.needle-point').hasClass('point-b')){
	    	$(this).parents('.needle-point').css('top','0%');
	    }else{
	    	$(this).parents('.needle-point').css('top','-35%');
	    }
	    */
	    //$('.apop,.popup-container').show();
	    $(this).parents('.needle-point').children('.arrow-container').show();
	    $(this).parents('.needle-point').children('.point-popup').show();
    }, function(){
    $(this).parent().css("border", "2px solid white");
   /* if($(this).parents('.needle-point').hasClass('point-a')){
	    	$(this).parents('.needle-point').css('top','0%');
	}else if($(this).parents('.needle-point').hasClass('point-b')){
	    	$(this).parents('.needle-point').css('top','50%');
	    }else{
	    	$(this).parents('.needle-point').css('top','9%');
	    }*/
	    	//$('.apop,.popup-container').hide();
    $(this).parents('.needle-point').children('.arrow-container').hide();
    $(this).parents('.needle-point').children('.point-popup').hide();
});
});