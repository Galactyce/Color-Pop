function Barrier() {
  this.position = new Vector2(700, -110);
  this.origin = new Vector2(0, 110);
  this.health = 8;
  this.speed = undefined
  this.setX()
  this.setSpeed()
}

Barrier.prototype.move = function()  {

  this.position.y += this.speed;
 

}

Barrier.prototype.draw = function() {
  Canvas.drawImage(sprites.barriers['barrier'].normal, this.position, 0, this.origin);
}



Barrier.prototype.setX = function() {
  var random = Math.random() * 3
  if (random < 1) 
  this.position.x = 510;
  if (random > 1 && random < 2) {
  this.position.x = 765;
  }
  if (random > 2 ) {
  this.position.x = 960
  }
}

Barrier.prototype.setSpeed = function() {
  this.speed = Math.random() * 3 + 2
}
function BarrierIntense() {
  this.position = new Vector2(500, -300);
  this.origin = new Vector2(0, 150);
  this.health = 15;
  this.speed = 2;
  this.setX();
}

BarrierIntense.prototype.setX = function () {
  var random = Math.random() * 3;

  if (random < 1) this.position.x = 510;
  if (random > 1 && random < 2) {
    this.position.x = 765;
  }
  if (random > 2) {
    this.position.x = 965;
  }
};

BarrierIntense.prototype.move = function () {
  this.position.y += this.speed;
};

BarrierIntense.prototype.setSpeed = function () {
  this.speed = Math.random() * 3 + 1;
};

BarrierIntense.prototype.draw = function () {
  Canvas.drawImage(
    sprites.barriers["intense_barrier"].normal,
    this.position,
    0,
    this.origin
  );
};