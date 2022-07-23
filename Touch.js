function Touch() {
  this.touches = [];
  this.touchPresses = [];
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
    return ('ontouchstart' in window) || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  }
})

Touch.prototype.getTouchIndexById = function(id) {
  for (var i=0; i<this.touches.length; i++) {
    if (this.touches[i].identifier === id) return i;
  }
  return -1;
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
    if (rect.contains(this.getPosition(i))) return true;
  }
  return false;
}

function handleTouchStart(evt) {
  evt.preventDefault();
  var touches = evt.changedTouches;
  for (var i=0; i<touches.length; i++) {
    Touch.touches.push(touches[i]);
    Touch.touchPresses.push(true)
  }
}

function handleTouchEnd(evt) {
  evt.preventDefault();
  var touches = evt.changedTouches;
  for (var i=0; i<touches.length; i++) {
    var id=Touch.getTouchIndexById(touches[i].identifier);
    Touch.touches.splice(id, 1);
    Touch.touchPresses.splice(id, 1);
  }
}

function handleTouchMove() {

}

