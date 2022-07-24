function PlayButton(xPosition, yPosition, mode) {
  this.position = new Vector2(xPosition, yPosition);
  this.origin = new Vector2(0, 0);
  this.mode = mode;
  this.rect = new Rectangle(0, 0, xPosition, yPosition);
  this.scale = 1;
}

PlayButton.prototype.start = function() {
  Game.paused = false;
  Game.gameWorld.started = true
  Game.gameWorld.gameActive = true;
  sounds.playSound.volume = 0.2;
  sounds.cannonShot.volume = 0.4;
  sounds.playSound.play();
  sounds.backgroundMusicBasic.volume = 0.6;
  Game.gameWorld.balloonsPerRow = 1;
  sounds.backgroundMusicBasic.play();
  Game.gameWorld.mode = this.mode;
  if (this.mode === "tutorial_mode") {
    Game.gameWorld.tutorialStep();
  }
  Game.gameWorld.addScore(0);

  if (this.mode === "easy") {
    this.balloonMinVelocity = 30;
  }
  if (this.mode === "hard") {
  }
  if (this.mode === "apex") {
    Game.gameWorld.balloonMinVelocity = 50;
    Game.gameWorld.lives = 1;
  }
}

PlayButton.prototype.update = function () {
  if (Touch.isTouchDevice && Touch.containsTouchPress(this.rect) &&
  Game.gameWorld.gameActive === false 
  ) {
    alert()
    this.start()
  }
  else if (
    !Touch.isTouchDevice &&
    this.rect.contains(Mouse.position) &&
    Mouse.pressed && 
    Game.gameWorld.gameActive === false 
  ) {
   this.start()
  }
};

PlayButton.prototype.draw = function () {
  if (Game.gameWorld.gameActive === false) {
    if (this.mode === "intermediate") {
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

    if (this.mode === "easy") {
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

    if (this.mode === "hard") {
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
    if (this.mode === "apex") {
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
    if (this.mode === "armored_only") {
      Canvas.drawImage(
        sprites.extras["armored_only_button"].normal,
        this.position,
        0,
        new Vector2(0, 0)
      );
      Canvas.drawText(
        "Armored Only",
        new Vector2(this.position.x + 20, this.position.y + 60),
        "black",
        "top",
        "Courier New",
        "45px"
      );
      this.rect = new Rectangle(
        this.position.x,
        this.position.y,
        sprites.extras["armored_only_button"].normal.width,
        sprites.extras["armored_only_button"].normal.height
      );
    }
    if (this.mode === "faster_balloons") {
      Canvas.drawImage(
        sprites.extras["faster_balloons_button"].normal,
        this.position,
        0,
        new Vector2(0, 0)
      );
      Canvas.drawText(
        "Faster Balloons",
        new Vector2(this.position.x + 15, this.position.y + 60),
        "black",
        "top",
        "Courier New",
        "40px"
      );
      this.rect = new Rectangle(
        this.position.x,
        this.position.y,
        sprites.extras["faster_balloons_button"].normal.width,
        sprites.extras["faster_balloons_button"].normal.height
      );
    }
    if (this.mode === "no_color_mode") {
      Canvas.drawImage(
        sprites.extras["no_color_mode"].normal,
        this.position,
        0,
        new Vector2(0, 0)
      );
      Canvas.drawText(
        "No Color",
        new Vector2(this.position.x + 70, this.position.y + 60),
        "black",
        "top",
        "Courier New",
        "50px"
      );
      this.rect = new Rectangle(
        this.position.x,
        this.position.y,
        sprites.extras["no_color_mode"].normal.width,
        sprites.extras["no_color_mode"].normal.height
      );
    }
    if (this.mode === "freeplay_mode") {
      Canvas.drawImage(
        sprites.extras["freeplay_mode_button"].normal,
        this.position,
        0,
        new Vector2(0, 0)
      );
      Canvas.drawText(
        "Freeplay",
        new Vector2(this.position.x + 70, this.position.y + 60),
        "black",
        "top",
        "Courier New",
        "50px"
      );
      this.rect = new Rectangle(
        this.position.x,
        this.position.y,
        sprites.extras["freeplay_mode_button"].normal.width,
        sprites.extras["freeplay_mode_button"].normal.height
      );
    }
    if (this.mode === "tutorial_mode") {
      Canvas.drawImage(
        sprites.extras["tutorial_mode_button"].normal,
        this.position,
        0,
        new Vector2(0, 0),
        0.5
      );
      Canvas.drawText(
        "Tutorial",
        new Vector2(this.position.x + 20, this.position.y + 30),
        "black",
        "top",
        "Courier New",
        "35px"
      );
      this.rect = new Rectangle(
        this.position.x,
        this.position.y,
        sprites.extras["tutorial_mode_button"].normal.width / 2,
        sprites.extras["tutorial_mode_button"].normal.height / 2
      );
    }
  }
};
