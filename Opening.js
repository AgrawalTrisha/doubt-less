class Opening extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("opening-screen", "assets/openingscreen.png");
    this.load.spritesheet("transition", "assets/transition.png", {frameWidth:360, frameHeight: 272});
  }

  create() {
    this.openingscreen = this.add.image(0,0, "opening-screen");
    this.openingscreen.setOrigin(0,0);
    this.anims.create({
      key: "transition_on",
      frames: this.anims.generateFrameNumbers("transition", {start: 11, end: 0}),
      frameRate: 5,
      repeat: 0
    });
    this.anims.create({
      key: "transition_off",
      frames: this.anims.generateFrameNumbers("transition"),
      frameRate: 10,
      repeat: 0
    });

    this.num = -2;

    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update() {
    if(Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      console.log("this.num = " + this.num);
      this.num += 1;
    }
    if(this.num === -1) {
      this.transition = this.add.sprite(0,0,"transition");
      this.transition.setOrigin(0,0);
      this.transition.play("transition_on");
    } else if(this.num === 0) {
      this.scene.start("start-screen");
    }
    // if(Phaser.Input.Keyboard.JustDown(this.spacebar)) {
    //   console.log("spacebar clicked on Opening");
    //   this.transition = this.add.sprite(0,0,"transition");
    //   this.transition.setOrigin(0,0);
    //   this.transition.play("transition_on");
    //   // this.scene.start("start-screen");
    // }
  }
}