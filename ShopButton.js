function ShopButton(position) {
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

ShopButton.prototype.draw = function () {
  Canvas.drawImage(this.sprite, this.position, 0, this.origin, 0.5);
  if (Game.gameWorld.area === "home") {
    Canvas.drawText(
      "Shop",
      new Vector2(this.position.x - 55, this.position.y - 20),
      "black",
      "top",
      "Courier New",
      "40px"
    );
  }
  if (Game.gameWorld.area === "shop") {
    Canvas.drawText(
      "Home",
      new Vector2(this.position.x - 55, this.position.y - 20),
      "black",
      "top",
      "Courier New",
      "40px"
    );
  }
};

ShopButton.prototype.update = function () {
  this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);
  this.rect = new Rectangle(
    this.position.x - this.origin.x / 2,
    this.position.y - this.origin.y / 2,
    this.sprite.width * 0.5,
    this.sprite.height * 0.5
  );

  if (this.rect.contains(Mouse.position) && Mouse.pressed) {
    if (Game.gameWorld.area === "shop") {
      Game.gameWorld.area = "home";
      this.position = new Vector2(200, 550);
      return;
    }
    if (Game.gameWorld.area === "home") {
      Game.gameWorld.area = "shop";
      this.position = new Vector2(200, 650);
      return;
    }
  }
};
