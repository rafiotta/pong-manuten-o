//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


//variáveis da raquete
let xRaquete = 250;
let yRaquete = 5;
let raqueteComprimento = 90;
let raqueteAltura = 10;


let colidiu = false;

//placar do jogo
let meusPontos = 0;



 function setup() {
    createCanvas(600, 400);
 }

 function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquete();
    incluiPlacar();
    marcaPonto();
 

 function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro); 
 }

 function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
 } 

 function verificaColisaoBorda() {
    if (xBolinha + raio > width ||
        xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height ||
        yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
 }

 function mostraRaquete(x, y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
 }
 function movimentaMinhaRaquete() {
    if (keyIsDown(LEFT_ARROW)) {
        xRaquete += -10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xRaquete += 10;
    }
 }

 function verificaColisaoRaquete() {
    if (xBolinha - raio < yRaquete + raqueteComprimento &&
        xBolinha - raio < yRaquete + raqueteAltura &&
        xBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;;
    }

 } 

    function incluiPlacar() {
        fill(255);
        text(meusPontos, 278, 180);
        
    }


    function marcaPonto() {
        if (xBolinha > 590) {
            meusPontos += 1;
        }
        
    }
    
}