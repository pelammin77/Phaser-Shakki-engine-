import Ruutu from "./ruutu";
import Nappula from"./Nappula";
import {Siirto} from "./Siirto";
import { Vari } from "./apuEnumit";
import Sotilas from "./sotilas";
import  Ratsu  from "./ratsu";
import  Torni  from "./torni";
import  Lahetti  from "./Lahetti";
import { game } from "./game";
import  Kuningas  from "./Kuningas";
import ValkoinenPelaaja from "./valkoinenPelaaja";
import { Kuningatar } from "./kuningatar";
import { valintaVari, lautaKuva } from "./apu";
import { MustaPelaaja } from "./MustaPelaaja";
import { Pelaaja } from "./pelaaja";


export class Lauta{

      laudanRuudut : any ;   
     valkoisetNappulat : any = new Array();
      mustatNappulat : any = new Array();
     valkoisenMahdollisetSiirrot: Array<Siirto> = new Array();
     mustanMahdollisetSiirrot: Array<Siirto> = new Array();
      kummanVuoro : Vari;
      onkoNappulaValittu : boolean;
      valkoinenKunkku : Kuningas;
      mustaKunkku : Kuningas;
     valkoinenPelaaja: ValkoinenPelaaja;
     mustaPelaaja : MustaPelaaja;
     vuorossaOlevaPelaaja : Pelaaja;
      valittuNappula : Nappula;
      constructor(){
        
         this.laudanRuudut = game.add.group();
          this.valkoisetNappulat = game.add.group();
          this.mustatNappulat = game.add.group();
          this.onkoNappulaValittu = false; 
          
         this.luoValkoinenPelaaja();
         this.luoMustaPelaaja();
          this.laskeSallitutSiirrot(this.valkoisetNappulat,this.valkoinenKunkku);
          this.laskeSallitutSiirrot(this.mustatNappulat, this.mustaKunkku);
        //  this.vuorossaOlevaPelaaja = this.valkoinenPelaaja; 
          
          // alert(this.valkoinenKunkku); 
    }




    tulostaValittuNappula(){

      alert(""+this.valittuNappula.nappulanRuutu +""+this.valittuNappula.nappulanTyyppi+""+this.valittuNappula.nappulanVari );
    }

    luoPelaajat(){
        
        this.valkoinenPelaaja = new ValkoinenPelaaja(this, this.valkoisenMahdollisetSiirrot) ;
        this.mustaPelaaja = new MustaPelaaja(this, this.mustanMahdollisetSiirrot);    
         this.valkoinenPelaaja.vastustaja = this.mustaPelaaja; //new MustaPelaaja(this,this.mustanMahdollisetSiirrot) ;      
           this.mustaPelaaja.vastustaja = this.valkoinenPelaaja;  //new MustaPelaaja(this,this.mustanMahdollisetSiirrot) ;     
           console.log(this.mustaPelaaja.vastustaja.pelaajanKuningas.nappulanRuutu);
            this.valkoinenPelaaja.asetaVastustajanSiirrot();
            this.mustaPelaaja.asetaVastustajanSiirrot();
}
           
     luoValkoinenPelaaja(){

       this.valkoinenPelaaja = new ValkoinenPelaaja(this, this.valkoisenMahdollisetSiirrot) ;
       this.valkoinenPelaaja.vastustaja = new MustaPelaaja(this,this.mustanMahdollisetSiirrot) ;       

     }


  luoMustaPelaaja(){

   this.mustaPelaaja = new MustaPelaaja(this, this.mustanMahdollisetSiirrot);
   this.mustaPelaaja.vastustaja = new ValkoinenPelaaja(this, this.valkoisenMahdollisetSiirrot);
  }



    getValkoinenPelaaja():ValkoinenPelaaja{

      return this.valkoinenPelaaja;

    }


    getMustaPelaaja(): MustaPelaaja{

        return this.mustaPelaaja;
    }

 
    getVuorossaOlevaPelaaja() : Pelaaja{
        
        return this.vuorossaOlevaPelaaja; 
    }
 
  getValkoisetNappulat(){

      return this.valkoisetNappulat;
  }

    getMustatNappulat(){

        return this.mustatNappulat;
    }


tarkistaSiirto(siirto, kunkku) : boolean{


  return false; 
}

  laskeSallitutSiirrot(nappulat, kunkku){

    var siirrotTaulu;
      for( var i = 0; i<nappulat.length; i++)
      {
          var nap : Nappula = nappulat.getAt(i);
          var taulu = nap.laskeNappulanSiirrot();
           
           
           
            /*
              tarkistetaan aiheutaako siirto kunkun shakin
              -tehdä siirto kuvitteelisella laudalla
              -tarkistetaan onko kunkku shakissa 
              -jos on shakissa niin poista siirto
              - muutoin jatka 

            */
              
           
            siirrotTaulu.push.apply(siirrotTaulu, taulu);
      }
   
    return siirrotTaulu; 
 }





   laskeValkoisenSallitutSiirrot(){
     this.valkoisenMahdollisetSiirrot = new Array();
      // alert("Laske");
    //console.log(this.valkoisetNappulat);
       for( var i = 0; i < this.valkoisetNappulat.length; i++){
            var nap:Nappula = this.valkoisetNappulat.getAt(i);
               
           //let nap = this.valkoisetNappulat[i];
           var taulu = nap.laskeNappulanSiirrot();
            /*
                Tässä pitää käydä läpi aiheutaaako siirto shakin jos aiheuttaa siirto poistetaan 
            */

          this.valkoisenMahdollisetSiirrot.push.apply(this.valkoisenMahdollisetSiirrot,taulu);
       }
          for(var j =0; j<this.valkoisenMahdollisetSiirrot.length; j++)
          {
              var s : Siirto;
              s = this.valkoisenMahdollisetSiirrot[j];
             
             console.log("Valkosien sallitut siirrot: "+s.nappula.nappulanTyyppi+" "
             +s.lahtoRuutu.ruudunID+" "
             +s.kohdeRuutu.ruudunID);
             
          }


         //console.log(this.valkoisenMahdollisetSiirrot.length); 

  
 }


   valitsePelaaja(){

     if(this.kummanVuoro == Vari.VALKOINEN){
       this.vuorossaOlevaPelaaja = this.valkoinenPelaaja;

     }
  else if(this.kummanVuoro== Vari.MUSTA){
    this.vuorossaOlevaPelaaja = this.mustaPelaaja;
  }


   }





    laskeMustanSallitutSiirot(){
        

           for( var i = 0; i < this.mustatNappulat.length; i++){
            var nap:Nappula = this.mustatNappulat.getAt(i);
               
           //let nap = this.valkoisetNappulat[i];
           var taulu = nap.laskeNappulanSiirrot();
          this.mustanMahdollisetSiirrot.push.apply(this.mustanMahdollisetSiirrot,taulu);
       }
          for(var j =0; j<this.mustanMahdollisetSiirrot.length; j++)
          {
              var s : Siirto;
              s = this.mustanMahdollisetSiirrot[j];
             
             console.log("Mustien sallitut siirrot: "
             +s.nappula.nappulanTyyppi+" "
             +s.lahtoRuutu.ruudunID+" "
             +s.kohdeRuutu.ruudunID);
             
          }


    }




      tulostaValkoisetNappulat(){

     
             console.log( "Valkoisia nappuloita "+ this.valkoisetNappulat.length);
 
         for(var i=0; i<this.valkoisetNappulat.length; i++)
        { 
           var nap:Nappula =  this.valkoisetNappulat.getAt(i);
            console.log(i +" "+ nap.nappulanTyyppi + " " +nap.nappulanRuutu);

        } 
          //   console.log( "Valkoisia nappuloita "+ valkoisetNappulat.length;
      }

      getValkoinenKunkku(){

          return this.valkoinenKunkku;

      }

      getMustaKunkku(){

          return this.mustaKunkku;
      }


