function PlayButton(xPosition, yPosition, difficulty) {
  this.position = new Vector2(xPosition, yPosition);
  this.origin = new Vector2(0, 0);
  this.difficulty = difficulty;
  this.rect = new Rectangle(0, 0, xPosition, yPosition);
  this.gameActive = false;
}

PlayButton.prototype.update = function () {
  if (
    this.rect.contains(Mouse.position) &&
    Mouse.pressed &&
    this.gameActive === false
  ) {
    for (var i = 0; i < Game.gameWorld.buttons.length; i++) {
      Game.gameWorld.buttons[i].gameActive = true;
    }
    Game.paused = false;
    Game.gameWorld.started = true;
    sounds.playSound.volume = 0.2;
    sounds.cannonShot.volume = 0.4;
    sounds.playSound.play();
    sounds.backgroundMusicBasic.volume = 0.6;
    Game.gameWorld.balloonsPerRow = 1;
    sounds.backgroundMusicBasic.play();
    Game.gameWorld.difficulty = this.difficulty;
    Game.gameWorld.addScore(0);
    if (this.difficulty === "apex") {
      Game.gameWorld.balloonMinVelocity = 50;
      Game.gameWorld.lives = 1;
    }
    if (this.difficulty === "easy") {
      this.balloonMinVelocity = 30;
    }
    if (this.difficulty === "hard") {
    }
  }
};

PlayButton.prototype.draw = function () {
  if (!Game.gameWorld.started && this.gameActive === false) {
    if (this.difficulty === "intermediate") {
      Canvas.drawImage(
        sprites.extras["intermediate_button"].normal,
        this.position,
        0,
        this.origin
      );
      Canvas.drawText(
        "Intermediate",
        new Vector2(this.position.x + 20, this.position.y + 60),
        "black",
        "top",
        "Courier New",
        "50px"
      );
      this.rect = new Rectangle(
        this.position.x,
        this.position.y,
        sprites.extras["intermediate_button"].normal.width,
        sprites.extras["intermediate_button"].normal.height
      );
    }

    if (this.difficulty === "easy") {
      Canvas.drawImage(
        sprites.extras["easy_button"].normal,
        this.position,
        0,
        this.origin
      );
      Canvas.drawText(
        "Easy",
        new Vector2(this.position.x + 120, this.position.y + 60),
        "black",
        "top",
        "Courier New",
        "50px"
      );
      this.rect = new Rectangle(
        this.position.x,
        this.position.y,
        sprites.extras["easy_button"].normal.width,
        sprites.extras["easy_button"].normal.height
      );
    }

    if (this.difficulty === "hard") {
      Canvas.drawImage(
        sprites.extras["hard_button"].normal,
        this.position,
        0,
        this.origin
      );
      Canvas.drawText(
        "Hard",
        new Vector2(this.position.x + 120, this.position.y + 60),
        "black",
        "top",
        "Courier New",
        "50px"
      );
      this.rect = new Rectangle(
        this.position.x,
        this.position.y,
        sprites.extras["hard_button"].normal.width,
        sprites.extras["hard_button"].normal.height
      );
    }
    if (this.difficulty === "apex") {
      Canvas.drawImage(
        sprites.extras["apex_button"].normal,
        this.position,
        0,
        this.origin
      );
      Canvas.drawText(
        "Apex",
        new Vector2(this.position.x + 120, this.position.y + 60),
        "black",
        "top",
        "Courier New",
        "50px"
      );
      this.rect = new Rectangle(
        this.position.x,
        this.position.y,
        sprites.extras["apex_button"].normal.width,
        sprites.extras["apex_button"].normal.height
      );
    }
  }
};
