class WoodsScene extends Phaser.Scene {
  constructor() {
    super("woods-scene");
  }

  preload() {
    this.load.image("woods-far", "assets/woods-far-trees.png");
    this.load.image("woods-mid", "assets/woods-mid-trees.png");
    this.load.image("woods-close", "assets/woods-close-trees.png");
  }

  create() {
    this.woodsFar = this.add.tileSprite(0,0,game.config.width,game.config.height,"woods-far");
    this.woodsFar.setOrigin(0,0);
    this.woodsFar.setScrollFactor(0);
    this.woodsMid = this.add.tileSprite(0,0,game.config.width,game.config.height,"woods-mid");
    this.woodsMid.setOrigin(0,0);
    this.woodsMid.setScrollFactor(0);
    this.woodsClose = this.add.tileSprite(0,0,game.config.width,game.config.height,"woods-close");
    this.woodsClose.setOrigin(0,0);
    this.woodsClose.setScrollFactor(0);
    console.log("on WoodsScene");
  }

  update() {
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