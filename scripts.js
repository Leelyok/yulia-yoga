// Document . ready
$(document).ready(function() {

  $(".menu-mobile").click(function(){
    $(".sub-menu").toggle();
  });

  $(".burger-button").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").toggleClass("active");
  });


$(".burger-menu").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").toggleClass("active");
  });


    //Animate scroll - activate

    AOS.init({
        duration: 1500   // values from 0 to 3000
    });

});

$('.slider-container').slick({
    // Setting name: setting-value
  });


  $('.testimon-slider-container').slick({
    autoplay: true,        // Do we want it to autoplay? true or false
    autoplaySpeed: 3000,   // How long between each slide when autoplaying
    speed: 500,            // How fast is the transition 
    arrows: false,          // Do you want to show arrows to trigger each slide
    accessibility: true,   // Enables tabbing and arrow key navigation 
    dots: true,            // Enables the dots below to show how many slides
    fade: false,           // Changes the animate from slide to fade if true
    infinite: true,       // When true, means that it will scroll in a circle
    pauseOnHover: true,   // When true means the autoplay pauses when hovering
    pauseOnDotsHover: true // Pauses the autoplay when hovering over the dots
  });
  
  $(".testimonial-slider-container").slick({
      autoplay: false,
      autoplaySpeed: 2e3,
      speed: 500,
      arrows: true,
      accessibility: true,
      dots: true,
      fade: false,
      infinite: false,
      pauseOnHover: false,
      pauseOnDotsHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      }]
  });