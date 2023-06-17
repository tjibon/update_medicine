(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {

       

        

        $("#tabs").tabs();


       
        $('.vaccine-info-area').owlCarousel({
           
            items: 4,
            autoplay: false,
            margin:20,
            loop: true,
             dots:true,
            nav: true,
            navText:['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
             responsiveClass:true,
             responsive:{
                 0:{
                     items:1.3,
                     nav: true,
                     dots:true,
                 },
                 
                 500:{
                    items:2.3,
                    nav: true,
                    dots:true,
                },
                  
                     
                 
                 600:{
                     items: 2.1,
                     nav: true,
                     dots:true,
                 },
                 1000: {
                    items:3.4 ,
                     nav: true,
                     loop: true,
                     margin: 20,
                     dots: true,
                                      
                 }
             }
            
        })


    });
  

    
    
  

    

}(jQuery));