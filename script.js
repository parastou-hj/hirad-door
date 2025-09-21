 const barMenu = document.querySelector('.bar-menu i');
const navs = document.querySelector('.mobile-menu');
const closeNav = document.querySelector('.close-btn');

barMenu.addEventListener('click', function (e) {
  e.stopPropagation(); 
  navs.classList.toggle('active');
  document.querySelector('.mobile-overlay').style.display = 'block';
});
closeNav.addEventListener('click', function (e) {
    navs.classList.remove('active');
    document.querySelector('.mobile-overlay').style.display = 'none';
});


document.addEventListener('click', function (e) {
  if (!navs.contains(e.target) && !barMenu.contains(e.target)) {
    navs.classList.remove('active');
    document.querySelector('.mobile-overlay').style.display = 'none';

  }
});

document.addEventListener('click', function (e) {
  if (!navs.contains(e.target) && !barMenu.contains(e.target)) {
    navs.classList.remove('active');
    document.querySelector('.mobile-overlay').style.display = 'none';

  }
});
 $(document).ready(function() {
    const headerMoving=()=>{
     let lastScrollTop = 0;
     let isHeaderVisible = true;
     const $header = $('header');
     const $mainHeader = $('.header-container');
     const $downHeader = $('.header-down');
     const $headerRow = $('.header-top');
     const rowHeight = $headerRow.outerHeight();
     const downHeaderHeight = $downHeader.outerHeight();
     const mainHeaderHeight = $mainHeader.outerHeight();
 
    
     const totalHeight = rowHeight + downHeaderHeight ;
    //  $mainHeader.css('height', totalHeight);
    //  $('body').css('padding-top', totalHeight);
     if (window.innerWidth > 990) {
      
         $(window).scroll(function() {
         const currentScroll = $(this).scrollTop();
             if (currentScroll > 100) {
                 if (currentScroll > lastScrollTop && isHeaderVisible) {
                     $mainHeader.addClass('header-hidden');
                     $downHeader.addClass('header-up-lg');
                    //  $header.height(downHeaderHeight);
                     isHeaderVisible = false;
                     
                 }
                
             } else   {
                 $mainHeader.removeClass('header-hidden');
                 $downHeader.removeClass('header-up-lg');
                 isHeaderVisible = true;
             }
             
             lastScrollTop = currentScroll;
         });
        
     }else if( window,innerWidth <= 992){
         $(window).scroll(function() {
             const currentScroll = $(this).scrollTop();
             if (currentScroll > 100) {
                 if (currentScroll > lastScrollTop && isHeaderVisible) {
                     $downHeader.addClass('header-hidden');
                    //  $mainHeader.css('height', rowHeight);
                    //  $('body').css('padding-top', rowHeight);
                     isHeaderVisible = false;
                 }
                
             } else {
                 $downHeader.removeClass('header-hidden');
                //  $mainHeader.css('height', totalHeight);
                //  $('body').css('padding-top', totalHeight);
 
                 isHeaderVisible = true;
             }
             
             lastScrollTop = currentScroll;
         });
         
         let resizeTimer;
         
     }
    }
    headerMoving();
    $(window).resize(headerMoving);
     
 });

  
  $(document).ready(function(){
            $(".product-carousel").owlCarousel({
                loop: true,
               
                rtl: true,
               
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
               
            });
             $('.pro-right').click(function() {
                $('.product-carousel').trigger('prev.owl.carousel');
            });
            
            $('.pro-left').click(function() {
                 $('.product-carousel').trigger('next.owl.carousel');
            });
        });
         $(document).ready(function(){
        $(".baner").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            rtl: true,
            nav: false,
            dots: false
        });
          $('.baner-right').click(function() {
                $('.baner').trigger('prev.owl.carousel');
            });
            
            $('.baner-left').click(function() {
                 $('.baner').trigger('next.owl.carousel');
            });
    });

      $(document).ready(function(){
            $(".brands").owlCarousel({
                rtl:true,
                loop: true,
                margin: 10,
                // nav: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items:3
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    },
                       1200:{
                        items:8
                    }
                    
                }
            });
        });



     $(document).ready(function(){
            $(".blog-carousel").owlCarousel({
                rtl:true,
                loop: true,
                // margin: 10,
               
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items:1,
                        dots:true
                    },
                    600:{
                        items:3
                    },
                   
                       1200:{
                        items:3
                    }
                    
                }
            });
        });

         function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }