export const SARAKKEITA = 8;
export const RIVEJA = 8;
export const RUUTUJA = 64;
export const valintaVari = 0x3ADF00;
export var valittuNappula;
export var onkoNappulaValittu = false;
export  let ENSIMAISEN_SARAKKEEN_RUUDUT:boolean[] = asetaSarakkeet(0);
export  let  TOISEN_SARAKKEEN_RUUDUT:boolean[] = asetaSarakkeet(1);
export 	let SEITSEMAN_SARAKKEEN_RUUDUT : boolean[] = asetaSarakkeet(6);
export 	let  KAHDEKSAS_SARAKKEEN_RUUDUT: boolean[] = asetaSarakkeet(7);
export let KAKKOS_RIVIN_RUUDUT: boolean[] = asetaRivit(8);//kakkosrivin ensimmäisen ruudun id 
export  let SEISKA_RIVIN_RUUDUT: boolean[] = asetaRivit(48); //seiska rivin ensimäisen ruudun id 
export const  lautaKuva = [
     [0,1,0,1,0,1,0,1],
     [1,0,1,0,1,0,1,0],
     [0,1,0,1,0,1,0,1],
     [1,0,1,0,1,0,1,0],
     [0,1,0,1,0,1,0,1],
     [1,0,1,0,1,0,1,0],
     [0,1,0,1,0,1,0,1],
     [1,0,1,0,1,0,1,0]

 ];


 export function asetaSarakkeet(sarake:number)
 {
    let sarakkeet = new Array();

      for(var i =0; i<RUUTUJA; i++)
      {
           sarakkeet.push(false);

      }
         

		do{
			sarakkeet[sarake] = true;
			sarake+= SARAKKEITA;	
		} while (sarake<RUUTUJA);
		return sarakkeet;
	}
  
 

 export  function asetaRivit(rivi:number)
{
   let rivit = new Array(RUUTUJA);
   for(var i =0; i<RUUTUJA; i++)
      {
           rivit[i] = false;

      }
        for(var j = rivi; j < rivi + SARAKKEITA; j++ )
        {
            rivit[j] = true
        }
   


    return rivit;


}


  export function onkoLaillinenRuutu(ruudunNumero : number){

      return ruudunNumero >= 0 && ruudunNumero<RUUTUJA ;
  }

