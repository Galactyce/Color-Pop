function Balloon(xPosition, index, health) {
  this.position = new Vector2(xPosition, -100);
  this.rainbowBalloonChance = 2.7;
  this.index = index;
  this.health = health;
  this.currentColor = undefined;
  this.timePopped = undefined;
  this.positionPopped = undefined;
  this.popPointValue = 10;
  this.popHeartValue = 1;
  this.velocity = new Vector2(0, 0);
  this.origin = new Vector2(60, 60);
  this.wavy = false;
  this.moveDir = -2;
  this.armored = false;
  this.armoredChance = 0.15;
  this.leftMoved = false;
  this.rightMoved = false;
  this.rainbowProbability = 0.05;
  this.specialProbability =
    0.75 +
    Game.gameWorld.specialBalloons.length / 200 +
    Game.gameWorld.score / 25000;
  this.penaltyProbability =
    0.075 +
    Game.gameWorld.penaltyBalloons.length / 200 +
    Game.gameWorld.score / 25000;
  this.calculateRandomVelocity();
  this.chooseColor();
  this.checkSpecials();
  this.applyHealth();
  this.moveToTop();
}

Balloon.prototype.applyHealth = function () {
  if (this.currentColor === "metal") {
    this.health = 9;
    this.velocity.y = 25;
  }
  if (this.armored) {
    this.health *= 2;
  }
};

Balloon.prototype.moveToTop = function () {
  this.position.y = -Math.random() * 100 - 200;
};

Balloon.prototype.draw = function () {
  if (!this.armored)
    Canvas.drawImage(
      sprites.balloons[this.currentColor].normal,
      this.position,
      0,
      this.origin
    );
  if (this.armored) {
    Canvas.drawImage(
      sprites.balloons[this.currentColor].reinforced,
      this.position,
      0,
      this.origin
    );
    if (this.health === 1) {
      // Show the normal balloon image at 1 hp for the armored balloon
      Canvas.drawImage(
        sprites.balloons[this.currentColor].normal,
        this.position,
        0,
        this.origin
      );
    }
  }
};

Balloon.prototype.calculateRandomVelocity = function () {
  this.velocity.y = Math.random() * 20 + Game.gameWorld.balloonMinVelocity;
};

Balloon.prototype.update = function (delta) {
  // 1
  if (Game.gameWorld.moving === true) {
    this.position.addTo(this.velocity.multiply(delta));
    if (Game.gameWorld.wavyActive) {
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
};
// 1

Balloon.prototype.chooseRandomValue = function (value) {
  return Math.random() * value;
};

Balloon.prototype.checkSpecials = function () {
  if (Game.gameWorld.mode === "only_armored") {
    this.armored = true;
    this.health *= 2;
  }
  if (Game.gameWorld.mode === "faster_balloons") {
    this.velocity.y *= 2;
  }

  if (Game.gameWorld.mode === 'tutorial' && this.score >= 360) {
    this.rainbowProbability = 0;
  }

  var randomval = this.chooseRandomValue();
  if (Game.gameWorld.difficulty === "intermediate") {
    if (randomval < this.armoredChance && Game.gameWorld.score >= 2000) {
      this.armored = true;
      this.health *= 2;
    }
  }
};

Balloon.prototype.chooseColor = function () {
  var randomval = this.chooseRandomValue(1);
  if (Game.gameWorld.difficulty === "easy") this.rainbowProbability = 0.1;

  if (Game.gameWorld.mode === "no_color") {
    this.currentColor = "white";
  } else if (randomval < this.rainbowProbability) {
    this.currentColor = "rainbow";
  } else if (
    randomval > 1 - this.specialProbability &&
    Game.gameWorld.specialBalloons.length > 0 &&
    Date.now() > Game.gameWorld.lastSpecialBalloons + 60000
  ) {
    this.currentColor =
      Game.gameWorld.specialBalloons[
        Math.floor(Math.random() * Game.gameWorld.specialBalloons.length)
      ];
    Game.gameWorld.lastSpecialBalloons = Date.now();
  } else if (
    randomval > 0.5 &&
    randomval < 0.5 + this.penaltyProbability &&
    Game.gameWorld.penaltyBalloons.length > 0
  ) {
    this.currentColor =
      Game.gameWorld.penaltyBalloons[
        Math.floor(Math.random() * Game.gameWorld.penaltyBalloons.length)
      ];
  } else {
    this.currentColor =
      Game.gameWorld.normalBalloons[
        Math.floor(Math.random() * Game.gameWorld.normalBalloons.length)
      ];
    if (
      Game.gameWorld.difficulty === "intermediate" ||
      Game.gameWorld.difficulty === "hard" ||
      Game.gameWorld.mode === "freeplay"
    ) {
      if (Game.gameWorld.score >= 1000 && Math.random() < 0.1) this.wavy = true;
      if (Game.gameWorld.score >= 1250 && Math.random() < 0.03)
        this.armored = true;
    }
    if (Game.gameWorld.difficulty === "apex") {
      if (Game.gameWorld.score >= 1000 && Math.random() < 0.06)
        this.armored = true;
    }
  }
};
