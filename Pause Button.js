
            function PauseButton() {
              this.position = new Vector2(1210, 20);
              this.rect = new Rectangle(this.position.x, this.position.y, 80, 80);


              
              this.origin = new Vector2(0, 0)
              this.active = false;

          }

          PauseButton.prototype.draw = function() {
            //   if (!Game.paused)
            //   Canvas.drawImage(sprites.extras['pause_button'].normal, this.position, 0, this.origin);
            //   if (Game.paused)
            //   Canvas.drawImage(sprites.extras['play_button'].normal, this.position, 0, this.origin)
            //   this.rect.draw()
          }

          PauseButton.prototype.update = function() {
              if (Keyboard.keyPressed === 80) {
                      Game.paused = !Game.paused
                      if (Game.paused) 
                      sounds.backgroundMusicBasic.volume = 0;
                      if (!Game.paused)
                      sounds.backgroundMusicBasic.volume = 0.6;
                    }
          }