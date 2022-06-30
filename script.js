//TMB : Pistola e Fuzil
//TMI : Pistola, Fuzil, Espingarda, Sub-metralhadora, Mtr-Lv, Mtr-P
//TME - Tiro de sobrevivência de tripulantes TST:  Pistola
//TME - Tiro de Combate Avançado TCA: Fuzil, Sub-metralhadora e pistola
//TME - Tiro de Combate Avançado TCA: Fuzil e pistola
//TME - Tiro de segurança de autoridades TSA: Pistola e fuzil ou Sub-metralhadora
//TME - Tiro de fuzil de precisão TFP: Fuzil
//TME - Tiro de Combate SAR - Módulo Homem SAR - TCS: Fuzil
//TME - Tiro de Combate de Operações Especiais - TOE: Pistola, fuzil e metralhadora
//TME - Tiro de Intervenção Tática - TIT: Fuzil, Sub-metralhadora e pistola

//TMB Pistola : 44 disparos
//TMB Fuzil : 40 disparos avaliados e mais 10 não avaliados

var instrucao =  document.getElementById('instrucao').value;
console.log(instrucao)

var instrucao_info = document.getElementById('instrucao_info').value;
console.log(instrucao_info)

var resultado_individual = document.getElementById('resultind').value;
resultado_individual = 0;
console.log(resultado_individual)

let TMB = {
    pistola: 44,
    fuzil: 50
}

let TMI = {
    pistola: ,
    fuzil: ,
    espingarda: ,
    sub_metralhadora: ,
    mtr_lv: ,
    mtr_p:
}


function calcular() {
    if (instrucao == 'TMB' && instrucao_info == 'TMB-PST') {
        resultado_individual = TMB.pistola;
    } 
     if (instrucao == 'TMB' && instrucao_info == 'TMB-FZL') {
        resultado_individual.innerHTML = TMB.fuzil;
        console.log(resultado_individual.innerHTML)
    }
}

