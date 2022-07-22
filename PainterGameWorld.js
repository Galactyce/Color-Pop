<<<<<<< HEAD
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
  this.defaultBalloonHealth = 1;
  this.invincible = false;
  this.score = 0;
  this.balloonSpawning = true;
  this.barrierSpawning = true;
  this.homingBalls = false;
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
  this.pauseButton = new PauseButton();
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
  this.modeToggleButton = new ModeToggleButton(550, 550);
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
  this.inventoryItems = new Array();
  this.inventoryInfoBar = undefined
  this.shopItems = new Array();
  this.specialtiesEquipped = undefined;
  this.specialtiesOwned = new Array();
  this.scrollInteger = 0;
  this.scrollLength = this.normalButtonString.length;
  this.scrollButtons = new Array();
  this.powerUpSlots = new Array();
  this.lastSpecialBalloons = Date.now();
  this.blimpColorChangeFrequency = 0;
  this.balloonsPopped = 0;
  this.ballsFired = 0;
  this.paused = false;
  this.coins = 20;
  this.reward = 0;
  this.shopInfoBox = undefined;
  this.moving = true;
  this.dataString = {'itemsOwned': this.specialtiesOwned, 'itemEquipped': this.specialtiesEquipped};
  this.scrollButtons.push(new Arrow(new Vector2(930, 335), "right", 1));
  this.scrollButtons.push(new Arrow(new Vector2(370, 335), "left", 1));
  this.powerUpSlots.push(new PowerSlot(new Vector2(100, 350), 1));
  this.powerUpSlots.push(new PowerSlot(new Vector2(200, 350), 2));
  this.powerUpSlots.push(new PowerSlot(new Vector2(300, 350), 3));
  this.powerUpSlots.push(new PowerSlot(new Vector2(400, 350), 4));  // The extra slot upgrade
  this.shopItems.push(
    new ShopItem(new Vector2(300, 500), "double_ball_upgrade", 1)
  );
  this.shopItems.push(
    new ShopItem(new Vector2(700, 500), "extra_slot_upgrade", 2)
  );
  this.shopItems.push(
    new ShopItem(new Vector2(900, 500), "blimp_slower_upgrade", 2)
  );
  this.shopItems.push(
    new ShopItem(new Vector2(400, 250), "barrier_buster_upgrade", 2)
  );
 // this.reset();
  let cookie = decodeURIComponent(document.cookie)
  console.log(cookie)
  if (cookie != '') { 
    var cname = document.cookie.split("=")
    var name = cname[1]
  }
  else {
    var name = prompt('Enter your name')
    var d = new Date()
    d.setTime(d.getTime() + 5 * 24 * 60 * 60 * 1000)
   document.cookie = "name=" + name +"; expires=" + d.toUTCString() + "; path=/";
    //console.log(cookie)
  }

  alert("Hello " + name + '!')


}

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
  this.gameActive = false;
  this.wavyActive = false;
  this.blimpColorChangeFrequency = 0;
  this.balloonsPopped = 0;
  this.ballsFired = 0;
  this.paused = false;
  this.area = "home";
  for (var i = 0; i < this.balloons.length; i++) {
    this.balloons[i] = null;
  }
  this.balloons = this.balloons.filter((a) => a);

  for (var i = 0; i < this.powerUpSlots.length; i++) {
    this.powerUpSlots[i].contains = undefined;
  }
  this.win = false;
};

