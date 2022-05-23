var palavras = ["centro", "sorvete", "parcela", "caminho", "avante", "jornal", "casca", "visivel", "internet", "deletar"];
var tela = document.querySelector("html");
var entrada = document.querySelector(".entrada");
var i = Math.floor(Math.random() * palavras.length);
var letras = palavras[i].split("");
var acertos;
var caracteres = [];
var mensagem = document.querySelector(".mensagem");
var erros;
var mostraErros = document.querySelector(".erros");
var novo = document.querySelector('.novojogo');
// FUNÇÃO QUE SORTEIA AS PALAVRAS DO ARRAY "PALAVRAS" E CRIA OUTRO ARRAY COM AS LETRAS DA PALAVRA SORTEADA
function sorteia() {
    
    var letras = palavras[i].split("");
    var linhas = document.querySelector(".linhas");
    
    var entrada = document.querySelector(".entrada");
    // ADICIONA CADA LETRA DA PALAVRA SELECIONADA NAS DIVs COM A CLASS SUBLINHADO
    for(var x = 0; x < palavras[i].length; x++){
        linhas.innerHTML += `<div class='sublinhado esconder'>${letras[x].toUpperCase()}</div>`;
    }

    entrada.focus();
}
// FUNÇÃO PARA SELECIONAR O INPUT ESCONDIDO CLICANDO EM QUALQUER PARTE DA TELA
tela.addEventListener("click", function(event){
    var entrada = document.querySelector(".entrada");
    event.target = entrada.focus();
})
console.log(palavras[i]);

entrada.addEventListener("input", function(){
    var conteudo = document.querySelectorAll(".sublinhado");
        // FUNCIONALIDADE QUE NÃO PERMITE ADICIONAR LETRAS JÁ DIGITADAS ANTERIORMENTE
        if(!caracteres.includes(this.value.toUpperCase())){
           
            caracteres.push(this.value.toUpperCase());

            if (!palavras[i].includes(this.value.toLowerCase())){ // FUNCIONALIDADE QUE VERIFICA SE A LETRA DIGITADA ESTÁ CONTIDA NO ARRAY "PALAVRAS"
                mostraErros.innerHTML += `${this.value.toUpperCase()}`; // SE NÃO, ESCREVE A LETRA NA DIV COM A CLASS "ERROS"
                erros++; // ADICIONA +1 NA VARIÁVEL "ERROS"
            }
            
            for(var x = 0; x < palavras[i].length; x++){ // VERIFICA SE A LETRA DIGITADA ESTÁ CONTIDA NAS DIVs COM A CLASS "SUBLINHADO" 
                letras = conteudo[i];
                
                if(conteudo[x].textContent == this.value.toUpperCase()){
                    
                    conteudo[x].classList.remove("esconder"); // SE SIM, REMOVE A CLASS "ESCONDID"
                    acertos++; // ADICIONA +1 NA VARIÁVEL "ACERTOS"
                }
                
            }
        }
    // FUNCIONADADE QUE VERIFICA A VARIÁVEL "ACERTOS" E ADICIONA UMA MENSAGEM DE PARABÉNS SE A QUANTIDADE DE ACERTOS FOR IGUAL AO NÚMERO DE CARACTERES DA PALAVRA SELECIONADA
    if(acertos == palavras[i].length){
        // MODIFICA O CONTEÚDO DA DIV COM A CLASS "MENSAGEM"
        alert (`Parabens, você venceu!`); 
        novoJogo();
    }
    // FUNCIONALIDADES QUE VERIFICAM A VARIÁVEL "ERRO" E MODIFICA ELEMENTOS DO CANVAS CONFORME O VALOR DAQUELA, MUDA
    if(erros == 1){ // DESENHA A CABEÇA DO BONECO
        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");

        console.log("errou uma vez hehe");
        pincel.strokeStyle = '#d32121';
        pincel.beginPath();
        pincel.arc(347, 127, 35, 0, 2*3.14);
        pincel.stroke();
    } else if ( erros == 2) { // DESENHA O TRONCO 
        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");

        pincel.strokeStyle = '#d32121';
        pincel.moveTo(347, 160);
        pincel.lineTo(347, 290);
        pincel.lineWidth = 5;
        pincel.stroke();
    } else if (erros == 3) { // DESENHA O BRAÇO ESQUERDO
        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");

        pincel.strokeStyle = '#d32121';
        pincel.moveTo(347, 180);
        pincel.lineTo(300, 230);
        pincel.lineWidth = 5;
        pincel.stroke();
    } else if(erros == 4) { // DESENHA O BRAÇO DIREITO
        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");

        pincel.strokeStyle = '#d32121';
        pincel.moveTo(347, 180);
        pincel.lineTo(393, 230);
        pincel.lineWidth = 5;
        pincel.stroke();
    } else if (erros == 5) { // DESENHA A PERNA DIREITA
        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");

        pincel.strokeStyle = '#d32121';
        pincel.moveTo(347, 290);
        pincel.lineTo(393, 350);
        pincel.lineWidth = 5;
        pincel.stroke();
    } else if (erros == 6) { // DESENHA A PERNA ESQUERDA
        var tela = document.querySelector("canvas");
        var pincel = tela.getContext("2d");

        pincel.strokeStyle = '#d32121';
        pincel.moveTo(347, 290);
        pincel.lineTo(293, 350);
        pincel.lineWidth = 5;
        pincel.stroke();
        // MODIFICA O CONTEÚDO DA DIV COM A CLASS "MENSAGEM"
        alert(`Você perdeu!`);
        novoJogo() // CHAMA A FUNCÃO "NOVOJOGO"
    }

    console.log(erros);
    // APAGA O VALOR DO INPUT A CADA CARACTER ADICIONADO FORÇANDO A FUNÇÃO A ADICIONAR SOMENTE UM CARACTER POR VEZ
    this.value = "";
    
})
// FUNÇÃO PARADESENHAR O CANVAS COM O DESENHO DA FORCA
function desenhaForca() {
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.strokeStyle = '#d32121';
    pincel.moveTo(50, 380);
    pincel.lineTo(380, 380);
    pincel.lineWidth = 3;
    pincel.stroke();
    
    pincel.strokeStyle = '#d32121';
    pincel.moveTo(150, 380);
    pincel.lineTo(150, 50);
    pincel.lineWidth = 3;
    pincel.stroke();

    pincel.strokeStyle = '#d32121';
    pincel.moveTo(147, 50);
    pincel.lineTo(350, 50);
    pincel.lineWidth = 3;
    pincel.stroke();

    pincel.strokeStyle = '#d32121';
    pincel.moveTo(347, 50);
    pincel.lineTo(347, 90);
    pincel.lineWidth = 3;
    pincel.stroke();
}
// FUNÇÃO QU DESBILITA O INPUT NÃO POSIBILITANDO, ASSIM, QUE ESTE RECEBA NOVOS VALORES
function novoJogo (){
    entrada.disabled = true;
}

