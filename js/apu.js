define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SARAKKEITA = 8;
    exports.RIVEJA = 8;
    exports.RUUTUJA = 64;
    exports.valintaVari = 0x3ADF00;
    exports.onkoNappulaValittu = false;
    exports.ENSIMAISEN_SARAKKEEN_RUUDUT = asetaSarakkeet(0);
    exports.TOISEN_SARAKKEEN_RUUDUT = asetaSarakkeet(1);
    exports.SEITSEMAN_SARAKKEEN_RUUDUT = asetaSarakkeet(6);
    exports.KAHDEKSAS_SARAKKEEN_RUUDUT = asetaSarakkeet(7);
    exports.KAKKOS_RIVIN_RUUDUT = asetaRivit(8); //kakkosrivin ensimmäisen ruudun id 
    exports.SEISKA_RIVIN_RUUDUT = asetaRivit(48); //seiska rivin ensimäisen ruudun id 
    exports.lautaKuva = [
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0]
    ];
    function asetaSarakkeet(sarake) {
        var sarakkeet = new Array();
        for (var i = 0; i < exports.RUUTUJA; i++) {
            sarakkeet.push(false);
        }
        do {
            sarakkeet[sarake] = true;
            sarake += exports.SARAKKEITA;
        } while (sarake < exports.RUUTUJA);
        return sarakkeet;
    }
    exports.asetaSarakkeet = asetaSarakkeet;
    function asetaRivit(rivi) {
        var rivit = new Array(exports.RUUTUJA);
        for (var i = 0; i < exports.RUUTUJA; i++) {
            rivit[i] = false;
        }
        for (var j = rivi; j < rivi + exports.SARAKKEITA; j++) {
            rivit[j] = true;
        }
        return rivit;
    }
    exports.asetaRivit = asetaRivit;
    function onkoLaillinenRuutu(ruudunNumero) {
        return ruudunNumero >= 0 && ruudunNumero < exports.RUUTUJA;
    }
    exports.onkoLaillinenRuutu = onkoLaillinenRuutu;
});
//# sourceMappingURL=apu.js.map