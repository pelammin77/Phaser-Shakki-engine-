

import Lauta from "./Lauta";
import Kuningas from "./Kuningas";
import { Siirto } from "./Siirto";
import { Vari } from "./apuEnumit";
import { LaudanMuutos } from "./LaudanMuutos";

export abstract class Pelaaja {

    lauta: Lauta;
    pelaajanKuningas: Kuningas;
    pelaajanKaytossaOlevatNappulat;
    pelaajanSallitutSiirrot:Array<Siirto> = new Array() ;
   vastustaja: Pelaaja ;
    vastustajanSallitutSiirrot : Array<Siirto> = new Array(); 
     onkoShakki:boolean;

constructor(lauta:Lauta, siirrot: Array<Siirto> ){

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


asetaVastustajanSiirrot()
{

if(this.vastustaja== undefined) return;
    //alert(this.vastustaja.getVari());
    
     this.vastustajanSallitutSiirrot = this.vastustaja.pelaajanSallitutSiirrot;


}
  teeSiirto(siirto:Siirto):LaudanMuutos{

   if(this.onkoLaillinenSiirto){
       siirto.toteutaSiirto();
   }
   return null;
  }


   onkoKuningaallaSallittujaSiirtoja():boolean{

   if(this.pelaajanKuningas.mahdollisetSiirrot.length = 0 ) return false;

       return true;
   }


 onkoLaillinenSiirto(siirto: Siirto ): boolean{
    
    for(var s; s<this.pelaajanSallitutSiirrot.length; s++)
    {

        if(this.pelaajanSallitutSiirrot[s] == siirto){
            return true; 
        }
    }



     return false;
 }


   onkoShakissa(): boolean{


alert("SIIRTOJA "+this.vastustajanSallitutSiirrot.length );
     for(var i = 0; i<this.vastustajanSallitutSiirrot.length; i++)
     {
         let s:Siirto = this.vastustajanSallitutSiirrot[i];
           console.log("HEP " + s.kohdeRuutu.ruudunID);
           
            if (s.kohdeRuutu.ruudunID == this.pelaajanKuningas.nappulanRuutu){
               alert("Shakki");
                this.onkoShakki = true;
                return true;
     }
    }
this.onkoShakki = false;
return false;
   }
    onkoMatissa() : boolean{

        return false;

    }
    onkoPatissa() : boolean{
        return false;
    }
    onkoTornitettu(): boolean{
        return false;
    }
    




  abstract haeKuningas():Kuningas;
  abstract haePelaajanKaytossaOlevatNappulat();
  abstract getVari(): Vari;
  abstract getVihu(): Pelaaja;
  abstract asetaVihu();
}


export default Pelaaja;
