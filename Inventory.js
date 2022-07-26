function Inventory() {
  this.position = new Vector2(100, 0);
  this.open = false;
}

Inventory.prototype.draw = function () {
  Canvas.drawImage(sprites.extras["inventory"].normal, this.position);
};

function InventoryInfoBar(item) {
  this.position = new Vector2(450, 550);
  this.item = item;
}

InventoryInfoBar.prototype.draw = function () {
  if (this.item === "double_ball_upgrade") {
    Canvas.drawImage(
      sprites.extras["shop_info_bar"].normal,
      this.position,
      0,
      new Vector2(0, 0),
      1.3
    );
    Canvas.drawText(
      "Cannon shoots two",
      new Vector2(this.position.x + 20, this.position.y + 10),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
    Canvas.drawText(
      "balls at once!",
      new Vector2(this.position.x + 40, this.position.y + 50),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
  }
  if (this.item === "extra_slot_upgrade") {
    Canvas.drawImage(
      sprites.extras["shop_info_bar"].normal,
      this.position,
      0,
      new Vector2(0, 0),
      1.3
    );

    Canvas.drawText(
      "Adds an extra power",
      new Vector2(this.position.x + 20, this.position.y + 10),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
    Canvas.drawText(
      "up slot!",
      new Vector2(this.position.x + 40, this.position.y + 50),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
  }
  if (this.item === "blimp_slower_upgrade") {
    Canvas.drawImage(
      sprites.extras["shop_info_bar"].normal,
      this.position,
      0,
      new Vector2(0, 0),
      1.3
    );

    Canvas.drawText(
      "Balls slow blimps down",
      new Vector2(this.position.x + 20, this.position.y + 10),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
    Canvas.drawText(
      "by 40%!",
      new Vector2(this.position.x + 40, this.position.y + 50),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
  }
  if (this.item === "barrier_buster_upgrade") {
    Canvas.drawImage(
      sprites.extras["shop_info_bar"].normal,
      this.position,
      0,
      new Vector2(0, 0),
      1.3
    );

    Canvas.drawText(
      "Balls can break barriers",
      new Vector2(this.position.x + 20, this.position.y + 10),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
    Canvas.drawText(
      "after a few hits!",
      new Vector2(this.position.x + 40, this.position.y + 50),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
  }
  if (this.item === "splash_balls_upgrade") {
    Canvas.drawImage(
      sprites.extras["shop_info_bar"].normal,
      this.position,
      0,
      new Vector2(0, 0),
      1.3
    );

    Canvas.drawText(
      "Balls can pop multiple",
      new Vector2(this.position.x + 20, this.position.y + 10),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
    Canvas.drawText(
      "balloons if close to each other!",
      new Vector2(this.position.x + 40, this.position.y + 50),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
  }
};

function InventoryButton(position) {
  this.position = position;
  this.rect = new Rectangle(0, 0, 0, 0); // Defines later in the draw function
  this.origin = undefined;
}

InventoryButton.prototype.draw = function () {
  if (Game.gameWorld.specialtiesEquipped === "double_ball_upgrade") {
    this.sprite = sprites.extras["double_ball_upgrade_icon"].normal;
    this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
    this.rect = new Rectangle(
      this.position.x - this.origin.x,
      this.position.y - this.origin.y,
      this.sprite.width,
      this.sprite.height
    );
  }
  if (Game.gameWorld.specialtiesEquipped === "extra_slot_upgrade") {
    this.sprite = sprites.extras["extra_slot_upgrade_icon"].normal;
    this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
    this.rect = new Rectangle(
      this.position.x - this.origin.x,
      this.position.y - this.origin.y,
      this.sprite.width,
      this.sprite.height
    );
  }

  if (Game.gameWorld.specialtiesEquipped === "blimp_slower_upgrade") {
    this.sprite = sprites.extras["blimp_slower_upgrade_icon"].normal;
    this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
    this.rect = new Rectangle(
      this.position.x - this.origin.x,
      this.position.y - this.origin.y,
      this.sprite.width,
      this.sprite.height
    );
  }
  if (Game.gameWorld.specialtiesEquipped === "barrier_buster_upgrade") {
    this.sprite = sprites.extras["barrier_buster_upgrade_icon"].normal;
    this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
    this.rect = new Rectangle(
      this.position.x - this.origin.x,
      this.position.y - this.origin.y,
      this.sprite.width,
      this.sprite.height
    );
  }
  if (Game.gameWorld.specialtiesEquipped === "splash_balls_upgrade") {
    this.sprite = sprites.extras["splash_balls_upgrade_icon"].normal;
    this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
    this.rect = new Rectangle(
      this.position.x - this.origin.x,
      this.position.y - this.origin.y,
      this.sprite.width,
      this.sprite.height
    );
  }
  if (
    Game.gameWorld.specialtiesEquipped === "undefined" ||
    Game.gameWorld.specialtiesEquipped === undefined
  ) {
    this.sprite = sprites.extras["empty_icon"].normal;
    this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
    this.rect = new Rectangle(
      this.position.x - this.origin.x,
      this.position.y - this.origin.y,
      this.sprite.width,
      this.sprite.height
    );
  }

  Canvas.drawImage(this.sprite, this.position, 0, this.origin);
};

InventoryButton.prototype.update = function () {
  if (!Touch.isTouchDevice) {
    if (this.rect.contains(Mouse.position) && Mouse.pressed) {
      Game.gameWorld.inventory.open = !Game.gameWorld.inventory.open;
    }
  } else {
    if (Touch.containsTouchPress(this.rect)) {
      Game.gameWorld.inventory.open = !Game.gameWorld.inventory.open;
    }
  }
};

function InventoryItem(item) {
  this.item = item;
  this.sprite = undefined;
  this.position = new Vector2(0, 0);
  this.origin = new Vector2(0, 0);
  this.rect = undefined;
  this.touchTime = Date.now();
  this.identify();
}

InventoryItem.prototype.identify = function () {
  if (this.item === "double_ball_upgrade") {
    this.sprite = sprites.extras["double_ball_upgrade_icon"].normal;
    this.position = new Vector2(200, 100);
    this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
    this.rect = new Rectangle(
      this.position.x - this.origin.x,
      this.position.y - this.origin.y,
      this.sprite.width,
      this.sprite.height
    );
  }
  if (this.item === "extra_slot_upgrade") {
    this.sprite = sprites.extras["extra_slot_upgrade_icon"].normal;
    this.position = new Vector2(340, 100);
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
    this.position = new Vector2(480, 100);
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
    this.position = new Vector2(620, 100);
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
    this.position = new Vector2(760, 100);
    this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
    this.rect = new Rectangle(
      this.position.x - this.origin.x,
      this.position.y - this.origin.y,
      this.sprite.width,
      this.sprite.height
    );
  }
};

InventoryItem.prototype.draw = function () {
  if (Game.gameWorld.specialtiesEquipped !== this.item)
    Canvas.drawImage(this.sprite, this.position, 0, this.origin);
  else {
    Canvas.drawImage(this.sprite, this.position, 0, this.origin, 1.2);
  }
  this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
  this.rect = new Rectangle(
    this.position.x - this.origin.x,
    this.position.y - this.origin.y,
    this.sprite.width,
    this.sprite.height
  );
};

InventoryItem.prototype.update = function () {
  if (!Touch.isTouchDevice) {
    if (this.rect.contains(Mouse.position)) {
      Game.gameWorld.inventoryInfoBar = new InventoryInfoBar(this.item);
      if (Mouse.pressed) {
        Game.gameWorld.specialtiesEquipped = this.item;
        Game.gameWorld.updateCookies();
        document.cookie = "specialtyEquipped=" + this.item;
      }
    }
  } else {
    if (Touch.containsTouchPress(this.rect)) {
      Game.gameWorld.inventoryInfoBar = new InventoryInfoBar(this.item);
      if (Date.now() < this.touchTime + 250) {
        Game.gameWorld.specialtiesEquipped = this.item;
        Game.gameWorld.updateCookies();
        document.cookie = "specialtyEquipped=" + this.item;
      }
      this.touchTime = Date.now()
    }
  }
};

function InventoryExitButton(position) {
  this.sprite = sprites.extras["simple_button"].normal;
  this.position = position;
  this.rect = new Rectangle(
    this.position.x,
    this.position.y,
    this.sprite.width * 0.5,
    this.sprite.height * 0.5
  );
  this.scale = 0.5;
}
InventoryExitButton.prototype.draw = function () {
  if (Touch.isTouchDevice) {
  Canvas.drawImage(
    this.sprite,
    this.position,
    0,
    new Vector2(0, 0),
    this.scale
  );
  Canvas.drawText(
    "Exit",
    new Vector2(this.position.x + 20, this.position.y + 10),
    "black",
    "top",
    "Comic Sans",
    "65px"
  );
  this.rect = new Rectangle(
    this.position.x,
    this.position.y,
    this.sprite.width * 0.5,
    this.sprite.height * 0.5
  );
  }
  else {
    this.rect = new Rectangle(this.position.x, this.position.y, 300, 150);
  }
};

InventoryExitButton.prototype.update = function () {
  if (Touch.isTouchDevice) {
  if (Touch.containsTouchPress(this.rect)) {
    Game.gameWorld.inventory.open = false;
  }
}
  else {
    if (this.rect.contains(Mouse.position) && Mouse.pressed) {
      Game.gameWorld.inventory.open = false;
    }
  }
};
