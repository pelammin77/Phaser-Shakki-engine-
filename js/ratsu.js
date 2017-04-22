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
    var Ratsu = (function (_super) {
        __extends(Ratsu, _super);
        function Ratsu() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.MAHDOLLISET_RUUDUT_JOIHIN_RATSU_VOI_LIIKKUA = [-17, -15, -10, -6, 17, 15, 10, 6];
            return _this;
        }
        Ratsu.prototype.asetaNappulanTyyppi = function () {
            this.nappulanTyyppi = "ratsu";
        };
        Ratsu.prototype.laskeNappulanSiirrot = function () {
            var mahdollinenKohdeRuudunID;
            this.mahdollisetSiirrot = new Array();
            var ruutuJostaLahdetaan = this.lauta.laudanRuudut.getAt(this.nappulanRuutu);
            for (var _i = 0, _a = this.MAHDOLLISET_RUUDUT_JOIHIN_RATSU_VOI_LIIKKUA; _i < _a.length; _i++) {
                var i = _a[_i];
                mahdollinenKohdeRuudunID = this.nappulanRuutu + i;
                if (apu_1.onkoLaillinenRuutu(mahdollinenKohdeRuudunID)) {
                    if (this.onkoEkaSarake(this.nappulanRuutu, i)
                        || this.onkoToinenSarake(this.nappulanRuutu, i)
                        || this.onkoSeitsemasSarake(this.nappulanRuutu, i)
                        || this.onkoKahdeksasSarake(this.nappulanRuutu, i)) {
                        continue;
                    }
                    var mahdollinenKohdeRuutu = this.lauta.laudanRuudut.getAt(mahdollinenKohdeRuudunID);
                    if (mahdollinenKohdeRuutu.onkoRuutuTayna == false) {
                        //mahdollisetSiirrot.push(new LiikuSiirto(lauta, this, mahdollinenKohdeRuudunID));
                        this.mahdollisetSiirrot.push(new Siirto_1.LiikeSiirto(this, ruutuJostaLahdetaan, mahdollinenKohdeRuutu));
                    }
                    else {
                        if (mahdollinenKohdeRuutu.ruudunNappula.nappulanVari != this.nappulanVari) {
                            // alert("voi syödä ruudussa "+ mahdollinenKohdeRuudunID+" "+ mahdollinenKohdeRuutu.ruudunNappula.nappulanTyyppi );
                            this.mahdollisetSiirrot.push(new Siirto_1.SyontiSiirto(this, ruutuJostaLahdetaan, mahdollinenKohdeRuutu, mahdollinenKohdeRuutu.ruudunNappula));
                        }
                    }
                }
            }
            return this.mahdollisetSiirrot;
            // console.log(this.mahdollisetSiirrot);
            //   this.lauta.varjaaRuudut(this.mahdollisetSiirrot);
            //return mahdollisetSiirrot;
        };
        Ratsu.prototype.onkoEkaSarake = function (nykyinenRuutu, ruutuJohonHalutaan) {
            return apu_1.ENSIMAISEN_SARAKKEEN_RUUDUT[nykyinenRuutu] && ((ruutuJohonHalutaan == -17)
                || (ruutuJohonHalutaan == -10)
                || (ruutuJohonHalutaan == 6) || (ruutuJohonHalutaan == 15));
        };
        Ratsu.prototype.onkoToinenSarake = function (nykyinenRuutu, ruutuJohonHalutaan) {
            return apu_1.TOISEN_SARAKKEEN_RUUDUT[nykyinenRuutu] && ((ruutuJohonHalutaan == -10)
                || (ruutuJohonHalutaan == 6));
        };
        Ratsu.prototype.onkoSeitsemasSarake = function (nykyinenRuutu, ruutuJohonHalutaan) {
            return apu_1.SEITSEMAN_SARAKKEEN_RUUDUT[nykyinenRuutu] && ((ruutuJohonHalutaan == 10) || (ruutuJohonHalutaan == -6));
        };
        Ratsu.prototype.onkoKahdeksasSarake = function (nykyinenRuutu, ruutuJohonHalutaan) {
            return apu_1.KAHDEKSAS_SARAKKEEN_RUUDUT[nykyinenRuutu] && ((ruutuJohonHalutaan == -15)
                || (ruutuJohonHalutaan == 10) || (ruutuJohonHalutaan == -6)
                || (ruutuJohonHalutaan == 17));
        };
        return Ratsu;
    }(Nappula_1.default));
    exports.Ratsu = Ratsu;
    exports.default = Ratsu;
});
