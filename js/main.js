$(window).load(function() {
    $(".before-after").twentytwenty({
      before_label: 'До', // Set a custom before label
      after_label: 'После' // Set a custom after label
    });
  
 
  $('.before-slider').slick({
    draggable: false,
    dots: true,
    dotsClass: 'before-slider__dots',
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
  });

  $('.menu-button').on('click', function(){
    $('.menu').toggleClass('menu_active');
  });

  $('.select_checked').on('click', function(){
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });

  $('.select__option').on('click', function(){
    var value = $(this).attr('data-value');
    $('#select-type').val(value);
    $('.select_checked').text(value);
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });

  $("a[href^='#']").click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top - 120 + "px" });
    return false;
  });

  $('input[type="tel"]').mask("+7 (999) 999-99-99");

  var reviews = $('.reviews');
  var reviewsTop = reviews.offset().top;
  $(window).bind('scroll', function(){
    var windowTop = $(this).scrollTop();
    if(windowTop > reviewsTop){
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7434abc6b67036c1d91d7cf8584c9d6f06805b1543abe2c10bebff043ec5e548&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false" >< /script >');
      $(window).unbind('scroll');
    }
  });

});