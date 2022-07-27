function SettingsButton(position) {
  alert()
  this.sprite = sprites.extras['settings_icon'].normal;
  this.position = position;
  this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
  this.rect = new Rectangle(
    position.x - this.origin.x / 2,
    position.y - this.origin.y / 2,
    this.sprite.width * 0.5,
    this.sprite.height * 0.5
  );
}

SettingsButton.prototype.draw = function() {
  Canvas.drawImage(this.sprite, this.position, 0, this.origin, 0.3);
  this.rect = new Rectangle(
    position.x - this.origin.x / 2,
    position.y - this.origin.y / 2,
    this.sprite.width * 0.5,
    this.sprite.height * 0.5
  );
}

SettingsButton.prototype.update = function() {
  if (!Touch.isTouchDevice) {
    if (this.rect.contains(Mouse.position) && Mouse.pressed) {
      Game.gameWorld.area = 'settings';
    }
  }
  else {
    if (Touch.containsTouchPress(this.rect)) {
      Game.gameWorld.area = 'settings';
    }
  }
}