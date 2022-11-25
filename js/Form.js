class Form {
    constructor(){
        this.input=createInput("").attribute("placeholder","digite seu nome")
        this.playButton=createButton("start")
        this.greeting=createElement("h2")
    }

    setElementsPosition(){
        this.input.position(350,400)
        this.playButton.position(350,450)
        this.input.class("input")
        this.playButton.class("playButton")
        this.greeting.position(300,400)
    }

    display(){
        this.setElementsPosition();
        this.handleMousePressed();
    }

    hide(){
        this.playButton.hide();
        this.input.hide();
        this.greeting.hide();
    }

    handleMousePressed(){
        this.playButton.mousePressed(()=>{
        this.playButton.hide();
        this.input.hide();
        var mensagem=`Espere o outro jogador entrar...`
        this.greeting.html(mensagem)
        playerCount+=1;
        player.name=this.input.value();
        player.index=playerCount;
        player.addPlayer();
        player.updateCount(playerCount)
        })
    }
}
