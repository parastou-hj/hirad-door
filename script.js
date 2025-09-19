  $(document).ready(function(){
            $(".gallery-carousel").owlCarousel({
                loop: true,
               
                rtl: true,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:4 
                    }
                },
                navText: [
                    '<i class="arrow right">&#8592;</i>', 
                    '<i class="arrow left">&#8594;</i>'
                ]
            });
        });
         $(document).ready(function(){
        $(".baner-two").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            rtl: true,
            nav: false,
            dots: false
        });
    });