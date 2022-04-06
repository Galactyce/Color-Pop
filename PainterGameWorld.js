function painterGameWorld() {
  this.rows = new Array(0, 0, 0); // # of balloons in a row
  this.rowPositions = new Array(700, 900, 1100);
  this.balloonsPerRow = 0; // Desired # of balloons per row
  this.barrierCount = 0;
  this.mode = 'normal'
  this.intenseBarrierCount = 0;
  this.lives = 15;
  this.maxBalloons = 3;
  this.difficulty = new Array('easy', 'intermediate', 'hard', 'elite')
  this.started = false;
  this.defaultBalloonHealth = 1;
  this.livesPosition = 50;
  this.score = 1330;
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
  this.buttons = new Array();
  this.lastSpecialBalloons = Date.now()
  this.blimpColorChangeFrequency = 0
  this.modeButtons = new Array()
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

painterGameWorld.prototype.reset = function() {
  this.rows = new Array(0, 0, 0);
  this.barrierCount = 0;
  this.intenseBarrierCount = 0;
  this.homingBalls = false;
  this.balloonMinVelocity = 0;
  this.balloonMinVelocity = 30
  this.specialBalloons = new Array();
  this.penaltyBalloons = new Array();
  this.score = 0;
  this.balls = new Array()
  this.balloons = new Array()
  this.lives = 5;
  this.balloonsPerRow = 1
  this.maxBalloons = 3;
  this.started = false
  this.playButton = new PlayButton(460, 50, 'intermediate');
  this.easyButton = new PlayButton(100, 400, 'easy');
  this.hardButton = new PlayButton(700, 400, 'hard')

  for (var i=0; i < this.balloons.length; i++) {
    this.balloons[i] = null;
  }
  for (var i=0; i< this.barriers.length; i++) {
    this.barriers[i] = null;
  }
  for (var i=0; i<this.intenseBarriers.length; i++) {
    this.intenseBarriers[i] = null;
  }
  for (var i=0; i <this.balls.length; i++) {
    this.balls[i] = null;
  }
  var delta = 1/ 60;
  setTimeout(this.update(delta), 1000)
  this.draw();

}

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

painterGameWorld.prototype.draw = function () {

  Canvas.context.fillStyle = 'white';
  Canvas.context.fillRect(0, 0, 1500, 800)
  Canvas.drawImage(sprites.extras['background'].normal, new Vector2(0, 0), 0, new Vector2(0, 0));
  this.playButton.draw();
  this.easyButton.draw();
  this.hardButton.draw();
  this.armoredOnlyButton.draw();
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

painterGameWorld.prototype.addScore = function (value) {
  this.score += value;
  this.balloons.minVelocity += 3
  
if (this.mode === 'normal') {
  if (this.difficulty === 'intermediate') {
  if (this.score < 400 && this.score + value >= 400) {      // Normal mode
    this.specialBalloons.push('bomb');
  }

 
  if (this.score < 600 && this.score + value >= 600) {
    this.penaltyBalloons.push('ghost');
  }

  if (this.score < 650 && this.score + value >= 650) {
    this.penaltyBalloons.push('homing');
  }
  

 

  if (this.score < 1500 && this.score + value >= 1500) {
    this.bossCount = 1;
    this.barrierCount = 4
  }

 

  if (this.score >= 100) {
    this.barrierCount = 1;
  }

  if (this.score >= 250) {
    this.barrierCount = 0;
    this.intenseBarrierCount = 1;
  }

  if (this.score >= 300) {
    this.balloonsPerRow = 2;
  }

  if (this.score < 900 && this.score + value >= 900) {
    this.penaltyBalloons.push('metal')
  }

  if (this.score >= 700) {
    this.barrierCount = 1;
    this.intenseBarrierCount = 1;
  }

  if (this.score >= 1750) {
    this.balloonsPerRow = 3;
  }

  if (this.score >= 2000) {
    this.barrierCount = 2
    this.intenseBarrierCount = 1
  }

  }
  if (this.difficulty === 'easy') {                           // Easy mode
    if (this.score < 400 && this.score + value >= 400) {
      this.specialBalloons.push('bomb');
    }

    if (this.score < 600 && this.score + value >= 600) {
      this.specialBalloons.push('homing')
    }
    
    if (this.score < 800 && this.score + value >= 800) {
    this.penaltyBalloons.push('metal');
   }

  
    if (this.score < 1000 && this.score + value >= 1000) {
      this.specialBalloons.push('ice');
      // Also add waves to the balloons
    }
  
    if (this.score < 1000 && this.score + value >= 1000) {
      this.bossCount = 1;
      this.barrierCount = 4;

    }
  
  
    if (this.score >= 150) {
      this.barrierCount = 1;
    }
  
    if (this.score >= 450) {
      this.barrierCount = 0;
      this.intenseBarrierCount = 1;
    }
  
    if (this.score >= 500) {
      this.balloonsPerRow = 2;
    }
  
    if (this.score >= 800) {
      this.barrierCount = 1;
      this.intenseBarrierCount = 1;
    }

    if (this.score >= 1000) {
      this.balloonsPerRow = 1
    }
    }

    if (this.difficulty === 'hard') {   // Hard mode
      
      if (this.score >= 50) {
        this.barrierCount = 1;
      }
    
     
      if (this.score >= 150) {
        this.balloonsPerRow = 2;
      }
    
      if (this.score >= 450) {
        this.barrierCount = 1;
        this.intenseBarrierCount = 1;
      }

      if (this.score < 600 && this.score + value >= 600) {
        this.penaltyBalloons.push('metal')
      }

      if (this.score >= 800) {
        this.barrierCount = 2;
        this.intenseBarrierCount = 1
      }

      if (this.score >= 800) {
        this.balloonsPerRow = 3
      }

      if (this.score < 900 && this.score + value >= 900) {
        this.penaltyBalloons.push('ghost');
        // Also add waves to the balloons
      }

      if (this.score >= 1200) {
        this.barrierCount = 2;
        this.intenseBarrierCount = 2;
      }

      if (this.score < 1500 && this.score + value >= 1500) {
        this.specialBalloons.push('homing')
      }

      //  Add the boss
      if (this.score >= 2000) {
        this.bossCount = 1;
        this.barrierCount = 3;
        this.intenseBarrierCount = 2;
        this.balloonsPerRow = 1;

      }
    }
    
    }

    if (this.mode === 'only_armored') {
      this.balloonMinVelocity = 25;
      this.balloonsPerRow = 1;
    }

    if (this.score >= 80) {
      this.barrierCount = 1
    }

    if (this.score < 150 && this.score + value >= 150) {
      this.specialBalloons.push('bomb');
    }

    if (this.score >= 250) {
      this.barrierCount = 2;
    }
   
    if (this.score < 350 && this.score + value >= 350) {
      this.penaltyBalloons.push('ghost')
    }

};

painterGameWorld.prototype.update = function (delta) {
  this.pauseButton.update();
  if (this.started === false) {
  this.playButton.update();
  this.easyButton.update();
  this.hardButton.update();
  this.armoredOnlyButton.update();
  }

  // See if the score unlocks anything new

  if (this.difficulty === 'intermediate') this.blimpColorChangeFrequency = 0.4;
  if (this.difficulty === 'hard') this.blimpColorChangeFrequency = 0.7;
  if (this.difficulty === 'easy') this.blimpColorChangeFrequency = 0.2


  for (var i=this.blimps.length; i < this.bossCount; i++) {
    this.blimps.push(new Blimp())
  }



  for (var i = 0; i < this.rows.length; i++) {
    if (this.rows[i] < this.balloonsPerRow) {
      this.balloons.push(
        new Balloon(this.rowPositions[i], this.balloonMinVelocity, i, this.defaultBalloonHealth)
      ); // Draw balloons
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
            for (var b = 0; b < this.balloons.length; b++) {
              this.rows[this.balloons[b].index] -= 1;
              this.balloons[b] = null;
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
            this.addScore(25)
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
            sounds.popEffect.volume = 0.4
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
