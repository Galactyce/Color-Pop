
            handleMouseMove = function(evt) {
              Mouse.position.x = evt.clientX;
              Mouse.position.y = evt.clientY;
          }

          handleMouseDown = function(evt) {
              if (evt.which === 1) {
                if (!Mouse.leftDown)
                  Mouse.leftPressed = true
                  Mouse.leftDown = true;
              }
          }

          handleMouseUp = function(evt) {
              if (evt.which === 1) 
                  Mouse.leftDown = false;
          } 



          function Mouse() {
              this.position = new Vector2(0, 0);
              this.leftDown = false;
              this.leftPressed = false;
          };

          Mouse.prototype.containsMousePress = function(rect) {
              return this.leftPressed && rect.contains(this.position)
          }

     Mouse.prototype.checkInputs = function() {
              document.onmousemove = handleMouseMove;
              document.onmousedown = handleMouseDown;
              document.onmouseup = handleMouseUp;
     }
          Mouse.prototype.reset = function() {
              Mouse.leftPressed = false
          }

          var Mouse = new Mouse();