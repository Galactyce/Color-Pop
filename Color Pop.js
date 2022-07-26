var sprites = {}
var sounds = {}


Game.loadAssets = function() {
               
  var loadImage = function(sprite) {
      return Game.loadImage("Sprites/" + sprite);
  }

  
  var loadSound = function(soundName, looping) {
     return new Sound(soundName, looping)
  } 

  sprites.balloons = {
    'red': {'normal': loadImage("balloon_red.png"), 'popped': loadImage("red_pop_effect.png"), 'reinforced': loadImage("balloon_red_reinforced.png")},
    'green': {'normal': loadImage("balloon_green.png"), 'popped': loadImage("green_pop_effect.png"), 'reinforced': loadImage("balloon_green_reinforced.png")},
    'blue': {'normal': loadImage("balloon_blue.png"), 'popped': loadImage("blue_pop_effect.png"), 'reinforced': loadImage("balloon_blue_reinforced.png")},
    'rainbow': {'normal': loadImage("rainbow_balloon.png"), "reinforced": loadImage("reinforced_rainbow_balloon.png"), 'popped': loadImage('rainbow_pop_effect.png')},
    'bomb': {'normal': loadImage("bomb_balloon.png"), 'reinforced': loadImage("bomb_balloon_reinforced.png"), 'popped': loadImage("black_pop_effect.png")},
    'ice': {'normal': loadImage("ice_balloon.png"), 'reinforced': loadImage("ice_balloon_reinforced.png"), 'popped': loadImage("ice_pop_effect.png")},
    'white': {'normal': loadImage("white_balloon.png"), 'reinforced': loadImage("white_balloon.png"), 'popped': loadImage('white_pop_effect.png')},
    'golden': {'normal': loadImage("golden_balloon.png")},
    'metal': {'normal': loadImage("lead_balloon_full.png"), 'reinforced': loadImage("metal_balloon_full_reinforced.png"), 'popped': loadImage('metal_pop_effect.png')},
    'metal_cracked': {'normal': loadImage("lead_balloon_cracked.png"), 'reinforced': loadImage("metal_balloon_cracked_reinforced.png")}, 
    'metal_damaged': {'normal': loadImage("lead_balloon_damaged.png"), 'reinforced': loadImage("metal_balloon_damaged_reinforced.png")},
    'target': {'normal': loadImage('homing_balloon.png'), 'reinforced': loadImage("homing_balloon_reinforced.png"), 'popped': loadImage('target_pop_effect.png')}
  };


  sprites.blimp = {
    'red': {'normal': loadImage("marker_red.png")},
    'green': {'normal': loadImage("marker_green.png")},
    'blue': {'normal': loadImage("marker_blue.png")},
    'white': {'normal': loadImage('marker_white.png')},
    'full': {'normal': loadImage("basic_blimp_full.png"), 'reinforced': loadImage("reinforced_blimp_full.png")},
    'hit1': {'normal': loadImage("basic_blimp_hit.png"), 'reinforced': loadImage("reinforced_blimp_hit1.png")},
    'hit2': {'normal': loadImage("basic_blimp_hit2.png"), 'reinforced': loadImage("reinforced_blimp_hit2.png")},
    'hit3': {'normal': loadImage("basic_blimp_hit3.png"), 'reinforced': loadImage("reinforced_blimp_hit3.png")},
    'hit4': {'normal': loadImage("basic_blimp_hit4.png"), 'reinforced': loadImage("reinforced_blimp_hit4.png")}
  }

  

  sprites.balls = {
    'red': {'normal': loadImage("ball_red.png")},
    'green': {'normal': loadImage("ball_green.png")},
    'blue': {'normal': loadImage("ball_blue.png")}

  }
  
  sprites.cannon_parts = {
    'barrel': {'normal': loadImage("cannon_barrel.png")},
    'red': {'normal': loadImage("cannon_red.png")},
    'green': {'normal': loadImage("cannon_green.png")},
    'blue': {'normal': loadImage("cannon_blue.png")}
  }
  
  sprites.barriers = {
    'barrier': {'normal': loadImage("barrier_wall.png")},
    'intense_barrier': {'normal': loadImage("barrier_wall_intense.png")}
  }

  sprites.extras = {
    'background': {'home': loadImage("background.jpg"), 'shop': loadImage("shop_background.png")},
    'platform': {'normal': loadImage("platform.png")},
    'life_marker': {'normal': loadImage("heart.png")},
    'text_box': {'normal': loadImage("text_box.png")},
    'large_text_box': {'normal': loadImage("large_text_box.png")},
    'faster_balloons_button': {'normal': loadImage('faster_balloons_mode_button.png')},
    'armored_only_button': {'normal': loadImage("armored_only_mode_button.png")},
    'tutorial_mode_button': {'normal': loadImage("tutorial_mode_button.png")},
    'freeplay_mode_button': {'normal': loadImage("freeplay_mode_button.png")},
    'simple_button': {'normal': loadImage("simple_button.png")},
    'no_color_mode': {'normal': loadImage('no_color_mode_button.png')},
    'easy_button': {'normal': loadImage("easy_mode_button.png")},
    'intermediate_button': {'normal': loadImage('intermediate_mode_button.png')},
    'hard_button': {'normal': loadImage("hard_mode_button.png")},
    'apex_button': {'normal': loadImage("apex_mode_button.png")},
    'end_screen': {'normal': loadImage("blank_end_screen.png")},
    'arrow': {'normal': loadImage('arrow.png')},
    'color_button': {'red': loadImage('color_button_red.png'), 'green': loadImage('color_button_green.png'), 'blue': loadImage('color_button_blue.png')},
    'power_up_slot': {'normal': loadImage("power_up_slot.png")},
    'bomb_icon': {'normal': loadImage("bomb.png")},
    'homing_icon': {'normal': loadImage('homing_powerup_icon.png')},
    'snowflake': {'normal': loadImage("snowflake.png")},
    'shop_info_bar': {'normal': loadImage("shop_info_bar.png")},
    'double_ball_upgrade_icon': {'normal': loadImage("double_ball_upgrade_icon.png")},
    'extra_slot_upgrade_icon': {'normal': loadImage("extra_slot_upgrade_icon.png")},
    'blimp_slower_upgrade_icon': {'normal': loadImage("blimp_slower_upgrade_icon.png")},
    'barrier_buster_upgrade_icon': {'normal': loadImage("barrier_buster_upgrade_icon.png")},
    'splash_balls_upgrade_icon': {'normal': loadImage("splash_balls_upgrade_icon.png")},
    'empty_icon': {'normal': loadImage('empty_icon.png')},
    'sold_sign': {'normal': loadImage("sold_sign.png")},
    'inventory': {'normal': loadImage("inventory_slots.png")},
    'coin': {'normal': loadImage('coin.png')},
    'slider': {'back': loadImage('slider_back.png'), 'front': loadImage('slider_front.png')}
  }

  sounds.playSound = loadSound("playSound_01", false)
  sounds.popEffect = loadSound("pop_effect", false)
  sounds.bump = loadSound("bump_sfx", false)
  sounds.boom = loadSound("boom_sfx", false);
  sounds.hitSound = loadSound("hit_sound", false)
  sounds.clang = loadSound("clang", false)
  sounds.backgroundMusicBasic = loadSound("color_pop_background_music_basic", true)
  sounds.extraLife = loadSound("extra_life", false);
  sounds.gameOver = loadSound("game_over_sound", false);
  sounds.cannonShot = loadSound("cannon_shot", false)
}

 