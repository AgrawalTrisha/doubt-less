class StartScreen extends Phaser.Scene {
  constructor() {
    super("start-screen");
  }

  preload() {
    this.load.spritesheet("desktop", "assets/desktopspritesheet.png", {frameWidth:360, frameHeight: 272});
    // this.load.image("desktop-textbox", "assets/desktoptextbox.png");
    this.load.image("tb1", "assets/textboxes/radhika.png");
    this.load.image("tb1", "assets/textboxes/maybeyoushould.png");
    this.load.image("rcp-angry", "assets/RCP_angry.png");
    this.load.image("rcp-tired", "assets/RCP_tired.png");
    this.load.image("rcp-side", "assets/RCP_side.png");
  }

  create() {
    this.num = 0;
    this.anims.create({
      key: "desktop_anim",
      frames: this.anims.generateFrameNumbers("desktop"),
      frameRate: 5,
      repeat: -1
    });
    console.log("on StartScene");
    this.desktop = this.add.sprite(0,0,"desktop");
    this.desktop.setOrigin(0,0);
    this.desktop.play("desktop_anim");
    this.radhika = this.add.sprite(310,272-46, "rcp-side");
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.enterkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

  }

  update() {
    if(Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      console.log("this.num = " + this.num);
      if(this.num === 0) {
        this.tb1 = this.add.sprite(60, 20, "tb1");
      } if(this.num === 1) {        
        this.tb2 = this.add.sprite(60, 20, "tb2");
      } else {
        this.scene.start("woods-scene");
      }
      this.num += 1;
    }
  }
}