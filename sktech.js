let xbolinha = 300;
let ybolinha = 200;
let diametro = 15;
let raio = diametro /2;

//velocidade da bolinha 
let velocidadexbolinha = 4;
let velocidadeybolinha = 4;
let raquetecomprimento = 10;
let raquetealtura = 90;

//variaveis da raquete
let xraquete = 15;
let yraquete = 150;
let colidiu = false;

//variaveis do oponente;
let xraqueteoponente = 585;
let yraqueteoponente = 150;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(150);
  mostrarbolinha();
  movimentabolinha();
  verificacolisaoborda();
  mostraraquete();
  movimentaminharaquete(xraquete, yraquete);
  verificacolisaoraquete();
  colisaoMinhaRaqueteBiblioteca();
  mostraraqueteoponente(xraqueteoponente, yraqueteoponente);
}

function verificacolisaoborda(){
if ( xbolinha + raio > width || xbolinha < 0) {
  velocidadexbolinha *= -1;
}
if ( ybolinha + raio > height || ybolinha < 0) {
  velocidadeybolinha *= -1;
}
}


function mostrarbolinha(){
   circle(xbolinha, ybolinha, diametro);
}

function movimentabolinha(){
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
}
function mostraraquete(){
  rect(xraquete,yraquete,raquetecomprimento,raquetealtura);
}
function mostraraqueteoponente(){
  rect(xraqueteoponente,yraqueteoponente,
       raquetecomprimento,raquetealtura);
}
function movimentaminharaquete(){
  if(keyIsDown(UP_ARROW)){
    yraquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yraquete += 10;
  }
}
function verificacolisaoraquete(){
  if (xbolinha - raio < xraquete + raquetecomprimento &&
     ybolinha - raio < yraquete + raquetealtura &&
     ybolinha + raio > yraquete){
    velocidadexbolinha *= -1;
  }
}
 function colisaoMinhaRaqueteBiblioteca(){
   colidiu =
     collideRectCircle(xraquete, yraquete, raquetecomprimento, raquetealtura, xbolinha, ybolinha, raio);
   if(colidiu){
     velocidadexbolinha *=-1;
   }
   
 }
function movimentaraqueteoponente(){
  velocidadeyoponente = ybolinha - yraqueteoponente - raquetecomprimento /2 -30;
  yraqueteoponente +=velocidadeyoponente
}

