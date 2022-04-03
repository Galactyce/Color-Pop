function Balloon(xPosition, velocity, index, health) {
  this.position =  new Vector2(xPosition, -100);
  this.rainbowBalloonChance = 2.7;
  this.index = index;
  this.health = health;
  this.currentColor = undefined;
  this.timePopped = undefined;
  this.positionPopped = undefined;
  this.popPointValue = 10;
  this.popHeartValue = 1;
  this.velocity = new Vector2(0, velocity);
  this.origin = new Vector2(60, 60);
  this.minVelocity = 30 + Game.gameWorld.score / 20;
  this.wavy = false;
  this.moveDir = -2;
  this.leftMoved = false;
  this.rightMoved = false;
  this.rainbowProbability = 0.06;
  this.specialProbability = 0.035 + Game.gameWorld.specialBalloons.length / 200 + Game.gameWorld.score / 25000;
  this.penaltyProbability = 0.035 + Game.gameWorld.penaltyBalloons.length / 200 + Game.gameWorld.score / 25000;
  
  this.chooseColor();
  this.moveToTop();
  this.calculateRandomVelocity();
  this.applyHealth();
}



Balloon.prototype.applyHealth = function() {
  if (this.currentColor === 'metal') {
    this.health = 9;
    this.velocity.y = 25;
  }
  
}


Balloon.prototype.moveToTop = function() {
  this.position.y = -Math.random() * 100 - 200;
}

Balloon.prototype.draw = function() {
   Canvas.drawImage(sprites.balloons[this.currentColor].normal, this.position, 0, this.origin);
}

Balloon.prototype.calculateRandomVelocity = function() {
  this.velocity.y =  Math.random() * 20 + this.minVelocity;
}




Balloon.prototype.update = function (delta) { // 1
    this.position.addTo(this.velocity.multiply(delta));
    if (this.wavy) {
      if (this.position.x >= 1100 && this.leftMoved === false) {
        this.leftMoved = true;
        this.rightMoved = false;
        this.moveDir = -1;

      } 
      if (this.position.x <= 700 && this.rightMoved === false) {
        this.rightMoved = true;
        this.leftMoved = false;
        this.moveDir = 1;

      }
    this.position.x += this.moveDir;
   
    }
}
// 1

Balloon.prototype.chooseColor = function() {
  var randomval = Math.random();
  if (randomval < this.rainbowProbability) {
    this.currentColor = 'rainbow'

 }
  else if (randomval > 1 - this.specialProbability && Game.gameWorld.specialBalloons.length > 0 &&
     Date.now() > Game.gameWorld.lastSpecialBalloons + 15000 ) {
    this.currentColor = Game.gameWorld.specialBalloons[Math.floor(Math.random() * Game.gameWorld.specialBalloons.length)];
    Game.gameWorld.lastSpecialBalloons = Date.now()
  }

  else if (randomval > 0.5 && randomval < 0.5 + this.penaltyProbability && Game.gameWorld.penaltyBalloons.length > 0) {
    this.currentColor = Game.gameWorld.penaltyBalloons[Math.floor(Math.random() * Game.gameWorld.penaltyBalloons.length)];
  }

  else {
    this.currentColor = Game.gameWorld.normalBalloons[Math.floor(Math.random() * Game.gameWorld.normalBalloons.length)];
    if (Game.gameWorld.score >= 1000 && Math.random() < 0.2) this.wavy = true;
  }
  
}





