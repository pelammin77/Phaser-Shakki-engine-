import Nappula from "./Nappula"
import { Ruutu } from "./ruutu";
import { onkoLaillinenRuutu, ENSIMAISEN_SARAKKEEN_RUUDUT, TOISEN_SARAKKEEN_RUUDUT, SEITSEMAN_SARAKKEEN_RUUDUT, KAHDEKSAS_SARAKKEEN_RUUDUT } from "./apu";
import { LiikeSiirto, SyontiSiirto } from "./Siirto";

 export class Ratsu extends Nappula{

      MAHDOLLISET_RUUDUT_JOIHIN_RATSU_VOI_LIIKKUA = [ -17, -15, -10, -6, 17, 15, 10, 6 ];

     asetaNappulanTyyppi(){
       this.nappulanTyyppi="ratsu";       
     }
  

     laskeNappulanSiirrot(){


         var mahdollinenKohdeRuudunID;
		  this.mahdollisetSiirrot = new Array();
        var ruutuJostaLahdetaan : Ruutu = this.lauta.laudanRuudut.getAt(this.nappulanRuutu);   
        
		for ( var i of this.MAHDOLLISET_RUUDUT_JOIHIN_RATSU_VOI_LIIKKUA) {
		    
            mahdollinenKohdeRuudunID = this.nappulanRuutu + i;
			if (onkoLaillinenRuutu(mahdollinenKohdeRuudunID)) {
				if (this.onkoEkaSarake(this.nappulanRuutu, i)
						|| this.onkoToinenSarake(this.nappulanRuutu, i)
						|| this.onkoSeitsemasSarake(this.nappulanRuutu, i)
						|| this.onkoKahdeksasSarake(this.nappulanRuutu, i)) {
					continue;
				}
				let  mahdollinenKohdeRuutu:Ruutu = this.lauta.laudanRuudut.getAt(mahdollinenKohdeRuudunID);
				if (mahdollinenKohdeRuutu.onkoRuutuTayna==false) {
					//mahdollisetSiirrot.push(new LiikuSiirto(lauta, this, mahdollinenKohdeRuudunID));
			       this.mahdollisetSiirrot.push(new LiikeSiirto(this,ruutuJostaLahdetaan, mahdollinenKohdeRuutu));
                } 
                
                
                else {
					 if(mahdollinenKohdeRuutu.ruudunNappula.nappulanVari != this.nappulanVari)
                 {
                    // alert("voi syödä ruudussa "+ mahdollinenKohdeRuudunID+" "+ mahdollinenKohdeRuutu.ruudunNappula.nappulanTyyppi );
                     this.mahdollisetSiirrot.push(new SyontiSiirto(this,ruutuJostaLahdetaan,mahdollinenKohdeRuutu,mahdollinenKohdeRuutu.ruudunNappula));
                }
             					}
				}
			}
		
		
                return this.mahdollisetSiirrot;
       // console.log(this.mahdollisetSiirrot);
     //   this.lauta.varjaaRuudut(this.mahdollisetSiirrot);
        //return mahdollisetSiirrot;
    }



     	 onkoEkaSarake( nykyinenRuutu:number,  ruutuJohonHalutaan: number):boolean {
		return ENSIMAISEN_SARAKKEEN_RUUDUT[nykyinenRuutu] && ((ruutuJohonHalutaan == -17)
				|| (ruutuJohonHalutaan == -10) 
				|| (ruutuJohonHalutaan == 6) || (ruutuJohonHalutaan == 15));

	}

	  onkoToinenSarake( nykyinenRuutu: number,  ruutuJohonHalutaan:number):boolean{
		return TOISEN_SARAKKEEN_RUUDUT[nykyinenRuutu] && ((ruutuJohonHalutaan == -10) 
				||(ruutuJohonHalutaan == 6));
		
	}
 onkoSeitsemasSarake( nykyinenRuutu,  ruutuJohonHalutaan):boolean{
	   
	   return SEITSEMAN_SARAKKEEN_RUUDUT[nykyinenRuutu] && ((ruutuJohonHalutaan == 10) || (ruutuJohonHalutaan == -6));
   
   }
 onkoKahdeksasSarake( nykyinenRuutu,  ruutuJohonHalutaan): boolean{
	   
	return KAHDEKSAS_SARAKKEEN_RUUDUT[nykyinenRuutu] && ((ruutuJohonHalutaan == -15)
			|| (ruutuJohonHalutaan == 10) || (ruutuJohonHalutaan == -6) 
			|| (ruutuJohonHalutaan == 17));
   }

   
}
export default Ratsu;