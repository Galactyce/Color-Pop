function Game_Singleton() {
  this.spritesStillLoading = 0;
  this.bombActive = false;
  this.iceActive = false
  this.paused = false;
}


Game_Singleton.prototype.start = function() {
  Canvas.init();
  Game.loadAssets();
  Game.assetLoadingLoop()
};


Game_Singleton.prototype.mainLoop = function() {
  var delta = 1 / 50;

  if (!this.paused) {
  
  
  Game.gameWorld.update(delta);
  Canvas.clear();
  Game.gameWorld.handleInput(delta);
  Game.gameWorld.resetInputs();
  Game.gameWorld.draw();
  }
  Mouse.checkInputs();
  Mouse.reset()
  window.setTimeout(Game.mainLoop, 1000/60)
}


     
Game_Singleton.prototype.assetLoadingLoop = function() {
  if (this.spritesStillLoading > 0) {
  setTimeout(this.assetLoadingLoop, 1000/50);
  }
else {
  Game.gameWorld = new painterGameWorld();
  console.log("Sprites loaded.")
  Game.mainLoop()
}
}


Game_Singleton.prototype.loadImage = function(imageName) {
      var image = new Image();
      image.src = imageName;
      console.log("Loading: " + imageName)
      Game.spritesStillLoading += 1;
      image.onload = function() {
          console.log("Loaded: " + imageName);
          Game.spritesStillLoading -= 1
          console.log(Game.spritesStillLoading + " sprites still loading.")
      }
      return image;
  }

Game_Singleton.prototype.loadAssets = function() {

}




var Game = new Game_Singleton();
