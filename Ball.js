
            function Ball() {
              this.origin = new Vector2(10, 10);
              this.velocity = new Vector2(0, 0)
              this.rotation = 0;
              this.active = true
              this.reset();
              this.currentColor = Game.gameWorld.cannon.currentColor
          }

         

         

          Ball.prototype.reset = function() {
            this.position = (Game.gameWorld.cannon.ballPosition().subtractBy(this.origin));
            this.velocity = Mouse.position.subtract(this.position).multiplyBy(0.8)

          }

          Ball.prototype.draw = function() {
            if (this.active)
            Canvas.drawImage(sprites.balls[this.currentColor].normal, this.position, 0, this.origin)
          }

          Ball.prototype.update = function(delta) {
            if (this.active === false) return
            this.position.addTo(this.velocity.multiply(delta))
              
              

                  this.velocity.x *= 0.99;
                  this.velocity.y += 6;            
                  this.position.addTo(this.velocity.multiply(delta))
            

              
              if (Game.gameWorld.isOutsideWorld(this.position)) {
                this.active = false
                return
              }
          }

          Ball.prototype.handleInput = function() {
             
          }
