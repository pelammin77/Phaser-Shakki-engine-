import Lauta from "./Lauta";
import Ruutu from "./ruutu";
import {Nappula, } from './Nappula';

 



export var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });  
export var valittuNappula; 


function preload() {

    game.stage.backgroundColor = "#4488AA";
 
    game.load.spritesheet("nappulat","figures.png",56,50);
    game.load.image("tile", 'tile.png');
     game.load.image("tileB", 'tileB.png');
}

function create() {

    var lauta = new Lauta();
    lauta.piirraLauta();
    lauta.asetaNappulatAlkuasemiin();
    lauta.laskeValkoisenSallitutSiirrot();
      lauta.laskeMustanSallitutSiirot(); 
       lauta.luoPelaajat();
       alert(lauta.mustaPelaaja.onkoShakissa());
       alert(lauta.mustaPelaaja.onkoShakki);

}