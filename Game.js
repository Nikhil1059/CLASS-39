class Game{

    constructor(){


    }
   
   
   
      getState() // read the game State from Database
   
    { 
   
        var gamestateref = database.ref("gameState");
        gamestateref.on("value",function(data){
           gameState = data.val();

        })

    }
    
    
    update(state) // update the gameState from the database
    {

      database.ref('/').update({
        gameState:state

        });
        
    

    }
     async start() // start the game when the gamestate is zero and display the  form on the screen
    {
    

      if(gameState === 0){

        player = new Player();
        var playercountref = await database.ref("PlayerCount").once("value");
        if(playercountref.exists()){

          PlayerCount = playercountref.val()
          player.getCount();
        }

        form = new Form();
        form.display();

      }
      car1 = createSprite(100,200);
      car1.addImage(carimg1);

      car2 = createSprite(300,200);
      car2.addImage(carimg2);

      car3 = createSprite(500,200);
      car3.addImage(carimg3);

      car4 = createSprite(700,200);
      car4.addImage(carimg4);

      cars = [car1,car2,car3,car4];
     

    }

    play(){

      form.hide();
      textSize(30)
      text("Game Start",120,100)
      Player.getPlayerInfo();

      if(allplayers != undefined){
        //background(ground1);
        var Index = 0,x = 175,y;


        
        
        //image(track1,0,-displayHeight*4,displayWidth,displayHeight*5)

        /*if(player.distance>3600){

          gameState = 2

        }*/

        for(var plr in allplayers){
        Index = Index+1;
        x = x+200
        y = displayHeight-allplayers[plr].distance
        cars[Index-1].x = x;
        cars[Index-1].y = y;
         
          if(Index === player.index){

        cars[Index-1].shapeColor = ("red");
        camera.position.x = displayWidth/2
        camera.position.y = cars[Index-1].y
        
          }
      }
    }
      if(keyIsDown(UP_ARROW)&& player.index != null){

        player.distance = player.distance+50
        player.update();


      }
      drawSprites();
    }

    end(){

      console.log("game ends")

    }
    

  }



