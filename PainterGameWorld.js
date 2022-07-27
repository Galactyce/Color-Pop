function GameWorld() {
  this.rows = new Array(0, 0, 0); // # of balloons in a row
  this.rowPositions = new Array(700, 900, 1100);
  this.balloonsPerRow = 0; // Desired # of balloons per row
  this.barrierCount = 0;
  this.balloonMinVelocity = 30;
  this.intenseBarrierCount = 0;
  this.lives = 5;
  this.gameActive = false;
  this.maxBalloons = 3;
  this.win = false;
  this.mode = new Array("easy", "intermediate", "hard", "apex");
  this.controlPanel = new ControlPanel();
  this.defaultBalloonHealth = 1;
  this.invincible = false;
  this.score = 0;
  this.balloonSpawning = true;
  this.barrierSpawning = true;
  this.targeting = false;
  this.targetPowerUpStart = Date.now();
  this.playEndSound = false;
  this.freezeTimer = 0;
  this.playEndSound = true;
  this.backgroundMusicPlaying = false;
  this.balloons = new Array();
  this.cannon = new Cannon();
  this.bossCount = 0;
  this.blimps = new Array();
  this.balls = new Array();
  this.specialBalloons = new Array();
  this.penaltyBalloons = new Array();
  this.normalBalloons = new Array("red", "blue", "green");
  this.barriers = new Array();
  this.intenseBarriers = new Array();
  this.balloonMinVelocity = 30;
  this.wavyActive = false;
  this.buttons = new Array();
  this.easyButton = new PlayButton(460, 250, "easy");
  this.buttons.push(this.easyButton);
  this.playButton = new PlayButton(460, 250, "intermediate");
  this.buttons.push(this.playButton);
  this.hardButton = new PlayButton(460, 250, "hard");
  this.buttons.push(this.hardButton);
  this.apexButton = new PlayButton(460, 250, "apex");
  this.buttons.push(this.apexButton);
  this.armoredOnlyButton = new PlayButton(460, 250, "armored_only");
  this.buttons.push(this.armoredOnlyButton);
  this.fasterBalloonsButton = new PlayButton(460, 250, "faster_balloons");
  this.buttons.push(this.fasterBalloonsButton);
  this.noColorModeButton = new PlayButton(460, 250, "no_color_mode");
  this.buttons.push(this.noColorModeButton);
  this.freeplayModeButton = new PlayButton(460, 250, "freeplay_mode");
  this.buttons.push(this.freeplayModeButton);
  this.tutorialModeButton = new PlayButton(1000, 300, "tutorial_mode");
  this.modeToggleButton = new ModeToggleButton(100, 300);
  this.shopButtonPosition = new Vector2(200, 550);
  this.shopButton = new ShopButton(this.shopButtonPosition);
  this.normalButtonString = new Array(
    this.easyButton,
    this.playButton,
    this.hardButton,
    this.apexButton
  );
  this.extraButtonString = new Array(
    this.armoredOnlyButton,
    this.fasterBalloonsButton,
    this.noColorModeButton,
    this.freeplayModeButton
  );
  this.area = "home";
  this.inventory = new Inventory();
  this.inventoryButton = new InventoryButton(new Vector2(1100, 550));
  if (Touch.isTouchDevice)
    this.inventoryExitButton = new InventoryExitButton(new Vector2(900, 550));
  if (!Touch.isTouchDevice)
    this.inventoryExitButton = new InventoryExitButton(new Vector2(65, 600));

  this.inventoryItems = new Array();
  this.inventoryInfoBar = undefined;
  this.shopItems = new Array();
  this.specialtiesEquipped = undefined;
  this.specialtiesOwned = new Array();
  this.scrollInteger = 0;
  this.scrollLength = this.normalButtonString.length;
  this.dataString = {
    specialtiesOwned: undefined,
  };
  this.scrollButtons = new Array();
  this.backButton = new BackButton(new Vector2(100, 170));
  this.settingsButton = new SettingsButton(new Vector2(1150, 0));
  this.musicController = new MusicController()
  this.SFXController = new SFXController()
  this.settingsBackButton = new SettingsBackButton(new Vector2(50, 50));
  this.powerUpSlots = new Array();
  this.lastSpecialBalloons = Date.now();
  this.blimpColorChangeFrequency = 0;
  this.balloonsPopped = 0;
  this.ballsFired = 0;
  this.paused = false;
  this.reward = 0;
  this.coins = 0;
  this.shopInfoBox = undefined;
  this.modeInfoBox = new ModeDescription();
  this.moving = true;
  this.colorButtons = new Array();
  this.colorButtons.push(new ColorButton("red", new Vector2(60, 400)));
  this.colorButtons.push(new ColorButton("green", new Vector2(160, 400)));
  this.colorButtons.push(new ColorButton("blue", new Vector2(260, 400)));
  this.scrollButtons.push(new Arrow(new Vector2(930, 335), "right", 1));
  this.scrollButtons.push(new Arrow(new Vector2(370, 335), "left", 1));
  this.powerUpSlots.push(new PowerSlot(new Vector2(100, 350), 1));
  this.powerUpSlots.push(new PowerSlot(new Vector2(200, 350), 2));
  this.powerUpSlots.push(new PowerSlot(new Vector2(300, 350), 3));
  this.powerUpSlots.push(new PowerSlot(new Vector2(400, 350), 4)); // The extra slot upgrade
  this.shopItems.push(
    new ShopItem(new Vector2(300, 500), "double_ball_upgrade", 1)
  );
  this.shopItems.push(
    new ShopItem(new Vector2(700, 500), "extra_slot_upgrade", 2)
  );
  this.shopItems.push(
    new ShopItem(new Vector2(900, 500), "blimp_slower_upgrade", 3)
  );
  this.shopItems.push(
    new ShopItem(new Vector2(400, 250), "barrier_buster_upgrade", 4)
  );
  this.shopItems.push(
    new ShopItem(new Vector2(1000, 250), "splash_balls_upgrade", 5)
  );
  this.reset();
  var cookie = document.cookie
  console.log(cookie)
  if (cookie != '') { 
    var cname = document.cookie.split("=")
    var name = cname[1]
  }
  else {

    var name = prompt('Enter your name')
    var d = new Date()
    d.setTime(d.getTime() + 5 * 365 * 24 * 60 * 60 * 1000)
   document.cookie = "name=" + name +";expires=" + d.toUTCString() + ";path=/";
    console.log(document.cookie.trim())
  }

  this.checkCookies();
}

