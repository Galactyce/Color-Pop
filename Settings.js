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
  this.lowerPosition = new Vector2(100, 200);
  this.raiserPosition = new Vector2(530, 200);
  this.lowerRect = new Rectangle(
    this.lowerPosition.x,
    this.lowerPosition.y,
    this.lowerSprite.width,
    this.lowerSprite.height
  )
  this.raiserRect = new Rectangle(
    this.raiserPosition.x,
    this.raiserPosition.y,
    this.raiserSprite.width,
    this.raiserSprite.height
  )
}

MusicController.prototype.draw = function() {
  Canvas.drawImage(this.lowerSprite, this.lowerPosition, 0, new Vector2(0, 0), 0.5);
  for (var i=0; i<this.volume * 10; i++) {
    Canvas.drawImage(sprites.extras['volume_bar'].normal, new Vector2((this.lowerPosition.x + this.lowerSprite.width / 2 + 20) + (i * 30), 230),
    0, new Vector2(0, 0), 0.5);
  }
  Canvas.drawImage(this.raiserSprite, this.raiserPosition, 0, new Vector2(0, 0), 0.5);
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

function SettingsBackButton(position) {
  this.sprite = sprites.extras["simple_button"].normal;
  this.position = position;
  this.origin = new Vector2(0, 0);
  this.rect = new Rectangle(
    position.x,
    position.y,
    this.sprite.width * 0.5,
    this.sprite.height * 0.5
  );
}

SettingsBackButton.prototype.draw = function() {
  Canvas.drawImage(this.sprite, this.position, 0, this.origin, 0.5);
  Canvas.drawText(
    "Back To Home",
    new Vector2((this.position.x) + 30, (this.position.y) + 30),
    'black',
    'top',
    'Comic Sans',
    '20px'
  )
 
}

SettingsBackButton.prototype.update = function() {
  if (Touch.containsTouchPress(this.rect)) {
    Game.gameWorld.area = 'home';
  }
  this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);

  this.rect = new Rectangle(
    this.position.x - this.origin.x / 2,
    this.position.y - this.origin.y / 2,
    this.sprite.width * 0.5,
    this.sprite.height * 0.5
  );
}