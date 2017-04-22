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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Nappula = (function (_super) {
        __extends(Nappula, _super);
        function Nappula(game, lauta, ruutu, key, frame, vari, id) {
            var _this = _super.call(this, game, ruutu.x, ruutu.y, key, frame) || this;
            _this.lauta = lauta;
            _this.onkoEkaSiirto = true;
            _this.nappulanRuutu = ruutu.ruudunID;
            ruutu.onkoRuutuTayna = true;
            ruutu.ruudunNappula = _this;
            //alert(this.nappulanRuutu);
            _this.nappulanVari = vari;
            _this.id = id;
            _this.inputEnabled = true;
            _this.asetaNappulanTyyppi();
            _this.onkoValittu = false;
            _this.ruutu = ruutu;
            //this.input.enableDrag(true);
            _this.events.onInputDown.add(_this.valitseNappula, _this);
            _this.game.add.existing(_this);
            return _this;
        }
        Nappula.prototype.valitseNappula = function (nappula) {
            var v;
            if (this.nappulanVari == this.lauta.kummanVuoro) {
                alert("Oikea vari");
                this.laskeNappulanSiirrot();
                if (this.lauta.onkoNappulaValittu == false) {
                    alert("Valitaan");
                    this.lauta.valittuNappula = this;
                    this.lauta.tulostaValittuNappula();
                }
                if (this.lauta.onkoNappulaValittu == this.onkoValittu) {
                    if (this.nappulanVari == 0)
                        v = "valkoinen";
                    else {
                        v = "musta";
                    }
                    console.log("Ruudun Id on: " + this.nappulanRuutu);
                    console.log("Nappulan tyyppi on " + this.nappulanTyyppi);
                    console.log("vari on " + v);
                    console.log("Eka siirto: " + this.onkoEkaSiirto);
                    this.lauta.onkoNappulaValittu = !this.lauta.onkoNappulaValittu;
                    // this.onkoValittu = !this.onkoValittu;
                    this.lauta.varjaaRuudut(this.mahdollisetSiirrot);
                    //this.laskeSallitutSiirrot();
                }
            }
        };
        return Nappula;
    }(Phaser.Sprite));
    exports.Nappula = Nappula;
    exports.default = Nappula;
});
//# sourceMappingURL=Nappula.js.map