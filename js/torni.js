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
define(["require", "exports", "./Nappula", "./apu", "./Siirto"], function (require, exports, Nappula_1, apu_1, Siirto_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Torni = (function (_super) {
        __extends(Torni, _super);
        function Torni() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.SIIRTO_VEKTORI = [-1, 1, -8, 8];
            return _this;
        }
        Torni.prototype.asetaNappulanTyyppi = function () {
            this.nappulanTyyppi = "torni";
        };
        Torni.prototype.laskeNappulanSiirrot = function () {
            this.mahdollisetSiirrot = new Array();
            var ruutuJostaLahdetaan = this.lauta.laudanRuudut.getAt(this.nappulanRuutu);
            ;
            for (var _i = 0, _a = this.SIIRTO_VEKTORI; _i < _a.length; _i++) {
                var i = _a[_i];
                var mahdollinenKohdeRuudunID = this.nappulanRuutu;
                while (apu_1.onkoLaillinenRuutu(mahdollinenKohdeRuudunID) == true) {
                    if (this.onkoEkaSarake(mahdollinenKohdeRuudunID, i) ||
                        this.onkoKahdeksasSarake(mahdollinenKohdeRuudunID, i)) {
                        break;
                    }
                    mahdollinenKohdeRuudunID = mahdollinenKohdeRuudunID + i;
                    if (apu_1.onkoLaillinenRuutu(mahdollinenKohdeRuudunID) == true) {
                        var mahdollinenKohdeRuutu = this.lauta.laudanRuudut.getAt(mahdollinenKohdeRuudunID);
                        if (mahdollinenKohdeRuutu.onkoRuutuTayna == false) {
                            this.mahdollisetSiirrot.push(new Siirto_1.LiikeSiirto(this, ruutuJostaLahdetaan, mahdollinenKohdeRuutu));
                        }
                        else {
                            if (mahdollinenKohdeRuutu.ruudunNappula.nappulanVari != this.nappulanVari) {
                                this.mahdollisetSiirrot.push(new Siirto_1.SyontiSiirto(this, ruutuJostaLahdetaan, mahdollinenKohdeRuutu, mahdollinenKohdeRuutu.ruudunNappula));
                                //alert("voi syödä ruudussa "+ mahdollinenKohdeRuudunID+" "+ mahdollinenKohdeRuutu.ruudunNappula.nappulanTyyppi );
                            }
                            break;
                        }
                    }
                }
            }
            //this.lauta.varjaaRuudut(this.mahdollisetSiirrot);
            return this.mahdollisetSiirrot;
        };
        Torni.prototype.onkoEkaSarake = function (nykyinenRuutu, ruutuJohonHalutaan) {
            // console.log("Eka")
            return apu_1.ENSIMAISEN_SARAKKEEN_RUUDUT[nykyinenRuutu]
                && ((ruutuJohonHalutaan == -1));
        };
        Torni.prototype.onkoKahdeksasSarake = function (nykyinenRuutu, ruutuJohonHalutaan) {
            // console.log("kasi")
            return apu_1.KAHDEKSAS_SARAKKEEN_RUUDUT[nykyinenRuutu]
                && ((ruutuJohonHalutaan == 1));
        };
        return Torni;
    }(Nappula_1.default));
    exports.Torni = Torni;
    exports.default = Torni;
});
//# sourceMappingURL=torni.js.map