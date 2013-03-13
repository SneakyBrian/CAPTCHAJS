(function (window, document, $, undefined) {

    var defaults = {

        selector: "#captcha",
        text: "Test"
    };

    var CAPTCHA = function (config) {

        this._settings = $.extend({}, defaults, config || {});

        this._container = $(this._settings.selector);

        this._canvas = $('<canvas>').appendTo(this._container).width(300).height(200);
        this._input = $('<input>').appendTo(this._container);
        this._button = $('<button>').appendTo(this._container);
        
        this._context = this._canvas.get(0).getContext("2d");

    };

    CAPTCHA.prototype = {

        generate: function () {

            var context = this._context;

            var my_gradient = context.createLinearGradient(0, 0, 300, 0);
            my_gradient.addColorStop(0, "cyan");
            my_gradient.addColorStop(1, "magenta");

            context.fillStyle = my_gradient;
            context.fillRect(0, 0, 300, 225)

            my_gradient = context.createLinearGradient(0, 0, 300, 0);
            my_gradient.addColorStop(0, "magenta");
            my_gradient.addColorStop(1, "cyan");

            context.font = "bold 48px Arial";
            context.fillStyle = my_gradient;
            context.setTransform(1, 0.1, -0.1, 1, 10, 75);
            context.fillText(this._settings.text, 0, 0);

        },

        validate: function () { }

    };

    window.CAPTCHA = CAPTCHA || {};

}(window, document, jQuery));