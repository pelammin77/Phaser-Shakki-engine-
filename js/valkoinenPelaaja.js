var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./pelaaja", "./apuEnumit"], function (require, exports, pelaaja_1, apuEnumit_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValkoinenPelaaja = (function (_super) {
        __extends(ValkoinenPelaaja, _super);
        function ValkoinenPelaaja() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ValkoinenPelaaja.prototype.haeKuningas = function () {
            //alert(this.lauta.getValkoinenKunkku());
            return this.lauta.getValkoinenKunkku();
        };
        ValkoinenPelaaja.prototype.haePelaajanKaytossaOlevatNappulat = function () {
            return this.lauta.getValkoisetNappulat();
        };
        ValkoinenPelaaja.prototype.getVihu = function () {
            return this.lauta.getMustaPelaaja();
        };
        ValkoinenPelaaja.prototype.asetaVihu = function () {
            this.vastustaja = this.lauta.mustaPelaaja;
        };
        ValkoinenPelaaja.prototype.getVari = function () {
            return apuEnumit_1.Vari.VALKOINEN;
        };
        return ValkoinenPelaaja;
    }(pelaaja_1.default));
    exports.ValkoinenPelaaja = ValkoinenPelaaja;
    exports.default = ValkoinenPelaaja;
});
//# sourceMappingURL=valkoinenPelaaja.js.map