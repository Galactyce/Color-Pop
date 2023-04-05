function ModeToggleButton(xPosition, yPosition) {
  this.sprite = sprites.extras["simple_button"].normal;
  this.position = new Vector2(xPosition, yPosition);
  this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
  this.rect = new Rectangle(
    this.position.x - this.origin.x / 2,
    this.position.y - this.origin.y / 2,
    this.sprite.width * 0.5,
    this.sprite.height * 0.5
  );
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
  this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
  this.rect = new Rectangle(
    this.position.x - this.origin.x / 2,
    this.position.y - this.origin.y / 2,
    this.sprite.width * 0.5,
    this.sprite.height * 0.5
  );

  if (!Touch.isTouchDevice) {
    if (this.rect.contains(Mouse.position) && Mouse.pressed) {
      if (this.mode === "normal") {
        this.mode = "extras";
        return;
      }
      if (this.mode === "extras") {
        this.mode = "normal";
        return;
      }
    }
  }
  else {
    if (Touch.containsTouchPress(this.rect)) {
      if (Game.gameWorld.area === "shop") {
        Game.gameWorld.area = "home";
        this.position = new Vector2(200, 550);
        return;
      }
      if (Game.gameWorld.area === "home") {
        Game.gameWorld.area = "shop";
        this.position = new Vector2(200, 650);
        return;
      }
    }
  }
};
