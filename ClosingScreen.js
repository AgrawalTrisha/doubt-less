class ClosingScreen extends Phaser.Scene {
  constructor() {
    super("closing-screen");
  }

  preload() {
    this.load.spritesheet("desktop-night", "assets/desktopspritesheetnight.png", {frameWidth:360, frameHeight: 272});
  }

  create() {
    this.num = 0;
    this.anims.create({
      key: "desktopnight_anim",
      frames: this.anims.generateFrameNumbers("desktop-night"),
      frameRate: 5,
      repeat: -1
    });
    this.desktop = this.add.sprite(0,0,"desktop-night");
    this.desktop.setOrigin(0,0);
    this.desktop.play("desktopnight_anim");
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.radhika = this.add.sprite(310,272-46, "rcp-tired");
    this.add.sprite(135, 238, "choicebox");
    this.words = this.add.text(20,220,"I just closed my eyes for a moment...",{ font: "12px Arial", fill: '#405A66' });
    this.transition = this.add.sprite(0,0,"transition");
    this.transition.setOrigin(0,0);
    this.transition.play("transition_off");
  }

  update() {
    if(Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      console.log("this.num = " + this.num);
      if(this.num === 0) {
        this.words.alpha = 0;
        this.words2 = this.add.text(20,220,"Did I really fall asleep?",{ font: "12px Arial", fill: '#405A66' });
      } else if(this.num === 1) {
        this.words2.alpha = 0;
        this.words3 = this.add.text(20,220,"I know the dream I had was weird.\nBut I can't remember any of it!",{ font: "12px Arial", fill: '#405A66' });
      } else if(this.num === 2) {
        this.words3.alpha = 0;
        this.words4 = this.add.text(20,218,"*sigh*. I'd better turn in for the night.\nI want to be well-rested for the state\nprogramming competition tomorrow.",{ font: "12px Arial", fill: '#405A66' });
      } else if(this.num === 3) {
        this.transition = this.add.sprite(0,0,"transition");
        this.transition.setOrigin(0,0);
        this.transition.play("transition_on");
      } else {
        this.scene.start("credits-screen");
      }
      this.num += 1;
    }    
  }
}