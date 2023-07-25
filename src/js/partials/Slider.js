let hasActive = $(".product-category-nav-item.active").length;
let activeIndex = 0;
if (hasActive > 0) {
    activeIndex = $(".product-category-nav-item.active").parent().index();
}
const productCategorySlider = new Swiper(
    ".product-category-nav-slider .swiper-container",
    {
        slidesPerView: 9,
        spaceBetween: 4,
        initialSlide: activeIndex,
        navigation: {
            prevEl: ".product-category-nav-slider .swiper-prev",
            nextEl: ".product-category-nav-slider .swiper-next",
        },
        breakpoints: {
            1024: {
                slidesPerView: 6.5,
                freeMode: true,
            },
            768: {
                slidesPerView: 4.5,
                freeMode: true,
            },
            576: {
                slidesPerView: 3.5,
                freeMode: true,
            },
            420: {
                slidesPerView: 2.5,
                freeMode: true,
            },
        },
    }
);
const homeCateSlider = new Swiper(".home-cate-slider .swiper-container", {
    slidesPerView: 6,
    spaceBetween: 32,
    breakpoints: {
        1024: {
            slidesPerView: 5,
            freeMode: true,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 4.25,
            freeMode: true,
            spaceBetween: 16,
        },
        576: {
            slidesPerView: 3.25,
            freeMode: true,
            spaceBetween: 16,
        },
        420: {
            slidesPerView: 2.25,
            freeMode: true,
            spaceBetween: 16,
        },
    },
});

const logoSliderInit = () => {
    $(".logo-slider").each(function (index) {
        var $this = $(this);
        if ($(this).data("slides") !== undefined) {
            var initSlide = $(this).data("slides");
        } else {
            var initSlide = 4;
        }
        $this.addClass("logo-slider-" + index);
        $this.find(".swiper-prev").addClass("logo-slider-prev-" + index);
        $this.find(".swiper-next").addClass("logo-slider-next-" + index);

        var logoSlider = new Swiper(
            ".logo-slider-" + index + " .swiper-container",
            {
                slidesPerView: initSlide,
                spaceBetween: 32,
                navigation: {
                    prevEl: ".logo-slider-prev-" + index,
                    nextEl: ".logo-slider-next-" + index,
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 15,
                        freeMode: true,
                    },
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 10,
                        freeMode: true,
                    },
                },
            }
        );
    });
};

logoSliderInit();

const productSliderInit = () => {
    $(".product-slider").each(function (index) {
        var $this = $(this);
        if ($(this).data("slides") !== undefined) {
            var initSlide = $(this).data("slides");
        } else {
            var initSlide = 5;
        }
        if ($(this).data("columns") !== undefined) {
            var columnsNum = $(this).data("columns");
        } else {
            var columnsNum = 1;
        }
        $this.addClass("product-slider-" + index);
        $this.find(".swiper-prev").addClass("product-slider-prev-" + index);
        $this.find(".swiper-next").addClass("product-slider-next-" + index);

        var productSlider = new Swiper(
            ".product-slider-" + index + " .swiper-container",
            {
                slidesPerView: initSlide,
                slidesPerColumn: columnsNum,
                slidesPerColumnFill: 'row',
                spaceBetween: 12,
                navigation: {
                    prevEl: ".product-slider-prev-" + index,
                    nextEl: ".product-slider-next-" + index,
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 3.5,
                        slidesPerColumn: 1,
                        freeMode: true,
                    },
                    768: {
                        slidesPerView: 2.5,
                        slidesPerColumn: 1,
                        freeMode: true,
                    },
                    576: {
                        slidesPerView: 1.5,
                        slidesPerColumn: 1,
                        freeMode: true,
                    },
                },
            }
        );
    });
};

productSliderInit();

const newsSliderInit = () => {
    $(".news-slider").each(function (index) {
        var $this = $(this);
        if ($(this).data("slides") !== undefined) {
            var initSlide = $(this).data("slides");
        } else {
            var initSlide = 4;
        }
        $this.addClass("news-slider-" + index);
        $this.find(".swiper-prev").addClass("news-slider-prev-" + index);
        $this.find(".swiper-next").addClass("news-slider-next-" + index);

        var newsSlider = new Swiper(
            ".news-slider-" + index + " .swiper-container",
            {
                slidesPerView: initSlide,
                spaceBetween: 32,
                navigation: {
                    prevEl: ".news-slider-prev-" + index,
                    nextEl: ".news-slider-next-" + index,
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 16,
                        freeMode: true,
                    },
                    768: {
                        slidesPerView: 2.5,
                        freeMode: true,
                        spaceBetween: 16,
                    },
                    576: {
                        slidesPerView: 1.5,
                        spaceBetween: 16,
                        freeMode: true,
                    },
                },
            }
        );
    });
};

newsSliderInit();

const yearDotSlider = new Swiper(".year-dot-slider .swiper-container", {
    slidesPerView: 8,
    observer: true,
    observeParents: true,
    slideToClickedSlide: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        768: {
            slidesPerView: 4.5,
        },
        576: {
            slidesPerView: 3.5,
        },
    },
});

const yearContentSlider = new Swiper(".year-content-slider .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 16,
    observer: true,
    observeParents: true,
    thumbs: {
        swiper: yearDotSlider,
    },
    navigation: {
        prevEl: ".year-content-slider .swiper-prev",
        nextEl: ".year-content-slider .swiper-next",
    },
    on: {
        slideChange: function () {
            let activeIndex = this.activeIndex + 1;

            let nextSlide = $(
                `.year-dot-slider .swiper-slide:nth-child(${activeIndex + 1})`
            );
            let prevSlide = $(
                `.year-dot-slider .swiper-slide:nth-child(${activeIndex - 1})`
            );

            if (nextSlide && !nextSlide.hasClass("swiper-slide-visible")) {
                this.thumbs.swiper.slideNext();
            } else if (
                prevSlide &&
                !prevSlide.hasClass("swiper-slide-visible")
            ) {
                this.thumbs.swiper.slidePrev();
            }
        },
    },
});

const homeBannerSlider = new Swiper(".home-banner-slider .swiper-container", {
    pagination: {
        el: ".home-banner-slider .swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    },
});
