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
define(["require", "exports", "./Nappula", "./apuEnumit", "./apu", "./Siirto"], function (require, exports, Nappula_1, apuEnumit_1, apu_1, Siirto_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Sotilas = (function (_super) {
        __extends(Sotilas, _super);
        function Sotilas() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.RUUDUT_JOHON_SOTILAS_VOI_SIIRTYA = [8, 16, 7, 9];
            return _this;
        }
        Sotilas.prototype.asetaNappulanTyyppi = function () {
            this.nappulanTyyppi = "sotilas";
            if (this.nappulanVari == apuEnumit_1.Vari.MUSTA)
                this.suunta = 1;
            else {
                this.suunta = -1;
            }
        };
        Sotilas.prototype.laskeNappulanSiirrot = function () {
            var mahdollinenKohdeRuudunID;
            this.mahdollisetSiirrot = new Array();
            //var mahdollisetSiirrot:Array<Siirto> = new Array();
            var ruutuJostaLahdetaan = this.lauta.laudanRuudut.getAt(this.nappulanRuutu);
            for (var _i = 0, _a = this.RUUDUT_JOHON_SOTILAS_VOI_SIIRTYA; _i < _a.length; _i++) {
                var i = _a[_i];
                // console.log(i);
                var kohdeRuutuID = this.nappulanRuutu + this.suunta * i;
                var mahdollinenKohdeRuutu = this.lauta.laudanRuudut.getAt(kohdeRuutuID);
                if (apu_1.onkoLaillinenRuutu(kohdeRuutuID) == false) {
                    console.log("jatketaaan");
                    continue;
                }
                if (i == 8 && mahdollinenKohdeRuutu.onkoRuutuTayna == false) {
                    this.mahdollisetSiirrot.push(new Siirto_1.LiikeSiirto(this, ruutuJostaLahdetaan, mahdollinenKohdeRuutu));
                }
                else if (i == 16 && this.onkoEkaSiirto == true) 
                // && this.nappulanVari==Vari.MUSTA && KAKKOS_RIVIN_RUUDUT[this.nappulanRuutu] == true  
                //|| this.nappulanVari==Vari.VALKOINEN && SEISKA_RIVIN_RUUDUT[this.nappulanRuutu] == true
                {
                    var lahimmanRuudunID = this.nappulanRuutu + this.suunta * 8;
                    var edellisenRuudunID = this.nappulanRuutu + this.suunta * 16;
                    var lahempiRuutu = this.lauta.laudanRuudut.getAt(lahimmanRuudunID);
                    var edellinenRuutu = this.lauta.laudanRuudut.getAt(edellisenRuudunID);
                    if (lahempiRuutu.onkoRuutuTayna == false && edellinenRuutu.onkoRuutuTayna == false) {
                        //mahdollisetSiirrot.push(edellinenRuutu);
                        this.mahdollisetSiirrot.push(new Siirto_1.LiikeSiirto(this, ruutuJostaLahdetaan, edellinenRuutu));
                    }
                }
                else if (i == 7) {
                    if (mahdollinenKohdeRuutu.onkoRuutuTayna == true
                        && this.nappulanVari != mahdollinenKohdeRuutu.ruudunNappula.nappulanVari) {
                        this.mahdollisetSiirrot.push(new Siirto_1.LiikeSiirto(this, ruutuJostaLahdetaan, mahdollinenKohdeRuutu));
                    }
                }
                else if (i == 9) {
                    if (this.nappulanVari == apuEnumit_1.Vari.MUSTA && apu_1.KAHDEKSAS_SARAKKEEN_RUUDUT[this.nappulanRuutu] == true)
                        break;
                    if (this.nappulanVari == apuEnumit_1.Vari.VALKOINEN && apu_1.ENSIMAISEN_SARAKKEEN_RUUDUT[this.nappulanRuutu] == true)
                        break;
                    //     if(this.nappulanVari==Vari.VALKOINEN&&KAHDEKSAS_SARAKKEEN_RUUDUT[this.nappulanRuutu]==true)
                    //   break;
                    // if(this.nappulanVari==Vari.MUSTA&&ENSIMAISEN_SARAKKEEN_RUUDUT[this.nappulanRuutu]==true)
                    // break;
                    if (mahdollinenKohdeRuutu.onkoRuutuTayna == true
                        && this.nappulanVari != mahdollinenKohdeRuutu.ruudunNappula.nappulanVari) {
                        this.mahdollisetSiirrot.push(new Siirto_1.SyontiSiirto(this, ruutuJostaLahdetaan, mahdollinenKohdeRuutu, mahdollinenKohdeRuutu.ruudunNappula));
                    }
                }
            }
            //console.log(mahdollisetSiirrot);
            // this.lauta.varjaaRuudut(this.mahdollisetSiirrot);
            //return mahdollisetSiirrot;
            return this.mahdollisetSiirrot;
        };
        return Sotilas;
    }(Nappula_1.default));
    exports.Sotilas = Sotilas;
    exports.default = Sotilas;
});
//# sourceMappingURL=sotilas.js.map