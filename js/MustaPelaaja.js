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
    var MustaPelaaja = (function (_super) {
        __extends(MustaPelaaja, _super);
        function MustaPelaaja() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MustaPelaaja.prototype.haeKuningas = function () {
            return this.lauta.getMustaKunkku();
        };
        MustaPelaaja.prototype.haePelaajanKaytossaOlevatNappulat = function () {
            return this.lauta.getMustatNappulat();
        };
        MustaPelaaja.prototype.asetaVihu = function () {
            this.vastustaja = this.lauta.valkoinenPelaaja;
        };
        MustaPelaaja.prototype.getVihu = function () {
            return this.lauta.getValkoinenPelaaja();
        };
        MustaPelaaja.prototype.getVari = function () {
            return apuEnumit_1.Vari.MUSTA;
        };
        return MustaPelaaja;
    }(pelaaja_1.default));
    exports.MustaPelaaja = MustaPelaaja;
    exports.default = MustaPelaaja;
});
//# sourceMappingURL=MustaPelaaja.js.map