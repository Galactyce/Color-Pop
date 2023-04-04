function ShopItem(position, item, index) {
  this.sprite = undefined;
  this.position = position;
  this.item = item;
  this.bought = false;
  this.origin = new Vector2();
  this.index = index;
  this.cost = undefined;
  this.rect = undefined;
  this.identify();
}

ShopItem.prototype.identify = function () {
  if (this.item === "extra_slot_upgrade") {
    this.sprite = sprites.extras["extra_slot_upgrade_icon"].normal;
    this.cost = 3;

    this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
    this.rect = new Rectangle(
      this.position.x - this.origin.x,
      this.position.y - this.origin.y,
      this.sprite.width,
      this.sprite.height
    );
  }
  if (this.item === "double_ball_upgrade") {
    this.sprite = sprites.extras["double_ball_upgrade_icon"].normal;
    this.cost = 4;
    this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
    this.rect = new Rectangle(
      this.position.x - this.origin.x,
      this.position.y - this.origin.y,
      this.sprite.width,
      this.sprite.height
    );
  }
  if (this.item === "blimp_slower_upgrade") {
    this.sprite = sprites.extras["blimp_slower_upgrade_icon"].normal;
    this.cost = 6;
    this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
    this.rect = new Rectangle(
      this.position.x - this.origin.x,
      this.position.y - this.origin.y,
      this.sprite.width,
      this.sprite.height
    );
  }
  if (this.item === "barrier_buster_upgrade") {
    this.sprite = sprites.extras["barrier_buster_upgrade_icon"].normal;
    this.cost = 5;

    this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
    this.rect = new Rectangle(
      this.position.x - this.origin.x,
      this.position.y - this.origin.y,
      this.sprite.width,
      this.sprite.height
    );
  }
  if (this.item === "splash_balls_upgrade") {
    this.sprite = sprites.extras["splash_balls_upgrade_icon"].normal;
    this.cost = 5;

    this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
    this.rect = new Rectangle(
      this.position.x - this.origin.x,
      this.position.y - this.origin.y,
      this.sprite.width,
      this.sprite.height
    );
  }
};
ShopItem.prototype.draw = function ()  {
this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
this.rect = new Rectangle(
  this.position.x - this.origin.x,
  this.position.y - this.origin.y,
  this.sprite.width,
  this.sprite.height
);
  if (this.bought === false) {
    Canvas.drawImage(this.sprite, this.position, 0, this.origin);
  }
  if (this.bought === true) {
    Canvas.drawImage(
      sprites.extras["sold_sign"].normal,
      new Vector2(this.position.x, this.position.y + 40),
      0,
      this.origin
    );
  }
};

ShopItem.prototype.update = function () {
  if (this.bought === false) {
    if (!Touch.isTouchDevice) {
    if (this.rect.contains(Mouse.position)) {
      Game.gameWorld.shopInfoBox = new ShopInfoBox(this.item);
      if (Mouse.pressed) {
        if (this.cost <= Game.gameWorld.coins) {
          Game.gameWorld.specialtiesOwned.push(this.item);
          Game.gameWorld.inventoryItems.push(new InventoryItem(this.item));
          if (Game.gameWorld.specialtiesOwned[0] === this.item) {
            // If this is your first upgrade bought
            Game.gameWorld.specialtiesEquipped = this.item; // Equip it automatically
          }
          Game.gameWorld.coins -= this.cost;
          this.bought = true;
          Game.gameWorld.shopInfoBox = undefined;
        }
      }
    }
  }
  else {
    if (Touch.containsTouchPress(this.rect)) {
      Game.gameWorld.shopInfoBox = new ShopInfoBox(this.item);

      if (Date.now() < this.tapTime + 250 && this.cost <= Game.gameWorld.coins) {
        var bought = confirm("Buy this item?")
      }
      this.tapTime = Date.now();
      if (bought === true) {
        Game.gameWorld.specialtiesOwned.push(this.item);
        Game.gameWorld.inventoryItems.push(new InventoryItem(this.item));
        if (Game.gameWorld.specialtiesOwned[0] === this.item) {
          // If this is your first upgrade bought
          Game.gameWorld.specialtiesEquipped = this.item; // Equip it automatically
        }
        Game.gameWorld.coins -= this.cost;
        this.bought = true;
        Game.gameWorld.shopInfoBox = undefined;
      }
    }
  }
  }
  for (var i = 0; i < Game.gameWorld.specialtiesOwned.length; i++) {
    if (Game.gameWorld.specialtiesOwned[i] === this.item) {
      this.bought = true;
    }
  }
};
