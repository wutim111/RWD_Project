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
    $('.favorite').hover(function () {
            // over
            $(this).find('i').toggleClass('fa-regular fa-heart');
            $(this).find('i').toggleClass('fa-solid fa-heart');
        }, function () {
            // out
            $(this).find('i').toggleClass('fa-regular fa-heart');
            $(this).find('i').toggleClass('fa-solid fa-heart');
        }
    );
    $('.favorite').on('click', function (e) {
        e.preventDefault();
        $(this).find('i').toggleClass('fa-regular fa-heart');
        $(this).find('i').toggleClass('fa-solid fa-heart');
    });
    $('.register_btn').on('click', function (e) {
        e.preventDefault();
        $('.register_form').fadeIn(200);
        $('.login_form').fadeOut(50);
    });
    $('.has_account').on('click', function (e) {
        e.preventDefault();
        $('.register_form').fadeOut(50);
        $('.login_form').fadeIn(200);
    });
});