GameWorld.prototype.checkCookies = function () {
  var ccookie = document.cookie.split(";");
  ccookie.sort((a, b) => a - b);
  console.log(ccookie);
  var line = "";
  for (var i = 0; i < ccookie.length; i++) {
    var cname = ccookie[i].split("=");

    for (var k = 0; k < this.shopItems.length; k++) {
      if (cname.length > 1) { 
      console.log("cname:" + cname[1].trim() + "," + this.shopItems[k].item);
      if (cname[1].trim() == this.shopItems[k].item && this.shopItems[k].bought === false) {
            this.specialtiesOwned.push(this.shopItems[k].item);
            this.inventoryItems.push(new InventoryItem(this.shopItems[k].item));
            this.shopItems[k].bought = true;
            console.log(this.shopItems[k].item)
        }
      
      }
      }
    console.log(this.specialtiesOwned.length)
    if (cname[0].trim() == "specialtyEquipped") {
      this.specialtiesEquipped = cname[1];
    }
    if (cname[0].trim() == "coins") {
      var int = parseInt(cname[1]);
      console.log(int);
      this.coins = int;
      // if (int === '""') {
      //   this.coins = 0;
      // }
    }
  }
};

GameWorld.prototype.drawBalloons = function () {
  for (var k = 0; k < this.blimps.length; k++) {
    this.blimps[k].draw();
  }

  for (var i = 0; i < this.balloons.length; i++) {
    this.balloons[i].draw();
  }
};

