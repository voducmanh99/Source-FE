$(".expand-content").each(function (e) {
    const $this = $(this);
    const contentWrap = $(this).find(".expand-content-wrap");
    const trigger = $(this).find(".expand-content-trigger");
    const textOpen = $(trigger).data("open-text");
    const textClose = $(trigger).data("close-text");
    const fixedHeight = $(contentWrap).outerHeight();
    const innerContentHeight = $(this)
        .find(".expand-content-inner")
        .outerHeight();

    if (innerContentHeight <= fixedHeight) {
        $(trigger).remove();
        $(contentWrap).addClass("remove-overlay");
    }

    $(trigger).on("click", function (e) {
        e.preventDefault();
        if ($this.hasClass("opened")) {
            $(contentWrap).velocity(
                {
                    maxHeight: fixedHeight,
                },
                {
                    complete: function () {
                        $(trigger).find("span").text(textOpen);
                    },
                }
            );
        } else {
            $(contentWrap).velocity(
                {
                    maxHeight: innerContentHeight,
                },
                {
                    complete: function () {
                        $(trigger).find("span").text(textClose);
                    },
                }
            );
        }
        $(trigger).find("em").toggleClass("fa-arrow-down fa-arrow-up");
        $this.toggleClass("opened");
    });
});

$.fn.extend({
    toggleHtml: function (a, b) {
        return this.html(this.html() == b ? a : b);
    },
});
