class Opening extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("opening-screen", "assets/openingscreen.png");
  }

  create() {
    this.openingscreen = this.add.image(0,0, "opening-screen");
    this.openingscreen.setOrigin(0,0);

    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update() {
    if(Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      console.log("spacebar clicked on Opening");
    }
  }
}