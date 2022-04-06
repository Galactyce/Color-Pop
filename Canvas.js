var Canvas = new Canvas_Singleton();

Canvas_Singleton.prototype.drawText = function (text, position, color, textAlign, fontname, fontsize) {
this.context.save();
  this.context.translate(position.x, position.y);
  this.context.textBaseline = 'top';
  this.context.font = fontsize + " " + fontname;
  this.context.fillStyle = color.toString();
   this.context.textAlign = textAlign;
 this.context.fillText(text, 0, 0);
    this.context.restore();
};


function Canvas_Singleton() {
  this.canvas = undefined;
  this.div = undefined;
  this.context = undefined;
};

Canvas_Singleton.prototype.init = function() {
  this.canvas = document.getElementById("mycanvas");
  this.div = document.getElementById("gameArea")
  this.context = this.canvas.getContext("2d");

  window.onresize = Canvas.resize();
}

Canvas_Singleton.prototype.resize = function() {

}

Canvas_Singleton.prototype.drawImage = function(sprite, position, rotation, origin, alpha) {

  this.context.save();
  this.context.globalAlpha = alpha;

  this.context.translate(position.x, position.y);
  this.context.rotate(rotation);
  this.context.drawImage(sprite, 0, 0, sprite.width, sprite.height,
   -origin.x, -origin.y, sprite.width, sprite.height);
  this.context.restore();

}

Canvas_Singleton.prototype.clear = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
