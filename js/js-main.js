(function( $ ) {
	"use strict";

	var viewport = jQuery(window).width();
  	$("#headteams").owlCarousel({
  		nav: false,
  		navText: false,
  		dots: false,
  		items: 12,
      margin: 15,
  		responsive: false,
  		autoWidth: false,
  	});
  	if(viewport > 530) {
	  	$(".foothead-sponsors").owlCarousel({
			nav: false,
			navText: false,
			dots: false,
			items: 5,
			responsive: false,
			autoWidth: true
	  	});
	} else {
		$(".foothead-sponsors").owlCarousel({
			nav: false,
			navText: false,
			dots: false,
			items: 1,
			responsive: false,
			autoWidth: false
	  	});
	}
    if(viewport > 768) {
		/* COMPETITOR-SECTION */
        $("#competitor-list").owlCarousel({
            nav: false,
            navText: false,
            dots: true,
            autoWidth: false,
            responsive: {
            	0:{
            		items: 4
				},
				992: {
            		items: 5,
				}
			},
        });
    }
    if(viewport > 992) {
		/* MATCH-SECTION */
        var matchSlider = jQuery("#match-slider").owlCarousel({
            nav: true,
            navText: ['PREV', 'NEXT'],
            loop: false,
            navSpeed: 500,
            dots: false,
            items: 1,
            responsive: false,
        });

        var matchSliderObj = $('#match-slider').data('owlCarousel');

        jQuery('section#schedule a.next').on('click tap', function() {
            jQuery('section#schedule .owl-nav .owl-next').click();
        });
        jQuery('section#schedule a.prev').on('click tap', function() {
            jQuery('section#schedule .owl-nav .owl-prev').click();
        });
    }
  	/* SINGLE-POST */
  	if(viewport > 768) {
	  	var releated = $("#releated-news").owlCarousel({
			nav: false,
			navText: false,
			dots: false,
			items: 3,
			responsive: false,
			autoWidth: true,
	  	});

		$('.latest-articles .arrows a.next').click(function() {
            jQuery('#releated-news .owl-nav .owl-next').click();
		})
		$('.latest-articles .arrows a.prev').click(function() {
            jQuery('#releated-news .owl-nav .owl-prev').click();
		})
	}

	$('#hero').find('#play-hero-video').on('click tap', function() {
	    $(this).fadeOut();
        document.getElementById('hero-video').play();
    });
  	$('form#application-sign-up').submit(function(event) {
  	    event.preventDefault();

  	    var email = $(this).find('input.email-signup').val();

        $.post(ajaxurl, { action: 'pixieclash_add_application', email: email }, function(output) {
            return true;
        });
        $(this).html('Submitted!');

    });
  	$('form#application-sign-up input.email-signup').on('click tap', function() {
  	    $(this).val('');
    });
  	$('.preview-box .play').on('click tap', function(event) {
        event.preventDefault();

  		$(this).parent().find('iframe').show();
  		$(this).parent().find('.caption').hide();
        $(this).parent().find('iframe').attr("src", $(this).parent().find('iframe').attr("src").replace("autoplay=0", "autoplay=1"));

        $(this).hide();

        return true;
    });
  	$('section#standing article.table table tbody tr td:not(:first-child)').hover(function(event) {
        event.preventDefault();

  	    var rel = $(this).attr('rel');
  	    var id = $('section#standing article.table table thead tr th[rel="' + rel +'"]').addClass('whiteHover');
    }, function() {
        var id = $('section#standing article.table table thead tr th').removeClass('whiteHover');
    });


}(jQuery));