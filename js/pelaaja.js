define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Pelaaja = (function () {
        function Pelaaja(lauta, siirrot) {
            this.pelaajanSallitutSiirrot = new Array();
            this.vastustajanSallitutSiirrot = new Array();
            this.lauta = lauta;
            this.pelaajanKaytossaOlevatNappulat = this.haePelaajanKaytossaOlevatNappulat();
            this.pelaajanSallitutSiirrot = siirrot;
            this.pelaajanKuningas = this.haeKuningas();
            this.pelaajanKaytossaOlevatNappulat = this.haePelaajanKaytossaOlevatNappulat();
            this.onkoShakki = this.onkoShakissa();
            //alert(this.onkoShakki);
            //this.vastustaja = this.getVihu();
            //  this.vastustaja = this.asetaVihu();
            //  this.onkoShakki = this.onkoShakissa();
        }
        Pelaaja.prototype.asetaVastustajanSiirrot = function () {
            if (this.vastustaja == undefined)
                return;
            //alert(this.vastustaja.getVari());
            this.vastustajanSallitutSiirrot = this.vastustaja.pelaajanSallitutSiirrot;
        };
        Pelaaja.prototype.teeSiirto = function (siirto) {
            if (this.onkoLaillinenSiirto) {
                siirto.toteutaSiirto();
            }
            return null;
        };
        Pelaaja.prototype.onkoKuningaallaSallittujaSiirtoja = function () {
            if (this.pelaajanKuningas.mahdollisetSiirrot.length = 0)
                return false;
            return true;
        };
        Pelaaja.prototype.onkoLaillinenSiirto = function (siirto) {
            for (var s; s < this.pelaajanSallitutSiirrot.length; s++) {
                if (this.pelaajanSallitutSiirrot[s] == siirto) {
                    return true;
                }
            }
            return false;
        };
        Pelaaja.prototype.onkoShakissa = function () {
            alert("SIIRTOJA " + this.vastustajanSallitutSiirrot.length);
            for (var i = 0; i < this.vastustajanSallitutSiirrot.length; i++) {
                var s = this.vastustajanSallitutSiirrot[i];
                console.log("HEP " + s.kohdeRuutu.ruudunID);
                if (s.kohdeRuutu.ruudunID == this.pelaajanKuningas.nappulanRuutu) {
                    alert("Shakki");
                    this.onkoShakki = true;
                    return true;
                }
            }
            this.onkoShakki = false;
            return false;
        };
        Pelaaja.prototype.onkoMatissa = function () {
            return false;
        };
        Pelaaja.prototype.onkoPatissa = function () {
            return false;
        };
        Pelaaja.prototype.onkoTornitettu = function () {
            return false;
        };
        return Pelaaja;
    }());
    exports.Pelaaja = Pelaaja;
    exports.default = Pelaaja;
});
//# sourceMappingURL=pelaaja.js.map