       tulostaMustatNappulat(){

                
          console.log( "Mustia nappuloita "+ this.valkoisetNappulat.length);
 
         for(var i=0; i<this.valkoisetNappulat.length; i++)
        { 
           var nap:Nappula =  this.mustatNappulat.getAt(i);
           // console.log(i +" "+ nap.nappulanTyyppi + " " +nap.nappulanRuutu);

        } 

       }
 
     

    
 
 
     piirraLauta(){
 
          var id = 0;

   for(var j=0; j<8; j++)
   {
       for(var i=0; i<8; i++)
     {
       

       var arvo = lautaKuva[i][j];
       var xPaikka = i * 50;
       var yPaikka = j * 50;

       if(arvo == 0) {
      // console.log(xPaikka);
           
          let r: Ruutu = Ruutu.luoRuutu(id,xPaikka, yPaikka,"tile",this,game);
         r.ruudunPerusVari =0xFFFFFF
         this.laudanRuudut.add(r); 

        id++;   
    }

        if(arvo==1){
      
     let r:Ruutu = Ruutu.luoRuutu(id,xPaikka,yPaikka,"tile",this,game);
        r.tint = 0x000000;
        r.ruudunPerusVari = 0x000000;
        this.laudanRuudut.add(r);
       id++;
        }
   }  
 }

         
     }


     

    





  asetaNappulatAlkuasemiin(){

 
   //Mustat nappulat 
    
     this.mustatNappulat.add( new Sotilas(game, this, this.laudanRuudut.getAt(8),'nappulat',5,Vari.MUSTA, 1));     
     this.mustatNappulat.add( new Sotilas(game, this,this.laudanRuudut.getAt(9),'nappulat',5,Vari.MUSTA,2));
     this.mustatNappulat.add(new Sotilas(game, this, this.laudanRuudut.getAt(10), 'nappulat', 5, Vari.MUSTA,3));
     this.mustatNappulat.add(new Sotilas(game, this, this.laudanRuudut.getAt(11), 'nappulat', 5, Vari.MUSTA,4));
     this.mustatNappulat.add(new Sotilas(game, this, this.laudanRuudut.getAt(12), 'nappulat', 5, Vari.MUSTA,5));
     this.mustatNappulat.add(new Sotilas(game, this, this.laudanRuudut.getAt(13), 'nappulat', 5, Vari.MUSTA,6));
     this.mustatNappulat.add(new Sotilas(game, this, this.laudanRuudut.getAt(14), 'nappulat', 5, Vari.MUSTA,7));
     this.mustatNappulat.add(new Sotilas(game, this, this.laudanRuudut.getAt(15), 'nappulat', 5, Vari.MUSTA, 8));
      
     this.mustatNappulat.add(new Torni(game, this, this.laudanRuudut.getAt(3), 'nappulat', 0, Vari.MUSTA, 9));
     this.mustatNappulat.add(new Torni(game, this, this.laudanRuudut.getAt(7), 'nappulat', 0, Vari.MUSTA, 10));
      
      this.mustatNappulat.add( new Ratsu(game,this, this.laudanRuudut.getAt(46),'nappulat',1,Vari.MUSTA, 11));
      this.mustatNappulat.add(new Ratsu(game, this, this.laudanRuudut.getAt(6),'nappulat',1,Vari.MUSTA, 12));

      this.mustatNappulat.add(new Lahetti(game, this, this.laudanRuudut.getAt(30), 'nappulat', 2, Vari.MUSTA,13));
      this.mustatNappulat.add(new Lahetti(game, this, this.laudanRuudut.getAt(5), 'nappulat', 2, Vari.MUSTA,14));
      this.mustaKunkku = this.mustatNappulat.add(new Kuningas(game, this, this.laudanRuudut.getAt(47), 'nappulat', 4, Vari.MUSTA,15));
      this.mustatNappulat.add(new Kuningatar(game, this, this.laudanRuudut.getAt(33), 'nappulat', 3, Vari.MUSTA,16));

 


      this.valkoisetNappulat.add(new Sotilas(game, this, this.laudanRuudut.getAt(48), 'nappulat', 11, 0,17));
      this.valkoisetNappulat.add(new Sotilas(game, this, this.laudanRuudut.getAt(49), 'nappulat', 11, 0,18));
      this.valkoisetNappulat.add(new Sotilas(game, this, this.laudanRuudut.getAt(50), 'nappulat', 11, 0,19));
      this.valkoisetNappulat.add(new Sotilas(game, this, this.laudanRuudut.getAt(51), 'nappulat', 11, 0,20));
      this.valkoisetNappulat.add(new Sotilas(game, this, this.laudanRuudut.getAt(52), 'nappulat', 11, 0,21));
      this.valkoisetNappulat.add(new Sotilas(game, this, this.laudanRuudut.getAt(53), 'nappulat', 11, 0,22));
      this.valkoisetNappulat.add(new Sotilas(game, this, this.laudanRuudut.getAt(54), 'nappulat', 11, 0,23));
      this.valkoisetNappulat.add(new Sotilas(game, this, this.laudanRuudut.getAt(55), 'nappulat', 11, 0, 24));

      this.valkoisetNappulat.add(new Torni(game, this, this.laudanRuudut.getAt(63), 'nappulat', 6, 0,25));
      this.valkoisetNappulat.add(new Torni(game, this, this.laudanRuudut.getAt(43), 'nappulat', 6, 0,26));
      
      this.valkoisetNappulat.add(new Ratsu(game, this, this.laudanRuudut.getAt(40), 'nappulat', 7, 0,27));
     this.valkoisetNappulat.add(new Ratsu(game, this, this.laudanRuudut.getAt(62), 'nappulat', 7, 0,28));
       
     this.valkoisetNappulat.add(new Lahetti(game, this, this.laudanRuudut.getAt(24), 'nappulat', 8, 0,29));
     this.valkoisetNappulat.add(new Lahetti(game, this, this.laudanRuudut.getAt(61), 'nappulat', 8, 0, 30));
    this.valkoinenKunkku = this.valkoisetNappulat.add(new Kuningas(game, this, this.laudanRuudut.getAt(60), 'nappulat', 10, 0, 31));
     this.valkoisetNappulat.add(new Kuningatar(game, this, this.laudanRuudut.getAt(59), 'nappulat', 9, 0, 32));

this.asetaVuoro(Vari.VALKOINEN);
}

  

paivitaLaudanTila(){


}


