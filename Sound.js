function Sound(soundName, looping) {
  this.looping = looping;
  this.snd = new Audio();
  if (this.snd.canPlayType("audio/mpeg"))
    this.snd.src = "Sounds/" + soundName + ".mp3";
  else if (this.snd.canPlayType("audio/ogg"))
    this.snd.src = "Sounds/" + soundName + ".ogg";
  else {
    this.snd = null;
    console.log(soundName + " failed.");
  }
}

Object.defineProperty(Sound.prototype, "volume", {
  get: function () {
    return this.snd.volume;
  },
  set: function (value) {
    this.snd.volume = value;
  },
});

Sound.prototype.play = function () {
  if (this.snd === null) return;
  this.snd.load();
  this.snd.autoplay = true;
  if (!this.looping) return;

  this.snd.addEventListener(
    "ended",
    function () {
      this.load();
      this.autoplay = true;
    },
    false
  );
};
