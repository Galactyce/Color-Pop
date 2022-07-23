function ModeDescription(mode) {
  this.mode = mode;
  this.sprite = sprites.extras['simple_button'].normal;
  this.position = new Vector2(650, 570);
}

ModeDescription.prototype.draw = function() {
  this.origin = new Vector2(this.sprite.width / 2, this.sprite.height / 2);

  Canvas.drawImage(this.sprite, this.position, 0, this.origin, 0.9);
  if (this.mode === 'easy') {
 

  Canvas.drawText(
    'Slower balloons, less barriers,',
    new Vector2(this.position.x - 150, this.position.y - 60),
    "black",
    "top",
    "Comic Sans",
    "25px"
  );
  Canvas.drawText(
  'less rounds, beginner freindly :)',
  new Vector2(this.position.x - 150, this.position.y - 20),
  "black",
  "top",
  "Comic Sans",
  "23px"
);
  }
  if (this.mode === 'intermediate') {
  Canvas.drawText(
    'Slightly more balloons, barriers,',
    new Vector2(this.position.x - 160, this.position.y - 60),
    "black",
    "top",
    "Comic Sans",
    "25px"
  );
  Canvas.drawText(
  'and rounds.',
  new Vector2(this.position.x - 150, this.position.y - 20),
  "black",
  "top",
  "Comic Sans",
  "23px"
);
  }
  if (this.mode === 'hard') {
    Canvas.drawText(
      'Lots of balloons, barriers,',
      new Vector2(this.position.x - 160, this.position.y - 60),
      "black",
      "top",
      "Comic Sans",
      "25px"
    );
    Canvas.drawText(
    'and rounds. Boss has more HP.',
    new Vector2(this.position.x - 150, this.position.y - 20),
    "black",
    "top",
    "Comic Sans",
    "23px"
  );
  Canvas.drawText(
    'For more of a skilled player',
    new Vector2(this.position.x - 150, this.position.y + 20),
    "black",
    "top",
    "Comic Sans",
    "23px"
  );
    }
    if (this.mode === 'apex') {
      Canvas.drawText(
        'Tons of balloons, barriers,',
        new Vector2(this.position.x - 160, this.position.y - 60),
        "black",
        "top",
        "Comic Sans",
        "25px"
      );
      Canvas.drawText(
      'and rounds.',
      new Vector2(this.position.x - 100, this.position.y - 20),
      "black",
      "top",
      "Comic Sans",
      "23px"
    );
    Canvas.drawText(
      'The true test of skill',
      new Vector2(this.position.x - 130, this.position.y + 20),
      "black",
      "top",
      "Comic Sans",
      "23px"
    );
    }
    if (this.mode === 'armored_only') {
      Canvas.drawText(
        'All balloons have armor,',
        new Vector2(this.position.x - 160, this.position.y - 40),
        "black",
        "top",
        "Comic Sans",
        "25px"
      );
      Canvas.drawText(
        'needing more hits to pop.',
        new Vector2(this.position.x - 150, this.position.y),
        "black",
        "top",
        "Comic Sans",
        "25px"
      );
    }
    if (this.mode === 'freeplay_mode') {
      Canvas.drawText(
        'Play till you lose!',
        new Vector2(this.position.x - 140, this.position.y - 20),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );
    }
    if (this.mode === 'no_color_mode') {
      Canvas.drawText(
        'All balloons are white,',
        new Vector2(this.position.x - 160, this.position.y - 60),
        "black",
        "top",
        "Comic Sans",
        "25px"
      );
      Canvas.drawText(
        'but way more balloons and',
        new Vector2(this.position.x - 150, this.position.y - 20),
        "black",
        "top",
        "Comic Sans",
        "23px"
      );
      Canvas.drawText(
        'barriers.',
        new Vector2(this.position.x - 130, this.position.y + 20),
        "black",
        "top",
        "Comic Sans",
        "23px"
      );
    }
    if (this.mode === 'faster_balloons') {
      Canvas.drawText(
        'Balloons are 2x speed!',
        new Vector2(this.position.x - 160, this.position.y - 20),
        "black",
        "top",
        "Comic Sans",
        "35px"
      );
    }
}