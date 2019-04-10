//Плавный скролл по якорям
$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 50;
    $('html,body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 500);
    e.preventDefault();
});

//Добавление класса при клике в навигации
$(".link").on('click', function () {
    $(".link").removeClass("active");
    $(this).addClass("active");
});

//Прогресс бар прокрутки страницы
$(function () {
    $(window).on("scroll resize", function () {
        var o = $(window).scrollTop() / ($(document).height() - $(window).height());
        $(".progress-bar").css({
            "width": (100 * o | 0) + "%"
        });
        $('progress')[0].value = o;
    })
});