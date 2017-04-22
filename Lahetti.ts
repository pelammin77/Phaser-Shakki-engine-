import Nappula from "./Nappula"
import { Ruutu } from "./ruutu";
import { onkoLaillinenRuutu, ENSIMAISEN_SARAKKEEN_RUUDUT, KAHDEKSAS_SARAKKEEN_RUUDUT } from "./apu";
import { LiikeSiirto, SyontiSiirto } from "./Siirto";

 export class Lahetti extends Nappula{

   SIIRTO_VEKTORI = [-9, 7,-7, 9  ];


    asetaNappulanTyyppi(){
        this.nappulanTyyppi = "lahetti";
         
     }
  

     laskeNappulanSiirrot(){

         
		  this.mahdollisetSiirrot = new Array();   
         var ruutuJostaLahdetaan : Ruutu = this.lauta.laudanRuudut.getAt(this.nappulanRuutu);	
		
		for (var i  of  this.SIIRTO_VEKTORI){
            var mahdollinenKohdeRuudunID = this.nappulanRuutu;
            while(onkoLaillinenRuutu(mahdollinenKohdeRuudunID)==true){
               
                if(this.onkoEkaSarake(mahdollinenKohdeRuudunID, i)||
                     this.onkoKahdeksasSarake(mahdollinenKohdeRuudunID,i)){
                         
                         break;
                     }
                mahdollinenKohdeRuudunID +=i;

                   if(onkoLaillinenRuutu(mahdollinenKohdeRuudunID)==true){
                   var mahdollinenKohdeRuutu: Ruutu =  this.lauta.laudanRuudut.getAt(mahdollinenKohdeRuudunID);
           if(mahdollinenKohdeRuutu.onkoRuutuTayna==false){
            this.mahdollisetSiirrot.push(new LiikeSiirto(this,ruutuJostaLahdetaan,mahdollinenKohdeRuutu));
           } 
           else{
                 if(mahdollinenKohdeRuutu.ruudunNappula.nappulanVari!=this.nappulanVari)
                 {
                     this.mahdollisetSiirrot.push(new SyontiSiirto(this,ruutuJostaLahdetaan,mahdollinenKohdeRuutu,mahdollinenKohdeRuutu.ruudunNappula));
                     
                     //alert("voi syödä ruudussa "+ mahdollinenKohdeRuudunID+" "+ mahdollinenKohdeRuutu.ruudunNappula.nappulanTyyppi );
                       //mahdollinenKohdeRuutu.ruudunNappula.tint =  0xe25638 
                }
             
                 
                 break;

           }
 }
            }
			
		}	
    
         return this.mahdollisetSiirrot;
        //this.lauta.varjaaRuudut(this.mahdollisetSiirrot);
	//	return sallitutSiirrot;


    }


	 onkoEkaSarake( nykyinenRuutu, ruutuJohonHalutaan) {
		    // console.log("Eka")
        return ENSIMAISEN_SARAKKEEN_RUUDUT[nykyinenRuutu] 
                && ((ruutuJohonHalutaan == 7)
				|| (ruutuJohonHalutaan == -9));
	}

	 onkoKahdeksasSarake( nykyinenRuutu, ruutuJohonHalutaan){
		  // console.log("kasi")
		return KAHDEKSAS_SARAKKEEN_RUUDUT[nykyinenRuutu] 
               && ((ruutuJohonHalutaan == -7)
		       || (ruutuJohonHalutaan == 9));
	   }








}


export default Lahetti;