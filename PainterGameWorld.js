function painterGameWorld() {
  this.rows = new Array(0, 0, 0); // # of balloons in a row
  this.rowPositions = new Array(700, 900, 1100);
  this.balloonsPerRow = 1; // Desired # of balloons per row
  this.barrierCount = 0;
  this.mode = 'normal'
  this.intenseBarrierCount = 0;
  this.lives = 5;
  this.maxBalloons = 3;
  this.win = false;
  this.difficulty = new Array('easy', 'intermediate', 'hard', 'elite')
  this.started = false;
  this.defaultBalloonHealth = 1;
  this.livesPosition = 50;
  this.score = 0;
  this.homingBalls = false
  this.playEndSound = false
  this.freezeTimer = 0;
  this.playEndSound = true;
  this.backgroundMusicPlaying = false;
  this.balloons = new Array();
  this.cannon = new Cannon();
  this.bossCount = 0;
  this.blimps = new Array();
  this.balls = new Array();
  this.specialBalloons = new Array();
  this.penaltyBalloons = new Array()
  this.normalBalloons = new Array('red', 'blue', 'green');
  this.lastHomingBalloon = Date.now()
  this.barriers = new Array();
  this.intenseBarriers = new Array();
  this.balloonMinVelocity = 0
  this.pauseButton = new PauseButton();
  this.playButton = new PlayButton(460, 250, 'intermediate');
  this.easyButton = new PlayButton(460, 50, 'easy');
  this.hardButton = new PlayButton(460, 450, 'hard');
  this.armoredOnlyButton = new ModeButton('armored_only', 20, 50)
  this.fasterBalloonsButton = new ModeButton('faster_balloons', 20, 250);
  this.buttons = new Array();
  this.lastSpecialBalloons = Date.now();
  this.blimpColorChangeFrequency = 0;
  this.modeButtons = new Array();
  this.balloonsPopped = 0;
  this.ballsFired = 0;
}

painterGameWorld.prototype.drawBalloons = function () {

  for (var k=0; k < this.blimps.length; k++) {
    this.blimps[k].draw()
  } 

  for (var i = 0; i < this.balloons.length; i++) {
    this.balloons[i].draw();
  }

 

};

painterGameWorld.prototype.drawLives = function () {
  for (var i = 0; i < this.lives; i++) {
    if (this.lives > 6) {
      this.addRowsOfLives();
      return;
    }
    Canvas.drawImage(
      sprites.extras["life_marker"].normal,
      new Vector2(i * (sprites.extras["life_marker"].normal.width + 15) + 10, 80),
      0,
      { x: 0, y: 0 }
    ); // First row of hearts
  }
};

painterGameWorld.prototype.addRowsOfLives = function () {
  if (this.lives > 12) {
    this.addAnotherRowOfLives();
    return;
  }
  for (var i = 0; i < 6; i++) {
    Canvas.drawImage(
      sprites.extras["life_marker"].normal,
      new Vector2(i * (sprites.extras["life_marker"].normal.width + 15) + 10, 80),
      0,
      { x: 0, y: 0 }
    );
  }
  for (var i = 0; i < this.lives - 6; i++) {
    Canvas.drawImage(
      sprites.extras["life_marker"].normal,
      new Vector2(i * (sprites.extras["life_marker"].normal.width + 15) + 10, 150),
      0,
      { x: 0, y: 0 }
    ); // Second row of hearts
  }
};


painterGameWorld.prototype.addAnotherRowOfLives = function () {
  for (var i = 0; i < 6; i++) {
    Canvas.drawImage(
      sprites.extras["life_marker"].normal,
      new Vector2(i * (sprites.extras["life_marker"].normal.width + 15) + 10, 80),
      0,
      { x: 0, y: 0 }
    );
  }
  for (var i = 0; i < 6; i++) {
    Canvas.drawImage(
      sprites.extras["life_marker"].normal,
      new Vector2(i * (sprites.extras["life_marker"].normal.width + 15) + 10, 150),
      0,
      { x: 0, y: 0 }
    );
  }
  for (var i = 0; i < this.lives - 12; i++) {
    Canvas.drawImage(
      sprites.extras["life_marker"].normal,
      new Vector2(i * (sprites.extras["life_marker"].normal.width + 15) + 10, 220),
      0,
      { x: 0, y: 0 }
    ); // Third row of hearts
  }
};

painterGameWorld.prototype.drawModeButtons = function() {
  this.fasterBalloonsButton.draw();
  this.armoredOnlyButton.draw();
}

