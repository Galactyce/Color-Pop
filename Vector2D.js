function Vector2(x, y) {
  this.x = typeof x !== undefined ? x : 0;
  this.y = typeof y !== undefined ? y : 0;
}

Vector2.prototype.zero = function() {
    return new Vector2(0, 0)
}

Vector2.prototype.addTo = function(v) {
   if (v.constructor === Vector2) {
       this.x += v.x;
       this.y += v.y;
   } 
   else if (v.constructor === Number) {
       this.x += v;
       this.y += v;
   }
   return this;
}

Vector2.prototype.add = function(v) {
    var result = this.copy();
    return result.addTo(v)
}

Vector2.prototype.subtractBy = function(v) {
   if (v.constructor === Vector2) {
       this.x -= v.x;
       this.y -= v.y;
   }
   else if (v.constructor === Number) {
       this.x -= v;
       this.y -= v;
   }
   return this;
}

Vector2.prototype.subtract = function(v) {
   var result = this.copy();
   return result.subtractBy(v)
}

Vector2.prototype.multiplyBy = function(v) {
   if (v.constructor === Vector2) {
       this.x *= v.x;
       this.y *= v.y;
   }
   else if (v.constructor === Number) {
       this.x *= v;
       this.y *= v;
   }
   return this;
}

Vector2.prototype.multiply = function(v) {
   var result = this.copy();
   return result.multiplyBy(v)
}

Vector2.prototype.copy = function(v) {
   return new Vector2(this.x, this.y);
}

