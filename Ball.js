function Ball() {
  this.origin = new Vector2(10, 10);
  this.position = new Vector2(0, 0);
  this.velocity = new Vector2(0, 0);
  this.hitDistanceX = 200;
  this.hitDistanceY = 200;
  this.rotation = 0;
  this.hitBalloon = false;
  this.active = true;
  this.hitBlimp = false;
  this.reset();
  this.currentColor = Game.gameWorld.cannon.currentColor;
}

Ball.prototype.reset = function () {
  this.position = Game.gameWorld.cannon.ballPosition().subtractBy(this.origin);
  if (!Touch.isTouchDevice) { 
    this.velocity = Mouse.position.subtract(this.position).multiplyBy(1.2);
    
  if (Game.gameWorld.specialtiesEquipped === "double_ball_upgrade") {
    this.velocity = Mouse.position
      .subtract(this.position)
      .multiplyBy(Math.random() * 0.3 + 0.8);
  }
  }  
  else if (Touch.isTouchDevice) {
  this.velocity = Game.gameWorld.cannon.velocity;
  if (Game.gameWorld.specialtiesEquipped === "double_ball_upgrade") {
    this.velocity = Touch.getPosition(0)
      .subtract(this.position)
      .multiplyBy(Math.random() * 0.3 + 0.8);
  }
}
};

Ball.prototype.draw = function () {
  if (this.active)
    Canvas.drawImage(
      sprites.balls[this.currentColor].normal,
      this.position,
      0,
      this.origin
    );
};

Ball.prototype.update = function (delta) {
  if (this.active === false) return;
    this.velocity.x *= 0.99;
    this.velocity.y += 6;
    this.position.addTo(this.velocity.multiply(delta));
};

Ball.prototype.handleInput = function () {};
