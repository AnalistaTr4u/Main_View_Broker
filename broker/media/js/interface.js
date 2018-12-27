$(document).ready( function(){
	productColumns();
	headerOffset();

	$(window).load(function(){
		productColumns();
	});

	$(window).resize(function(){
		productColumns();
		headerOffset();
	});

	wow = new WOW({
       mobile: false      
  	});

  	wow.init();


  	$('.js-signal-command').click(function(e){
  		e.preventDefault();
  		$('.signals').toggleClass('visible');
  	});

  	$('.column-box').each(function(){
  		$(this).clone().appendTo('.product-carousel').addClass('carousel-item').find('.title');
  	});

	
	/*-------------------------------------------------------------------------------
	  Scroll top
	-------------------------------------------------------------------------------*/

	if($(document).find('.scrollTop').length){ 
	  var scrollup = function(){
	     var wt = $(window).scrollTop();
	     var st = $('.scrollTop');
	     if(wt >= 50){
	        
	           st.fadeIn(300);
	       
	   }else{
	    if(st.is(':visible') && !st.is(':animated')){
	       st.fadeOut(300);
	    }
	   }
	}

	$(window).bind('scroll',scrollup);
		$('.scrollTop').bind('click',function(e){
		 	e.preventDefault();
		 	$('html:not(:animated),body:not(:animated)').stop().animate({scrollTop: 0}, 600);
		});
	}

	/*-------------------------------------------------------------------------------
	  Navigation
	-------------------------------------------------------------------------------*/

	$('.navbar-nav').onePageNav({
	    currentClass: false,
	    changeHash: false,
	    scrollSpeed: 2000,
	    scrollThreshold: 0.5,
	    filter: '',
	});

	$('.js-scroller').click(function(e){
		var href=$(this).attr('href');
		 $('html, body').animate({
       	 scrollTop: $(href).offset().top
    	}, 2000);
		e.preventDefault();
	});


	/*-------------------------------------------------------------------------------
	  Feature carousel
	-------------------------------------------------------------------------------*/


	$('.feature-carousel').owlCarousel({
	 	responsiveRefreshRate:1,
	 	loop:true,
	 	slideSpeed : 500,
	 	itemsCustom : [
	        [320, 1],
	        [768, 2],
	        [992, 3]
	      ],
	 	addClassActive:true,
	 	navigation : true,
	 	afterInit:function(){
	 		$('.owl-item').eq(1).addClass('centred');
	 	},
	     afterAction: function() { 
	    	$('.owl-item').removeClass('centred');
	    	$('.owl-item.active').eq(1).addClass('centred');
	    }
	});

	/*-------------------------------------------------------------------------------
	  Products carousel
	-------------------------------------------------------------------------------*/

	$('.product-carousel').owlCarousel({
	 	items : 2,
	 	responsiveRefreshRate:1,
	 	loop:true,
	 	slideSpeed : 500,
	 	itemsCustom : [
	        [0, 1],
	        [480, 2]
	      ],
	 	addClassActive:true,
	 	navigation : true
	});

	/*-------------------------------------------------------------------------------
	  Review carousel
	-------------------------------------------------------------------------------*/

	$('.review-carousel').owlCarousel({
	 	items : 2,
	 	responsiveRefreshRate:1,
	 	loop:true,
	 	slideSpeed : 500,
	 	itemsCustom : [
	        [0, 1],
	        [991, 2]
	      ],
	 	addClassActive:true,
	 	navigation : true
	});

	// $("form").submit(function(event) {

	// 	var $form = $(this);

	// 	$form.find(".modal-footer").fadeOut();

	// 	$.ajax({
	// 		type: "POST",
	// 		url: $form.attr("action"),
	// 		data: $form.serialize(),
	// 			success: function(response) {

	// 				$('.form-group').removeClass("has-error");

	// 				if (response.error) {

	// 					$form.find(".modal-footer").fadeIn();

	// 					$.each(response.error, function(o, d) {
	// 						if (d.type == "alert") {
	// 							alert(d.message);
	// 						} else {

	// 							alert(d.message);

	// 							$this = $(d.hash);

	// 							$this.addClass("has-error");
	// 							//$this.find("label").html(d.message);
	// 							//$(d.hash).attr("placeholder", d.message).blur();
	// 						}
	// 					});

	// 				} else {
	// 					$form.find(".modal-body").html(response.message);
	// 					$form.find(".modal-footer").fadeOut();

	// 					setTimeout(function(){
	// 						$(".modal").modal('hide');
	// 					}, 5000);
	// 				}
	// 			},
	// 			error: function(response, status, error) {
	// 				alert("failure");
	// 			}
	// 		});

	// 		if (event.preventDefault) {
	// 			event.preventDefault();
	// 			event.stopPropagation();
	// 		} else {
	// 			event.returnValue = false;
	// 			event.cancelBubble = true;
	// 			return false;
	// 		}

	// 	});


});

function headerOffset(){
	var NavbarHeight=$('.navbar').outerHeight();
	$('[role="banner"]').css('padding-top',NavbarHeight + 'px');
}

function productColumns(){
	if ($(window).width() > 991){
		$('.row-columns .caption').each(function(){
			var captionHeight=$(this).height();
			var captionIndex=$(this).index();
			$('.row-columns .column-box').each(function(){
				$(this).find('.title').eq(captionIndex+1).height(captionHeight);
			});
		});
	}
}