var Keyboard = {
  keydown: -1,
  keyPressed: -1,
};

Keyboard.reset = function () {
  this.keyPressed = -1;
};

handleKeyDown = function (evt) {
  if (Keyboard.keyDown !== evt.keyCode) Keyboard.keyPressed = evt.keyCode;
  Keyboard.keyDown = evt.keyCode;
};

handleKeyUp = function () {
  Keyboard.keyDown = -1;
};

document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;
