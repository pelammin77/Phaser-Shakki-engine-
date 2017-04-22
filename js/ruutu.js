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
define(["require", "exports", "./apu"], function (require, exports, apu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Ruutu = (function (_super) {
        __extends(Ruutu, _super);
        // mahdollinenKohdeRuutu: boolean = false;
        function Ruutu(g, paikka, lauta, x, y, key) {
            var _this = _super.call(this, g, x, y, key) || this;
            _this.lauta = lauta;
            _this.game = g;
            _this.ruudunID = paikka;
            _this.onkoRuutuTayna = false;
            _this.game.add.existing(_this);
            _this.ruudunNappula = null;
            _this.inputEnabled = true;
            _this.events.onInputDown.add(_this.valitseRuutu, _this);
            return _this;
        }
        Ruutu.prototype.getRuudunNappula = function () {
            if (this.onkoRuutuTayna == true) {
                return this.ruudunNappula;
            }
            return null;
        };
        Ruutu.prototype.getLauta = function () {
            return this.lauta;
        };
        Ruutu.prototype.valitseRuutu = function () {
            alert(this.onkoRuutuTayna);
            if (this.tint == apu_1.valintaVari) {
                alert(this.ruudunID);
                // alert(valittuNappula.nappulanTyyppi);
                this.lauta.siirraNappula(this.lauta.laudanRuudut.getAt(this.lauta.valittuNappula.nappulanRuutu), this, apu_1.valittuNappula);
            }
        };
        Ruutu.luoRuutu = function (paikka, x, y, key, lauta, g) {
            var r = new Ruutu(g, paikka, lauta, x, y, key);
            return r;
        };
        return Ruutu;
    }(Phaser.Sprite));
    exports.Ruutu = Ruutu;
    exports.default = Ruutu;
});
//# sourceMappingURL=ruutu.js.map