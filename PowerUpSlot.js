function PowerSlot(position, index) {
  this.sprite = sprites.extras["power_up_slot"].normal;
  this.position = position;
  this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
  this.contains = undefined;
  this.rect = new Rectangle(position.x - this.sprite.width / 2, position.y - this.sprite.height / 2, this.sprite.width, this.sprite.height);
  this.index = index;
}

PowerSlot.prototype.draw = function () {
  this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);

  Canvas.drawImage(this.sprite, this.position, 0, this.origin);
  if (this.contains === "bomb") {
    Canvas.drawImage(
      sprites.extras["bomb_icon"].normal,
      new Vector2(this.position.x, this.position.y - 10),
      0,
      new Vector2(20, 20)
    );
  }
  if (this.contains === "target") {
    Canvas.drawImage(
      sprites.extras["homing_icon"].normal,
      new Vector2(this.position.x - 2.5, this.position.y - 2.5),
      0,
      new Vector2(20, 20)
    );
  }
  if (this.contains === "freeze") {
    Canvas.drawImage(
      sprites.extras["snowflake"].normal,
      new Vector2(this.position.x + 2.5, this.position.y),
      0,
      new Vector2(20, 20),
      1.3
    );
  }

};

PowerSlot.prototype.update = function () {
  this.rect = new Rectangle(this.position.x - this.sprite.width / 2, this.position.y - this.sprite.height / 2, this.sprite.width, this.sprite.height);

  if (!Touch.isTouchDevice) { 
  if (this.index === 1 && Keyboard.keyPressed === 49) {
    // Key 1
    this.activate();
  }
  if (this.index === 2 && Keyboard.keyPressed === 50) {
    // Key 2
    this.activate();
  }
  if (this.index === 3 && Keyboard.keyPressed === 51) {
    // Key 3
    this.activate();
  }
  if (this.index === 4 && Keyboard.keyPressed === 52) {
    // Key 4
    this.activate();
  }
}
if (Touch.isTouchDevice) {
  if (Touch.containsTouchPress(this.rect)) {
    this.activate()
  }
}
};

PowerSlot.prototype.activate = function () {
  if (this.contains === "bomb") {
    for (var k = 0; k < Game.gameWorld.balloons.length; k++) {
      Gameg.gameWorld.balloons[k].health -= 10;
      if (Game.gameWorld.balloons[k].health <= 0) {
        sounds.popEffect.volume = 0.4;
        Game.gameWorld.balloonsPopped += 1;
        sounds.popEffect.play();
        Game.gameWorld.balloons[k].popped = true;
        Game.gameWorld.balloons[k].popTime = Date.now()
      }
    }
    Game.gameWorld.balloons = Game.gameWorld.balloons.filter((a) => a);
    sounds.boom.play();
    Game.gameWorld.tutorialStep();
  } 
  if (this.contains === "target") {
    Game.gameWorld.targetPowerUpStart = Date.now();
    Game.gameWorld.targeting = true;
    Game.gameWorld.tutorialStep();
  } 
  if (this.contains === "freeze") {
    Game.gameWorld.moving = false;
    Game.gameWorld.freezeTimer = Date.now();
    Game.gameWorld.tutorialStep();
  }
  this.contains = undefined;
};
