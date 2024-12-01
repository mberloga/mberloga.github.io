         $(document).ready(function(){

          var heroSlider = $('.hero_carosel');


          heroSlider.on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace)  {
              return;
            }
            var carousel = e.relatedTarget;
            $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
          }).owlCarousel({   
           animateOut: 'fadeOut',
           animateIn: 'fadeIn',
           autoplay: true,
           loop:true,
           margin:0,
           nav: false,
           dots: false,
           autoHeight: false,
           mouseDrag: false,
           autoplayHoverPause:true,
           items: 1,
           navText: [
           "<i class=' owl-direction'><</i>",
           "<i class='owl-direction'>></i>"
           ]
         });




          $(".owl-item.active .tag").addClass('animated fadeInUp delay-1');
          $(".owl-item.active h2").addClass('animated fadeInUp delay-2');
          $(".owl-item.active .carsl_cnt").addClass('animated fadeInUp delay-3');
          $(".owl-item.active .carsl_btn").addClass('animated fadeInUp delay-4');


          $(".hero_carosel").on('change.owl.carousel', function(event) {

            var item = event.item.index-2;


            $('.tag').removeClass('animated fadeInUp delay-1');
            $('h2').removeClass('animated fadeInUp delay-2');
            $('.carsl_cnt').removeClass('animated fadeInUp delay-3');
            $('.carsl_btn').removeClass('animated fadeInUp delay-4');
            $('.owl-item').not('.cloned').eq(item).find('.tag').addClass('animated fadeInUp delay-1');
            $('.owl-item').not('.cloned').eq(item).find('h2').addClass('animated fadeInUp delay-2');
            $('.owl-item').not('.cloned').eq(item).find('.carsl_cnt').addClass('animated fadeInUp delay-3');
            $('.owl-item').not('.cloned').eq(item).find('.carsl_btn').addClass('animated fadeInUp delay-4');




          });


        });
         