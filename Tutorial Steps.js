<<<<<<< HEAD
GameWorld.prototype.tutorialStep = function () {
  if (this.mode === 'tutorial_mode') {
  this.balloonSpawning = false;
  this.barrierSpawning = false;
  if (this.score === 0) {
    var balloon = new Balloon(900, 2, 1);
    balloon.currentColor = "white";
    this.balloons.push(balloon);
  }
  if (this.score === 10) {
    
    var balloon = new Balloon(900, 2, 1);
    balloon.currentColor = "green";
    this.balloons.push(balloon);
  }
  if (this.score === 20) {
    var balloon = new Balloon(900, 2, 1);
    balloon.currentColor = "blue";
    this.balloons.push(balloon);
  }
  if (this.score === 30) {
    var balloon = new Balloon(900, 2, 1);
    balloon.currentColor = "red";
    this.balloons.push(balloon);
  }
  if (this.score === 40) {
    var balloon = new Balloon(900, 2, 1);
    balloon.currentColor = "rainbow";
    this.balloons.push(balloon);
  }
  if (this.score === 50) {
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


  if (this.score === 260) {
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
  if (this.score === 280) {
    var balloon = new Balloon(900, 1, 1);
    balloon.currentColor = "homing";
    this.balloons.push(balloon);
    balloon = new Balloon(900, 2, 1);
    balloon.currentColor = "green";
    this.balloons.push(balloon);
  }
  if (this.score === 300) {
    var balloon = new Balloon(700, 1, 1);
    balloon.currentColor = "ice";
    this.balloons.push(balloon);

    for (var i = 0; i < 6; i++) {
      var colors = new Array("red", "green", "blue");
      var rand1 = Math.floor(Math.random() * 3);
      var rand2 = Math.floor(Math.random() * 3);
      var balloon = new Balloon(this.rowPositions[rand1], rand1, 1);
      balloon.currentColor = colors[rand2];
      this.balloons.push(balloon);
    }
  }
  

  if (this.score === 370) {
    this.rows = new Array(0, 0, 0);
  }

  if (this.score >= 370) {
    var balloon = null;
    this.moving = true;
    this.balloonSpawning = true;
    this.balloonsPerRow = 1;
  }
  if (this.score >= 500) {
    this.bossCount = 1;

  }
}
};
=======
GameWorld.prototype.tutorialStep = function () {
  if (this.mode === 'tutorial_mode') {
  this.balloonSpawning = false;
  this.barrierSpawning = false;
  if (this.score === 0) {
    var balloon = new Balloon(900, 2, 1);
    balloon.currentColor = "white";
    this.balloons.push(balloon);
  }
  if (this.score === 10) {
    
    var balloon = new Balloon(900, 2, 1);
    balloon.currentColor = "green";
    this.balloons.push(balloon);
  }
  if (this.score === 20) {
    var balloon = new Balloon(900, 2, 1);
    balloon.currentColor = "blue";
    this.balloons.push(balloon);
  }
  if (this.score === 30) {
    var balloon = new Balloon(900, 2, 1);
    balloon.currentColor = "red";
    this.balloons.push(balloon);
  }
  if (this.score === 40) {
    var balloon = new Balloon(900, 2, 1);
    balloon.currentColor = "rainbow";
    this.balloons.push(balloon);
  }
  if (this.score === 50) {
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


  if (this.score === 260) {
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
  if (this.score === 280) {
    var balloon = new Balloon(900, 1, 1);
    balloon.currentColor = "homing";
    this.balloons.push(balloon);
    balloon = new Balloon(900, 2, 1);
    balloon.currentColor = "green";
    this.balloons.push(balloon);
  }
  if (this.score === 300) {
    var balloon = new Balloon(700, 1, 1);
    balloon.currentColor = "ice";
    this.balloons.push(balloon);

    for (var i = 0; i < 6; i++) {
      var colors = new Array("red", "green", "blue");
      var rand1 = Math.floor(Math.random() * 3);
      var rand2 = Math.floor(Math.random() * 3);
      var balloon = new Balloon(this.rowPositions[rand1], rand1, 1);
      balloon.currentColor = colors[rand2];
      this.balloons.push(balloon);
    }
  }
  

  if (this.score === 370) {
    this.rows = new Array(0, 0, 0);
  }

  if (this.score >= 370) {
    var balloon = null;
    this.moving = true;
    this.balloonSpawning = true;
    this.balloonsPerRow = 1;
  }
  if (this.score >= 500) {
    this.bossCount = 1;

  }
}
};
>>>>>>> 863a993b0347c4cc94ad9a20ce065d9d497c6913
