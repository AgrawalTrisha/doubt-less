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
    this.load.spritesheet("slime1", "assets/slime.png", {frameWidth: 19, frameHeight: 12});
    this.load.spritesheet("slime2", "assets/slime.png", {frameWidth: 19, frameHeight: 12});
    this.load.spritesheet("slime3", "assets/slime.png", {frameWidth: 19, frameHeight: 12});
    this.load.spritesheet("slime4", "assets/slime.png", {frameWidth: 19, frameHeight: 12});
    this.load.spritesheet("slime5", "assets/slime.png", {frameWidth: 19, frameHeight: 12});
    this.load.spritesheet("slime6", "assets/slime.png", {frameWidth: 19, frameHeight: 12});
    this.load.spritesheet("slime7", "assets/slime.png", {frameWidth: 19, frameHeight: 12});
    this.load.spritesheet("slime8", "assets/slime.png", {frameWidth: 19, frameHeight: 12});
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

    this.ground = this.add.tileSprite(0,234,game.config.width * 20, 38,"ground");
    this.ground.setOrigin(0,0);
    this.physics.add.existing(this.ground, true);

    console.log("on WoodsScene");

    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.slimePlayerCollide = false;
    this.player = this.physics.add.sprite(5000, 212, 'radhika');
    this.slime = this.physics.add.sprite(450, 200, 'slime');
    console.log(this.slime.x);
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
    this.test = this.add.text(390,25,"you should quit while you're ahead.",{ font: "16px Arial", fill: '#DA5E53'});
    this.test = this.add.text(680,240,"i'm not going to quit.",{ font: "16px Arial", fill: '#F6A6A9'});
    this.test = this.add.text(880,25,"not even your dad thinks you should keep going.",{ font: "16px Arial", fill: '#DA5E53'});    
    this.test = this.add.text(1290,240,"he just doesn't want to see me disappointed, after all my studying.",{ font: "16px Arial", fill: '#F6A6A9'});
    this.test = this.add.text(1830,25,"studying? you qualified through luck.",{ font: "16px Arial", fill: '#DA5E53'});   
    this.test = this.add.text(2150,240,"that's not true. i studied hard, and it paid off.",{ font: "16px Arial", fill: '#F6A6A9'});
    this.test = this.add.text(2527,25,"it was luck, and it's going to run out.",{ font: "16px Arial", fill: '#DA5E53'});
    this.test = this.add.text(2900,240,"i've been working hard. i qualified for this competition, and i have a shot at winning.",{ font: "16px Arial", fill: '#F6A6A9'});
    this.test = this.add.text(3576,25,"what if you don't win? what if you don't even place?",{ font: "16px Arial", fill: '#DA5E53'});
    this.test = this.add.text(4030,240,"what if i win first place?",{ font: "16px Arial", fill: '#F6A6A9'});
    this.test = this.add.text(4276,25,"what if you come in last?",{ font: "16px Arial", fill: '#DA5E53'});
    this.test = this.add.text(4520,240,"then i'll be proud that i came this far.",{ font: "16px Arial", fill: '#F6A6A9'});
    this.test = this.add.text(4850,25,"have you ever seen anyone like you at a competition?",{ font: "16px Arial", fill: '#DA5E53'});
    this.test = this.add.text(5350,240,"if i can be the first like me to succeed, i'll inspire others.",{ font: "16px Arial", fill: '#F6A6A9'});
    this.test = this.add.text(5810,25,"it's proof that you really don't belong in CS.",{ font: "16px Arial", fill: '#DA5E53'});
    this.test = this.add.text(6200,240,"no one can tell me whether i belong or don't.",{ font: "16px Arial", fill: '#F6A6A9'});
    this.test = this.add.text(6600,25,"but you can't-",{ font: "16px Arial", fill: '#DA5E53'});
    this.test = this.add.text(6800,240,"i believe in myself.",{ font: "16px Arial", fill: '#F6A6A9'});
    this.test = this.add.text(7005,245,"[SPACE] to continue",{ font: "12px Arial", fill: '#FFFFFF'});
  }

  update() {
    if(this.player.x < 6860) {
      if(this.cursorKeys.left.isDown) {
        this.backgroundMove(-1);
        this.player.setVelocityX(-40);
        this.player.anims.play('left', true);
      } else 
      if(this.cursorKeys.right.isDown) {
        this.backgroundMove(1);
        this.player.setVelocityX(400);
        this.player.anims.play('right', true);
      } else {
        this.player.setVelocityX(0);
        this.player.anims.play('turn');
      }
    } else {
      if(this.cursorKeys.left.isDown) {
        this.backgroundMove(-1);
        this.player.setVelocityX(-40);
        this.player.anims.play('left', true);
      } else {
        this.player.setVelocityX(0);
        this.player.anims.play('turn');
      }
      if(Phaser.Input.Keyboard.JustDown(this.spacebar)) {
        this.scene.start("closing-screen");
      }
    }
    this.physics.world.collide(this.player,this.ground);
    this.physics.world.collide(this.slime,this.ground);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setFollowOffset(-80, 76);
    // console.log(this.player.x);

    if(this.slime.x < this.player.x + 100 && this.slime.x > this.player.x + 50) {
      this.slime.setVelocityX(-39);
    } else if(this.slime.x > this.player.x - 100 && this.slime.x < this.player.x - 50) {
      this.slime.setVelocityX(39);
    } else {
      this.slime.setVelocityX(0);
    }
    
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