var form, player,game;
var gameState=0;
var PlayerCount=0;
var database;
var allplayers;
var car1,car2,car3,car4,cars;
var ground1,track1,carimg1,carimg2,carimg3,carimg4;

function preload(){

carimg1 = loadImage("images/car1.png");
carimg2 = loadImage("images/car2.png");
carimg3 = loadImage("images/car3.png");
carimg4 = loadImage("images/car4.png");
track1 = loadImage("images/track.jpg");
ground1 = loadImage("images/ground.png");

}

function setup()
{
  database=firebase.database();
  createCanvas(displayWidth-20,displayHeight-30);

  
  game = new Game();
  game.getState();
  game.start();
  // call the game object and the functions getState and start
}
function draw(){

  if(PlayerCount === 4){

    game.update(1);

  }
if(gameState === 1){

  clear();
game.play();

}

//if(gameState === 2){

//game.end();


//}

}