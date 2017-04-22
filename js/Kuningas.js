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
    var Kuningas = (function (_super) {
        __extends(Kuningas, _super);
        function Kuningas() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.RUUDUT_JOHON_KUNINGAS_VOI_SIIRTYÄ = [-1, 1, -8, 8, -9, 7, -7, 9];
            return _this;
        }
        Kuningas.prototype.asetaNappulanTyyppi = function () {
            this.nappulanTyyppi = "kuningas";
        };
        Kuningas.prototype.laskeNappulanSiirrot = function () {
            var mahdollinenKohdeRuudunID;
            this.mahdollisetSiirrot = new Array();
            var ruutuJostaLahdetaan = this.lauta.laudanRuudut.getAt(this.nappulanRuutu);
            for (var _i = 0, _a = this.RUUDUT_JOHON_KUNINGAS_VOI_SIIRTYÄ; _i < _a.length; _i++) {
                var i = _a[_i];
                mahdollinenKohdeRuudunID = this.nappulanRuutu + i;
                if (apu_1.onkoLaillinenRuutu(mahdollinenKohdeRuudunID)) {
                    if (this.onkoEkaSarake(this.nappulanRuutu, i)
                        || this.onkoKahdeksasSarake(this.nappulanRuutu, i)) {
                        continue;
                    }
                    var mahdollinenKohdeRuutu = this.lauta.laudanRuudut.getAt(mahdollinenKohdeRuudunID);
                    if (mahdollinenKohdeRuutu.onkoRuutuTayna == false) {
                        //mahdollisetSiirrot.push(new LiikuSiirto(lauta, this, mahdollinenKohdeRuudunID));
                        this.mahdollisetSiirrot.push(new Siirto_1.LiikeSiirto(this, ruutuJostaLahdetaan, mahdollinenKohdeRuutu));
                        //mahdollisetSiirrot.push((new LiikeSiirto(mahdollinenKohdeRuutu.getLauta(),this,mahdollinenKohdeRuutu.ruudunID)) );	
                    }
                    else {
                        if (mahdollinenKohdeRuutu.ruudunNappula.nappulanVari != this.nappulanVari) {
                            this.mahdollisetSiirrot.push(new Siirto_1.SyontiSiirto(this, ruutuJostaLahdetaan, mahdollinenKohdeRuutu, mahdollinenKohdeRuutu.ruudunNappula));
                            //alert("voi syödä ruudussa "+ mahdollinenKohdeRuudunID+" "+ mahdollinenKohdeRuutu.ruudunNappula.nappulanTyyppi );
                            //mahdollinenKohdeRuutu.ruudunNappula.tint =  0xe25638 
                        }
                    }
                }
            }
            //  console.log(mahdollisetSiirrot);
            this.lauta.varjaaRuudut(this.mahdollisetSiirrot);
            //return mahdollisetSiirrot;
        };
        Kuningas.prototype.onkoEkaSarake = function (nykyinenRuutu, ruutuJohonHalutaan) {
            return apu_1.ENSIMAISEN_SARAKKEEN_RUUDUT[nykyinenRuutu] &&
                ((ruutuJohonHalutaan == -1)
                    || (ruutuJohonHalutaan == 7)
                    || (ruutuJohonHalutaan == -9));
        };
        Kuningas.prototype.onkoKahdeksasSarake = function (nykyinenRuutu, ruutuJohonHalutaan) {
            return apu_1.KAHDEKSAS_SARAKKEEN_RUUDUT[nykyinenRuutu] &&
                ((ruutuJohonHalutaan == 1)
                    || (ruutuJohonHalutaan == -7)
                    || (ruutuJohonHalutaan == 9));
        };
        return Kuningas;
    }(Nappula_1.default));
    exports.Kuningas = Kuningas;
    exports.default = Kuningas;
});
