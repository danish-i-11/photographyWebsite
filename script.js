$(document).ready(function(){

    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $("#header").addClass("active-header");
          $(".menu-link").addClass("active-menu-links");
          $("#header-img").attr("src", "./assets/danography.png");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $("#header").removeClass("active-header");
         $(".menu-link").removeClass("active-menu-links");
         $("#header-img").attr("src", "./assets/danography.png");
      }
  });
  
    // Responsive menu
    $("#responsive-nav-bar").hide();
  
    $("#image-button-black").click(function(){
      $("#responsive-nav-bar").slideToggle();
    });
  
    $("#responsive-home-item").click(function(){
      $("#responsive-nav-bar").slideToggle(200);
    })
  
  });
  
