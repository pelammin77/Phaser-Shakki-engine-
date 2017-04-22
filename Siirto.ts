import Ruutu from "./ruutu"
import Nappula from"./Nappula";

export abstract class Siirto{

    
	      
	    nappula: Nappula; 
	    lahtoRuutu: Ruutu;
        kohdeRuutu: Ruutu;
	    
	 constructor( nappula:Nappula, lahtoRuutu: Ruutu,  kohdeRuutu : Ruutu){
		 
		 this.nappula = nappula;
		 this.lahtoRuutu = lahtoRuutu;
         this.kohdeRuutu = kohdeRuutu; 
	 }   

   abstract toteutaSiirto();

}


export class LiikeSiirto extends Siirto{

toteutaSiirto(){
  return null;
}
}


export class SyontiSiirto extends Siirto {
    


        syotavaNappula: Nappula;

 constructor( nappula:Nappula, lahtoRuutu: Ruutu,  kohdeRuutu : Ruutu, sNappula:Nappula){

     super(nappula,lahtoRuutu,kohdeRuutu);
     this.syotavaNappula = sNappula;
 }

toteutaSiirto() {
        return null; 
    }
    


  }
