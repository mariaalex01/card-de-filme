let musica;

function preload(){
  musica = loadSound("Hawaiian-Roller-Coaster-Ride-Fro.mp3")
}

function setup(){
  musica.play();
  musica.loop();
}