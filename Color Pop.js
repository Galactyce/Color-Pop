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
    'rainbow': {'normal': loadImage("rainbow_balloon.png"), "reinforced": loadImage("rainbow_balloon.png")},
    'bomb': {'normal': loadImage("bomb_balloon.png"), 'reinforced': loadImage("bomb_balloon_reinforced.png")},
    'ice': {'normal': loadImage("ice_balloon.png"), 'reinforced': loadImage("ice_balloon_reinforced.png")},
    'ghost': {'normal': loadImage("ghost_balloon.png"), 'reinforced': loadImage("ice_balloon.png")},
    'golden': {'normal': loadImage("golden_balloon.png")},
    'metal': {'normal': loadImage("lead_balloon_full.png"), 'reinforced': loadImage("metal_balloon_full_reinforced.png")},
    'metal_cracked': {'normal': loadImage("lead_balloon_cracked.png"), 'reinforced': loadImage("metal_balloon_cracked_reinforced.png")}, 
    'metal_damaged': {'normal': loadImage("lead_balloon_damaged.png"), 'reinforced': loadImage("metal_balloon_damaged_reinforced.png")},
    'homing': {'normal': loadImage('homing_balloon.png'), 'reinforced': loadImage("homing_balloon_reinforced.png")}
  };

  sprites.blimp = {
    'red': {'normal': loadImage("marker_red.png")},
    'green': {'normal': loadImage("marker_green.png")},
    'blue': {'normal': loadImage("marker_blue.png")},
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
    'background': {'normal': loadImage("background.jpg")},
    'platform': {'normal': loadImage("platform.png")},
    'life_marker': {'normal': loadImage("heart.png")},
    'score_text_box': {'normal': loadImage("text_box.png")},
    'play_button': {'normal': loadImage('play_button.png')},
    'easy_button': {'normal': loadImage("easy_mode_button.png")},
    'hard_button': {'normal': loadImage("hard_mode_button.png")},
    'pause_button': {'normal':  loadImage("basic_pause_button.png")}
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

 