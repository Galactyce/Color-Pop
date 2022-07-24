
function ControlPanel() {
  var canvasScale = Canvas.scale;
  var canvasOffset = Canvas.offset;
  var mx = (50) * canvasScale.x;
  var my = (300) * canvasScale.y;

  this.rect = new Rectangle(mx, my, 300 * canvasScale.x, 240 * canvasScale.y)
}

ControlPanel.prototype.draw = function() {
  var canvasScale = Canvas.scale;
  var canvasOffset = Canvas.offset;
  var mx = (50 + canvasOffset.x);
  var my = (300 + canvasOffset.y);
  this.rect = new Rectangle(mx, my, 300 * canvasScale.x, 240 * canvasScale.y)

  Canvas.context.fillStyle = 'red';
  Canvas.context.fillRect(mx, my, 300 * canvasScale.x, 150 * canvasScale.y)
}