import Lauta from "./Lauta";
import { Nappula } from "./Nappula";
import { valittuNappula, valintaVari } from "./apu";
    
    export class Ruutu extends Phaser.Sprite{
        
        //ruudunVari : Vari;
        lauta: Lauta;
        ruudunID : number; 
        onkoRuutuTayna : boolean;
        game: Phaser.Game;
        ruudunNappula:Nappula;   
         ruudunPerusVari;
       // mahdollinenKohdeRuutu: boolean = false;
 
    constructor(g,paikka,lauta, x,y,key){
        
        super(g,x,y,key);
         this.lauta = lauta;
         this.game = g;
         this.ruudunID = paikka;
         this.onkoRuutuTayna = false;
         this.game.add.existing(this);
         this.ruudunNappula = null;
               
   

    this.inputEnabled = true;
    this.events.onInputDown.add(this.valitseRuutu, this);  
          
    }


public getRuudunNappula(){

    if(this.onkoRuutuTayna == true){
        return this.ruudunNappula;
    }

  return null; 
}

 public getLauta()
 {
   return this.lauta;

 }

   valitseRuutu(){
    
    alert(this.onkoRuutuTayna);
    if( this.tint == valintaVari)
    {

       alert(this.ruudunID);
      // alert(valittuNappula.nappulanTyyppi);
       this.lauta.siirraNappula(this.lauta.laudanRuudut.getAt(this.lauta.valittuNappula.nappulanRuutu),this,valittuNappula);
    }   
}





public static luoRuutu(paikka: number, x: number, y: number, key:string, lauta:Lauta, g: Phaser.Game ){

     var  r = new Ruutu(g, paikka, lauta, x, y, key)
     return r;
}




 }
  export default Ruutu;