  asetaNappulaRuutuun(nappula: Nappula , ruutu: Ruutu){
      
      ruutu.onkoRuutuTayna = true;
      nappula.ruutu = ruutu;
         
}

    poistaNappulaRuudusta(ruutu: Ruutu ){

      ruutu.onkoRuutuTayna = false; 
    }
 

paivitaLauta(){

}

  varjaaRuudut(siirrot: Array<Siirto>) {  
           
  var v;
  let r: Ruutu;
   for(var i = 0; siirrot.length; i++)
   {
       if(siirrot[i]==undefined) alert("Move undefined");     
       
       /*
      tarkistetaan aiheutaako siirto kuninkaaan shakituksen; 

         */     
       
        if(this.onkoNappulaValittu==true)
     {
         v = valintaVari; 
     }

     else{

       //  r=siirrot[i].kohdeRuutu;
        //  v = r.ruudunPerusVari;
         if(siirrot[i]==undefined) return;
         v = siirrot[i].kohdeRuutu.ruudunPerusVari;
        
     }
       

       //varjattavatRuudut[i].tint = v; //0x3ADF00;
       siirrot[i].kohdeRuutu.tint = v;
      // r = siirrot[i].kohdeRuutu;
      // r.tint = v;

       //   console.log( varjattavatRuudut[i].ruudunID);
          
         

 }


  }



   siirraNappula(lahtoRuutu: Ruutu, kohdeRuutu: Ruutu, siirettavaNAppula:Nappula)
   {
 
 //alert("Siirto ei toimi viela"); 
 

 
 this.valittuNappula.y = kohdeRuutu.y;
 this.valittuNappula.x = kohdeRuutu.x; 
this.valittuNappula.nappulanRuutu = kohdeRuutu.ruudunID
lahtoRuutu.onkoRuutuTayna = false;
kohdeRuutu.onkoRuutuTayna = true;
this.valittuNappula.onkoEkaSiirto = false;
this.onkoNappulaValittu = false;
 this.varjaaRuudut(this.valittuNappula.mahdollisetSiirrot);  
this.laskeValkoisenSallitutSiirrot();

this.laskeMustanSallitutSiirot();
this.luoPelaajat(); 
  
}






public asetaVuoro(v : Vari){
  
  this.kummanVuoro = v;

}



  } 

     

     export default Lauta