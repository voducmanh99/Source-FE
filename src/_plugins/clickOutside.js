$.fn.clickOutsideThisElement = function(callback) {
    return this.each(function() {
        var self = this;
        $(document).click(function(event) {
            if (!$(event.target).closest(self).length) {
                callback(self, event);
            }
        });
    });
};