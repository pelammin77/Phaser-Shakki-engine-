
import { Siirto } from "./Siirto";
import  Lauta  from "./Lauta";
import { SIIRON_STATUS } from "./apuEnumit";

export class LaudanMuutos {

     muuttunutLauta:Lauta;
     siirto:Siirto;
     siirronStatus: SIIRON_STATUS;


     constructor(lauta:Lauta, s:Siirto, status: SIIRON_STATUS){

         this.muuttunutLauta = lauta;
         this.siirronStatus = status;
         this.siirto = s;
     }




}
export default LaudanMuutos;