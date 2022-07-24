function ColorButton(color, position) {
  this.color = color;
  this.position = position;
  this.origin = new Vector2(0, 0);
  this.scale = 0.5;
 
  this.define();
}

ColorButton.prototype.define = function() {
  if (this.color === 'red')
    this.sprite = sprites.extras['color_button'].red;
  else if (this.color === 'green') 
    this.sprite = sprites.extras['color_button'].green;
  else if (this.color === 'blue')
    this.sprite = sprites.extras['color_button'].blue;
    this.rect = new Rectangle(
      this.position.x - 10,
      this.position.y - 10,
      this.sprite.width * 0.5 + 20,
      this.sprite.height * 0.5 + 20
    );
  }
  

ColorButton.prototype.draw = function() {
  this.rect = new Rectangle(
    this.position.x - 10,
    this.position.y - 10,
    this.sprite.width * 0.5 + 20,
    this.sprite.height * 0.5 + 20
  );
  Canvas.drawImage(this.sprite, this.position, 0, this.origin, this.scale);
}

ColorButton.prototype.update = function() {
  if (Touch.containsTouchPress(this.rect)) {
    Game.gameWorld.cannon.currentColor = this.color;
  }
}

