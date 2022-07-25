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
    new Vector2(this.position.x + 10, this.position.y + 10),
    'black',
    'top',
    'Comic Sans',
    '20px'
  )
}

BackButton.prototype.update = function() {
  if (Touch.containsTouchPress(this.rect)) {
    Game.gameWorld.reset();
  }
}