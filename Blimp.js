function Blimp() {
  this.position = new Vector2(900, -200);
  this.velocity = new Vector2(0, 20);
  this.origin = new Vector2(275, 195);
  this.healthState = "full";
  this.armored = false;
  this.health = undefined;
  this.maxHealth = undefined;
  this.markerColor = undefined;
  this.slowCooldown = Date.now();
  this.applyHealth();
  this.changeMarker();
}

Blimp.prototype.changeMarker = function () {
  if (Game.gameWorld.mode !== "no_color_mode") {
    var randomval = Math.floor(Math.random() * 3);

    if (randomval === 0) this.markerColor = "red";
    if (randomval === 1) this.markerColor = "green";
    if (randomval === 2) this.markerColor = "blue";
  }

  if (Game.gameWorld.mode === "no_color_mode") {
    this.markerColor = "white";
  }
};

Blimp.prototype.applyHealth = function () {
  if (Game.gameWorld.mode === "armored_only") this.armored = true;
  if (Game.gameWorld.mode === "tutorial_mode") {
    this.maxHealth = 40;
    this.health = 40;
  }
  if (Game.gameWorld.mode === "easy") {
    this.maxHealth = 45;
    this.health = 45;
    if (this.armored) {
      this.maxHealth *= 2;
      this.health *= 2;
      this.velocity /= 2

    }
  }
  if (Game.gameWorld.mode === "intermediate") {
    this.maxHealth = 60;
    this.health = 60;
    if (this.armored) {
      this.maxHealth *= 2;
      this.health *= 2;
      this.velocity /= 2

    }
  }
  if (Game.gameWorld.mode === "hard") {
    this.maxHealth = 70;
    this.health = 70;
    if (this.armored) {
      this.maxHealth *= 2;
      this.health *= 2;
      this.velocity /= 2
    }
  }

  if (Game.gameWorld.mode === "armored_only") {
    this.maxHealth = 120;
    this.health = 120;
    this.velocity.y = 7;
  }
  if (Game.gameWorld.mode === "no_color_mode") {
    this.maxHealth = 100;
    this.health = 100;
  }
  if (Game.gameWorld.mode === "freeplay_mode") {
    this.maxHealth = 60;
    this.health = 60;
  }
};

Blimp.prototype.draw = function () {
  var origin = new Vector2(
    sprites.blimp[this.markerColor].normal.width,
    sprites.blimp[this.markerColor].normal.height
  );
  if (!this.armored)
    Canvas.drawImage(
      sprites.blimp[this.healthState].normal,
      this.position,
      0,
      this.origin
    );
  if (this.armored)
    Canvas.drawImage(
      sprites.blimp[this.healthState].reinforced,
      this.position,
      0,
      this.origin
    );

  Canvas.drawImage(
    sprites.blimp[this.markerColor].normal,
    this.position,
    0,
    origin
  );
};

Blimp.prototype.update = function (delta) {
  if (Date.now() >= this.slowCooldown + 1000) {
    if (Game.gameWorld.mode === "armored_only") this.velocity.y = 10;
    else {
      this.velocity.y = 20;
    }
  }
  this.position.addTo(this.velocity.multiply(delta));
  if (this.health <= this.maxHealth * 0.8) this.healthState = "hit1";
  if (this.health <= this.maxHealth * 0.6) this.healthState = "hit2";
  if (this.health <= this.maxHealth * 0.4) this.healthState = "hit3";
  if (this.health <= this.maxHealth * 0.2) this.healthState = "hit4";
};
