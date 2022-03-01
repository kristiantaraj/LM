$(document).ready(function(){

    $(window).on('load scroll', function () {
        var scrolled = $(this).scrollTop();
        $('#title').css({
            'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
            'opacity': 1 - scrolled / 400 // fade out at 400px from top
        });
        $('#hero-vid').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
    });
    

    $('.toggles p').click(function(){
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);
    
          $('.post').not( get_current ).hide(500);
          get_current.show(500);
      });
      
      
      $('#showall').click(function() {
          $('.post').show(500);
      });

    // $(window).scroll(function(){
    //     if ($(this).scrollTop() > 150) {
    //        $('.navbar-main').addClass('color');
    //     } else {
    //        $('.navbar-main').removeClass('color');
    //     }
    // });

    // $('.slick-slider').slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 700,
    //   autoplay:true,
    //   autoplaySpeed: 1000,
    //   arrows:false,
    //   slidesToShow: 5,
    //   slidesToScroll: 1
    // });

   

      setTimeout( $(".contain p").click(function() {
        $('.post').toggleClass('fade-in-image');
      }), 1000);
     
    // setTimeout(function thisDo() {
    //     $('.hide').removeClass('hide');
    //     $('.main').addClass('fade-in');
    // }, 3000);


    // function TimedEvent() {
    //     $('.loader').addClass('hide');
    //     $('.titled').addClass('hide');
    //   };
    //   setTimeout(TimedEvent, 3000);

(function($) { "use strict";

$(function() {
    var header = $(".start-style");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
        } else {
            header.removeClass("scroll-on").addClass('start-style');
        }
    });
});		
    
//Animation

$(document).ready(function() {
    $('body.hero-anime').removeClass('hero-anime');
});

//Menu On Hover
    
$('body').on('mouseenter mouseleave','.nav-item',function(e){
        if ($(window).width() > 750) {
            var _d=$(e.target).closest('.nav-item');_d.addClass('show');
            setTimeout(function(){
            _d[_d.is(':hover')?'addClass':'removeClass']('show');
            },1);
        }
});	

})(jQuery); 
});

