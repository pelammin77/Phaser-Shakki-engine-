
import Pelaaja from "./pelaaja";
import Kuningas from "./Kuningas";
import { Vari } from "./apuEnumit";

export class ValkoinenPelaaja extends Pelaaja {

 haeKuningas():Kuningas{
//alert(this.lauta.getValkoinenKunkku());
   
   return this.lauta.getValkoinenKunkku();
 }

 haePelaajanKaytossaOlevatNappulat(){

   return this.lauta.getValkoisetNappulat();

 }

 getVihu():Pelaaja{
     return this.lauta.getMustaPelaaja();
 }

    asetaVihu(){

        this.vastustaja=this.lauta.mustaPelaaja
    }

 getVari():Vari{

     return Vari.VALKOINEN;
 }
}

export default ValkoinenPelaaja; 