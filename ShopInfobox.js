function ShopInfoBox(item) {
  this.size = new Vector2(0, 0)
  this.item = item;
  this.position = new Vector2(500, 600)
  this.reset();
}

ShopInfoBox.prototype.draw = function() {
  if (this.item === 'double_ball_upgrade') {;  
   Canvas.drawImage(sprites.extras['shop_info_bar'].normal, this.position, 0, new Vector2(0, 0), 1.3)
    Canvas.drawText(
      'Cannon shoots two',
      new Vector2(this.position.x + 20, this.position.y + 10),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
    Canvas.drawText(
      'balls at once!',
      new Vector2(this.position.x + 40, this.position.y + 50),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
    Canvas.drawText(
      '4',
      new Vector2(this.position.x + 310, this.position.y + 30),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
    Canvas.drawImage(
    sprites.extras['coin'].normal, 
    new Vector2(this.position.x + 340, this.position.y + 20),
    )
  }
  if (this.item === 'extra_slot_upgrade') {
    this.size = new Vector2(400 * Canvas.scale.x, 130 * Canvas.scale.y)
  
    Canvas.drawImage(sprites.extras['shop_info_bar'].normal, this.position, 0, new Vector2(0, 0), 1.3)

    Canvas.drawText(
      'Adds an extra power',
      new Vector2(this.position.x + 20, this.position.y + 10),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
    Canvas.drawText(
      'up slot!',
      new Vector2(this.position.x + 40, this.position.y + 50),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
    Canvas.drawText(
      '3',
      new Vector2(this.position.x + 330, this.position.y + 30),
      "black",
      "top",
      "Comic Sans",
      "35px"
    );
    Canvas.drawImage(
    sprites.extras['coin'].normal, 
    new Vector2(this.position.x + 360, this.position.y + 20),
    );
  };

  if (this.item === 'blimp_slower_upgrade') {
    Canvas.drawImage(sprites.extras['shop_info_bar'].normal, this.position, 0, new Vector2(0, 0), 1.3)
     Canvas.drawText(
       'Balls slow blimps',
       new Vector2(this.position.x + 20, this.position.y + 10),
       "black",
       "top",
       "Comic Sans",
       "35px"
     );
     Canvas.drawText(
       'by 40%!',
       new Vector2(this.position.x + 40, this.position.y + 50),
       "black",
       "top",
       "Comic Sans",
       "35px"
     );
     Canvas.drawText(
       '6',
       new Vector2(this.position.x + 310, this.position.y + 30),
       "black",
       "top",
       "Comic Sans",
       "35px"
     );
     Canvas.drawImage(
     sprites.extras['coin'].normal, 
     new Vector2(this.position.x + 340, this.position.y + 20),
     )
   }
   if (this.item === 'barrier_buster_upgrade') {
    Canvas.drawImage(sprites.extras['shop_info_bar'].normal, this.position, 0, new Vector2(0, 0), 1.3)
     Canvas.drawText(
       'Balls can break barriers',
       new Vector2(this.position.x + 20, this.position.y + 10),
       "black",
       "top",
       "Comic Sans",
       "30px"
     );
     Canvas.drawText(
       'after a few hits',
       new Vector2(this.position.x + 40, this.position.y + 50),
       "black",
       "top",
       "Comic Sans",
       "30px"
     );
     Canvas.drawText(
       '5',
       new Vector2(this.position.x + 310, this.position.y + 30),
       "black",
       "top",
       "Comic Sans",
       "35px"
     );
     Canvas.drawImage(
     sprites.extras['coin'].normal, 
     new Vector2(this.position.x + 340, this.position.y + 20),
     )
   }
   
  }


ShopInfoBox.prototype.reset = function() {
}