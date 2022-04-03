function Blimp() {
  this.position = new Vector2(900, -300);
  this.velocity = new Vector2(0, 20)
  this.origin = new Vector2(275, 195);
  this.maxHealth = 100
  this.health = 100;
  this.healthState = 'full'
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