GameWorld.prototype.reset = function () {
  this.rows = new Array(0, 0, 0); // # of balloons in a row
  this.rowPositions = new Array(700, 900, 1100);
  this.balloonsPerRow = 0; // Desired # of balloons per row
  this.barrierCount = 0;
  this.balloonMinVelocity = 30;
  this.intenseBarrierCount = 0;
  this.lives = 5;
  this.score = 0;
  this.specialBalloons = new Array();
  this.penaltyBalloons = new Array();
  this.gameActive = false;
  this.wavyActive = false;
  this.blimpColorChangeFrequency = 0;
  this.balloonsPopped = 0;
  this.ballsFired = 0;
  this.paused = false;
  this.bossCount = 0;
  this.area = "home";
  for (var i = 0; i < this.balloons.length; i++) {
    this.balloons[i] = null;
  }
  this.balloons = this.balloons.filter((a) => a);
  for (var i = 0; i < this.barriers.length; i++) {
    this.barriers[i] = null;
  }
  this.barriers = this.barriers.filter((a) => a);
  for (var i = 0; i < this.intenseBarriers.length; i++) {
    this.intenseBarriers[i] = null;
  }
  this.intenseBarriers = this.intenseBarriers.filter((a) => a);
  for (var i = 0; i < this.blimps.length; i++) {
    this.blimps[i] = null;
  }
  this.blimps = this.blimps.filter((a) => a);
  for (var i = 0; i < this.powerUpSlots.length; i++) {
    this.powerUpSlots[i].contains = undefined;
  }
  this.win = false;
  sounds.backgroundMusicBasic.volume = 0;
};

GameWorld.prototype.draw = function () {
  if (!this.inventory.open) {
    if (this.area === 'settings') {
      this.musicController.draw()
      this.SFXController.draw()
      this.settingsBackButton.draw()
    }
    // Dont draw the background if the inventory is open
    if (this.area === "home") {
      Canvas.drawImage(
        sprites.extras["background"].home,
        new Vector2(0, 0),
        0,
        new Vector2(0, 0)
      );
    }
  }
  if (this.area === "shop") {
    Canvas.drawImage(
      sprites.extras["background"].shop,
      new Vector2(0, 0),
      0,
      new Vector2(0, 0),
      0.7
    );

    for (var i = 0; i < this.shopItems.length; i++) {
      this.shopItems[i].draw();
    }

    if (this.inventory.open === true) {
      this.inventory.draw();
    }

    Canvas.drawImage(
      sprites.extras["coin"].normal,
      new Vector2(50, 50),
      0,
      new Vector2(0, 0),
      2
    );

    Canvas.drawText(
      this.coins,
      new Vector2(120, 50),
      "black",
      "left",
      "Courier New",
      "100px"
    );

    if (Touch.isTouchDevice) {
      Canvas.drawText(
        "Double tap to",
        new Vector2(1000, 600),
        "black",
        "left",
        "Courier New",
        "30px"
      );
      Canvas.drawText(
        "purchase items",
        new Vector2(1000, 630),
        "black",
        "left",
        "Courier New",
        "30px"
      );
    }

    if (this.shopInfoBox !== undefined) {
      this.shopInfoBox.draw();
    }
    this.shopButton.draw();
  }

  if (this.area === "home") {
    if (this.gameActive === false) {
      if (!this.inventory.open) {
        this.tutorialModeButton.draw();
        this.modeToggleButton.draw();
        this.inventoryButton.draw();
        this.shopButton.draw();
        this.modeInfoBox.draw();
        this.settingsButton.draw()
        for (var i = 0; i < this.scrollButtons.length; i++) {
          this.scrollButtons[i].draw();
        }

        if (
          this.gameActive === false &&
          this.modeToggleButton.mode === "normal"
        ) {
          this.normalButtonString[this.scrollInteger].draw();
        }
        if (
          this.gameActive === false &&
          this.modeToggleButton.mode === "extras"
        ) {
          this.extraButtonString[this.scrollInteger].draw();
        }
      }
    }
    if (this.inventory.open) {
      this.inventory.draw();
      for (var i = 0; i < this.inventoryItems.length; i++) {
        this.inventoryItems[i].draw();
      }

      if (this.inventoryInfoBar !== undefined) {
        this.inventoryInfoBar.draw();
      }

      if (!Touch.isTouchDevice) {
        Canvas.drawText(
          "Cancel: ",
          new Vector2(130, 633),
          "black",
          "center",
          "Courier New",
          "25px"
        );
        Canvas.drawImage(
          sprites.extras["simple_button"].normal,
          new Vector2(180, 625),
          0,
          new Vector2(0, 0),
          0.2
        );
        Canvas.drawText(
          "Esc",
          new Vector2(200, 633),
          "black",
          "left",
          "Courier New",
          "25px"
        );
      }

      if (Touch.isTouchDevice) {
        this.inventoryExitButton.draw();
        Canvas.drawText(
          "Double tap to",
          new Vector2(130, 580),
          "black",
          "left",
          "Courier New",
          "25px"
        );
        Canvas.drawText(
          "equip items",
          new Vector2(130, 610),
          "black",
          "left",
          "Courier New",
          "25px"
        );
      }
    }
  }

  if (this.gameActive === false) return;
  Canvas.drawImage(
    sprites.extras["platform"].normal,
    new Vector2(-30, 650),
    0,
    new Vector2(0, 0)
  ); // Draw the platform

  for (var i = 0; i < 3; i++) {
    this.powerUpSlots[i].draw();
  }
  if (this.specialtiesEquipped === "extra_slot_upgrade") {
    this.powerUpSlots[3].draw();
  }

  Canvas.drawImage(sprites.extras["text_box"].normal, { x: 70, y: 40 }, 0, {
    x: 50,
    y: 20,
  }); // Score text box

  Canvas.drawText(
    "Score: " + this.score,
    new Vector2(130, 33),
    "white",
    "center",
    "Courier New",
    "25px"
  );
  Canvas.drawImage(sprites.extras["text_box"].normal, { x: 70, y: 100 }, 0, {
    x: 50,
    y: 20,
  }); // Lives text box

  Canvas.drawText(
    "Lives: " + this.lives,
    new Vector2(130, 93),
    "white",
    "center",
    "Courier New",
    "25px"
  );

  for (var i = 0; i < this.blimps.length; i++) {
    if (this.blimps.length > 0) {
      Canvas.drawImage(
        sprites.extras["large_text_box"].normal,
        new Vector2(-20, 143),
        0,
        new Vector2(0, 0)
      );
      Canvas.drawText(
        "Blimp's color weakness:",
        new Vector2(10, 150),
        "white",
        "top",
        "Courier New",
        "30px"
      );

      Canvas.drawImage(
        sprites.blimp[this.blimps[i].markerColor].normal,
        new Vector2(150, 200),
        0,
        new Vector2(0, 0)
      );
    }
  }

  this.drawBalloons();
  this.cannon.draw();

  if (Touch.isTouchDevice) {
    for (var i = 0; i < this.colorButtons.length; i++) {
      this.colorButtons[i].draw();
    }
  }

  for (var i = 0; i < this.balls.length; i++) {
    this.balls[i].draw();
  }

  for (var i = 0; i < this.barriers.length; i++) {
    this.barriers[i].draw();
  }

  for (var i = 0; i < this.intenseBarriers.length; i++) {
    this.intenseBarriers[i].draw();
  }

  this.playWinScreen();
  this.drawGuides();
};

