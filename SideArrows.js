function Arrow(position, orientation, id) {
  this.sprite = sprites.extras["arrow"].normal;
  this.position = position;
  this.orientation = orientation;
  this.rotation = undefined;
  this.id = id;
  this.scale = 1;
  this.origin = new Vector2(
    sprites.extras["arrow"].normal.width / 2,
    sprites.extras["arrow"].normal.height / 2
  );
  this.rect = new Rectangle(
    position.x - this.origin.x,
    position.y - this.origin.y,
    this.sprite.width,
    this.sprite.height
  );

  this.setRotation();
}

Arrow.prototype.draw = function () {
  if (Game.gameWorld.gameActive === false)
    Canvas.drawImage(
      this.sprite,
      this.position,
      this.rotation,
      this.origin,
      this.scale
    );
};

Arrow.prototype.setRotation = function () {
  if (this.orientation === "left") {
    this.rotation = 0;
  }

  if (this.orientation === "right") {
    this.rotation = Math.PI;
  }
};

Arrow.prototype.update = function () {
  // Makes a bug not happen \/
  this.origin = new Vector2(
    sprites.extras["arrow"].normal.width / 2,
    sprites.extras["arrow"].normal.height / 2
  );
  this.rect = new Rectangle(
    this.position.x - this.origin.x,
    this.position.y - this.origin.y,
    this.sprite.width,
    this.sprite.height
  );

  if (Game.gameWorld.gameActive === false) {
    this.manageScaling();

    if (this.rect.contains(Mouse.position) && Mouse.pressed) {
      if (this.orientation === "left") {
        Game.gameWorld.scrollInteger -= 1;
        if (Game.gameWorld.scrollInteger < 0) {
          Game.gameWorld.scrollInteger = Game.gameWorld.scrollLength - 1;
        }
      }
      if (this.orientation === "right") {
        Game.gameWorld.scrollInteger += 1;
        if (Game.gameWorld.scrollInteger > Game.gameWorld.scrollLength - 1) {
          Game.gameWorld.scrollInteger = 0;
        }
      }
    }
  }
};

Arrow.prototype.manageScaling = function () {
  this.scale = 1;

  if (this.rect.contains(Mouse.position)) {
    this.scale = 1.1;
    if (Mouse.down) {
      this.scale = 0.9;
    }
  }
};
