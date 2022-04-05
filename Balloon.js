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
  this.velocity = new Vector2(0, 0);
  this.minVelocity = 30 + velocity
  this.origin = new Vector2(60, 60);
  this.wavy = false;
  this.moveDir = -2;
  this.reinforced = false;
  this.reinforcedChance = 0.15
  this.leftMoved = false;
  this.rightMoved = false;
  this.rainbowProbability = 0.06;
  this.specialProbability = 0.025 + Game.gameWorld.specialBalloons.length / 200 + Game.gameWorld.score / 25000;
  this.penaltyProbability = 0.035 + Game.gameWorld.penaltyBalloons.length / 200 + Game.gameWorld.score / 25000;
  this.calculateRandomVelocity();
  this.checkReinforced()
  this.chooseColor();
  this.applyHealth();
  this.moveToTop()
}



Balloon.prototype.applyHealth = function() {
  if (this.currentColor === 'metal') {
    this.health = 9;
    this.velocity.y = 25;
  }
  if (this.currentColor === 'golden') {
    this.health = 3;
    this.velocity.y = 100
  }
  if (this.reinforced === true) {
    this.health *= 2
  }
 
}



Balloon.prototype.moveToTop = function() {
  this.position.y = -Math.random() * 100 - 200;
}

Balloon.prototype.draw = function() {
  if (!this.reinforced)
   Canvas.drawImage(sprites.balloons[this.currentColor].normal, this.position, 0, this.origin);
   if (this.reinforced)
   Canvas.drawImage(sprites.balloons[this.currentColor].reinforced, this.position, 0, this.origin);
   if (this.currentColor === 'ghost') {
     Canvas.drawImage(sprites.balloons[this.currentColor].reinforced, this.position, 0, this.origin, 0.1)
   }

}

Balloon.prototype.calculateRandomVelocity = function() {
  if (Game.gameWorld.difficulty === 'easy') this.minVelocity = 20

    if (Game.gameWorld.difficulty === 'hard') this.minVelocity = 50
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

Balloon.prototype.chooseRandomValue = function(value) {
  return Math.random() * value
}

Balloon.prototype.checkReinforced = function() {
  var randomval = this.chooseRandomValue(1) 
  if (Game.gameWorld.difficulty === 'normal') {
    if (randomval < this.reinforcedChance && Game.gameWorld.score >= 2000) {
      this.reinforced = true
      this.health *= 2
    }
  }
  }


Balloon.prototype.chooseColor = function() {
  var randomval = this.chooseRandomValue(1)
  if (Game.gameWorld.difficulty === 'easy') 
  this.rainbowProbability = 0.1
  if (randomval < this.rainbowProbability) {
    this.currentColor = 'rainbow'

 }
  else if (randomval > 1 - this.specialProbability && Game.gameWorld.specialBalloons.length > 0 && 
     Date.now() > Game.gameWorld.lastSpecialBalloons + 25000 ) {
    this.currentColor = Game.gameWorld.specialBalloons[Math.floor(Math.random() * Game.gameWorld.specialBalloons.length)];
    Game.gameWorld.lastSpecialBalloons = Date.now()
  
   
  }

  else if (randomval > 0.5 && randomval < 0.5 + this.penaltyProbability && Game.gameWorld.penaltyBalloons.length > 0 &&  Date.now() > Game.gameWorld.lastSpecialBalloon + 60000) {
    this.currentColor = Game.gameWorld.penaltyBalloons[Math.floor(Math.random() * Game.gameWorld.penaltyBalloons.length)];
  }

  else {
    this.currentColor = Game.gameWorld.normalBalloons[Math.floor(Math.random() * Game.gameWorld.normalBalloons.length)];
    if (Game.gameWorld.difficulty === 'normal') {
    if (Game.gameWorld.score >= 1000 && Math.random() < 0.1) this.wavy = true;
    }
  }
  
}





