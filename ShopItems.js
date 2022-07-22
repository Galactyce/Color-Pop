function ShopItem(position, item, index) {
  this.sprite = undefined;
  this.position = position;
  this.item = item;
  this.bought = false;
  this.origin = new Vector2();
  this.index = index;
  this.cost = undefined
  this.rect = undefined
  this.identify()
}

ShopItem.prototype.identify = function() {

  if (this.item === 'extra_slot_upgrade') {
    this.sprite = sprites.extras['extra_slot_upgrade_icon'].normal;
    this.cost = 3;
    
  }
  if (this.item === 'double_ball_upgrade') {
    
    this.sprite = sprites.extras['double_ball_upgrade_icon'].normal;
    this.cost = 4;
  }


  this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2)
    this.rect = new Rectangle(this.position.x - this.origin.x, this.position.y - this.origin.y, this.sprite.width, this.sprite.height);

}

ShopItem.prototype.draw = function() {
  if (this.bought === false) {
  Canvas.drawImage(this.sprite, this.position, 0, this.origin)
  }
  if (this.bought === true) {
  Canvas.drawImage(sprites.extras["sold_sign"].normal, new Vector2(this.position.x, this.position.y + 40), 0, this.origin)
  }
}

ShopItem.prototype.update = function() {

    if (this.bought === false) {
      if (this.rect.contains(Mouse.position)) {
     Game.gameWorld.shopInfoBox = new ShopInfoBox(this.item)
     if (Mouse.pressed) {
      if (this.cost <= Game.gameWorld.coins) {
      Game.gameWorld.specialtiesOwned.push(this.item)
      Game.gameWorld.inventoryItems.push(new InventoryItem(this.item))
      if (Game.gameWorld.specialtiesOwned[0] === this.item) { // If this is your first upgrade bought
        Game.gameWorld.specialtiesEquipped = this.item  // Equip it automatically
      }
      Game.gameWorld.coins -= this.cost;
      this.bought = true;
      Game.gameWorld.shopInfoBox = undefined
    }
     }
  }

}

}