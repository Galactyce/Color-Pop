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
}
  

ColorButton.prototype.draw = function() {+
  Canvas.drawImage(this.sprite, this.position, 0, this.origin, this.scale);
}

ColorButton.prototype.update = function() {
  
}

