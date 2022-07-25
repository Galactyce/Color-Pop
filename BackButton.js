function BackButton(position) {
  this.sprite = sprites.extras["simple_button"].normal;
  this.position = position;
  this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
  this.rect = new Rectangle(
    position.x - this.origin.x / 2,
    position.y - this.origin.y / 2,
    this.sprite.width * 0.5,
    this.sprite.height * 0.5
  );
}

BackButton.prototype.draw = function() {
  Canvas.drawImage(this.sprite, this.position, 0, this.origin, 0.5);
  Canvas.drawText(
    "Back To Home",
    this.position,
    'black',
    'left',
    'Courier New',
    '25px'
  )
}

BackButton.prototype.update = function() {
  if (Touch.containsTouchPress(this.rect)) {
    Game.gameWorld.reset();
  }
}