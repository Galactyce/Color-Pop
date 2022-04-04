
            function PlayButton(xPosition, yPosition, difficulty) {
              this.position = new Vector2(xPosition, yPosition);
              this.origin = new Vector2(0, 0);
              this.difficulty = difficulty
              this.clicked = false;
              this.rect = new Rectangle(0, 0, 0, 0);
              ;
          }

          PlayButton.prototype.update = function() {
              
              if (this.rect.contains(Mouse.position) && Mouse.leftPressed && this.clicked === false) {
                this.clicked = true
              Game.gameWorld.started = true;
              sounds.playSound.volume = 0.2
              sounds.cannonShot.volume = 0.4
              sounds.playSound.play()
              sounds.backgroundMusicBasic.volume = 0.1;
              
              sounds.backgroundMusicBasic.play()
              Game.gameWorld.difficulty = this.difficulty
              this.rect = null;
              }
          }

          PlayButton.prototype.draw = function() {
        
              if (!Game.gameWorld.started && this.clicked === false) {
              if (this.difficulty === 'normal') {
                Canvas.drawImage(sprites.extras['play_button'].normal, this.position, 0, this.origin)
                this.rect = new Rectangle(this.position.x, this.position.y, sprites.extras["play_button"].normal.width, sprites.extras["play_button"].normal.height);

            }
              
              if (this.difficulty === 'easy') {
                Canvas.drawImage(sprites.extras['easy_button'].normal, this.position, 0, this.origin)
                Canvas.drawText("Easy Mode", new Vector2(this.position.x + 50, this.position.y + 60), "black", "top", "Comic Sans", "70px");
                this.rect = new Rectangle(this.position.x, this.position.y, sprites.extras["easy_button"].normal.width, sprites.extras["easy_button"].normal.height);
              }

              if (this.difficulty === 'hard') {
                Canvas.drawImage(sprites.extras['hard_button'].normal, this.position, 0, this.origin)
                Canvas.drawText("Hard Mode", new Vector2(this.position.x + 50, this.position.y + 60), "black", "top", "Comic Sans", "70px");
                this.rect = new Rectangle(this.position.x, this.position.y, sprites.extras["hard_button"].normal.width, sprites.extras["hard_button"].normal.height); 
              }

            }
          }