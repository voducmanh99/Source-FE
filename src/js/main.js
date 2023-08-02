var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
});
window.lazyLoadInstance = lazyLoadInstance;
import "../_plugins/@master/css";

import "./partials/Header";
import "./partials/Slider";
// import "./partials/Filter";
import "./partials/Toggle";
import "./partials/MoveElement";
import "./partials/ProductDetail";
import "./partials/Dealer";
import "./partials/BackToTop";
import "./partials/ExpandContent";

jQuery(function () {

    $.fancybox.defaults.parentEl = "form"

    $(".about-nav a").on("click", function (e) {
        scrollToElement($(this).attr("href"), 2000, $(".global-header").height() + $(".about-nav").height());
    });

    $(".mouse-scroll").on("click", function (e) {
        scrollToElement($(this).attr("href"), 2000, $(".global-header").height());
    });

    var menuSpy = document.querySelector(".about-nav ul");
    var ms = new MenuSpy(menuSpy, {
        threshold: 80,
    });

});

var scrollToElement = function (el, ms, height) {
    var speed = ms ? ms : 2000;
    let scrollHeight = $(el).offset().top - height;
    $("html,body").animate(
        {
            scrollTop: scrollHeight,
        },
        speed
    );
};
