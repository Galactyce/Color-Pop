GameWorld.prototype.tutorialStep = function (value) {
  if (this.mode === "tutorial_mode") {
    this.balloonSpawning = false;
    this.barrierSpawning = false;
    if (this.score === 0) {
      var balloon = new Balloon(900, 2, 1);
      balloon.currentColor = "white";
      this.balloons.push(balloon);
    }
    else if (this.score === 10) {
      var balloon = new Balloon(900, 2, 1);
      balloon.currentColor = "green";
      this.balloons.push(balloon);
    }
    else if (this.score === 20) {
      var balloon = new Balloon(900, 2, 1);
      balloon.currentColor = "blue";
      this.balloons.push(balloon);
    }
    else if (this.score === 30) {
      var balloon = new Balloon(900, 2, 1);
      balloon.currentColor = "red";
      this.balloons.push(balloon);
    }
    else if (this.score === 40) {
      var balloon = new Balloon(900, 2, 1);
      balloon.currentColor = "rainbow";
      this.balloons.push(balloon);
    }
    else if (this.score === 50) {
      for (var i = 0; i < 19; i++) {
        var colors = new Array("red", "green", "blue");
        var rand1 = Math.floor(Math.random() * 3);
        var rand2 = Math.floor(Math.random() * 3);
        var balloon = new Balloon(this.rowPositions[rand1], rand1, 1);
        balloon.currentColor = colors[rand2];
        this.balloons.push(balloon);
      }
      var balloon = new Balloon(this.rowPositions[rand1], rand1, 1);
      balloon.currentColor = colors[rand2];
      this.balloons.push(balloon);
      var balloon = new Balloon(700, 1, 1);
      balloon.currentColor = "bomb";
      this.balloons.push(balloon);
    }

    else if (this.score === 260) {
      var barrier = new Barrier();
      barrier.position = new Vector2(700, -110);
      barrier.speed = 1.5;
      this.barriers.push(barrier);
      var balloon = new Balloon(900, 1, 1);
      balloon.currentColor = "red";
      this.balloons.push(balloon);
      balloon = new Balloon(1100, 1, 1);
      balloon.currentColor = "green";
      this.balloons.push(balloon);
    }
    else if (this.score === 280) {
      var balloon = new Balloon(900, 1, 1);
      balloon.currentColor = "target";
      this.balloons.push(balloon);
      balloon = new Balloon(900, 2, 1);
      balloon.currentColor = "green";
      this.balloons.push(balloon);
    }
    else if (this.score === 300) {
      var balloon = new Balloon(700, 1, 1);
      balloon.currentColor = "ice";
      this.balloons.push(balloon);

      for (var i = 0; i < 4; i++) {
        var colors = new Array("red", "green", "blue");
        var rand1 = Math.floor(Math.random() * 3);
        var rand2 = Math.floor(Math.random() * 3);
        var balloon = new Balloon(this.rowPositions[rand1], rand1, 1);
        balloon.currentColor = colors[rand2];
        this.balloons.push(balloon);
      }
      
    }

    else if (this.score === 340) {
      this.rows = new Array(0, 0, 0)

    }

    else if (this.score > 340 && this.score <= 500) {
      this.balloonsPerRow = 1;
      this.balloonSpawning = true;
    }

    else if (this.score >= 520) {
      for (var i=0;i<this.balloons.length; i++) {
        this.balloons[i] = null
      }
      this.balloons = this.balloons.filter((a) => a)
      this.balloonSpawning = false;
      this.bossCount = 1;
    }
  }
};
