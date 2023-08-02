// $(".product-filter-toggle").on("click", function (e) {
//     $(".product-sidenav-wrap").addClass("show");
//     $(".product-sidenav-overlay").fadeIn();
//     $("body").addClass("overflow-hidden");
// });

// $(".product-sidenav-overlay").on("click", function (e) {
//     $(".product-sidenav-wrap").removeClass("show");
//     $(".product-sidenav-overlay").fadeOut();
//     $("body").removeClass("overflow-hidden");
// });

$(".product-sort-toggle").on("click", function (e) {
    $(".product-sort-body").slideToggle();
});

$(".cart-toggle").on("click", function () {
    $(".cart-dropdown").toggleClass("show");
});

$(document).on("click", ".cart-close", function () {
    $(".cart-dropdown").removeClass("show");
});

$('.home-cate-tabs').tabslet({
    container: '#homeNewsTab'
});

$(document).click(function(event) {
    if (!$(event.target).closest('.suggestsearch').length) {
      $('.suggestsearch').hide();
    }
  });