GameWorld.prototype.draw = function () {
  if (!this.inventory.open) {
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

    if (this.shopInfoBox !== undefined) {
      this.shopInfoBox.draw();
    }
    this.shopButton.draw();
  }

  if (this.area === "home" ) {
    if (this.gameActive === false) {
      if (!this.inventory.open) {
      this.tutorialModeButton.draw();
      this.modeToggleButton.draw();
      this.inventoryButton.draw();
      this.shopButton.draw();
    

    for (var i = 0; i < this.scrollButtons.length; i++) {
      this.scrollButtons[i].draw();
    }

    if (this.gameActive === false && this.modeToggleButton.mode === "normal") {
      this.normalButtonString[this.scrollInteger].draw();
    }
    if (this.gameActive === false && this.modeToggleButton.mode === "extras") {
      this.extraButtonString[this.scrollInteger].draw();
    }
  }
}
    if (this.inventory.open) {
      this.inventory.draw();
      for (var i = 0; i<this.inventoryItems.length; i++) {
        this.inventoryItems[i].draw()
      }
      
    if (this.inventoryInfoBar !== undefined) {
      this.inventoryInfoBar.draw();
    }
    Canvas.drawText(
      "Cancel: ",
      new Vector2(130, 633),
      "black",
      "center",
      "Courier New",
      "25px"
    );
    Canvas.drawImage(sprites.extras['simple_button'].normal, new Vector2(180, 625), 0, new Vector2(0, 0), 0.2)
    Canvas.drawText(
      "Esc",
      new Vector2(200, 633),
      "black",
      "left",
      "Courier New",
      "25px"
    );
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
  if (this.specialtiesEquipped === 'extra_slot_upgrade') {
    this.powerUpSlots[3].draw()
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

GameWorld.prototype.giveCoins = function() {
  if (this.mode === 'easy') this.reward = 1;
  if (this.mode === 'intermediate') this.reward = 2;
  if (this.mode === 'hard') this.reward = 3;
  if (this.mode === 'apex') this.reward = 4;
  if (this.mode === 'armored_only') this.reward = 3;
  if (this.mode === 'faster_balloons') this.reward   = 5;
  if (this.mode === 'no_color_mode') this.reward = 3;
  this.coin += this.reward;
}

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
    Canvas.drawText(
      "Press Space to restart.",
      new Vector2(370, 330),
      "black",
      "top",
      "Comic Sans",
      "50px"
    );
    Canvas.drawText(
      "+" + this.reward,
      new Vector2(370, 430),
      "black",
      "top",
      "Comic Sans",
      "50px"
    );
    Canvas.drawImage(
      sprites.extras['coin'].normal,
      new Vector2(430, 430)
    )
  }
};

GameWorld.prototype.update = function (delta) {
  this.modeToggleButton.update();
  this.tutorialModeButton.update();
  for (var i = 0; i < this.scrollButtons.length; i++) {
    this.scrollButtons[i].update();
  }
  if (this.gameActive === false) {
    if (!this.inventory.open) {
     if (this.area === "home") {
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
        this.normalButtonString[this.scrollInteger].update();
      }
      if (
        this.gameActive === false &&
        this.modeToggleButton.mode === "extras"
      ) {
        this.extraButtonString[this.scrollInteger].update();
      }
    }
    if (this.area === "shop") {
      for (var i = 0; i < this.shopItems.length; i++) {
        this.shopItems[i].update();
      }
    }

    this.shopButton.update();
    this.inventoryButton.update();
  }

  if (this.inventory.open && Keyboard.keyPressed === 27) {
    this.inventory.open = false
  }
  if (this.inventory.open) {
    for (var i = 0; i<this.inventoryItems.length; i++) {
      this.inventoryItems[i].update()
    }
  }
  }

  if (Keyboard.keyPressed === 32)  {
    if (this.lives <= 0 || this.win === true) {
      this.reset();
    }
  }
  if (Keyboard.keyPressed === 80) this.paused = !this.paused

  if (!this.paused) {
  for (var i = 0; i < 3; i++) {
    this.powerUpSlots[i].update();
  }
  if (this.specialtiesEquipped === 'extra_slot_upgrade') {
    this.powerUpSlots[3].update()
  }

  if (this.mode === "no_color") {
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

  if (Date.now() > this.homingPowerUpStart + 15000) {
    this.homingBalls = false;
  }

  if (Date.now() > this.freezeTimer + 8000) {
    this.moving = true;
  }

  for (var i = this.barriers.length; i < this.barrierCount; i++) {
    // Create barriers
    if (this.barrierSpawning === true) {
      this.barriers.push(new Barrier());
    }
  }

  for (var i = this.intenseBarriers.length; i < this.intenseBarrierCount; i++) {
    this.intenseBarriers.push(new BarrierIntense());
  }

  // Handle ball collisions
  for (var i = 0; i < this.balls.length; i++) {
    // Check if ball fell off screen
    if (this.balls[i].position.y > 700) {
      this.balls[i] = null;
      i = this.balls.length;
      break;
    }
    var removeBall = false;

    // Check for balloon collisions
    for (var k = 0; k < this.balloons.length; k++) {
      distanceX = this.balloons[k].position.x - this.balls[i].position.x;
      distanceY = this.balloons[k].position.y - this.balls[i].position.y;
      if (Math.abs(distanceX) < 55 && Math.abs(distanceY) < 85) {
        // Rainbow Physics
        if (this.balloons[k].currentColor === "rainbow") {
          removeBall = true;
          this.balloons[k].health -= 1;

          if (this.balloons[k].health <= 0) {
            this.rows[this.balloons[k].index] -= 1;
            this.balloons[k] = null;
            this.balloons = this.balloons.filter((a) => a);
            this.lives += 1;
            this.addScore(10);
            this.tutorialStep();

            sounds.extraLife.play();
            this.balloonsPopped += 1;
            removeBall = true;
          }
          break;
        }

        // Bomb balloon physics
        else if (this.balloons[k].currentColor === "bomb") {
          this.balloons[k].health -= 1;
          removeBall = true;
          if (this.balloons[k].health <= 0) {
            this.addScore(10);
            this.tutorialStep();

            this.rows[this.balloons[k].index] -= 1;
            this.balloons[k] = null;
            this.balloons = this.balloons.filter((a) => a);
            this.balloonsPopped += 1;
            for (var i = 0; i < this.powerUpSlots.length; i++) {
              if (this.powerUpSlots[i].contains === undefined) {
                this.powerUpSlots[i].contains = "bomb";
                return;
              }
            }
          }
          break;
        }

        // Homing power-up balloon physics
        else if (this.balloons[k].currentColor === "homing") {
          this.balloons[k].health -= 1;
          removeBall = true;
          if (this.balloons[k].health <= 0) {
            this.rows[this.balloons[k].index] -= 1;
            this.balloons[k] = null;
            this.balloons = this.balloons.filter((a) => a);
            this.tutorialStep();

            for (var i = 0; i < this.powerUpSlots.length; i++) {
              if (this.powerUpSlots[i].contains === undefined) {
                this.powerUpSlots[i].contains = "homing";
                break;
              }
            }

            this.balloonsPopped += 1;
            this.addScore(10);
          }
        }

        //  Ice balloon physics
        else if (this.balloons[k].currentColor === "ice") {
          this.balloons[k].health -= 1;
          removeBall = true;
          if (this.balloons[k].health <= 0) {
            this.rows[this.balloons[k].index] -= 1;
            this.balloons[k] = null;
            this.tutorialStep();

            for (var i = 0; i < this.powerUpSlots.length; i++) {
              if (this.powerUpSlots[i].contains === undefined) {
                this.powerUpSlots[i].contains = "freeze";
                break;
              }
            }
            this.balloonsPopped += 1;
            this.addScore(10);
            break;
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
            this.score += this.balloons[k].popPointValue;
            this.addScore(25);
            this.balloonsPopped += 1;
            this.balloons[k] = null;
            this.balloons = this.balloons.filter((a) => a);
            break;
          }
        }

        // Blimp physics

        // Normal physics
        else if (
          this.balls[i].currentColor === this.balloons[k].currentColor ||
          this.balloons[k].currentColor === "white"
        ) {
          this.balloons[k].health -= 1;
          removeBall = true;

          if (this.balloons[k].health <= 0) {
            sounds.popEffect.volume = 0.4;
            this.balloonsPopped += 1;
            sounds.popEffect.play();
            this.addScore(this.balloons[k].popPointValue);
            this.tutorialStep();
          }
        }

        //  Check if a balloon ran out of health

        if (this.balloons[k].health <= 0) {
          this.rows[this.balloons[k].index] -= 1;
          this.balloons[k] = null;
          this.balloonMinVelocity += 0.3;
          this.balloons = this.balloons.filter((a) => a);
          if (this.mode === "no_color") break;
        } else if (
          this.balls[i].currentColor !== this.balloons[k].currentColor
        ) {
          removeBall = true;
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
        if (this.specialtiesEquipped === 'barrier_buster_upgrade') {
        this.barriers[j].health -= 1;
        if (this.barriers[j].health <= 0) {
          this.barriers[i] = null;
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
        if (this.specialtiesEquipped === 'barrier_buster_upgrade') {
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
          this.mode === "no_color"
        ) {
          if (this.specialtiesEquipped === 'blimp_slower_upgrade' &&
           Date.now() >= this.blimps[z].slowCooldown + 1000) {
            this.blimps[z].velocity.y *= 0.6
            this.blimps[z].slowCooldown = Date.now()
          }
          if (this.specialtiesEquipped !== 'double_ball_upgrade')
          this.blimps[z].health -= 1;
          if (this.specialtiesEquipped === 'double_ball_upgrade')
          this.blimps[z].health -= 0.6;
          this.balls[i].hitBlimp = true;
          if (Math.random() < this.blimpColorChangeFrequency)
            this.blimps[z].changeMarker();
          if (this.blimps[z].health <= 0) {
            this.blimps[z] = null;
            this.blimps = this.blimps.filter((a) => a);
            this.bossCount -= 1;
            this.balloonsPopped += 1;
            this.tutorialStep();

            this.balloonsPerRow = 0;
            Game.paused = true;
            this.giveCoins();
            this.win = true;

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

  this.cannon.update(delta);

  // Update barriers

  for (var i = 0; i < this.barriers.length; i++) {
    this.barriers[i].move();
  }

  for (var i = 0; i < this.intenseBarriers.length; i++) {
    this.intenseBarriers[i].move();
  }

  // Update balloons

  for (var i = 0; i < this.balloons.length; i++) {
    if (this.moving === true) {
      this.balloons[i].update(delta);
    }
  }

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
=======
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
  this.defaultBalloonHealth = 1;
  this.invincible = false;
  this.score = 600;
  this.balloonSpawning = true;
  this.barrierSpawning = true;
  this.homingBalls = false;
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
  this.pauseButton = new PauseButton();
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
  this.tutorialModeButton = new PlayButton(1000, 100, "tutorial_mode");
  this.modeToggleButton = new ModeToggleButton(550, 550);
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
  this.inventoryItems = new Array();
  this.inventoryInfoBar = undefined
  this.shopItems = new Array();
  this.specialtiesEquipped = undefined;
  this.specialtiesOwned = new Array();
  this.scrollInteger = 0;
  this.scrollLength = this.normalButtonString.length;
  this.scrollButtons = new Array();
  this.powerUpSlots = new Array();
  this.lastSpecialBalloons = Date.now();
  this.blimpColorChangeFrequency = 0;
  this.balloonsPopped = 0;
  this.ballsFired = 0;
  this.paused = false;
  this.coins = 8;
  this.shopInfoBox = undefined;
  this.moving = true;
  this.scrollButtons.push(new Arrow(new Vector2(930, 335), "right", 1));
  this.scrollButtons.push(new Arrow(new Vector2(370, 335), "left", 1));
  this.powerUpSlots.push(new PowerSlot(new Vector2(100, 350), 1));
  this.powerUpSlots.push(new PowerSlot(new Vector2(200, 350), 2));
  this.powerUpSlots.push(new PowerSlot(new Vector2(300, 350), 3));
  this.powerUpSlots.push(new PowerSlot(new Vector2(400, 350), 4));  // The extra slot upgrade
  this.shopItems.push(
    new ShopItem(new Vector2(300, 500), "double_ball_upgrade", 1)
  );
  this.shopItems.push(
    new ShopItem(new Vector2(700, 500), "extra_slot_upgrade", 2)
  );

  this.reset();
}

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
  this.score = 600;
  this.gameActive = false;
  this.wavyActive = false;
  this.blimpColorChangeFrequency = 0;
  this.balloonsPopped = 0;
  this.ballsFired = 0;
  this.paused = false;
  this.area = "home";
  for (var i = 0; i < this.balloons.length; i++) {
    this.balloons[i] = null;
  }
  this.balloons = this.balloons.filter((a) => a);

  for (var i = 0; i < this.powerUpSlots.length; i++) {
    this.powerUpSlots[i].contains = undefined;
  }
  this.win = false;
};

GameWorld.prototype.draw = function () {
  if (!this.inventory.open) {
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
      new Vector2(150, 50),
      "black",
      "center",
      "Courier New",
      "100px"
    );

    if (this.shopInfoBox !== undefined) {
      this.shopInfoBox.draw();
    }
    this.shopButton.draw();
  }

  if (this.area === "home" ) {
    if (this.gameActive === false) {
      if (!this.inventory.open) {
      this.tutorialModeButton.draw();
      this.modeToggleButton.draw();
      this.inventoryButton.draw();
      this.shopButton.draw();
    

    for (var i = 0; i < this.scrollButtons.length; i++) {
      this.scrollButtons[i].draw();
    }

    if (this.gameActive === false && this.modeToggleButton.mode === "normal") {
      this.normalButtonString[this.scrollInteger].draw();
    }
    if (this.gameActive === false && this.modeToggleButton.mode === "extras") {
      this.extraButtonString[this.scrollInteger].draw();
    }
  }
}
    if (this.inventory.open) {
      this.inventory.draw();
      for (var i = 0; i<this.inventoryItems.length; i++) {
        this.inventoryItems[i].draw()
      }
      
    if (this.inventoryInfoBar !== undefined) {
      this.inventoryInfoBar.draw();
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
  if (this.specialtiesEquipped === 'extra_slot_upgrade') {
    this.powerUpSlots[3].draw()
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
    Canvas.drawText(
      "Press Space to restart.",
      new Vector2(370, 330),
      "black",
      "top",
      "Comic Sans",
      "50px"
    );
  }
};

GameWorld.prototype.update = function (delta) {
  this.modeToggleButton.update();
  this.tutorialModeButton.update();
  for (var i = 0; i < this.scrollButtons.length; i++) {
    this.scrollButtons[i].update();
  }
  if (this.gameActive === false) {
    if (!this.inventory.open) {
     if (this.area === "home") {
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
        this.normalButtonString[this.scrollInteger].update();
      }
      if (
        this.gameActive === false &&
        this.modeToggleButton.mode === "extras"
      ) {
        this.extraButtonString[this.scrollInteger].update();
      }
    }
    if (this.area === "shop") {
      for (var i = 0; i < this.shopItems.length; i++) {
        this.shopItems[i].update();
      }
    }

    this.shopButton.update();
    this.inventoryButton.update();
  }

  if (this.inventory.open && Keyboard.keyPressed === 27) {
    this.inventory.open = false
  }
  if (this.inventory.open) {
    for (var i = 0; i<this.inventoryItems.length; i++) {
      this.inventoryItems[i].update()
    }
  }
  }

  if (Keyboard.keyPressed === 32 && this.lives <= 0) this.reset();
  if (Keyboard.keyPressed === 80) this.paused = !this.paused

  if (!this.paused) {
  for (var i = 0; i < 3; i++) {
    this.powerUpSlots[i].update();
  }
  if (this.specialtiesEquipped === 'extra_slot_upgrade') {
    this.powerUpSlots[3].update()
  }

  if (this.mode === "no_color") {
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

  if (Date.now() > this.homingPowerUpStart + 15000) {
    this.homingBalls = false;
  }

  if (Date.now() > this.freezeTimer + 8000) {
    this.moving = true;
  }

  for (var i = this.barriers.length; i < this.barrierCount; i++) {
    // Create barriers
    if (this.barrierSpawning === true) {
      this.barriers.push(new Barrier());
    }
  }

  for (var i = this.intenseBarriers.length; i < this.intenseBarrierCount; i++) {
    this.intenseBarriers.push(new BarrierIntense());
  }

  // Handle ball collisions
  for (var i = 0; i < this.balls.length; i++) {
    // Check if ball fell off screen
    if (this.balls[i].position.y > 700) {
      this.balls[i] = null;
      i = this.balls.length;
      break;
    }
    var removeBall = false;

    // Check for balloon collisions
    for (var k = 0; k < this.balloons.length; k++) {
      distanceX = this.balloons[k].position.x - this.balls[i].position.x;
      distanceY = this.balloons[k].position.y - this.balls[i].position.y;
      if (Math.abs(distanceX) < 55 && Math.abs(distanceY) < 85) {
        // Rainbow Physics
        if (this.balloons[k].currentColor === "rainbow") {
          removeBall = true;
          this.balloons[k].health -= 1;

          if (this.balloons[k].health <= 0) {
            this.rows[this.balloons[k].index] -= 1;
            this.balloons[k] = null;
            this.balloons = this.balloons.filter((a) => a);
            this.lives += 1;
            this.addScore(10);
            this.tutorialStep();

            sounds.extraLife.play();
            this.balloonsPopped += 1;
            removeBall = true;
          }
          break;
        }

        // Bomb balloon physics
        else if (this.balloons[k].currentColor === "bomb") {
          this.balloons[k].health -= 1;
          removeBall = true;
          if (this.balloons[k].health <= 0) {
            this.addScore(10);
            this.tutorialStep();

            this.rows[this.balloons[k].index] -= 1;
            this.balloons[k] = null;
            this.balloons = this.balloons.filter((a) => a);
            this.balloonsPopped += 1;
            for (var i = 0; i < this.powerUpSlots.length; i++) {
              if (this.powerUpSlots[i].contains === undefined) {
                this.powerUpSlots[i].contains = "bomb";
                return;
              }
            }
          }
          break;
        }

        // Homing power-up balloon physics
        else if (this.balloons[k].currentColor === "homing") {
          this.balloons[k].health -= 1;
          removeBall = true;
          if (this.balloons[k].health <= 0) {
            this.rows[this.balloons[k].index] -= 1;
            this.balloons[k] = null;
            this.balloons = this.balloons.filter((a) => a);
            this.tutorialStep();

            for (var i = 0; i < this.powerUpSlots.length; i++) {
              if (this.powerUpSlots[i].contains === undefined) {
                this.powerUpSlots[i].contains = "homing";
                break;
              }
            }

            this.balloonsPopped += 1;
            this.addScore(10);
          }
        }

        //  Ice balloon physics
        else if (this.balloons[k].currentColor === "ice") {
          this.balloons[k].health -= 1;
          removeBall = true;
          if (this.balloons[k].health <= 0) {
            this.rows[this.balloons[k].index] -= 1;
            this.balloons[k] = null;
            this.tutorialStep();

            for (var i = 0; i < this.powerUpSlots.length; i++) {
              if (this.powerUpSlots[i].contains === undefined) {
                this.powerUpSlots[i].contains = "freeze";
                break;
              }
            }
            this.balloonsPopped += 1;
            this.addScore(10);
            break;
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
            this.score += this.balloons[k].popPointValue;
            this.addScore(25);
            this.balloonsPopped += 1;
            this.balloons[k] = null;
            this.balloons = this.balloons.filter((a) => a);
            break;
          }
        }

        // Blimp physics

        // Normal physics
        else if (
          this.balls[i].currentColor === this.balloons[k].currentColor ||
          this.balloons[k].currentColor === "white"
        ) {
          this.balloons[k].health -= 1;
          removeBall = true;

          if (this.balloons[k].health <= 0) {
            sounds.popEffect.volume = 0.4;
            this.balloonsPopped += 1;
            sounds.popEffect.play();
            this.addScore(this.balloons[k].popPointValue);
            this.tutorialStep();
          }
        }

        //  Check if a balloon ran out of health

        if (this.balloons[k].health <= 0) {
          this.rows[this.balloons[k].index] -= 1;
          this.balloons[k] = null;
          this.balloonMinVelocity += 0.3;
          this.balloons = this.balloons.filter((a) => a);
          if (this.mode === "no_color") break;
        } else if (
          this.balls[i].currentColor !== this.balloons[k].currentColor
        ) {
          removeBall = true;
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
        this.barriers[j].health -= 1;
        sounds.bump.play();
        if (this.barriers[j].health <= 0) {
          this.barriers[i] = null;
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
          this.mode === "no_color"
        ) {
          this.blimps[z].health -= 1;
          this.balls[i].hitBlimp = true;
          if (Math.random() < this.blimpColorChangeFrequency)
            this.blimps[z].changeMarker();
          if (this.blimps[z].health <= 0) {
            this.blimps[z] = null;
            this.blimps = this.blimps.filter((a) => a);
            this.bossCount -= 1;
            this.balloonsPopped += 1;
            this.tutorialStep();

            this.balloonsPerRow = 0;
            Game.paused = true;
            this.win = true;

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

  if (Game.paused) {
    sounds.backgroundMusicBasic.volume = 0;
  }

  // Update balls

  for (var i = 0; i < this.balls.length; i++) {
    this.balls[i].update(delta);
  }

  // Update cannon

  this.cannon.update(delta);

  // Update barriers

  for (var i = 0; i < this.barriers.length; i++) {
    this.barriers[i].move();
  }

  for (var i = 0; i < this.intenseBarriers.length; i++) {
    this.intenseBarriers[i].move();
  }

  // Update balloons

  for (var i = 0; i < this.balloons.length; i++) {
    if (this.moving === true) {
      this.balloons[i].update(delta);
    }
  }

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
>>>>>>> 863a993b0347c4cc94ad9a20ce065d9d497c6913
