define(["require", "exports", "./Lauta"], function (require, exports, Lauta_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });
    function preload() {
        exports.game.stage.backgroundColor = "#4488AA";
        exports.game.load.spritesheet("nappulat", "../kuvat/figures.png", 56, 50);
        exports.game.load.image("tile", '../kuvat/tile.png');
        exports.game.load.image("tileB", '../kuvat/tileB.png');
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
    }
});
//# sourceMappingURL=game.js.map