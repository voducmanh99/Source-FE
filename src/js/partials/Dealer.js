const clickMapResult = () => {
    const iframe = $("#dealerMap");
    $("#list li").each(function () {
        let _this = $(this);
        let src = _this.data("map");
        $(_this).on("click", function () {
            $("#list li").not(_this).removeClass("active");
            _this.addClass("active");
            iframe.attr("src", src);
        });
    });
};

clickMapResult();

try {
    var prm = Sys.WebForms.PageRequestManager.getInstance();
    prm.add_endRequest(function () {
        clickMapResult();
    });
} catch (error) {}
