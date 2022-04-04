function Blimp() {
  this.position = new Vector2(900, -200);
  this.velocity = new Vector2(0, 20)
  this.origin = new Vector2(275, 195);
  this.healthState = 'full'
  this.health = undefined;
  this.maxHealth = undefined
  this.applyHealth()
  alert(this.health)
}

Blimp.prototype.applyHealth = function() {
  if (Game.gameWorld.difficulty === 'easy') {
    this.maxHealth = 75
    this.health = 75
  }
  if (Game.gameWorld.difficulty === 'normal') {
    this.maxHealth = 100;
    this.health = 100;
  }
  if (Game.gameWorld.difficulty === 'hard') {
    this.maxHealth = 150;
    this.health = 150
  }
}

Blimp.prototype.draw = function() {
  Canvas.drawImage(sprites.blimp[this.healthState].normal, this.position, 0, this.origin);
}

Blimp.prototype.update = function(delta) {
  this.position.addTo(this.velocity.multiply(delta));
  if (this.health <= this.maxHealth * 0.80)
  this.healthState = 'hit1';
  if (this.health <= this.maxHealth * 0.60)
  this.healthState = 'hit2';
  if (this.health <= this.maxHealth * 0.40)
  this.healthState = 'hit3';
  if (this.health <= this.maxHealth * 0.20)
  this.healthState = 'hit4';
}