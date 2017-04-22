
import Pelaaja from "./pelaaja";
import Kuningas from "./Kuningas";
import { Vari } from "./apuEnumit";

export class MustaPelaaja extends Pelaaja {


  haeKuningas():Kuningas{

      return this.lauta.getMustaKunkku();
  }

haePelaajanKaytossaOlevatNappulat(){

 return this.lauta.getMustatNappulat();
}
  
asetaVihu(){

        this.vastustaja=this.lauta.valkoinenPelaaja;
    }


  
 getVihu():Pelaaja{
     return this.lauta.getValkoinenPelaaja();
 }

 getVari():Vari{

     return Vari.MUSTA;
 }


  }

  export default MustaPelaaja;