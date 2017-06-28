

$(document).ready(function(){

    $('.nav-links li a').on('click', function(){
        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('div[data-anchor="' + scrollAnchor + '"]').offset().top - 60;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 600);

    return false;
    });

  $(window).scroll(function(){
      var windscroll = $(window).scrollTop();
      console.log(windscroll);

      if (windscroll > 130) {
          $('#navbar').addClass('navbar-fixed');
          $('.section').each(function(i) {
              if($(this).position().top - 130 <= windscroll) {
                  $('.nav-links li a.active').removeClass('active');
                  $('.nav-links li a').eq(i).addClass('active');
              }
          });
          $('.scrollToTop').show();
      }
      else {
          $('#navbar').removeClass('navbar-fixed');
          $('.nav-links li a.active').removeClass('active');
          $('.scrollToTop').hide();
      }
  });

if (window.atob) {
  var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop:true,
    grabCursor: true,
    paginationClickable: true,
    autoplay: 3500,
    speed: 1500
  });
}

if (document.all && !window.atob) {
  var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop:true,
    grabCursor: true,
    paginationClickable: true,
    autoplay: 3500,
    speed: 20000
  });
 }

  $('.arrow-left').on('click', function(e){
    e.preventDefault()
    mySwiper.swipePrev()
  });
  $('.arrow-right').on('click', function(e){
    e.preventDefault()
    mySwiper.swipeNext()
  });

    $('.toggle-nav').click(function(){
        $('.nav').addClass('show_div');
        $('.container, .carousel, footer').addClass('overlay');
        $("body").css("overflow","hidden");
    });

    $('.close, .carousel, .container, footer, .nav-links li a').click(function(){
        $('.nav').removeClass('show_div');
        $('.container, .carousel, footer').removeClass('overlay');
        $("body").css("overflow","visible");
    });

    $('.scrollToTop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
});
