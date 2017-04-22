define(["require", "exports", "./ruutu", "./apuEnumit", "./sotilas", "./ratsu", "./torni", "./Lahetti", "./game", "./Kuningas", "./valkoinenPelaaja", "./kuningatar", "./apu", "./MustaPelaaja"], function (require, exports, ruutu_1, apuEnumit_1, sotilas_1, ratsu_1, torni_1, Lahetti_1, game_1, Kuningas_1, valkoinenPelaaja_1, kuningatar_1, apu_1, MustaPelaaja_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Lauta = (function () {
        function Lauta() {
            this.valkoisetNappulat = new Array();
            this.mustatNappulat = new Array();
            this.valkoisenMahdollisetSiirrot = new Array();
            this.mustanMahdollisetSiirrot = new Array();
            this.laudanRuudut = game_1.game.add.group();
            this.valkoisetNappulat = game_1.game.add.group();
            this.mustatNappulat = game_1.game.add.group();
            this.onkoNappulaValittu = false;
            this.luoValkoinenPelaaja();
            this.luoMustaPelaaja();
            this.laskeSallitutSiirrot(this.valkoisetNappulat, this.valkoinenKunkku);
            this.laskeSallitutSiirrot(this.mustatNappulat, this.mustaKunkku);
            //  this.vuorossaOlevaPelaaja = this.valkoinenPelaaja; 
            // alert(this.valkoinenKunkku); 
        }
        Lauta.prototype.tulostaValittuNappula = function () {
            alert("" + this.valittuNappula.nappulanRuutu + "" + this.valittuNappula.nappulanTyyppi + "" + this.valittuNappula.nappulanVari);
        };
        Lauta.prototype.luoPelaajat = function () {
            this.valkoinenPelaaja = new valkoinenPelaaja_1.default(this, this.valkoisenMahdollisetSiirrot);
            this.mustaPelaaja = new MustaPelaaja_1.MustaPelaaja(this, this.mustanMahdollisetSiirrot);
            this.valkoinenPelaaja.vastustaja = this.mustaPelaaja; //new MustaPelaaja(this,this.mustanMahdollisetSiirrot) ;      
            this.mustaPelaaja.vastustaja = this.valkoinenPelaaja; //new MustaPelaaja(this,this.mustanMahdollisetSiirrot) ;     
            console.log(this.mustaPelaaja.vastustaja.pelaajanKuningas.nappulanRuutu);
            this.valkoinenPelaaja.asetaVastustajanSiirrot();
            this.mustaPelaaja.asetaVastustajanSiirrot();
        };
        Lauta.prototype.luoValkoinenPelaaja = function () {
            this.valkoinenPelaaja = new valkoinenPelaaja_1.default(this, this.valkoisenMahdollisetSiirrot);
            this.valkoinenPelaaja.vastustaja = new MustaPelaaja_1.MustaPelaaja(this, this.mustanMahdollisetSiirrot);
        };
        Lauta.prototype.luoMustaPelaaja = function () {
            this.mustaPelaaja = new MustaPelaaja_1.MustaPelaaja(this, this.mustanMahdollisetSiirrot);
            this.mustaPelaaja.vastustaja = new valkoinenPelaaja_1.default(this, this.valkoisenMahdollisetSiirrot);
        };
        Lauta.prototype.getValkoinenPelaaja = function () {
            return this.valkoinenPelaaja;
        };
        Lauta.prototype.getMustaPelaaja = function () {
            return this.mustaPelaaja;
        };
        Lauta.prototype.getVuorossaOlevaPelaaja = function () {
            return this.vuorossaOlevaPelaaja;
        };
        Lauta.prototype.getValkoisetNappulat = function () {
            return this.valkoisetNappulat;
        };
        Lauta.prototype.getMustatNappulat = function () {
            return this.mustatNappulat;
        };
        Lauta.prototype.tarkistaSiirto = function (siirto, kunkku) {
            return false;
        };
        Lauta.prototype.laskeSallitutSiirrot = function (nappulat, kunkku) {
            var siirrotTaulu;
            for (var i = 0; i < nappulat.length; i++) {
                var nap = nappulat.getAt(i);
                var taulu = nap.laskeNappulanSiirrot();
                /*
                  tarkistetaan aiheutaako siirto kunkun shakin
                  -tehdä siirto kuvitteelisella laudalla
                  -tarkistetaan onko kunkku shakissa
                  -jos on shakissa niin poista siirto
                  - muutoin jatka
    
                */
                siirrotTaulu.push.apply(siirrotTaulu, taulu);
            }
            return siirrotTaulu;
        };
        Lauta.prototype.laskeValkoisenSallitutSiirrot = function () {
            this.valkoisenMahdollisetSiirrot = new Array();
            // alert("Laske");
            //console.log(this.valkoisetNappulat);
            for (var i = 0; i < this.valkoisetNappulat.length; i++) {
                var nap = this.valkoisetNappulat.getAt(i);
                //let nap = this.valkoisetNappulat[i];
                var taulu = nap.laskeNappulanSiirrot();
                /*
                    Tässä pitää käydä läpi aiheutaaako siirto shakin jos aiheuttaa siirto poistetaan
                */
                this.valkoisenMahdollisetSiirrot.push.apply(this.valkoisenMahdollisetSiirrot, taulu);
            }
            for (var j = 0; j < this.valkoisenMahdollisetSiirrot.length; j++) {
                var s;
                s = this.valkoisenMahdollisetSiirrot[j];
                console.log("Valkosien sallitut siirrot: " + s.nappula.nappulanTyyppi + " "
                    + s.lahtoRuutu.ruudunID + " "
                    + s.kohdeRuutu.ruudunID);
            }
            //console.log(this.valkoisenMahdollisetSiirrot.length); 
        };
        Lauta.prototype.valitsePelaaja = function () {
            if (this.kummanVuoro == apuEnumit_1.Vari.VALKOINEN) {
                this.vuorossaOlevaPelaaja = this.valkoinenPelaaja;
            }
            else if (this.kummanVuoro == apuEnumit_1.Vari.MUSTA) {
                this.vuorossaOlevaPelaaja = this.mustaPelaaja;
            }
        };
        Lauta.prototype.laskeMustanSallitutSiirot = function () {
            for (var i = 0; i < this.mustatNappulat.length; i++) {
                var nap = this.mustatNappulat.getAt(i);
                //let nap = this.valkoisetNappulat[i];
                var taulu = nap.laskeNappulanSiirrot();
                this.mustanMahdollisetSiirrot.push.apply(this.mustanMahdollisetSiirrot, taulu);
            }
            for (var j = 0; j < this.mustanMahdollisetSiirrot.length; j++) {
                var s;
                s = this.mustanMahdollisetSiirrot[j];
                console.log("Mustien sallitut siirrot: "
                    + s.nappula.nappulanTyyppi + " "
                    + s.lahtoRuutu.ruudunID + " "
                    + s.kohdeRuutu.ruudunID);
            }
        };
        Lauta.prototype.tulostaValkoisetNappulat = function () {
            console.log("Valkoisia nappuloita " + this.valkoisetNappulat.length);
            for (var i = 0; i < this.valkoisetNappulat.length; i++) {
                var nap = this.valkoisetNappulat.getAt(i);
                console.log(i + " " + nap.nappulanTyyppi + " " + nap.nappulanRuutu);
            }
            //   console.log( "Valkoisia nappuloita "+ valkoisetNappulat.length;
        };
        Lauta.prototype.getValkoinenKunkku = function () {
            return this.valkoinenKunkku;
        };
        Lauta.prototype.getMustaKunkku = function () {
            return this.mustaKunkku;
        };
        Lauta.prototype.tulostaMustatNappulat = function () {
            console.log("Mustia nappuloita " + this.valkoisetNappulat.length);
            for (var i = 0; i < this.valkoisetNappulat.length; i++) {
                var nap = this.mustatNappulat.getAt(i);
                // console.log(i +" "+ nap.nappulanTyyppi + " " +nap.nappulanRuutu);
            }
        };
        Lauta.prototype.piirraLauta = function () {
            var id = 0;
            for (var j = 0; j < 8; j++) {
                for (var i = 0; i < 8; i++) {
                    var arvo = apu_1.lautaKuva[i][j];
                    var xPaikka = i * 50;
                    var yPaikka = j * 50;
                    if (arvo == 0) {
                        // console.log(xPaikka);
                        var r = ruutu_1.default.luoRuutu(id, xPaikka, yPaikka, "tile", this, game_1.game);
                        r.ruudunPerusVari = 0xFFFFFF;
                        this.laudanRuudut.add(r);
                        id++;
                    }
                    if (arvo == 1) {
                        var r = ruutu_1.default.luoRuutu(id, xPaikka, yPaikka, "tile", this, game_1.game);
                        r.tint = 0x000000;
                        r.ruudunPerusVari = 0x000000;
                        this.laudanRuudut.add(r);
                        id++;
                    }
                }
            }
        };
        Lauta.prototype.asetaNappulatAlkuasemiin = function () {
            //Mustat nappulat 
            this.mustatNappulat.add(new sotilas_1.default(game_1.game, this, this.laudanRuudut.getAt(8), 'nappulat', 5, apuEnumit_1.Vari.MUSTA, 1));
            this.mustatNappulat.add(new sotilas_1.default(game_1.game, this, this.laudanRuudut.getAt(9), 'nappulat', 5, apuEnumit_1.Vari.MUSTA, 2));
            this.mustatNappulat.add(new sotilas_1.default(game_1.game, this, this.laudanRuudut.getAt(10), 'nappulat', 5, apuEnumit_1.Vari.MUSTA, 3));
            this.mustatNappulat.add(new sotilas_1.default(game_1.game, this, this.laudanRuudut.getAt(11), 'nappulat', 5, apuEnumit_1.Vari.MUSTA, 4));
            this.mustatNappulat.add(new sotilas_1.default(game_1.game, this, this.laudanRuudut.getAt(12), 'nappulat', 5, apuEnumit_1.Vari.MUSTA, 5));
            this.mustatNappulat.add(new sotilas_1.default(game_1.game, this, this.laudanRuudut.getAt(13), 'nappulat', 5, apuEnumit_1.Vari.MUSTA, 6));
            this.mustatNappulat.add(new sotilas_1.default(game_1.game, this, this.laudanRuudut.getAt(14), 'nappulat', 5, apuEnumit_1.Vari.MUSTA, 7));
            this.mustatNappulat.add(new sotilas_1.default(game_1.game, this, this.laudanRuudut.getAt(15), 'nappulat', 5, apuEnumit_1.Vari.MUSTA, 8));
            this.mustatNappulat.add(new torni_1.default(game_1.game, this, this.laudanRuudut.getAt(3), 'nappulat', 0, apuEnumit_1.Vari.MUSTA, 9));
            this.mustatNappulat.add(new torni_1.default(game_1.game, this, this.laudanRuudut.getAt(7), 'nappulat', 0, apuEnumit_1.Vari.MUSTA, 10));
            this.mustatNappulat.add(new ratsu_1.default(game_1.game, this, this.laudanRuudut.getAt(46), 'nappulat', 1, apuEnumit_1.Vari.MUSTA, 11));
            this.mustatNappulat.add(new ratsu_1.default(game_1.game, this, this.laudanRuudut.getAt(6), 'nappulat', 1, apuEnumit_1.Vari.MUSTA, 12));
            this.mustatNappulat.add(new Lahetti_1.default(game_1.game, this, this.laudanRuudut.getAt(30), 'nappulat', 2, apuEnumit_1.Vari.MUSTA, 13));
            this.mustatNappulat.add(new Lahetti_1.default(game_1.game, this, this.laudanRuudut.getAt(5), 'nappulat', 2, apuEnumit_1.Vari.MUSTA, 14));
            this.mustaKunkku = this.mustatNappulat.add(new Kuningas_1.default(game_1.game, this, this.laudanRuudut.getAt(47), 'nappulat', 4, apuEnumit_1.Vari.MUSTA, 15));
            this.mustatNappulat.add(new kuningatar_1.Kuningatar(game_1.game, this, this.laudanRuudut.getAt(33), 'nappulat', 3, apuEnumit_1.Vari.MUSTA, 16));
            this.valkoisetNappulat.add(new sotilas_1.default(game_1.game, this, this.laudanRuudut.getAt(48), 'nappulat', 11, 0, 17));
            this.valkoisetNappulat.add(new sotilas_1.default(game_1.game, this, this.laudanRuudut.getAt(49), 'nappulat', 11, 0, 18));
            this.valkoisetNappulat.add(new sotilas_1.default(game_1.game, this, this.laudanRuudut.getAt(50), 'nappulat', 11, 0, 19));
            this.valkoisetNappulat.add(new sotilas_1.default(game_1.game, this, this.laudanRuudut.getAt(51), 'nappulat', 11, 0, 20));
            this.valkoisetNappulat.add(new sotilas_1.default(game_1.game, this, this.laudanRuudut.getAt(52), 'nappulat', 11, 0, 21));
            this.valkoisetNappulat.add(new sotilas_1.default(game_1.game, this, this.laudanRuudut.getAt(53), 'nappulat', 11, 0, 22));
            this.valkoisetNappulat.add(new sotilas_1.default(game_1.game, this, this.laudanRuudut.getAt(54), 'nappulat', 11, 0, 23));
            this.valkoisetNappulat.add(new sotilas_1.default(game_1.game, this, this.laudanRuudut.getAt(55), 'nappulat', 11, 0, 24));
            this.valkoisetNappulat.add(new torni_1.default(game_1.game, this, this.laudanRuudut.getAt(63), 'nappulat', 6, 0, 25));
            this.valkoisetNappulat.add(new torni_1.default(game_1.game, this, this.laudanRuudut.getAt(43), 'nappulat', 6, 0, 26));
            this.valkoisetNappulat.add(new ratsu_1.default(game_1.game, this, this.laudanRuudut.getAt(40), 'nappulat', 7, 0, 27));
            this.valkoisetNappulat.add(new ratsu_1.default(game_1.game, this, this.laudanRuudut.getAt(62), 'nappulat', 7, 0, 28));
            this.valkoisetNappulat.add(new Lahetti_1.default(game_1.game, this, this.laudanRuudut.getAt(24), 'nappulat', 8, 0, 29));
            this.valkoisetNappulat.add(new Lahetti_1.default(game_1.game, this, this.laudanRuudut.getAt(61), 'nappulat', 8, 0, 30));
            this.valkoinenKunkku = this.valkoisetNappulat.add(new Kuningas_1.default(game_1.game, this, this.laudanRuudut.getAt(60), 'nappulat', 10, 0, 31));
            this.valkoisetNappulat.add(new kuningatar_1.Kuningatar(game_1.game, this, this.laudanRuudut.getAt(59), 'nappulat', 9, 0, 32));
            this.asetaVuoro(apuEnumit_1.Vari.VALKOINEN);
        };
        Lauta.prototype.paivitaLaudanTila = function () {
        };
        Lauta.prototype.asetaNappulaRuutuun = function (nappula, ruutu) {
            ruutu.onkoRuutuTayna = true;
            nappula.ruutu = ruutu;
        };
        Lauta.prototype.poistaNappulaRuudusta = function (ruutu) {
            ruutu.onkoRuutuTayna = false;
        };
        Lauta.prototype.paivitaLauta = function () {
        };
        Lauta.prototype.varjaaRuudut = function (siirrot) {
            var v;
            var r;
            for (var i = 0; siirrot.length; i++) {
                if (siirrot[i] == undefined)
                    alert("Move undefined");
                /*
               tarkistetaan aiheutaako siirto kuninkaaan shakituksen;
         
                  */
                if (this.onkoNappulaValittu == true) {
                    v = apu_1.valintaVari;
                }
                else {
                    //  r=siirrot[i].kohdeRuutu;
                    //  v = r.ruudunPerusVari;
                    if (siirrot[i] == undefined)
                        return;
                    v = siirrot[i].kohdeRuutu.ruudunPerusVari;
                }
                //varjattavatRuudut[i].tint = v; //0x3ADF00;
                siirrot[i].kohdeRuutu.tint = v;
                // r = siirrot[i].kohdeRuutu;
                // r.tint = v;
                //   console.log( varjattavatRuudut[i].ruudunID);
            }
        };
        Lauta.prototype.siirraNappula = function (lahtoRuutu, kohdeRuutu, siirettavaNAppula) {
            //alert("Siirto ei toimi viela"); 
            this.valittuNappula.y = kohdeRuutu.y;
            this.valittuNappula.x = kohdeRuutu.x;
            this.valittuNappula.nappulanRuutu = kohdeRuutu.ruudunID;
            lahtoRuutu.onkoRuutuTayna = false;
            kohdeRuutu.onkoRuutuTayna = true;
            this.valittuNappula.onkoEkaSiirto = false;
            this.onkoNappulaValittu = false;
            this.varjaaRuudut(this.valittuNappula.mahdollisetSiirrot);
            this.laskeValkoisenSallitutSiirrot();
            this.laskeMustanSallitutSiirot();
            this.luoPelaajat();
        };
        Lauta.prototype.asetaVuoro = function (v) {
            this.kummanVuoro = v;
        };
        return Lauta;
    }());
    exports.Lauta = Lauta;
    exports.default = Lauta;
});
//# sourceMappingURL=Lauta.js.map