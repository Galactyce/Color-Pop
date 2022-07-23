function ModeToggleButton(xPosition, yPosition) {
  this.sprite = sprites.extras["simple_button"].normal;
  this.position = new Vector2(xPosition, yPosition);
  this.origin = new Vector2(0, 0);
  this.mode = "normal";
}

ModeToggleButton.prototype.draw = function () {
  if (this.mode === "normal") {
    Canvas.drawImage(this.sprite, this.position, 0, this.origin, 0.5);
    Canvas.drawText(
      "Extra Modes",
      new Vector2(this.position.x + 20, this.position.y + 35),
      "black",
      "top",
      "Courier New",
      "25px"
    );
  }
  if (this.mode === "extras") {
    Canvas.drawImage(this.sprite, this.position, 0, this.origin, 0.5);
    Canvas.drawText(
      "Normal Modes",
      new Vector2(this.position.x + 10, this.position.y + 35),
      "black",
      "top",
      "Courier New",
      "25px"
    );
  }
};

ModeToggleButton.prototype.update = function () {
  this.rect = new Rectangle(
    this.position.x,
    this.position.y,
    this.sprite.width / 2,
    this.sprite.height / 2
  );

  if (!Touch.isTouchDevice) {
  if (this.rect.contains(Mouse.position) && Mouse.pressed) {
    if (this.mode === "normal") {
      this.mode = "extras";
      Game.gameWorld.scrollLength = Game.gameWorld.extraButtonString.length;
      Game.gameWorld.scrollInteger = 0;
    } else if (this.mode === "extras") {
      this.mode = "normal";
      Game.gameWorld.scrollLength = Game.gameWorld.normalButtonString.length;
      Game.gameWorld.scrollInteger = 0;
    }
  }
}
else {
  if (Touch.containsTouchPress(this.rect)) {
    if (this.mode === "normal") {
      this.mode = "extras";
      Game.gameWorld.scrollLength = Game.gameWorld.extraButtonString.length;
      Game.gameWorld.scrollInteger = 0;
    } else if (this.mode === "extras") {
      this.mode = "normal";
      Game.gameWorld.scrollLength = Game.gameWorld.normalButtonString.length;
      Game.gameWorld.scrollInteger = 0;
    }
  }
}
};
