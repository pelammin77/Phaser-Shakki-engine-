import Ruutu from "./ruutu"
import Lauta from "./Lauta";
import {Siirto} from "./Siirto";
import { Vari } from "./apuEnumit";
import { valittuNappula } from "./apu";





  export abstract class Nappula extends Phaser.Sprite{
     

     onkoEkaSiirto : boolean;
     nappulanRuutu : number;
     id : number;
     mahdollisetSiirrot:Array<Siirto>;
     ruutu : Ruutu;
     nappulanVari : Vari;
     nappulanTyyppi: string;
     lauta: Lauta;
     onkoValittu: boolean;
     

  constructor(game, lauta:Lauta, ruutu: Ruutu, key: string,  frame: number, vari:Vari, id:number){
  
     super(game, ruutu.x, ruutu.y, key, frame) 
      this.lauta = lauta;
    this.onkoEkaSiirto =true; 
     this.nappulanRuutu = ruutu.ruudunID;
       ruutu.onkoRuutuTayna = true;
      ruutu.ruudunNappula = this;
  //alert(this.nappulanRuutu);
     this.nappulanVari = vari;
    this.id = id; 
    this.inputEnabled = true;
    this.asetaNappulanTyyppi();
     this.onkoValittu =false;
    this.ruutu = ruutu;
    //this.input.enableDrag(true);
  this.events.onInputDown.add(this.valitseNappula, this);  
     this.game.add.existing(this);

  
 }

    abstract laskeNappulanSiirrot();
    abstract asetaNappulanTyyppi();


    




valitseNappula(nappula){

var v;
if(this.nappulanVari==this.lauta.kummanVuoro){
alert("Oikea vari");
this.laskeNappulanSiirrot();

if(this.lauta.onkoNappulaValittu==false){
  alert("Valitaan"); 
 this.lauta.valittuNappula = this;
 this.lauta.tulostaValittuNappula();
}
if(this.lauta.onkoNappulaValittu == this.onkoValittu){ 
   if(this.nappulanVari==0) v= "valkoinen" 
   else{
        v = "musta"; 
   } 

    console.log("Ruudun Id on: "+ this.nappulanRuutu);
    console.log("Nappulan tyyppi on "+this.nappulanTyyppi);
    console.log("vari on "+ v);
     console.log("Eka siirto: "+ this.onkoEkaSiirto);
     this.lauta.onkoNappulaValittu = !this.lauta.onkoNappulaValittu;
    // this.onkoValittu = !this.onkoValittu;
    this.lauta.varjaaRuudut(this.mahdollisetSiirrot);
    //this.laskeSallitutSiirrot();
}
}
}

  }





 
 export default Nappula;
