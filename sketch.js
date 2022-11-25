var database
var barco1,barco2,barco1Img,barco2Img
var fundoImg
var bola,bolaImg
var form,game
var gameState,playerCount
var player
function preload(){
    barco1Img=loadImage("assets/barco1.png")
    barco2Img=loadImage("assets/barco2.png")
    fundoImg=loadImage("assets/Fundo.gif")
    bolaImg=loadImage("assets/bola.png")
}
function setup(){
    createCanvas(800,800)
    database=firebase.database()
    game=new Game()
    game.start()
    game.getState()
}
function draw(){
    background(fundoImg)
    if(gameState==1){
        game.play()
    }
    if(playerCount==2){
        game.update(1)
    }
    drawSprites()
}