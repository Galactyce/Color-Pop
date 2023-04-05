function Touch() {
  this.touches = [];
  this.touchPresses = [];
  this.touching = false;
  this.touchingRect = false;
}

Touch.prototype.checkInputs = function () {
  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchend', handleTouchEnd, false);
  document.addEventListener('touchcancel', handleTouchEnd, false);
  document.addEventListener('touchleave', handleTouchEnd, false);
  document.addEventListener('touchmove', handleTouchMove, false);
};

Object.defineProperty(Touch.prototype, 'isTouchDevice', {
  get: function() {
    return ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0)
  }
})

Touch.prototype.getTouchIndexById = function(id) {
  for (var i=0; i<this.touches.length; i++) {
    if (this.touches[i].identifier === id) return i;
  }
  return -1;
}

Touch.prototype.reset = function() {
  for (var i=0; i<this.touchPresses.length; i++) {
    this.touchPresses.splice(i, 1)
  }
  this.touchingRect = false;

}

Touch.prototype.getPosition = function(index) {
  var canvasScale = Canvas.scale;
  var canvasOffset = Canvas.offset;
  var mx = (this.touches[index].pageX - canvasOffset.x) / canvasScale.x;
  var my = (this.touches[index].pageY - canvasOffset.y) / canvasScale.y;
  return new Vector2(mx, my);
}

Touch.prototype.containsTouch = function(rect) {
  for (var i=0; i<this.touches.length; i++) {
    if (rect.contains(this.getPosition(i))) {
    this.touchingRect = true
    return true;
  }
}
  return false;
}

Touch.prototype.containsTouchPress = function(rect) {
    for (var i=0; i<this.touchPresses.length; i++) {
    if (rect.contains(this.getPosition(i)) && this.touches[i]) {
      alert(this.getPosition(i));
      this.touchingRect = true
      return true
    };
    return false;
}

function handleTouchStart(evt) {
  evt.preventDefault();
  this.touching = true;
  var touches = evt.changedTouches;
  for (var i=0; i<touches.length; i++) {
    Touch.touches.push(touches[i]);
    Touch.touchPresses.push(touches[i])
  }
}

function handleTouchEnd(evt) {
  evt.preventDefault();
  this.touching = false
  var touches = evt.changedTouches;
  for (var i=0; i<touches.length; i++) {

    var id=Touch.getTouchIndexById(touches[i].identifier);
    Touch.touches.splice(id, 1);
    Touch.touchPresses.splice(id, 1);
  }
}

function handleTouchMove() {
  evt.preventDefault()
}

var Touch = new Touch()
