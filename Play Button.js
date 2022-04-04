
            function PlayButton(xPosition, difficulty) {
              this.position = new Vector2(xPosition, 250);
              this.difficulty = difficulty
              this.origin = new Vector2(0, 0);
              this.clicked = false;
              this.rect = new Rectangle(this.position.x, this.position.y, 350, 300);

          }

          PlayButton.prototype.update = function() {
              
              if (this.rect.contains(Mouse.position) && Mouse.leftPressed && this.clicked === false) {
              Game.gameWorld.started = true;
              sounds.playSound.volume = 0.2
              sounds.cannonShot.volume = 0.4
              sounds.playSound.play()
              sounds.backgroundMusicBasic.volume = 0.1;
              
              sounds.backgroundMusicBasic.play()
              this.clicked = true
              }
          }

          PlayButton.prototype.draw = function() {
              if (!Game.gameWorld.started) 
              if (this.difficulty === 'normal') {
              Canvas.drawImage(sprites.extras['play_button'].normal, this.position, 0, this.origin)
              }
          }