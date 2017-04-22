import Nappula from "./Nappula";
import Ruutu from "./ruutu";
import { onkoLaillinenRuutu, ENSIMAISEN_SARAKKEEN_RUUDUT, KAHDEKSAS_SARAKKEEN_RUUDUT } from "./apu";
import { LiikeSiirto, SyontiSiirto } from "./Siirto"

export class Kuningas extends Nappula {
      RUUDUT_JOHON_KUNINGAS_VOI_SIIRTYÄ= [-1,1,-8,8, -9, 7,-7, 9 ]
     
     asetaNappulanTyyppi(){
          this.nappulanTyyppi = "kuningas";
     }
          
     laskeNappulanSiirrot(){
    

         var mahdollinenKohdeRuudunID;
		 this.mahdollisetSiirrot = new Array();
         var ruutuJostaLahdetaan : Ruutu = this.lauta.laudanRuudut.getAt(this.nappulanRuutu);
        
		for ( var i of this.RUUDUT_JOHON_KUNINGAS_VOI_SIIRTYÄ) {
		    
            mahdollinenKohdeRuudunID = this.nappulanRuutu + i;
			
            if (onkoLaillinenRuutu(mahdollinenKohdeRuudunID)) {
				if (this.onkoEkaSarake(this.nappulanRuutu, i)
				|| this.onkoKahdeksasSarake(this.nappulanRuutu, i)) {
					continue;
				}
				let  mahdollinenKohdeRuutu:Ruutu = this.lauta.laudanRuudut.getAt(mahdollinenKohdeRuudunID);
               
            
            
            	if (mahdollinenKohdeRuutu.onkoRuutuTayna==false) {
					//mahdollisetSiirrot.push(new LiikuSiirto(lauta, this, mahdollinenKohdeRuudunID));
                    this.mahdollisetSiirrot.push(new LiikeSiirto(this, ruutuJostaLahdetaan, mahdollinenKohdeRuutu));
                     //mahdollisetSiirrot.push((new LiikeSiirto(mahdollinenKohdeRuutu.getLauta(),this,mahdollinenKohdeRuutu.ruudunID)) );	
                } 
                
                
                else {
									
                 if(mahdollinenKohdeRuutu.ruudunNappula.nappulanVari!=this.nappulanVari)
                 {
          
                    this.mahdollisetSiirrot.push(new SyontiSiirto(this,ruutuJostaLahdetaan,mahdollinenKohdeRuutu,mahdollinenKohdeRuutu.ruudunNappula));
                    //alert("voi syödä ruudussa "+ mahdollinenKohdeRuudunID+" "+ mahdollinenKohdeRuutu.ruudunNappula.nappulanTyyppi );
                       //mahdollinenKohdeRuutu.ruudunNappula.tint =  0xe25638 
                }
                             
                }
                            
                }
				
			}
		
		
      //  console.log(mahdollisetSiirrot);
        


        this.lauta.varjaaRuudut(this.mahdollisetSiirrot);
        //return mahdollisetSiirrot;
    }


 onkoEkaSarake( nykyinenRuutu:number,  ruutuJohonHalutaan: number):boolean {
		return ENSIMAISEN_SARAKKEEN_RUUDUT[nykyinenRuutu] && 
                ((ruutuJohonHalutaan == -1)
				|| (ruutuJohonHalutaan == 7) 
				|| (ruutuJohonHalutaan == -9) 
                );

	}


 onkoKahdeksasSarake( nykyinenRuutu,  ruutuJohonHalutaan): boolean{
	   
	return KAHDEKSAS_SARAKKEEN_RUUDUT[nykyinenRuutu] && 
             ((ruutuJohonHalutaan == 1)
			|| (ruutuJohonHalutaan == -7) 
			|| (ruutuJohonHalutaan == 9));
   }

         
 }
  export default Kuningas;