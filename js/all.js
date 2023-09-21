$(document).ready(function () {
    $('.menu_btn').on('click', function (e) {
        e.preventDefault()
        $('body').toggleClass('menu_open');
    });
});