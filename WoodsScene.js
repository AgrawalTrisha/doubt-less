class WoodsScene extends Phaser.Scene {
  constructor() {
    super("woods-scene");
  }

  preload() {
    // this.load.spritesheet("desktop", "assets/desktopspritesheet.png", {frameWidth:360, frameHeight: 272});
    // this.load.image("desktop-textbox", "assets/desktoptextbox.png");
  }

  create() {
  //   this.anims.create({
  //     key: "desktop_anim",
  //     frames: this.anims.generateFrameNumbers("desktop"),
  //     frameRate: 5,
  //     repeat: -1
  //   });
  //   console.log("on StartScene");
  //   this.desktop = this.add.sprite(0,0,"desktop");
  //   this.desktop.setOrigin(0,0);
  //   this.desktop.play("desktop_anim");
  //   this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  // }

  // update() {
  //   if(Phaser.Input.Keyboard.JustDown(this.spacebar)) {
  //     console.log("spacebar clicked on StartScene");
  //     var newtextbox = new StartScreenTextBox(this,"hi",70,30);
  //     if(Phaser.Input.Keyboard.JustDown(this.spacebar)) {
  //       console.log("spacebar clicked AGAIN on StartScene");
  //       this.scene.start("woods-scene");
  //     }
  //   }
  }
}