<<<<<<< HEAD
function Canvas_Singleton() {
  this.canvas = null;
  this.context = null;
  this.canvasOffset = new Vector2(0, 0);
}

Object.defineProperty(Canvas_Singleton.prototype, "offset", {
  get: function () {
    return this.canvasOffset;
  },
});

Object.defineProperty(Canvas_Singleton.prototype, "scale", {
  get: function () {
    return new Vector2(
      this.canvas.width / Game.size.x,
      this.canvas.height / Game.size.y
    );
  },
});

Canvas_Singleton.prototype.init = function () {
  this.canvas = document.getElementById("mycanvas");
  this._div = document.getElementById("gameArea");
  this.context = this.canvas.getContext("2d");

  window.onresize = Canvas_Singleton.prototype.resize;
  this.resize();
};

Canvas_Singleton.prototype.clear = function () {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Canvas_Singleton.prototype.resize = function () {
  var gameCanvas = Canvas.canvas;
  var gameArea = Canvas._div;
  var widthToHeight = Game.size.x / Game.size.y;
  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight;
  var newWidthToHeight = newWidth / newHeight;

  if (newWidthToHeight > widthToHeight) {
    newWidth = newHeight * widthToHeight;
  } else {
    newHeight = newWidth / widthToHeight;
  }
  gameArea.style.width = newWidth + "px";
  gameArea.style.height = newHeight + "px";

  gameArea.style.marginTop = (window.innerHeight - newHeight) / 2 + "px";
  gameArea.style.marginLeft = (window.innerWidth - newWidth) / 2 + "px";
  gameArea.style.marginBottom = (window.innerHeight - newHeight) / 2 + "px";
  gameArea.style.marginRight = (window.innerWidth - newWidth) / 2 + "px";

  gameCanvas.width = newWidth;
  gameCanvas.height = newHeight;

  var offset = new Vector2(0, 0);
  if (gameCanvas.offsetParent) {
    do {
      offset.x += gameCanvas.offsetLeft;
      offset.y += gameCanvas.offsetTop;
    } while ((gameCanvas = gameCanvas.offsetParent));
  }
  Canvas.canvasOffset = offset;
};

Canvas_Singleton.prototype.drawImage = function (
  sprite,
  position,
  rotation,
  origin,
  scale
) {
  var canvasScale = this.scale;

  position = typeof position !== "undefined" ? position : new Vector2(0, 0);
  rotation = typeof rotation !== "undefined" ? rotation : 0;
  scale = typeof scale !== "undefined" ? scale : 1;
  origin = typeof origin !== "undefined" ? origin : new Vector2(0, 0);

  this.context.save();
  this.context.scale(canvasScale.x, canvasScale.y);
  this.context.translate(position.x, position.y);
  this.context.rotate(rotation);
  this.context.drawImage(
    sprite,
    0,
    0,
    sprite.width,
    sprite.height,
    -origin.x * scale,
    -origin.y * scale,
    sprite.width * scale,
    sprite.height * scale
  );
  this.context.restore();
};

Canvas_Singleton.prototype.drawText = function (
  text,
  position,
  color,
  textAlign,
  fontname,
  fontsize
) {
  var canvasScale = this.scale;

  position = typeof position !== "undefined" ? position : new Vector2(0, 0);
  color = typeof color !== "undefined" ? color : Color.black;
  textAlign = typeof textAlign !== "undefined" ? textAlign : "top";
  fontname = typeof fontname !== "undefined" ? fontname : "Courier New";
  fontsize = typeof fontsize !== "undefined" ? fontsize : "20px";

  this.context.save();
  this.context.scale(canvasScale.x, canvasScale.y);
  this.context.translate(position.x, position.y);
  this.context.textBaseline = "top";
  this.context.font = fontsize + " " + fontname;
  this.context.fillStyle = color.toString();
  this.context.textAlign = textAlign;
  this.context.fillText(text, 0, 0);
  this.context.restore();
};

var Canvas = new Canvas_Singleton();
=======
function Canvas_Singleton() {
  this.canvas = null;
  this.context = null;
  this.canvasOffset = new Vector2(0, 0);
}

Object.defineProperty(Canvas_Singleton.prototype, "offset", {
  get: function () {
    return this.canvasOffset;
  },
});

Object.defineProperty(Canvas_Singleton.prototype, "scale", {
  get: function () {
    return new Vector2(
      this.canvas.width / Game.size.x,
      this.canvas.height / Game.size.y
    );
  },
});

Canvas_Singleton.prototype.init = function () {
  this.canvas = document.getElementById("mycanvas");
  this._div = document.getElementById("gameArea");
  this.context = this.canvas.getContext("2d");

  window.onresize = Canvas_Singleton.prototype.resize;
  this.resize();
};

Canvas_Singleton.prototype.clear = function () {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Canvas_Singleton.prototype.resize = function () {
  var gameCanvas = Canvas.canvas;
  var gameArea = Canvas._div;
  var widthToHeight = Game.size.x / Game.size.y;
  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight;
  var newWidthToHeight = newWidth / newHeight;

  if (newWidthToHeight > widthToHeight) {
    newWidth = newHeight * widthToHeight;
  } else {
    newHeight = newWidth / widthToHeight;
  }
  gameArea.style.width = newWidth + "px";
  gameArea.style.height = newHeight + "px";

  gameArea.style.marginTop = (window.innerHeight - newHeight) / 2 + "px";
  gameArea.style.marginLeft = (window.innerWidth - newWidth) / 2 + "px";
  gameArea.style.marginBottom = (window.innerHeight - newHeight) / 2 + "px";
  gameArea.style.marginRight = (window.innerWidth - newWidth) / 2 + "px";

  gameCanvas.width = newWidth;
  gameCanvas.height = newHeight;

  var offset = new Vector2(0, 0);
  if (gameCanvas.offsetParent) {
    do {
      offset.x += gameCanvas.offsetLeft;
      offset.y += gameCanvas.offsetTop;
    } while ((gameCanvas = gameCanvas.offsetParent));
  }
  Canvas.canvasOffset = offset;
};

Canvas_Singleton.prototype.drawImage = function (
  sprite,
  position,
  rotation,
  origin,
  scale
) {
  var canvasScale = this.scale;

  position = typeof position !== "undefined" ? position : new Vector2(0, 0);
  rotation = typeof rotation !== "undefined" ? rotation : 0;
  scale = typeof scale !== "undefined" ? scale : 1;
  origin = typeof origin !== "undefined" ? origin : new Vector2(0, 0);

  this.context.save();
  this.context.scale(canvasScale.x, canvasScale.y);
  this.context.translate(position.x, position.y);
  this.context.rotate(rotation);
  this.context.drawImage(
    sprite,
    0,
    0,
    sprite.width,
    sprite.height,
    -origin.x * scale,
    -origin.y * scale,
    sprite.width * scale,
    sprite.height * scale
  );
  this.context.restore();
};

Canvas_Singleton.prototype.drawText = function (
  text,
  position,
  color,
  textAlign,
  fontname,
  fontsize
) {
  var canvasScale = this.scale;

  position = typeof position !== "undefined" ? position : new Vector2(0, 0);
  color = typeof color !== "undefined" ? color : Color.black;
  textAlign = typeof textAlign !== "undefined" ? textAlign : "top";
  fontname = typeof fontname !== "undefined" ? fontname : "Courier New";
  fontsize = typeof fontsize !== "undefined" ? fontsize : "20px";

  this.context.save();
  this.context.scale(canvasScale.x, canvasScale.y);
  this.context.translate(position.x, position.y);
  this.context.textBaseline = "top";
  this.context.font = fontsize + " " + fontname;
  this.context.fillStyle = color.toString();
  this.context.textAlign = textAlign;
  this.context.fillText(text, 0, 0);
  this.context.restore();
};

var Canvas = new Canvas_Singleton();
>>>>>>> 863a993b0347c4cc94ad9a20ce065d9d497c6913
