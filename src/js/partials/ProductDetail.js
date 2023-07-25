const productDetailSlider = () => {
    const productDetailThumbnailSlider = new Swiper(
        ".product-detail-thumbnail .swiper-container",
        {
            spaceBetween: 8,
            slidesPerView: 5.5,
            observer: true,
            observeParents: true,
            slideToClickedSlide: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            direction: "vertical",
            scrollbar: {
                el: ".product-detail-thumbnail .swiper-scrollbar",
                draggable: true,
            },
            mousewheel: {
                invert: false,
            },
            breakpoints: {
                768: {
                    slidesPerView: 4.5,
                    spaceBetween: 8,
                    direction: "horizontal",
                },
            },
        }
    );
    const productDetailImageSlider = new Swiper(
        ".product-detail-images .swiper-container",
        {
            effect: "fade",
            fadeEffect: { crossFade: true },
            observer: true,
            observeParents: true,
            thumbs: {
                swiper: productDetailThumbnailSlider,
            },
            navigation: {
                prevEl: ".product-detail-images .swiper-prev",
                nextEl: ".product-detail-images .swiper-next",
            },
            on: {
                slideChange: function () {
                    let activeIndex = this.activeIndex + 1;

                    let nextSlide = $(
                        `.product-detail-thumbnail .swiper-slide:nth-child(${
                            activeIndex + 1
                        })`
                    );
                    let prevSlide = $(
                        `.product-detail-thumbnail .swiper-slide:nth-child(${
                            activeIndex - 1
                        })`
                    );

                    if (
                        nextSlide &&
                        !nextSlide.hasClass("swiper-slide-visible")
                    ) {
                        this.thumbs.swiper.slideNext();
                    } else if (
                        prevSlide &&
                        !prevSlide.hasClass("swiper-slide-visible")
                    ) {
                        this.thumbs.swiper.slidePrev();
                    }
                },
            },
        }
    );
};

productDetailSlider();

$(".product-detail-label.is-zoom").on("click", function (e) {
    var images = [];
    $('[data-fancybox="product-images"]').each(function () {
        images.push({
            src: $(this).attr("href"),
            opts: {
                caption: $(this).data("caption"),
            },
        });
    });

    $.fancybox.open(images);
});

window.productDetailSlider = productDetailSlider;