painterGameWorld.prototype.draw = function () {

  Canvas.context.fillStyle = 'white';
  Canvas.context.fillRect(0, 0, 1500, 800)
  Canvas.drawImage(sprites.extras['background'].normal, new Vector2(0, 0), 0, new Vector2(0, 0));
  this.playButton.draw();
  this.easyButton.draw();
  this.hardButton.draw();
  this.drawModeButtons()
  if (this.started === false) return;
  Canvas.drawImage(sprites.extras['platform'].normal, new Vector2(-30, 650), 0, new Vector2(0, 0))

  Canvas.drawImage(
    sprites.extras["score_text_box"].normal,
    { x: 70, y: 40 },
    0,
    { x: 50, y: 20 }
  ); // Score text box

  Canvas.drawText(
    "Score: " + this.score,
    new Vector2(75, 30),
    "white",
    "top",
    "Comic Sans",
    "30px"
  ); 
 // this.drawUpdateLog();
for (var i=0; i < this.blimps.length; i++) {
  if (this.blimps.length > 0) {
    Canvas.drawText("Blimp's color weakness:", new Vector2(10, 350), "Black", "top", "Comic Sans", "30px")
    Canvas.drawImage(sprites.blimp[this.blimps[i].markerColor].normal, new Vector2(80, 380), 0, new Vector2(0, 0))
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
  

  this.drawLives();
  this.pauseButton.draw();
  this.playWinScreen()

};

painterGameWorld.prototype.handleInput = function (delta) {

if (Game.paused === false) {
  if (this.lives <= 0) return;
  this.cannon.handleInput(delta); // Rotate cannon + change cannon color
}
};

painterGameWorld.prototype.resetInputs = function () {
  Keyboard.reset();
};


painterGameWorld.prototype.playWinScreen = function() {
  if (this.win) {
  Canvas.drawImage(sprites.extras['end_screen'].normal, {x: 350, y: 100}, 0, {x: 0, y: 0});
  Canvas.drawText('You win!', new Vector2(500, 140), 'black', 'top', 'Comic Sans', '70px');
  Canvas.drawText("You popped " + this.balloonsPopped + " balloons.", new Vector2(370, 210), 'black', 'top', 'Comic Sans', '50px');
  Canvas.drawText("You fired " + this.ballsFired + " balls.", new Vector2(370, 280), 'black', 'top', 'Comic Sans', '50px');
  Canvas.drawText("Press Space to restart.", new Vector2(370, 330), 'black', 'top', 'Comic Sans', '50px')
  }
}


painterGameWorld.prototype.update = function (delta) {
  if (this.win) {
    if (Keyboard.keyDown === 32) 
    window.location.reload()
  }

  this.pauseButton.update();
  if (this.started === false) {
  this.playButton.update();
  this.easyButton.update();
  this.hardButton.update();
  this.armoredOnlyButton.update();
  this.fasterBalloonsButton.update()
  }

  // See if the score unlocks anything new

 
  if (this.difficulty === 'hard') this.blimpColorChangeFrequency = 0.7;
  else if (this.difficulty === 'easy') this.blimpColorChangeFrequency = 0.2;
  else {
    this.blimpColorChangeFrequency = 0.4
  }

  for (var i=this.blimps.length; i < this.bossCount; i++) {
    this.blimps.push(new Blimp())
  }


  for (var i = 0; i < this.rows.length; i++) {
    if (this.rows[i] < this.balloonsPerRow) {
      this.balloons.push(
        new Balloon(this.rowPositions[i], this.balloonMinVelocity, i, this.defaultBalloonHealth)
       
      ); // Draw balloons
      if (this.mode === 'only_armored') {
        this.balloons[i].armored = true
      }
      if (this.mode === 'faster_balloons') {
        this.balloons[i].minVelocity *= 2
      }
     
      this.rows[i] += 1;
    }
  }
  

  if (Date.now() > this.homingPowerUpStart + 20000) {
    this.homingBalls = false
  }


  for (var i = this.barriers.length; i < this.barrierCount; i++) {
    // Create barriers

    this.barriers.push(new Barrier());
    if (this.barriers.length > this.barrierCount) {
      this.barriers.pull()
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
            this.lives += this.balloons[k].popHeartValue;
            this.score += this.balloons[k].popPointValue;
            sounds.extraLife.play()
            this.balloonsPopped += 1;
            this.balloons[k] = null;
            this.balloons = this.balloons.filter((a) => a);
            removeBall = true;
          }
          break;
        }

        // Bomb balloon physics

        if (this.balloons[k].currentColor === "bomb") {
          this.balloons[k].health -= 1;
          removeBall = true;
          if (this.balloons[k].health <= 0) {
            this.balloonsPopped += 1;
            for (var b = 0; b < this.balloons.length; b++) {
              this.rows[this.balloons[b].index] -= 1;
              this.balloons[b] = null;
              this.balloonsPopped += 1;
            }
            sounds.boom.play()
          }
          break;
        }

        // Homing power-up balloon physics

        if (this.balloons[k].currentColor === 'homing') {
          this.balloons[k].health -= 1;
          removeBall = true;
          if (this.balloons[k].health <= 0) {
            this.homingBalls = true
            this.balloonsPopped += 1;
            this.lastHomingBalloon = Date.now()
            this.homingPowerUpStart = Date.now()
          }
        }

        if (Date.now > this.homingPowerUpStart + 10000) {
          this.homingBalls = false
        }

        //  Ice balloon physics

        if (this.balloons[k].currentColor === 'ice') {
          this.removeBall = true;
          this.rows[this.balloons[k].index] -= 1;
          this.balloons[k] = null;
          this.balloonsPopped += 1;
          this.freezeTimer = Date.now();
          this.addScore(10)
          removeBall = true
          break;
        }

        // Metal balloon Physics

        if (
          this.balloons[k].currentColor === "metal" ||
          this.balloons[k].currentColor === "metal_cracked" ||
          this.balloons[k].currentColor === "metal_damaged"
        ) {
          this.balloons[k].health -= 1;
          removeBall = true;
          sounds.clang.play()
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
        if (
          this.balls[i].currentColor === this.balloons[k].currentColor ||
          this.balloons[k].currentColor === "ghost"
        ) {
          this.balloons[k].health -= 1;
          removeBall = true;

          if (this.balloons[k].health <= 0) {
            sounds.popEffect.volume = 0.4;
            this.balloonsPopped += 1;
            sounds.popEffect.play()
            this.addScore(this.balloons[k].popPointValue);
          }
        }

        //  Check if a balloon ran out of health

        if (this.balloons[k].health <= 0) {
          this.rows[this.balloons[k].index] -= 1
          this.balloons[k] = null;
          this.balloonMinVelocity += 0.02
          this.balloons = this.balloons.filter((a) => a);
        }
         else if (
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
        this.barriers[j].health -= 1
        sounds.bump.play()
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

    for (var z=0; z < this.blimps.length; z++) {
      if (this.balls[i].position.x >= this.blimps[z].position.x - this.blimps[z].origin.x &&
          this.balls[i].position.x <= this.blimps[z].position.x + this.blimps[z].origin.x &&
          this.balls[i].position.y <= this.blimps[z].position.y + this.blimps[z].origin.y - 50 &&
          this.balls[i].position.y >= this.blimps[z].position.y - this.blimps[z].origin.y + 50 &&
          this.balls[i].hitBlimp === false &&
          this.balls[i].currentColor === this.blimps[z].markerColor) {
        this.blimps[z].health -= 1
        this.balls[i].hitBlimp = true
        if (Math.random() < this.blimpColorChangeFrequency) 
        this.blimps[z].changeMarker()
        if (this.blimps[z].health <= 0) {
          this.blimps[z] = null;
          this.blimps = this.blimps.filter((a) => a);
          this.bossCount -= 1
          this.balloonsPopped += 1;
          this.balloonsPerRow = 0
          Game.paused = true;
          this.win = true
        }
        break
      }
      if (this.blimps[z].position.y > 900) {
        this.lives = 0
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
      this.rows[this.balloons[k].index] -= 1;
      this.balloons[k] = null;
      this.lives -= 1;
      sounds.hitSound.play()
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
    sounds.gameOver.play()
    document.exitFullscreen()
    sounds.backgroundMusicBasic.volume = 0;
  }
  if (Game.paused === true || this.started === false  || this.lives <= 0) return;
  
  

  if (Game.paused) {
    sounds.backgroundMusicBasic.volume = 0;
  } 

  // Update balls

  for (var i = 0; i < this.balls.length; i++) {
    this.balls[i].update(delta);
  }

  for (var i = 0; i < this.balls.length; i++) {}
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
    if (Date.now() > this.freezeTimer + 5000) {
    
    this.balloons[i].update(delta);
    }
  }

  for (var i = 0; i < this.blimps.length; i++) {
    if (Date.now() > this.freezeTimer + 5000) {
    this.blimps[i].update(delta);
    }
    
  }
};



painterGameWorld.prototype.isOutsideWorld = function (position) {
  return position.x < 0 || position.x > 1300 || position.y > 700;
};
