$(function(){
    $('.menu__btn').click(function(){
        $(this).toggleClass('active');
        $('.header__menu').slideToggle();
    })

});