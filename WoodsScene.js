class WoodsScene extends Phaser.Scene {
  constructor() {
    super("woods-scene");
  }

  preload() {
    this.load.image("woods-far", "assets/woods-far-trees.png");
    this.load.image("woods-mid", "assets/woods-mid-trees.png");
    this.load.image("woods-close", "assets/woods-close-trees.png");
    this.load.image("ground", "assets/ground.png");
    this.load.spritesheet("radhika", "assets/radhikaspritesheet.png", {frameWidth: 33, frameHeight: 44});
    this.load.spritesheet("slime", "assets/slime.png", {frameWidth: 19, frameHeight: 12});
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

    this.ground = this.add.tileSprite(0,234,game.config.width * 10, 38,"ground");
    // this.ground = this.physics.add.staticImage(0,234, "ground");
    this.ground.setOrigin(0,0);
    // this.ground.refreshBody();
    this.physics.add.existing(this.ground, true);

    console.log("on WoodsScene");

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.slimePlayerCollide = false;
    this.player = this.physics.add.sprite(400, 212, 'radhika');
    this.slime = this.physics.add.sprite(450, 200, 'slime');
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('radhika', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'radhika', frame: 8 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('radhika', { start: 9, end: 16 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'slime-anim',
        frames: this.anims.generateFrameNumbers('slime', { start: 0, end: 1 }),
        frameRate: 5,
        repeat: -1,
        repeatDelay: 1500
    });
    this.anims.create({
        key: 'slime-death',
        frames: this.anims.generateFrameNumbers('slime', { start: 0, end: 6 }),
        frameRate: 5,
        repeat: 0,
    });
    this.slime.anims.play("slime-anim");
  }

  update() {
    if(this.cursorKeys.left.isDown) {
      this.backgroundMove(-1);
      this.player.setVelocityX(-40);
      this.player.anims.play('left', true);
    } else 
    if(this.cursorKeys.right.isDown) {
      this.backgroundMove(1);
      this.player.setVelocityX(40);
      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }
    this.physics.world.collide(this.player,this.ground);
    this.physics.world.collide(this.slime,this.ground);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setFollowOffset(-80, 76);
    if(this.slime.x < this.player.x + 100 && this.slime.x > this.player.x + 50) {
      this.slime.setVelocityX(-4);
    } else if(this.slime.x > this.player.x - 100 && this.slime.x < this.player.x - 50) {
      this.slime.setVelocityX(4);
    } else {
      this.slime.setVelocityX(0);
    }
    if(this.player.x < this.slime.x + 2 && this.player.x > this.slime.x - 2) {
      this.slime.anims.play("slime-death");
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
      this.woodsFar.tilePositionX -= 0.07;
      this.woodsMid.tilePositionX -= 0.12;
      this.woodsClose.tilePositionX -= 0.17;
    }
    if(direction === 1) {
      this.woodsFar.tilePositionX += 0.07;
      this.woodsMid.tilePositionX += 0.12;
      this.woodsClose.tilePositionX += 0.17;
    }
  }

}