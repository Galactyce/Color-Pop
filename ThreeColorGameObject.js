function ThreeColorGameObject(sprRed, sprGreen, sprBlue) {
  this.colorRed = sprRed;
  this.colorGreen = sprGreen;
  this.colorBlue = sprBlue;
  this.currentColor = this.colorRed;
  this.position = new Vector2(0, 0);
  this.velocity = new Vector2(0, 0);
  this.origin = new Vector2(0, 0);
  this.rotation = 0;
  this.visible = true;
}


ThreeColorGameObject.prototype.draw = function() {
  if (!this.visible)
  return;
  Canvas.drawImage(this.currentColor, this.position, this.rotation, this.origin);
}

Object.defineProperty(ThreeColorGameObject.prototype, "color", {
  get: function() {
      if (this.currentColor === this.colorRed) 
      return Color.red;
       else if (this.currentColor === this.colorGreen)
      return Color.green;
      else if (this.currentColor === this.colorBlue)
      return Color.blue;
  },
  set: function(value) {
      if (value === Color.red) 
      this.currentColor = this.colorRed;
       else if (value === Color.green) 
      this.currentColor = this.colorGreen;
       else if (value === Color.blue)  {
      this.currentColor = this.colorBlue;
      }
  }
})

ThreeColorGameObject.prototype.update = function(delta) {
  this.position.addTo(this.velocity.multiply(delta))
}