function ModeButton(mode, xPosition, yPosition) {
  this.position = new Vector2(xPosition, yPosition);
  this.mode = mode;
  this.rect = new Rectangle(0, 0, 0, 0);
  this.origin = new Vector2(0, 0)
  this.clicked = false;
}

ModeButton.prototype.draw = function() { 
  if (this.clicked === false) {
  if (this.mode === "armored_only") {
  Canvas.drawImage(sprites.extras['armored_only_button'].normal, this.position, 0, new Vector2(0, 0))
  Canvas.drawText("Armored Only", new Vector2(this.position.x + 20, this.position.y + 60), "black", "top", "Comic Sans", "60px")
  this.rect = new Rectangle(
    this.position.x, this.position.y, sprites.extras['armored_only_button'].normal.width, sprites.extras['armored_only_button'].normal.height);
  }
}
}

ModeButton.prototype.update = function() {
  
  if (this.rect.contains(Mouse.position) && Mouse.leftPressed && this.clicked === false) {
    Game.gameWorld.playButton.clicked = true
    Game.gameWorld.easyButton.clicked = true;
    Game.gameWorld.hardButton.clicked = true;
    Game.gameWorld.armoredOnlyButton.clicked = true;
    if (this.mode === "armored_only") {
      Game.gameWorld.mode = 'only_armored'
      Game.gameWorld.addScore(0)
    }
    Game.gameWorld.started = true;

    sounds.playSound.volume = 0.2
    sounds.cannonShot.volume = 0.4
    sounds.playSound.play()
    sounds.backgroundMusicBasic.volume = 0.1;
  
    sounds.backgroundMusicBasic.play()
    Game.gameWorld.difficulty = this.difficulty
  }
}