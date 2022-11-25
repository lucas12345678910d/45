class Game {
    start(){
        player=new Player()
        playerCount=player.getCount()
        form=new Form()
        form.display()
        barco1=createSprite(200,400)
        barco2=createSprite(650,400)
        barco1.addImage(barco1Img)
        barco2.addImage(barco2Img)
        barco1.scale=0.2
        barco2.scale=0.2
    }
    getState(){
        var gameStateRef=database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    play(){
        drawSprites()
        form.greeting.hide()
    }
}
