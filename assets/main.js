let okClick = true;
function requestClickForCarousels(url_product){
  if(okClick){
  	window.location.href = url_product;
  }
};
$(document).ready(function() {
    $(window).on('scroll', function () {
        let scroll = $(window).scrollTop();
        if (scroll > 300) {
            $('header').removeClass("in-top");
        } else {
            $("header").addClass("in-top");
        }
    });
  
  
  
 
  let owl = $(".owl-carousel");
  
  owl.on('drag.owl.carousel', function(event) {
  	okClick = false;
  	
  })
  owl.on('dragged.owl.carousel', function(event) {
  	okClick = true;	
  })

  
});