function Blimp() {
  this.position = new Vector2(900, 0);
  this.velocity = new Vector2(0, 15)
  this.origin = new Vector2(275, 195);
  this.health = 100000;
  this.healthState = 'full'
}

Blimp.prototype.draw = function() {
  Canvas.drawImage(sprites.blimp[this.healthState].normal, this.position, 0, this.origin);
}

Blimp.prototype.update = function(delta) {
  this.position.addTo(this.velocity.multiply(delta));
}