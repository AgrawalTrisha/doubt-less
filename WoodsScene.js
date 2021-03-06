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
    this.cursorKeys = this.input.keyboard.createCursorKeys();
  }

  update() {
    if(this.cursorKeys.left.isDown) {
      this.backgroundMove(-1);
    } else 
    if(this.cursorKeys.right.isDown) {
      this.backgroundMove(1);
    }
  //   if(Phaser.Input.Keyboard.JustDown(this.spacebar)) {
  //     console.log("spacebar clicked on StartScene");
  //     var newtextbox = new StartScreenTextBox(this,"hi",70,30);
  //     if(Phaser.Input.Keyboard.JustDown(this.spacebar)) {
  //       console.log("spacebar clicked AGAIN on StartScene");
  //       this.scene.start("woods-scene");
  //     }
  //   }
  }

  backgroundMove(direction) {
    if(direction === -1) {
      this.woodsFar.tilePositionX -= 0.05;
      this.woodsMid.tilePositionX -= 0.1;
      this.woodsClose.tilePositionX -= 0.15;
    }
    if(direction === 1) {
      this.woodsFar.tilePositionX += 0.05;
      this.woodsMid.tilePositionX += 0.1;
      this.woodsClose.tilePositionX += 0.15;
    }
  }

}