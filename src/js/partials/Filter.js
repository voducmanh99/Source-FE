var minValue = 0;
var maxValue = 5000000;

$(".price-slider").slider({
    range: true,
    min: minValue,
    max: maxValue,
    step: 1000,
    values: [minValue, maxValue],
    change: function (event, ui) {
        $("#amount-from").val(
            ui.values[0].toLocaleString(undefined, {
                minimumFractionDigits: 0,
            }) + " đ"
        );

        $("#amount-to").val(
            ui.values[1].toLocaleString(undefined, {
                minimumFractionDigits: 0,
            }) + " đ"
        );

        let minprice = ui.values[0];
        let maxprice = ui.values[1];

        $(".price-filter-text-min").text(
            getNumberWithCommas(ui.values[0]) + " đ"
        );
        $(".price-filter-text-max").text(
            getNumberWithCommas(ui.values[1]) + " đ"
        );
        if (ui.values[0] === 0 && ui.values[1] === 100000000) {
            $(".filter-price-title span").text(`Giá`);
        } else {
            $(".filter-price-title span").text(
                `${getNumberWithCommas(ui.values[0]) + " đ"} - ${
                    getNumberWithCommas(ui.values[1]) + " đ"
                }`
            );
        }
    },
    slide: function (event, ui) {
        $(".price-filter-text-min").text(
            getNumberWithCommas(ui.values[0]) + " đ"
        );
        $(".price-filter-text-max").text(
            getNumberWithCommas(ui.values[1]) + " đ"
        );
        if (ui.values[0] === 0 && ui.values[1] === 100000000) {
            $(".filter-price-title span").text(`Giá`);
        } else {
            $(".filter-price-title span").text(
                `${getNumberWithCommas(ui.values[0]) + " đ"} - ${
                    getNumberWithCommas(ui.values[1]) + " đ"
                }`
            );
        }
    },
});

$("#amount-from").val(
    $(".price-slider")
        .slider("values", 0)
        .toLocaleString(undefined, { minimumFractionDigits: 0 })
);

$("#amount-to").val(
    $(".price-slider")
        .slider("values", 1)
        .toLocaleString(undefined, { minimumFractionDigits: 0 })
);

$("#amount-from").change((e) => {
    var rawValue = e.target.value.replace(/\./g, "").replace(/\,/g, "");
    var value = parseInt(rawValue);
    if (value) $(".price-slider").slider("values", 0, value);
    else $(".price-slider").slider("values", 0, minValue);
});

$("#amount-to").change((e) => {
    var rawValue = e.target.value.replace(/\./g, "").replace(/\,/g, "");
    var value = parseInt(rawValue);
    if (value) $(".price-slider").slider("values", 1, value);
    else $(".price-slider").slider("values", 1, maxValue);
});

function getNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
