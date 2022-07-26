GameWorld.prototype.addScore = function (value) {

  this.score += value;
  this.tutorialStep(value)

  this.minVelocity += 3;

  if (this.mode === "intermediate") {
    // Normal mode

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

    if (this.score < 400 && this.score + value >= 400) {
      this.specialBalloons.push("bomb");
    }

    if (this.score < 600 && this.score + value >= 600) {
      // this.penaltyBalloons.push('ghost');
    }

    if (this.score < 650 && this.score + value >= 650) {
      this.specialBalloons.push("target");
    }

    if (this.score >= 700) {
      this.barrierCount = 1;
      this.intenseBarrierCount = 1;
    }

    if (this.score < 800 && this.score + value >= 800) {
      this.specialBalloons.push("ice");
    }

    if (this.score < 900 && this.score + value >= 900) {
      this.penaltyBalloons.push("metal");
    }

    if (this.score >= 950) {
      this.wavyActive = true;
    }

    if (this.score >= 1500) {
      this.bossCount = 1;
      this.barrierCount = 4;
      this.intenseBarrierCount = 1;
    }
  }
  if (this.mode === "easy") {
    // Easy mode

    if (this.score >= 150) {
      this.barrierCount = 1;
    }
    if (this.score < 400 && this.score + value >= 400) {
      this.specialBalloons.push("bomb");
    }

    if (this.score >= 450) {
      this.barrierCount = 0;
      this.intenseBarrierCount = 1;
    }

    if (this.score >= 500) {
      this.balloonsPerRow = 2;
    }

    if (this.score < 600 && this.score + value >= 600) {
      this.specialBalloons.push("target");
    }

    if (this.score < 800 && this.score + value >= 800) {
      this.penaltyBalloons.push("metal");
    }

    if (this.score >= 800) {
      this.barrierCount = 1;
      this.intenseBarrierCount = 1;
    }

    if (this.score < 900 && this.score + value >= 900) {
      this.specialBalloons.push("ice");
    }

    if (this.score < 1000 && this.score + value >= 1000) {
      this.bossCount = 1;
      this.barrierCount = 4;
      this.balloonsPerRow = 0;
    }
  }
  if (this.mode === "hard") {
    // Hard mode

    if (this.score === 0) {
      this.balloonsPerRow = 1;
    }

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
      this.penaltyBalloons.push("metal");
    }

    if (this.score >= 700) {
      this.wavyActive = true;
    }

    if (this.score < 750 && this.score + value >= 750) {
      this.specialBalloons.push("bomb");
    }

    if (this.score >= 800) {
      this.barrierCount = 2;
      this.intenseBarrierCount = 1;
    }

    if (this.score >= 800) {
      this.balloonsPerRow = 3;
    }

    if (this.score < 900 && this.score + value >= 900) {
      // Also add waves to the balloons
    }

    if (this.score < 950 && this.score + value >= 950) {
      this.specialBalloons.push("ice");
    }

    if (this.score >= 1200) {
      this.barrierCount = 2;
      this.intenseBarrierCount = 2;
    }

    if (this.score < 1500 && this.score + value >= 1500) {
      this.specialBalloons.push("target");
    }

    //  Add the boss
    if (this.score >= 1750) {
      this.bossCount = 1;
      this.barrierCount = 3;
      this.intenseBarrierCount = 2;
      this.balloonsPerRow = 1;
    }
  }
  if (this.mode === "apex") {
    if (this.score === 0) {
      this.barrierCount = 2;
      this.balloonsPerRow = 2;
    }
    if (this.score >= 300) {
      this.intenseBarrierCount = 1;
    }

    if (this.score >= 450) {
      this.balloonsPerRow = 3;
      this.barrierCount = 2;
    }

    if (this.score < 700 && this.score + value >= 700) {
      this.penaltyBalloons.push("metal");
    }

    if (this.score >= 1000) {
      this.balloonMinVelocity = 70;
      this.wavyActive = true;
    }

    if (this.score >= 1250) {
      this.balloonMinVelocity = 60;
    }
    if (this.score >= 1500) {
    }

    if (this.score >= 2000) {
      this.bossCount = 1;
    }
  }

  if (this.mode === "armored_only") {
    // Armored only mode
    this.balloonMinVelocity = 25;
    this.balloonsPerRow = 1;

    if (this.score >= 80) {
      this.barrierCount = 1;
    }

    if (this.score < 150 && this.score + value >= 150) {
      this.specialBalloons.push("bomb");
    }

    if (this.score >= 250) {
      this.barrierCount = 2;
    }

    if (this.score >= 450) {
      this.balloonsPerRow = 2;
    }

    if (this.score >= 500) {
      this.intenseBarrierCount = 1;
    }

    if (this.score < 650 && this.score + value >= 650) {
      this.specialBalloons.push("target");
      this.specialBalloons.push('ice');
    }

    if (this.score >= 850) {
      this.penaltyBalloons.push("metal");
    }

    if (this.score >= 1000) {
      this.balloonsPerRow = 3;
      this.barrierCount = 2;
    }

    if (this.score >= 1250) {
      this.intenseBarrierCount = 2;
    }

    if (this.score >= 1500) {
      this.bossCount = 1;
      this.balloonsPerRow = 1;
      this.barrierCount = 2;
      this.intenseBarrierCount = 1;
    }

  }
  if (this.mode === "faster_balloons") {
    // Faster balloons mode
    if (this.score >= 100) {
      this.barrierCount = 1;
    }

    if (this.score < 350 && this.score + value >= 350) {
      this.specialBalloons.push("bomb");
      this.balloonsPerRow = 2;
    }
    if (this.score >= 400) {
      this.intenseBarrierCount = 1;
    }

    if (this.score < 650 && this.score + value >= 650) {
      this.penaltyBalloons.push("metal");
    }

    if (this.score < 800 && this.score + value >= 800) {
      this.specialBalloons.push("ice");
    }

    if (this.score >= 850) {
      this.wavyActive = true;
    }

    if (this.score >= 950) {
      this.barrierCount = 3;
    }

    if (this.score >= 1500) {
      this.bossCount = 1;
    }
  }

  if (this.mode === "no_color_mode") {
    this.balloonsPerRow = 4;
    if (this.score >= 200) {
      this.barrierCount = 3;
    }

    if (this.score >= 700) {
      this.barrierCount = 4;
      this.intenseBarrierCount = 2;
    }

    if (this.score < 800 && this.score + value >= 800) {
      this.specialBalloons.push("ice");
    }

    if (this.score >= 1200) {
      this.balloonsPerRow = 6;
    }

    if (this.score >= 1450) {
      this.intenseBarrierCount = 3;
    }

    if (this.score >= 1750) {
      this.bossCount = 1;
    }
  }

  if (this.mode === "freeplay_mode") {
    this.balloonsPerRow = 1;

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

    if (this.score < 450 && this.score + value >= 450) {
      this.specialBalloons.push("bomb");
    }

    if (this.score >= 600) {
      this.barrierCount = 2;
      this.intenseBarrierCount = 0;
    }

    if (this.score >= 750) {
      this.intenseBarrierCount = 1;
    }

    if (this.score < 800 && this.score + value >= 800) {
      this.specialBalloons.push("ice");
    }

    if (this.score >= 900) {
      this.balloonsPerRow = 3;
      this.intenseBarrierCount = 2;
    }

    if (this.score >= 1000) {
      this.specialBalloons.push("target");
    }

    if (this.score >= 1250) {
      this.barrierCount = 2;
    }

    if (this.score >= 1500) {
      this.bossCount = 1;
      this.balloonsPerRow = 2;
    }

    if (this.score >= 1700) {
      this.balloonsPerRow = 3;
    }
    if (this.score >= 2000) {
      this.bossCount = 1;
    }
    if (this.score >= 3300) {
      this.bossCount = 1;
    }
  }
};
