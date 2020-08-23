

/* Activando un item del menu mediante un click */
$(document).ready(function(){
	$('.navbar-nav li a').on('click', function(){
		$('.navbar-nav li a').parent().removeClass('active');
		$(this).parent().addClass('active')
	});
});

/* Activando un item del menu mediante el scroll */
$(document).ready(function(){
	$(window).scroll(function(){
		$('section').each( function(){
			var bb = $(this).attr('id');
			var hei = $(this).outerHeight();
			var grttop = $(this).offset().top - 70;

			if($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei){
				$(".navbar-nav li a[href='#"+ bb +"']").parent().addClass('active');
			}else {
				$(".navbar-nav li a[href='#"+ bb +"']").parent().removeClass('active');
			}
		});
	});
});

/* Añadir auto-padding para el centrado del header */
$(document).ready(function(){
	setInterval( function(){
		var windowHeight = $(window).height();
		var containerHeight =$('.header-container').height();
		var padTop = windowHeight - containerHeight;

		$('.header-container').css({
			'padding-top':Math.round( padTop/2)+'px',
			'padding-bottom':Math.round( padTop/2)+'px'
		});
	},10)
});

/* bxslider */
$(document).ready(function(){
  $('.bxslider').bxSlider({
  	slideWidth: 292.5,
  	auto: true,
  	minSlides: 1,
  	maxSlides: 3,
  	slideMargin: 50	
  });
});

/* bfintal / contador */
$('.counter-run').counterUp({
    delay: 10,
    time: 2000
});



jQuery('codigobarras.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('img');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});


