function GameObject(layer, id) {
  this.position = new Vector2(0, 0);
  this.velocity = new Vector2(0, 0);
  this.parent = null;
  this.visible = true;
  this.layer = typeof layer !== undefined ? layer : 0;
  this.id = typeof id !== undefined ? id : 0;
}

Object.defineProperty(GameObject.prototype, "worldPosition", {
  get: function () {
    if (this.parent !== null) {
      return this.parent.worldPosition.addTo(this.position);
    } else {
      return this.position.copy();
    }
  },
});

GameObject.prototype.draw = function () {};

GameObject.prototype.update = function (delta) {
  this.position.addTo(this.velocity.multiply(delta));
};

function SpriteGameObject(sprite, layer) {
  GameObject.call(this, layer);
  this.sprite = sprite;
  this.origin = new Vector2(0, 0);
}

SpriteGameObject.prototype = Object.create(GameObject.prototype);

SpriteGameObject.prototype.draw = function () {
  Canvas.drawImage(this.sprite, this.position, 0, this.origin);
};

function GameObjectList(layer, id) {
  GameObject.call(this, layer, id);
  this.gameObjects = new Array();
}

GameObjectList.prototype = Object.create(GameObject.prototype);

GameObjectList.prototype.add = function (gameobject) {
  this.gameObjects.push(gameobject);
  gameobject.parent = this;
  this.gameObjects.sort(function (a, b) {
    return a.layer - b.layer;
  });
};

GameObjectList.prototype.clear = function () {
  for (var i = 0; i < this.gameObjects.length; i++) {
    this.gameObjects[i].parent = null;
  }
  this.gameObjects = new Array();
};

GameObjectList.prototype.update = function () {
  for (var i = 0; i < this.gameObjects.length; i++) {
    this.gameObjects[i].update();
  }
};

GameObjectList.prototype.draw = function () {
  if (!this.visible) return;
  for (var i = 0; i < this.gameObjects.length; i++) {
    if (this.gameObjects[i].visible) this.gameObjects[i].draw();
  }
};
