GameWorld.prototype.drawGuides = function () {
  if (!Touch.isTouchDevice) {
  if (this.mode === "tutorial_mode") {
    if (this.score === 0) {
      Canvas.drawText(
        "Click to fire a ball.",
        new Vector2(50, 230),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );

      Canvas.drawText(
        "Try to hit the balloon!",
        new Vector2(50, 260),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );
    }

    if (this.score >= 10 && this.score <= 30) {
      Canvas.drawText(
        "Use keys R G B to change color.",
        new Vector2(50, 230),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );

      Canvas.drawText(
        "Match the colors to pop the balloon!",
        new Vector2(50, 260),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );
    }
    if (this.score === 40) {
      Canvas.drawText(
        "Rainbows give you lives!",
        new Vector2(50, 230),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );
    }
    if (this.score === 50) {
      Canvas.drawText(
        "Black balloons give you bombs.",
        new Vector2(50, 230),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );
    }
    if (this.score === 50) {
      Canvas.drawText(
        "Press 1 to blow it up!",
        new Vector2(50, 260),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );
    }
    if (this.score === 260) {
      Canvas.drawText(
        "Barriers can stop a ball in there tracks...",
        new Vector2(50, 230),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );
    }
    if (this.score === 280) {
      Canvas.drawText(
        "Targets allow you just click",
        new Vector2(50, 230),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );
      Canvas.drawText(
        "the balloons.",
        new Vector2(50, 260),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );
    }

    if (this.score === 300) {
      Canvas.drawText(
        "Getting chilly...",
        new Vector2(50, 230),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );
    }

    if (this.score === 350) {
      Canvas.drawText(
        "Try to get a score of 500 :)",
        new Vector2(50, 230),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );
    }

    if (this.score === 500) {
      Canvas.drawText(
        "The blimp can only be damaged by its",
        new Vector2(50, 430),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );
      Canvas.drawText(
        "weakness color.",
        new Vector2(50, 460),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );
    }
    }
  }
  if (Touch.isTouchDevice) {
  if (this.mode === 'tutorial_mode') {
      if (this.score === 0) {
        Canvas.drawText(
          "Tap to fire a ball.",
          new Vector2(50, 230),
          "black",
          "top",
          "Comic Sans",
          "35px"
        );
  
        Canvas.drawText(
          "Try to hit the balloon!",
          new Vector2(50, 260),
          "black",
          "top",
          "Comic Sans",
          "35px"
        );
      }
  
      if (this.score >= 10 && this.score <= 40) {
        Canvas.drawText(
          "Use the buttons to change color.",
          new Vector2(50, 230),
          "black",
          "top",
          "Comic Sans",
          "35px"
        );
  
        Canvas.drawText(
          "Match the colors to pop the balloon!",
          new Vector2(50, 260),
          "black",
          "top",
          "Comic Sans",
          "35px"
        );
      }
      if (this.score === 40) {
        Canvas.drawText(
          "Rainbows give you lives!",
          new Vector2(50, 230),
          "black",
          "top",
          "Comic Sans",
          "35px"
        );
      }
      if (this.score === 50) {
        Canvas.drawText(
          "Black balloons give you bombs.",
          new Vector2(50, 230),
          "black",
          "top",
          "Comic Sans",
          "35px"
        );
      }
      if (this.score === 50) {
        Canvas.drawText(
          "Tap the bomb icon to blow it up!",
          new Vector2(50, 260),
          "black",
          "top",
          "Comic Sans",
          "35px"
        );
      }
      if (this.score === 260) {
        Canvas.drawText(
          "Barriers can stop a ball in there tracks...",
          new Vector2(50, 230),
          "black",
          "top",
          "Comic Sans",
          "35px"
        );
      }

      if (this.score === 280) {
        Canvas.drawText(
          "Targets allow you to just tap",
          new Vector2(50, 230),
          "black",
          "top",
          "Comic Sans",
          "35px"
        );
        Canvas.drawText(
          "the balloons.",
          new Vector2(50, 260),
          "black",
          "top",
          "Comic Sans",
          "35px"
        );
      }
   
      if (this.score === 300) {
        Canvas.drawText(
          "Getting chilly...",
          new Vector2(50, 230),
          "black",
          "top",
          "Comic Sans",
          "35px"
        );
      }
  
      if (this.score === 350) {
        Canvas.drawText(
          "Try to get a score of 500 :)",
          new Vector2(50, 230),
          "black",
          "top",
          "Comic Sans",
          "35px"
        );
      }
  
      if (this.score === 500) {
        Canvas.drawText(
          "The blimp can only be damaged by its",
          new Vector2(50, 430),
          "black",
          "top",
          "Comic Sans",
          "35px"
        );
        Canvas.drawText(
          "weakness color.",
          new Vector2(50, 460),
          "black",
          "top",
          "Comic Sans",
          "35px"
        );
      }
    }
  }
};
