
function adicionar_num_0(){
    var armazenar = document.getElementById('tela').innerHTML;
    var tela= document.getElementById('tela');
    tela.innerHTML = `${armazenar}0`;
}
function adicionar_num_1(){
    var armazenar = document.getElementById('tela').innerHTML;
    var tela= document.getElementById('tela');
    tela.innerHTML = `${armazenar}1`;
}

function adicionar_num_2(){
    var armazenar = document.getElementById('tela').innerHTML;
    var tela= document.getElementById('tela');
    tela.innerHTML = `${armazenar}2`;
}

function adicionar_num_3(){
    var armazenar = document.getElementById('tela').innerHTML;
    var tela= document.getElementById('tela');
    tela.innerHTML = `${armazenar}3`;
}

function adicionar_num_4(){
    var armazenar = document.getElementById('tela').innerHTML;
    var tela= document.getElementById('tela');
    tela.innerHTML = `${armazenar}4`;
}

function adicionar_num_5(){
    var armazenar = document.getElementById('tela').innerHTML;
    var tela= document.getElementById('tela');
    tela.innerHTML = `${armazenar}5`;
}

function adicionar_num_6(){
    var armazenar = document.getElementById('tela').innerHTML;
    var tela= document.getElementById('tela');
    tela.innerHTML = `${armazenar}6`;
}

function adicionar_num_7(){
    var armazenar = document.getElementById('tela').innerHTML;
    var tela= document.getElementById('tela');
    tela.innerHTML = `${armazenar}7`;
}

function adicionar_num_8(){
    var armazenar = document.getElementById('tela').innerHTML;
    var tela= document.getElementById('tela');
    tela.innerHTML = `${armazenar}8`;
}

function adicionar_num_9(){
    var armazenar = document.getElementById('tela').innerHTML;
    var tela= document.getElementById('tela');
    tela.innerHTML = `${armazenar}9`;
}

function adicionar_ponto(){
    var armazenar = document.getElementById('tela').innerHTML;
    var tela= document.getElementById('tela');
    tela.innerHTML = `${armazenar}.`;
}

function operacao_mais(){
    var armazenar = document.getElementById('tela').innerHTML;
    var tela= document.getElementById('tela');
    tela.innerHTML = `${armazenar} + `;
}

function operacao_menos(){
    var armazenar = document.getElementById('tela').innerHTML;
    var tela= document.getElementById('tela');
    tela.innerHTML = `${armazenar} - `;
}

function operacao_divisao(){
    var armazenar = document.getElementById('tela').innerHTML;
    var tela= document.getElementById('tela');
    tela.innerHTML = `${armazenar} / `;
}

function operacao_multiplicacao(){
    var armazenar = document.getElementById('tela').innerHTML;
    var tela= document.getElementById('tela');
    tela.innerHTML = `${armazenar} * `;
}

function apagar_tudo(){
    var tela= document.getElementById('tela');
    tela.innerHTML = " ";
}

function apagar_ultimo(){
    var armazenar = document.getElementById('tela').innerHTML;
    var semcaracter = armazenar.substring(0, armazenar.length - 1);
    var tela = document.getElementById('tela');
    tela.innerHTML = semcaracter;
}

function adicionar_parentesis(){
    var armazenar = document.getElementById('tela').innerHTML; 
    var tela= document.getElementById('tela');
    var lastletter = armazenar.slice(-1);
    if ( lastletter == "0" || lastletter == "1" || lastletter == "2" || lastletter == "3" || lastletter == "4" || lastletter == "5" || lastletter == "6" || lastletter == "7" || lastletter == "8" || lastletter == "9"){
        tela.innerHTML = `${armazenar})`;
    }
    else{
        tela.innerHTML = `${armazenar}(`;
    }
    
}

function realizar_operacao(){
    var armazenar = document.getElementById('tela').innerHTML;
    var calculo = eval(armazenar);
    var tela= document.getElementById('tela');
    tela.innerHTML = calculo;
}

