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
  Canvas.drawImage(this.sprite, this.position, 0, this.origin, 0.2);

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

function MusicController() {
  this.volume = 0.4;
  this.lowerSprite = sprites.extras['volume_lower_icon'].normal
  this.raiserSprite = sprites.extras['volume_raiser_icon'].normal
  this.lowerPosition = new Vector2(100, 500);
  this.raiserPosition = new Vector2(600, 500);
  this.lowerRect = new Rectangle(
    this.lowerPosition.x,
    this.lowerPosition.y,
    this.lowerSprite.width,
    this.lowerSprite.height
  )
  this.raiserRect = new Rectangle(
    this.raiserPosition.x,
    this.raiserPosition.y,
    this.raiserRect.width,
    this.raiserRect.height
  )
}

MusicController.prototype.draw = function() {
  Canvas.drawImage(this.lowerSprite, this.lowerPosition);
  for (var i=0; i<this.volume * 10; i++) {
    Canvas.drawImage(sprites.extras['volume_bar'].normal, new Vector2(this.lowerPosition + (i * 60), 500));
  }
  Canvas.drawImage(this.raiserSprite, this.raiserPosition);
}

MusicController.prototype.update = function() {
  if (!Touch.isTouchDevice) {
    if (this.lowerRect.contains(Mouse.position) && Mouse.pressed && this.volume > 0) {
      this.volume -= 0.1;
    }
    if (this.raiserRect.contains(Mouse.position) && Mouse.pressed && this.volume < 1) {
      this.volume += 0.1;
    }
  }
}