GameWorld.prototype.giveCoins = function () {
  if (this.mode === "easy") this.reward = 1;
  if (this.mode === "intermediate") this.reward = 2;
  if (this.mode === "hard") this.reward = 3;
  if (this.mode === "apex") this.reward = 4;
  if (this.mode === "armored_only") this.reward = 3;
  if (this.mode === "faster_balloons") this.reward = 5;
  if (this.mode === "no_color_mode") this.reward = 3;
  this.coins += this.reward;
  this.updateCookies();
};

GameWorld.prototype.handleInput = function (delta) {
  if (!this.paused && this.gameActive) {
    if (this.lives <= 0) return;
    this.cannon.handleInput(delta); // Rotate cannon + change cannon color
  }
};

GameWorld.prototype.resetInputs = function () {
  Keyboard.reset();
};

GameWorld.prototype.playWinScreen = function () {
  if (this.win) {
    Canvas.drawImage(
      sprites.extras["end_screen"].normal,
      { x: 350, y: 100 },
      0,
      { x: 0, y: 0 }
    );
    Canvas.drawText(
      "You win!",
      new Vector2(500, 140),
      "black",
      "top",
      "Comic Sans",
      "70px"
    );
    Canvas.drawText(
      "You popped " + this.balloonsPopped + " balloons.",
      new Vector2(370, 210),
      "black",
      "top",
      "Comic Sans",
      "50px"
    );
    Canvas.drawText(
      "You fired " + this.ballsFired + " balls.",
      new Vector2(370, 280),
      "black",
      "top",
      "Comic Sans",
      "50px"
    );
    if (!Touch.isTouchDevice) {
      Canvas.drawText(
        "Press Space to return.",
        new Vector2(370, 330),
        "black",
        "top",
        "Comic Sans",
        "50px"
      );
    }
    Canvas.drawText(
      "+" + this.reward,
      new Vector2(370, 430),
      "black",
      "top",
      "Comic Sans",
      "50px"
    );
    Canvas.drawImage(sprites.extras["coin"].normal, new Vector2(430, 430));

    if (Touch.isTouchDevice) {
      this.backButton.update();
      this.backButton.draw();
    }
  }

  if (this.lives <= 0) {
    Canvas.drawImage(
      sprites.extras["end_screen"].normal,
      { x: 350, y: 100 },
      0,
      { x: 0, y: 0 }
    );
    Canvas.drawText(
      "You lost :(",
      new Vector2(500, 140),
      "black",
      "top",
      "Comic Sans",
      "70px"
    );

    if (!Touch.isTouchDevice) {
      Canvas.drawText(
        "Press Space to return.",
        new Vector2(370, 330),
        "black",
        "top",
        "Comic Sans",
        "50px"
      );
    }

    if (Touch.isTouchDevice) {
      this.backButton.update();
      this.backButton.draw();
    }
  }
};

