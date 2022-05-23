painterGameWorld.prototype.drawGuides = function() {
if (this.mode === 'tutorial') {
   if (this.score === 0) {
    Canvas.drawText(
      "Click to fire a ball.",
      new Vector2(50, 330),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );

      Canvas.drawText(
        "Try to hit the balloon!",
        new Vector2(50, 360),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );
  }

  if (this.score >= 10 && this.score <= 30) {

    Canvas.drawText(
      "Use keys R G B to change color.",
      new Vector2(50, 330),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );

      Canvas.drawText(
        "Match the colors to pop the balloon!",
        new Vector2(50, 360),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );
  }
  if (this.score === 40) {

    Canvas.drawText(
      "Rainbows give you lives!",
      new Vector2(50, 330),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
  }
  if (this.score === 50) {

    Canvas.drawText(
      "Black balloons are bombs.",
      new Vector2(50, 330),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
  }
  if (this.score === 50) {
    Canvas.drawText(
      "Hit them to blow up the screen!",
      new Vector2(50, 360),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
  }
  if (this.score === 260) {

    Canvas.drawText(
      "Barriers can stop a ball in there tracks...",
      new Vector2(50, 330),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
  }
  if (this.score === 280) {
    Canvas.drawText(
      "Homing balloons make balls follow",
      new Vector2(50, 330),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
    Canvas.drawText(
      "your cursor.",
      new Vector2(50, 360),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
  }

  if (this.score === 290) {
    Canvas.drawText(
      "Getting chilly...",
      new Vector2(50, 330),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
    
  }

  if (this.score === 360) {

    Canvas.drawText(
      "Try to get a score of 500 :)",
      new Vector2(50, 330),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
  }
}
}