function SettingsButton(position) {
  this.sprite = sprites.extras['settings_icon'].normal;
  this.position = position;
 
  this.rect = new Rectangle(
    position.x, 
    position.y,
    this.sprite.width * 0.5,
    this.sprite.height * 0.5
  );
}

SettingsButton.prototype.draw = function() {
  Canvas.drawImage(this.sprite, this.position, 0, this.origin, 0.1);

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