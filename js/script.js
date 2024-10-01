$(function () {
    // بستن منو با کلیک روی هرجای صفحه بجز دکمه و خود منو
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("in"); // بررسی اینکه منو باز است یا نه
        if (_opened && !clickover.hasClass("navbar-toggle") && !clickover.closest('.navbar-collapse').length) {
            $(".navbar-collapse").collapse('hide'); // بستن منو
        }
    });

    // برای مطمئن شدن از بستن منو بعد از کلیک روی لینک‌های داخلی
    $(".nav a").click(function () {
        if (window.innerWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    });
});

$(document).ready(function () {
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });
});

