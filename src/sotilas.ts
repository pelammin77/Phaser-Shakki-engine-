
    import Nappula from "./Nappula"
    import Ruutu from "./ruutu";
    import { Vari } from "./apuEnumit";
    import { onkoLaillinenRuutu, KAHDEKSAS_SARAKKEEN_RUUDUT, ENSIMAISEN_SARAKKEEN_RUUDUT } from "./apu";
    import { LiikeSiirto, SyontiSiirto } from "./Siirto";
   
   export class Sotilas extends Nappula{

 RUUDUT_JOHON_SOTILAS_VOI_SIIRTYA = [8, 16, 7, 9];
  suunta : number;

   asetaNappulanTyyppi(){

       this.nappulanTyyppi = "sotilas";
if(this.nappulanVari== Vari.MUSTA) this.suunta = 1;

else{
    this.suunta = -1;
}  
 }
    laskeNappulanSiirrot(){

        var mahdollinenKohdeRuudunID;
		   this.mahdollisetSiirrot = new Array();
         //var mahdollisetSiirrot:Array<Siirto> = new Array();
          var ruutuJostaLahdetaan : Ruutu = this.lauta.laudanRuudut.getAt(this.nappulanRuutu);
          
          
        
        
        
		for (var i of this.RUUDUT_JOHON_SOTILAS_VOI_SIIRTYA){
    
        // console.log(i);


		
			var kohdeRuutuID = this.nappulanRuutu + this.suunta*i;
			
		var mahdollinenKohdeRuutu:Ruutu = this.lauta.laudanRuudut.getAt(kohdeRuutuID);
			if(onkoLaillinenRuutu(kohdeRuutuID)==false){
                console.log("jatketaaan");
				continue;	
			}
			
		
		if(i==8 &&mahdollinenKohdeRuutu.onkoRuutuTayna==false){
			
           this.mahdollisetSiirrot.push(new LiikeSiirto(this,ruutuJostaLahdetaan,mahdollinenKohdeRuutu));
            
		}
		 else if(i==16 && this.onkoEkaSiirto==true)
			   // && this.nappulanVari==Vari.MUSTA && KAKKOS_RIVIN_RUUDUT[this.nappulanRuutu] == true  
				//|| this.nappulanVari==Vari.VALKOINEN && SEISKA_RIVIN_RUUDUT[this.nappulanRuutu] == true
                {
			              
            var lahimmanRuudunID = this.nappulanRuutu+this.suunta*8;
             var edellisenRuudunID =  this.nappulanRuutu + this.suunta*16;
             var lahempiRuutu: Ruutu = this.lauta.laudanRuudut.getAt(lahimmanRuudunID);
             var edellinenRuutu : Ruutu  =this.lauta.laudanRuudut.getAt(edellisenRuudunID);  
			if(lahempiRuutu.onkoRuutuTayna == false && edellinenRuutu.onkoRuutuTayna ==false){
				  //mahdollisetSiirrot.push(edellinenRuutu);
              this. mahdollisetSiirrot.push(new LiikeSiirto(this,ruutuJostaLahdetaan, edellinenRuutu));
			}
		
                }
          
    else if(i==7)
    {
      if(mahdollinenKohdeRuutu.onkoRuutuTayna==true
      &&this.nappulanVari!=mahdollinenKohdeRuutu.ruudunNappula.nappulanVari){
        
        this.mahdollisetSiirrot.push(new LiikeSiirto(this,ruutuJostaLahdetaan,mahdollinenKohdeRuutu));
      }   
 }
            
    else if(i==9
    //&&KAHDEKSAS_SARAKKEEN_RUUDUT[this.nappulanRuutu]==false&&this.nappulanVari== Vari.MUSTA
          //  ||ENSIMAISEN_SARAKKEEN_RUUDUT[this.nappulanRuutu]==false&&this.nappulanVari == Vari.VALKOINEN 
            ) 
            {
              if(this.nappulanVari==Vari.MUSTA&&KAHDEKSAS_SARAKKEEN_RUUDUT[this.nappulanRuutu]==true)
              break;
              if(this.nappulanVari==Vari.VALKOINEN&&ENSIMAISEN_SARAKKEEN_RUUDUT[this.nappulanRuutu]==true)
             break;

         //     if(this.nappulanVari==Vari.VALKOINEN&&KAHDEKSAS_SARAKKEEN_RUUDUT[this.nappulanRuutu]==true)
           //   break;
             // if(this.nappulanVari==Vari.MUSTA&&ENSIMAISEN_SARAKKEEN_RUUDUT[this.nappulanRuutu]==true)
             // break;
              

              
         
        if(mahdollinenKohdeRuutu.onkoRuutuTayna==true
           &&this.nappulanVari!=mahdollinenKohdeRuutu.ruudunNappula.nappulanVari)
        { 
            this.mahdollisetSiirrot.push(new SyontiSiirto(this,ruutuJostaLahdetaan,mahdollinenKohdeRuutu,mahdollinenKohdeRuutu.ruudunNappula));
        }

    }  



 }
//console.log(mahdollisetSiirrot);
      // this.lauta.varjaaRuudut(this.mahdollisetSiirrot);
    
		//return mahdollisetSiirrot;

        return this.mahdollisetSiirrot;

    }
   } 
export default Sotilas
