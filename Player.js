class Player{


    constructor()
    {

        this.name = null;
        this.index = null;
        this.distance = 0;

    }
    getCount() //getting the playercount from the database
    {
 
        var playercountref = database.ref("PlayerCount");
        playercountref.on("value", (data)=> { 
            PlayerCount = data.val();
        })

        

    }
   
   
    updateCount(count) //updating the playercount to database
    {
    
        database.ref('/').update({
        PlayerCount: count
        

        });
        console.log(count);
        
    }



    
    update() // updating name
    {
      var playerIndex = "players/player"+ this.index;
      
      //console.log(playerIndex);
      database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance
      });

}
static getPlayerInfo(){

    var playerInforef = database.ref("Players");
    playerInforef.on("value",(data) => {

      allplayers = data.val();  
    }
    )
      

}

}