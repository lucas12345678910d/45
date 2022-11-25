class Player {   
    constructor(){
        this.name=null;
        this.index=null;
        this.positionX=0;
        this.positionY=0;
    }   
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    getCount(){
        var playerCountRef=database.ref("playerCount")
        playerCountRef.on("value",data=>{
            playerCount=data.val()
        })
    }
    addPlayer(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
         name:this.name
        })
    }
}

