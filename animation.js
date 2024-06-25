$(document).ready(function(){
	// let elementClass_1 = $(`.about .about-div`);
	//   let addonClass_1 = `animated`;
	
	// 	if(typeof elementClass_1 != 'undefined'  && typeof addonClass_1 != 'undefined') {			
	// 		elementClass_1.waypoint(function (direction) {	
	// 			$(this.element).addClass(addonClass_1);
	// 	  }, {offset: '50px'});	
	// 	}	

		 $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });		
});

 
    
