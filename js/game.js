define(["require", "exports", "./Lauta"], function (require, exports, Lauta_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });
    function preload() {
        exports.game.stage.backgroundColor = "#4488AA";
        exports.game.load.spritesheet("nappulat", "figures.png", 56, 50);
        exports.game.load.image("tile", 'tile.png');
        exports.game.load.image("tileB", 'tileB.png');
    }
    function create() {
        var lauta = new Lauta_1.default();
        lauta.piirraLauta();
        lauta.asetaNappulatAlkuasemiin();
        lauta.laskeValkoisenSallitutSiirrot();
        lauta.laskeMustanSallitutSiirot();
        lauta.luoPelaajat();
        alert(lauta.mustaPelaaja.onkoShakissa());
        alert(lauta.mustaPelaaja.onkoShakki);
        //    lauta.getValkoinenPelaaja();
        //  lauta.getMustaPelaaja();
        // lauta.luoValkoinenPelaaja();
        //lauta.luoMustaPelaaja();
        //  lauta.valkoinenPelaaja.onkoShakissa();
        // lauta.mustaPelaaja.laskeShakitetutRuudut();
        //alert (lauta.valkoinenPelaaja.pelaajanKuningas.nappulanRuutu);
        //alert(lauta.mustaPelaaja.pelaajanKuningas.nappulanRuutu); 
        //  lauta.tulostaValkoisetNappulat();
        // lauta.tulostaMustatNappulat();
        //var ruutu = new  Ruutu(game,0,0,0,'ruutu') ;
        //let nappula = new Lahetti(game)
        //  Allow dragging - the 'true' parameter will make the sprite snap to the center
        // nappula.input.enableDrag(true)
    }
});
//NappulaLuokat Alkaa
