$( document ).ready(function() {
	$('.box-slider-content').slick({
	 centerMode: true,
    infinite: true,
    slidesToShow: 3,
    dots: false,
    appendDots:jQuery(".box-dots"),
    autoplay: false,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
   ]
  });
});