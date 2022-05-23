function ModeButton(mode, xPosition, yPosition) {
  this.position = new Vector2(xPosition, yPosition);
  this.mode = mode;
  this.rect = new Rectangle(0, 0, 0, 0);
  this.origin = new Vector2(0, 0)
  this.gameActive = false;

}

ModeButton.prototype.draw = function() { 
  if (Game.gameWorld.started === false && this.gameActive === false) {
  if (this.mode === "armored_only") {
  Canvas.drawImage(sprites.extras['armored_only_button'].normal, this.position, 0, new Vector2(0, 0))
  Canvas.drawText("Armored Only", new Vector2(this.position.x + 20, this.position.y + 60), "black", "top", "Courier New", "45px")
  this.rect = new Rectangle(
    this.position.x, this.position.y, sprites.extras['armored_only_button'].normal.width,
     sprites.extras['armored_only_button'].normal.height);
  }
  if (this.mode === 'faster_balloons') {
    Canvas.drawImage(sprites.extras['faster_balloons_button'].normal, this.position, 0, new Vector2(0, 0))
    Canvas.drawText("Faster Balloons", new Vector2(this.position.x + 15, this.position.y + 60),
     "black", "top", "Courier New", "40px")
    this.rect = new Rectangle(
    this.position.x, this.position.y, sprites.extras['faster_balloons_button'].normal.width,
     sprites.extras['faster_balloons_button'].normal.height);
  }
  if (this.mode === 'no_color_mode') {
    Canvas.drawImage(sprites.extras['no_color_mode'].normal, this.position, 0, new Vector2(0, 0))
    Canvas.drawText("No Color", new Vector2(this.position.x + 70, this.position.y + 60), "black", "top", "Courier New", "50px")
    this.rect = new Rectangle(
    this.position.x, this.position.y, sprites.extras['no_color_mode'].normal.width, sprites.extras['no_color_mode'].normal.height);
  }
  if (this.mode === 'freeplay_mode') {
    Canvas.drawImage(sprites.extras['freeplay_mode_button'].normal, this.position, 0, new Vector2(0, 0))
    Canvas.drawText("Freeplay", new Vector2(this.position.x + 70, this.position.y + 60), "black", "top", "Courier New", "50px")
    this.rect = new Rectangle(
    this.position.x, this.position.y, sprites.extras['freeplay_mode_button'].normal.width, sprites.extras['freeplay_mode_button'].normal.height);
  }
  if (this.mode === 'tutorial_mode') {
    Canvas.drawImage(sprites.extras['tutorial_mode_button'].normal, this.position, 0, new Vector2(0, 0))
    Canvas.drawText("Tutorial", new Vector2(this.position.x + 70, this.position.y + 60), "black", "top", "Courier New", "50px")
    this.rect = new Rectangle(
    this.position.x, this.position.y, sprites.extras['tutorial_mode_button'].normal.width, sprites.extras['tutorial_mode_button'].normal.height);
  }
}

}

ModeButton.prototype.update = function() {
  if (this.rect.contains(Mouse.position) && Mouse.pressed && this.gameActive === false) {
   
    if (this.mode === "armored_only") {
      Game.gameWorld.balloonsPerRow = 1
      Game.gameWorld.mode = 'only_armored'
    }
    else if (this.mode === 'faster_balloons') {
      Game.gameWorld.balloonsPerRow = 1
      Game.gameWorld.mode = 'faster_balloons';

    }

    else if (this.mode === 'no_color_mode') {
      Game.gameWorld.balloonsPerRow = 5
      Game.gameWorld.mode = 'no_color';
    }

    else if (this.mode === 'freeplay_mode') {
      Game.gameWorld.mode = 'freeplay'
      Game.gameWorld.addScore(0)
    }

    else if (this.mode === 'tutorial_mode') {
      Game.gameWorld.mode = 'tutorial';
      Game.gameWorld.tutorialStep()
    }

  for (var i=0; i < Game.gameWorld.buttons.length; i++) {
    Game.gameWorld.buttons[i].gameActive = true;
  }


  
  Game.paused = false
  Game.gameWorld.started = true;

  sounds.playSound.volume = 0.2
  sounds.cannonShot.volume = 0.4
  sounds.playSound.play()
  sounds.backgroundMusicBasic.volume = 0.6;

  sounds.backgroundMusicBasic.play()

}
}