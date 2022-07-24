
function ControlPanel() {
  var canvasScale = Canvas.scale;
  var canvasOffset = Canvas.offset;
  var mx = (200) * canvasScale.x;
  var my = (450) * canvasScale.y;

  this.rect = new Rectangle(mx, my, 300 * canvasScale.x, 240 * canvasScale.y)
}

ControlPanel.prototype.draw = function() {
  var canvasScale = Canvas.scale;
  var canvasOffset = Canvas.offset;
  var mx = (200 - canvasOffset.x);
  var my = (450 - canvasOffset.y);
  this.rect = new Rectangle(mx, my, 500 * canvasScale.x, 340 * canvasScale.y)

  Canvas.context.fillStyle = 'red';
  Canvas.context.fillRect(mx, my, 300 * canvasScale.x, 150 * canvasScale.y)
}