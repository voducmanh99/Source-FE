var $globalHeader = $(".global-header");

// const searchMapping = new MappingListener({
//     selector: ".search-wrapper",
//     mobileWrapper: ".menu-mobile-body",
//     mobileMethod: "appendTo",
//     desktopWrapper: ".logo-wrapper",
//     desktopMethod: "insertAfter",
//     breakpoint: 1025,
// }).watch();

// const accountMapping = new MappingListener({
//     selector: ".account-wrapper",
//     mobileWrapper: ".menu-mobile-body",
//     mobileMethod: "appendTo",
//     desktopWrapper: ".language-wrapper",
//     desktopMethod: "insertAfter",
//     breakpoint: 1025,
// }).watch();

const menuMapping = new MappingListener({
    selector: ".menu-wrapper",
    mobileWrapper: ".menu-mobile-body",
    mobileMethod: "appendTo",
    desktopWrapper: ".header-bottom",
    desktopMethod: "appendTo",
    breakpoint: 1025,
}).watch();

$(".close-menu, .menu-mobile-overlay").on("click", function () {
    $(".menu-mobile").removeClass("show");
    $("body").removeClass("overflow-hidden");
    $(".menu-mobile-overlay").fadeOut();
});

$(".menu-toggle").on("click", function () {
    $(".menu-mobile").addClass("show");
    $("body").addClass("overflow-hidden");
    $(".menu-mobile-overlay").fadeIn();
});

$(".search-toggle").on("click", function () {
    $(".search-wrapper").slideToggle()
});

$(".toggle-sub-menu").each(function (index, el) {
    $(el).on("click", function () {
        $(el).next().slideToggle();
    });
});

$globalHeader.sticky({
    topSpacing: 0,
    zIndex: 99,
});

$(".about-nav").sticky({
    topSpacing: $globalHeader.height(),
    zIndex: 10,
});
