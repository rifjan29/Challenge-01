$(document).ready(function() {
  // icon
  feather.replace({
    width: '20px',
    height: '20px'
  }) 
  // slide
  const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
        clickable: true,
      },
    });
    // Navbar
    var scroll_start = 0;
    var startchange = $('#startchange');
    if (startchange.length){
      console.log(startchange);
        $(document).scroll(function() {
            scroll_start = $(document).scrollTop();
            console.log('scroll'+scroll_start);
            // console.log('scroll'+offset.top);
            if(scroll_start > 10) {
                $('.navbar-light').css('background', 'transparent');
                // $(".navbar-light").css('backdrop-filter', 'blur(15px)');
                // console.log('transparan');
              } else {
                $('.navbar-light').css('background-color', '#F1F3FF');
                // console.log('color');

            }
        });
    }
})