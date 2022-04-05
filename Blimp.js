function Blimp() {
  this.position = new Vector2(900, -200);
  this.velocity = new Vector2(0, 20)
  this.origin = new Vector2(275, 195);
  this.healthState = 'full'
  this.reinforced = false;
  this.health = undefined;
  this.maxHealth = undefined;
  this.markerColor = undefined;
  this.applyHealth()
  this.changeMarker()
}

Blimp.prototype.changeMarker = function() {
  var randomval = Math.floor(Math.random() * 3);

  if (randomval === 0) 
  this.markerColor = 'red';
  if (randomval === 1) 
  this.markerColor = 'green';
  if (randomval === 2) 
  this.markerColor = 'blue';
}

Blimp.prototype.applyHealth = function() {
  if (Game.gameWorld.difficulty === 'easy') {
    this.maxHealth = 25
    this.health = 25
    if (this.reinforced) {
      this.maxHealth *= 2;
      this.health *= 2;
    }
  }
  if (Game.gameWorld.difficulty === 'normal') {
    this.maxHealth = 45;
    this.health = 45;
    if (this.reinforced) {
      this.maxHealth *= 2;
      this.health *= 2;
    }
  }
  if (Game.gameWorld.difficulty === 'hard') {
    this.maxHealth = 55;
    this.health = 55
    if (this.reinforced) {
      this.maxHealth *= 2;
      this.health *= 2;
    }
  }
}

Blimp.prototype.draw = function() {
  if (!this.reinforced)
  Canvas.drawImage(sprites.blimp[this.healthState].normal, this.position, 0, this.origin);
  if (this.reinforced)
  Canvas.drawImage(sprites.blimp[this.healthState].reinforced, this.position, 0, this.origin);
  Canvas.drawImage(sprites.blimp[this.markerColor].normal, this.position, 0, {x: 20, y: 20})

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