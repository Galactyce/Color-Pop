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
  if (this.difficulty === 'easy') {      
  // Easy mode
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
      
      if (this.score === 0) {
        this.balloonsPerRow = 1
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
      this.balloonsPerRow = 2;
    }

    if (this.score >= 500) {
      this.intenseBarrierCount = 1;
    }

    if (this.score < 650 && this.score + value >= 650) {
      this.specialBalloons.push('homing');
    }

    if (this.score >= 850) {
      this.penaltyBalloons.push('metal');
    }

    if (this.score >= 1000) {
      this.balloonsPerRow = 3;
    }

    if (this.score >= 1250) {
      this.intenseBarrierCount = 2;
    }

    if (this.score >= 1500) {
      this.bossCount = 1
      this.balloonsPerRow = 2;
      this.barrierCount = 2;
      this.intenseBarrierCount = 1
    }

    if (this.score >= 1530) {
      this.bossCount = 0
    }
  }
};