var entrada = document.querySelector(".entrada");
entrada.disabled = true; // DESABILITA O INPUT COM A CLASS "ENTRADA"
var tabuleiro1 = document.querySelector(".tabuleiro1");
var tabuleiro2 = document.querySelector(".tabuleiro2");
// FUNÇÃO PARA INICIAR O JOGO
function start(){
    // RESETA AS VARIÁVEIS
    entrada.disabled = false; // HABILITA O INPUT COM A CLASS "ENTRADA"
    erros = 0;
    acertos = 0;
    i = Math.floor(Math.random() * palavras.length);
    caracteres = [];
    linhas = document.querySelector(".linhas");
    // APAGA OS CONTEÚDOS E ADICIONA OS NOVOS REFERENTES AO INICIO DO JOGO
    tabuleiro1.innerHTML = "";
    tabuleiro2.innerHTML = "";
    mostraErros.innerHTML = "";
    mensagem.innerHTML = "";
    novo.innerHTML = "";
    tabuleiro1.innerHTML = `<canvas class="forca" width="400" height="400"></canvas>`;
    
    tabuleiro2.innerHTML += `<p class="linhas"></p>`
    novo.innerHTML = '<button class="botao botao1" onclick="start()">Novo jogo</button>';
    novo.innerHTML += '<button class="botao botao2" onclick="cancelar()">Desistir</button>';
    sorteia();
    desenhaForca();

}

// CRIA O TEXTAREA PARA O JOGADOR ADICIONAR NOVA PALAVRA AO JOGO
function criaCampo() {
    // APAGA OS CONTEÚDOS E ADICIONA OS NOVOS 
    tabuleiro1.innerHTML = "";
    tabuleiro2.innerHTML = "";

    tabuleiro1.innerHTML = '<textarea maxlength="8" name="" id="campo" placeholder="Digite uma palavra ou frase"></textarea>';
    tabuleiro2.innerHTML += '<div class="aviso"><img src="img/icone.png" alt="icone de informação" width="12px" height="12px"><p>Max. de 8 letras.</p></div>';
    tabuleiro2.innerHTML += '<div class="opcoes"><button class="botao botao1" onclick="adicionaPalavra()">Salvar e começar</button><button class="botao botao2" onclick="cancelar()">Cancelar</button></div>';
    
}
// CANCELA E ATUALIZA A PÁGINA
function cancelar() {
    location.reload();
}
// ADICIONA NOVA PALAVRA AO ARRAY "PALAVRAS"
function adicionaPalavra() {
    
    var campo = document.querySelector("#campo");
    // EXIBE ALERTA SE O TEXTAREA ESTIVER VAZIO AO CLICAR NO BOTÃO "SALVAR E COMEÇAR"
    if(campo.value.length == 0) {
        alert("Adicione uma palavra ou clique em cancelar");
        campo.focus();
    } else {
        // ADICIONA A NOVA PALAVRA AO JOGO
        palavras.push(campo.value.toLowerCase());
        start();
    }
    console.log(palavras);
    
    
}

