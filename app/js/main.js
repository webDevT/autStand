$(function(){
    $('.menu__btn').click(function(){
        $(this).toggleClass('active');
        $('.header__menu').slideToggle();
    })

});

$('.input--text').focusin(function () {
    $('.placeholder').addClass('hide');
}).focusout(function () {
   $('.placeholder').removeClass('hide');
});

$('.input--text').on('keyup',function(){
  var $this = $(this),
      val = $this.val();
  
  if(val.length >= 1){
    $('.placeholder').addClass('active');
  }else {
    $('.placeholder').removeClass('active');
  }
});