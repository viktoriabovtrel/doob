$(".lazy").slick({
    dots: true,
    lazyLoad: 'ondemand',
    infinite: true
});

$(".menuToggle").click(function () {
    $('.nav').slideToggle("slow", function () {
        $(".nav ul").show();
    });
});