GameWorld.prototype.updateCookies = function () {
  for (var i = 0; i < this.specialtiesOwned.length; i++) {
    document.cookie = "item" + [i] + "=" + this.specialtiesOwned[i] + ";";
  }

  document.cookie = "coins=" + this.coins;
};

GameWorld.prototype.popBalloon = function (k, i) {
  // Rainbow Physics

  if (this.balloons[k].currentColor === "rainbow") {
    removeBall = true;
    this.balloons[k].health -= 1;

    if (this.balloons[k].health <= 0) {
      this.lives += 1;

      sounds.extraLife.play();
      this.balloonsPopped += 1;
    }
  }

  // Bomb balloon physics
  else if (this.balloons[k].currentColor === "bomb") {
    this.balloons[k].health -= 1;
    removeBall = true;
    if (this.balloons[k].health <= 0) {
      this.balloonsPopped += 1;
      for (var i = 0; i < this.powerUpSlots.length; i++) {
        if (this.powerUpSlots[i].contains === undefined) {
          this.powerUpSlots[i].contains = "bomb";
          break;
        }
      }
    }
  }

  // Homing power-up balloon physics
  else if (this.balloons[k].currentColor === "target") {
    this.balloons[k].health -= 1;
    removeBall = true;
    if (this.balloons[k].health <= 0) {
      for (var i = 0; i < this.powerUpSlots.length; i++) {
        if (this.powerUpSlots[i].contains === undefined) {
          this.powerUpSlots[i].contains = "target";
          break;
        }
      }

      this.balloonsPopped += 1;
    }
  }

  //  Ice balloon physics
  else if (this.balloons[k].currentColor === "ice") {
    this.balloons[k].health -= 1;
    removeBall = true;
    if (this.balloons[k].health <= 0) {
      for (var i = 0; i < this.powerUpSlots.length; i++) {
        if (this.powerUpSlots[i].contains === undefined) {
          this.powerUpSlots[i].contains = "freeze";
          break;
        }
      }
      this.balloonsPopped += 1;
    }
  }

  // Metal balloon Physics
  else if (
    this.balloons[k].currentColor === "metal" ||
    this.balloons[k].currentColor === "metal_cracked" ||
    this.balloons[k].currentColor === "metal_damaged"
  ) {
    this.balloons[k].health -= 1;
    removeBall = true;
    sounds.clang.play();
    if (this.balloons[k].health === 6) {
      this.balloons[k].currentColor = "metal_cracked";
    }
    if (this.balloons[k].health === 3) {
      this.balloons[k].currentColor = "metal_damaged";
    }
    if (this.balloons[k].health <= 0) {
      this.rows[this.balloons[k].index] -= 1;
      this.balloonsPopped += 1;
      this.balloons[k] = null;
      this.balloons = this.balloons.filter((a) => a);
    }
  }

  // Blimp physics

  // Normal physics
  if (this.targeting == false) {
    if (
      this.balls[i].currentColor === this.balloons[k].currentColor ||
      this.balloons[k].currentColor === "white" ||
      this.targeting === true
    ) {
      this.balloons[k].health -= 1;
      removeBall = true;
    }
  }
  if (this.targeting === true) {
    this.balloons[k].health -= 1;
  }
  //  Check if a balloon ran out of health
  if (this.balloons[k].health <= 0) {
    sounds.popEffect.volume =  Game.gameWorld.SFXController.volume;
    this.balloonsPopped += 1;
    sounds.popEffect.play();
    this.balloons[k].popped = true;
    this.balloons[k].popTime = Date.now();
  }
};

