function Rectangle(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
}

Object.defineProperty(Rectangle.prototype, "left", {
  get: function() {
      return this.x;
  }
}); 

Object.defineProperty(Rectangle.prototype, "right", {
  get: function() {
      return this.x + this.width;
  }
});

Object.defineProperty(Rectangle.prototype, "top", {
  get: function() {
      return this.y;
  }
});

Rectangle.prototype.contains = function(v) {
  return (v.x >= this.left && v.x <= this.right &&
          v.y >= this.top && v.y <= this.bottom
  );
}

Rectangle.prototype.draw = function() {
  Canvas.drawRectangle(this.x, this.y, this.width, this.height)
}

Object.defineProperty(Rectangle.prototype, "bottom", {
  get: function() {
      return this.y + this.height;
  }
})