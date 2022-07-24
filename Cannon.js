function Cannon() {
  this.currentColor = "red";
  this.barrel = sprites.cannon_parts["barrel"].normal;
  this.position = new Vector2(220, 550);
  this.origin = new Vector2(0, 20);
  this.velocity = new Vector2(0, 0);
  this.firstClickClicked = false; // Detect if the click was for the menu screen
  this.rotation = 0;
  this.spl = new Vector2(0, 0);
}

Cannon.prototype.draw = function () {
  Canvas.drawImage(this.barrel, this.position, this.rotation, this.origin);
  Canvas.drawImage(
    sprites.cannon_parts[this.currentColor].normal,
    new Vector2(this.position.x - 120, this.position.y - 50),
    0,
    { x: 0, y: 0 }
  );
};

Cannon.prototype.ballPosition = function () {
  var opp = Math.sin(this.rotation) * this.barrel.width;
  var adj = Math.cos(this.rotation) * this.barrel.width;
  return new Vector2(this.position.x + adj, this.position.y + opp);
};

Cannon.prototype.shoot = function() {
  if (Touch.isTouchDevice) {
    this.velocity = Touch.getPosition(0).subtract(this.position).multiplyBy(1.1);
      }
      else {
    this.velocity = Mouse.position.subtract(this.position).multiplyBy(1.2);
      }
    Game.gameWorld.balls.push(new Ball());
    if (Game.gameWorld.specialtiesEquipped === "double_ball_upgrade") {
      Game.gameWorld.balls.push(new Ball()); // Add an extra ball
    }
    Game.gameWorld.ballsFired += 1;
    sounds.cannonShot.play();
}

Cannon.prototype.handleInput = function () {
  if (!Game.paused && Game.gameWorld.gameActive) {
    if (!Touch.isTouchDevice) {
    if (Keyboard.keyDown === 66) this.currentColor = "blue";
    else if (Keyboard.keyDown === 71) this.currentColor = "green";
    else if (Keyboard.keyDown === 82) this.currentColor = "red";

    var opp = Mouse.position.y - this.position.y;
    var adj = Mouse.position.x - this.position.x;
  }
  else {
    var opp = this.spl.y - this.position.y;
    var adj = this.spl.x - this.position.x;

  }
  this.rotation = Math.atan2(opp, adj);

    if (Mouse.pressed && Game.gameWorld.started) {
      this.shoot()        
    }
    else if (Touch.isTouchDevice && Touch.touchPresses.length > 0 && Game.gameWorld.started && !Touch.touchingRect) {
      this.spl = Touch.getPosition(0)
      var opp = this.spl.y - this.position.y;
      var adj = this.spl.x - this.position.x;
      this.rotation = Math.atan2(opp, adj);
      this.shoot()
    }
  }
};

Cannon.prototype.update = function () {};
