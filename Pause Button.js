
            function PauseButton() {
              this.position = new Vector2(1210, 20);
              this.rect = new Rectangle(this.position.x, this.position.y, 80, 80);

              this.origin = new Vector2(0, 0)
              this.active = false;

          }

          PauseButton.prototype.draw = function() {
              Canvas.drawImage(sprites.extras['pause_button'].normal, this.position, 0, this.origin);
              
          }

          PauseButton.prototype.update = function() {
              if (this.rect.contains(Mouse.position) && Mouse.leftPressed) Game.paused = !Game.paused
          }