GameWorld.prototype.checkBalloonHealth = function () {};

GameWorld.prototype.update = function (delta) {
  this.updateCookies();
  this.cannon.update(delta);
  if (Keyboard.keyPressed === 65) this.coins += 2;
  if (Keyboard.keyPressed === 90) {
    document.cookie = "expires=Sat, 20 Aug 2020 12:00:00 UTC";
    alert();
    window.location.reload();
  }
  if (this.gameActive === false) {
    this.modeToggleButton.update();
    this.tutorialModeButton.update();
    for (var i = 0; i < this.scrollButtons.length; i++) {
      this.scrollButtons[i].update();
    }
    if (!this.inventory.open) {
      if (this.area === 'settings') {
        this.musicController.update();
        this.SFXController.update();
        this.settingsBackButton.update()

      }
      if (this.area === "home") {
        this.settingsButton.update()

        if (Keyboard.keyPressed === 39) {
          this.scrollInteger++;
          if (this.scrollInteger > this.scrollLength - 1) {
            this.scrollInteger = 0;
          }
        }

        if (Keyboard.keyPressed === 37) {
          this.scrollInteger--;
          if (this.scrollInteger < 0) {
            this.scrollInteger = this.scrollLength - 1;
          }
        }

        if (
          this.gameActive === false &&
          this.modeToggleButton.mode === "normal"
        ) {
          this.modeInfoBox.mode =
            this.normalButtonString[this.scrollInteger].mode;
          this.normalButtonString[this.scrollInteger].update();
        }
        if (
          this.gameActive === false &&
          this.modeToggleButton.mode === "extras"
        ) {
          this.modeInfoBox.mode =
            this.extraButtonString[this.scrollInteger].mode;
          this.extraButtonString[this.scrollInteger].update();
        }
      }
      if (this.area === "shop") {
        for (var i = 0; i < this.shopItems.length; i++) {
          this.shopItems[i].update();
        }
        if (Touch.isTouchDevice) {
          var rect = new Rectangle(0, 0, 200, 200);
          if (Touch.containsTouchPress(rect)) {
            this.coins += 2;
          }
        }
      }

      this.shopButton.update();
      this.inventoryButton.update();
    }

    if (this.inventory.open && Keyboard.keyPressed === 27) {
      this.inventory.open = false;
    }
    if (this.inventory.open) {
      for (var i = 0; i < this.inventoryItems.length; i++) {
        this.inventoryItems[i].update();
      }

      this.inventoryExitButton.update();
    }
  }

  if (Keyboard.keyPressed === 32 && !Touch.isTouchDevice) {
    if (this.lives <= 0 || this.win === true) {
      this.reset();
    }
  }

  if (Keyboard.keyPressed === 80) this.paused = !this.paused;

  if (!this.paused) {
    for (var i = 0; i < 3; i++) {
      this.powerUpSlots[i].update();
    }
    if (this.specialtiesEquipped === "extra_slot_upgrade") {
      this.powerUpSlots[3].update();
    }

    if (Touch.isTouchDevice) {
      for (var i = 0; i < this.colorButtons.length; i++) {
        this.colorButtons[i].update();
      }
    }

    if (this.mode === "no_color_mode") {
      this.balloonMinVelocity = 50; // Set no color mode speed to a static pace of 50
    } else if (this.mode === "hard" || this.mode === "apex") {
      this.blimpColorChangeFrequency = 0.3;
    } else if (this.mode === "easy") {
      this.blimpColorChangeFrequency = 0.1;
    } else {
      this.blimpColorChangeFrequency = 0.2;
    }

    for (var i = this.blimps.length; i < this.bossCount; i++) {
      this.blimps.push(new Blimp());
    }

    for (var i = 0; i < this.rows.length; i++) {
      if (this.balloonSpawning === true) {
        if (this.rows[i] < this.balloonsPerRow) {
          this.balloons.push(
            new Balloon(this.rowPositions[i], i, this.defaultBalloonHealth)
          ); // Draw balloons
          this.rows[i] += 1;
        }
      }
    }

    if (Date.now() > this.targetPowerUpStart + 5000) {
      this.targeting = false;
    }

    if (Date.now() > this.freezeTimer + 8000) {
      this.moving = true;
    }

    for (var i = 0; i < this.balloons.length; i++) {
      if (this.moving === true && this.lives > 0 && this.win === false) {
        this.balloons[i].update(delta);
      }
    }

    for (var i = this.barriers.length; i < this.barrierCount; i++) {
      // Create barriers
      if (this.barrierSpawning === true) {
        this.barriers.push(new Barrier());
      }
    }

    for (
      var i = this.intenseBarriers.length;
      i < this.intenseBarrierCount;
      i++
    ) {
      this.intenseBarriers.push(new BarrierIntense());
    }

    // Handle ball collisions

    for (var k = 0; k < this.balloons.length; k++) {
      if (this.targeting === true) {
        if (Touch.isTouchDevice) {
          if (Touch.containsTouchPress(this.balloons[k].rect)) {
            this.popBalloon(k, i);
          }
        } else if (!Touch.isTouchDevice) {
          if (this.balloons[k].rect.contains(Mouse.position) && Mouse.pressed) {
            this.popBalloon(k, i);
          }
        }
      }

      if (Date.now() > this.balloons[k].popTime + 100) {
        this.rows[this.balloons[k].index] -= 1;
        this.addScore(this.balloons[k].popPointValue);
        this.balloons[k] = null;
        this.balloonMinVelocity += 0.3;
        this.balloons = this.balloons.filter((a) => a);
      }
    }
    for (var i = 0; i < this.balls.length; i++) {
      // Check if ball fell off screen
      if (this.balls[i].position.y > 1800) {
        this.balls[i] = null;
        i = this.balls.length;
        break;
      }
      var removeBall = false;

      // Check for balloon collisions
      for (var k = 0; k < this.balloons.length; k++) {
        distanceX = this.balloons[k].position.x - this.balls[i].position.x;
        distanceY = this.balloons[k].position.y - this.balls[i].position.y;
        if (
          Math.abs(distanceX) < 55 &&
          Math.abs(distanceY) < 85 &&
          this.balloons[k].popped === false
        ) {
          this.popBalloon(k, i);
          removeBall = true;
          if (
            this.balls[i].currentColor === this.balloons[k].currentColor ||
            this.balloons[k].currentColor === "white"
          ) {
            if (this.specialtiesEquipped !== "splash_balls_upgrade") {
              break;
            }
          }
        }
      }

      // Check for barrier collisions
      for (var j = 0; j < this.barriers.length; j++) {
        if (
          this.balls[i].position.x >= this.barriers[j].position.x - 20 &&
          this.balls[i].position.x <= this.barriers[j].position.x + 60 &&
          this.balls[i].position.y <= this.barriers[j].position.y + 110 &&
          this.balls[i].position.y >= this.barriers[j].position.y - 110
        ) {
          removeBall = true;
          sounds.bump.play();
          if (this.specialtiesEquipped === "barrier_buster_upgrade") {
            this.barriers[j].health -= 1;
            if (this.barriers[j].health <= 0) {
              this.barriers[j] = null;
            }
          }
          break;
        }
      }

      // Check for intense barrier collisions
      for (var l = 0; l < this.intenseBarriers.length; l++) {
        if (
          this.balls[i].position.x > this.intenseBarriers[l].position.x - 20 &&
          this.balls[i].position.x < this.intenseBarriers[l].position.x + 20 &&
          this.balls[i].position.y < this.intenseBarriers[l].position.y + 150 &&
          this.balls[i].position.y > this.intenseBarriers[l].position.y - 150
        ) {
          removeBall = true;
          sounds.bump.play();
          if (this.specialtiesEquipped === "barrier_buster_upgrade") {
            this.intenseBarriers[l].health -= 1;
            if (this.intenseBarriers[l].health <= 0) {
              this.intenseBarriers[l] = null;
            }
          }
          break;
        }
      }

      for (var z = 0; z < this.blimps.length; z++) {
        if (
          this.balls[i].position.x >=
            this.blimps[z].position.x - this.blimps[z].origin.x &&
          this.balls[i].position.x <=
            this.blimps[z].position.x + this.blimps[z].origin.x &&
          this.balls[i].position.y <=
            this.blimps[z].position.y + this.blimps[z].origin.y - 50 &&
          this.balls[i].position.y >=
            this.blimps[z].position.y - this.blimps[z].origin.y + 50 &&
          this.balls[i].hitBlimp === false
        ) {
          if (
            this.balls[i].currentColor === this.blimps[z].markerColor ||
            this.mode === "no_color_mode"
          ) {
            if (
              this.specialtiesEquipped === "blimp_slower_upgrade" &&
              Date.now() >= this.blimps[z].slowCooldown + 1000
            ) {
              this.blimps[z].velocity.y *= 0.6;
              this.blimps[z].slowCooldown = Date.now();
            }
            if (this.specialtiesEquipped !== "double_ball_upgrade")
              this.blimps[z].health -= 1;
            if (this.specialtiesEquipped === "double_ball_upgrade")
              this.blimps[z].health -= 0.6;
            this.balls[i].hitBlimp = true;
            if (Math.random() < this.blimpColorChangeFrequency)
              this.blimps[z].changeMarker();
            if (this.blimps[z].health <= 0) {
              this.blimps[z] = null;
              this.blimps = this.blimps.filter((a) => a);
              this.bossCount -= 1;
              this.balloonsPopped += 1;
              if (this.mode !== "freeplay_mode") {
                this.balloonsPerRow = 0;
                Game.paused = true;
                this.giveCoins();
                this.win = true;
              }
              break;
            }
          }
        }
        if (this.blimps[z].position.y > 900) {
          this.lives = 0;
        }
      }

      // If a collision was found
      if (removeBall) {
        this.balls[i] = null;
        this.balls = this.balls.filter((a) => a);
        break;
      }
    }

    // Remove empty array content
    this.balls = this.balls.filter((a) => a);
    this.balloons = this.balloons.filter((a) => a);
    this.barriers = this.barriers.filter((a) => a);
    this.intenseBarriers = this.intenseBarriers.filter((a) => a);

    // Check if balloon fell off screen
    for (var k = 0; k < this.balloons.length; k++) {
      if (this.balloons[k].position.y > 800) {
        if (this.mode !== "tutorial_mode") {
          this.rows[this.balloons[k].index] -= 1;
          this.balloons[k] = null;
          this.lives -= 1;
          sounds.hitSound.play();
        } else if (this.mode === "tutorial_mode") {
          this.balloons[k].position.y = -100;
        }
      }
    }

    // Check if the barriers fell off screen
    for (var i = 0; i < this.barriers.length; i++) {
      if (this.barriers[i].position.y > 800) {
        this.barriers[i] = null;
      }
    }

    for (var i = 0; i < this.intenseBarriers.length; i++) {
      if (this.intenseBarriers[i].position.y > 900) {
        this.intenseBarriers[i] = null;
      }
    }

    // Remove empty array content again
    this.balls = this.balls.filter((a) => a);
    this.balloons = this.balloons.filter((a) => a);
    this.barriers = this.barriers.filter((a) => a);
    this.intenseBarriers = this.intenseBarriers.filter((a) => a);

    if (this.lives <= 0 && this.playEndSound === true) {
      this.playEndSound = false;
      sounds.gameOver.play();
      sounds.backgroundMusicBasic.volume = 0;
    }
    if (Game.paused === true || this.gameActive === false || this.lives <= 0)
      return;

    if (this.paused) {
      sounds.backgroundMusicBasic.volume = 0;
    }

    // Update balls

    for (var i = 0; i < this.balls.length; i++) {
      this.balls[i].update(delta);
    }

    // Update cannon

    // Update barriers

    for (var i = 0; i < this.barriers.length; i++) {
      this.barriers[i].move();
    }

    for (var i = 0; i < this.intenseBarriers.length; i++) {
      this.intenseBarriers[i].move();
    }

    // Update balloons

    for (var i = 0; i < this.blimps.length; i++) {
      if (Date.now() > this.freezeTimer + 5000) {
        this.blimps[i].update(delta);
      }
    }
  }
};

GameWorld.prototype.isOutsideWorld = function (position) {
  return position.x < 0 || position.x > 1300 || position.y > 700;
};
