$(document).ready(function () {
    $('.menu_btn').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu_open');
        $('.link_menu').slideUp();
    });
    $('.menu_link').on('click', function (e) {
        e.preventDefault();
        $('.link_menu').slideToggle();;
    });
    
    $('.menu_feature').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop : $('.feature').offset().top -50
        },1000);
    });
    $('.menu_chef').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop : $('.chef').offset().top -50
        },1000);
    });
    $('.menu_map').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop : $('.booking').offset().top -50
        },1000);
    });
});