<<<<<<< HEAD
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
=======
function Barrier() {
  this.position = new Vector2(700, -110);
  this.origin = new Vector2(0, 110);
  this.health = 10;
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
>>>>>>> 863a993b0347c4cc94ad9a20ce065d9d497c6913
}