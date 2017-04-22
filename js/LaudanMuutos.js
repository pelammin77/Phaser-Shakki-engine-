define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LaudanMuutos = (function () {
        function LaudanMuutos(lauta, s, status) {
            this.muuttunutLauta = lauta;
            this.siirronStatus = status;
            this.siirto = s;
        }
        return LaudanMuutos;
    }());
    exports.LaudanMuutos = LaudanMuutos;
    exports.default = LaudanMuutos;
});
