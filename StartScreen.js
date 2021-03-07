class StartScreen extends Phaser.Scene {
  constructor() {
    super("start-screen");
  }

  preload() {
    this.load.spritesheet("desktop", "assets/desktopspritesheet.png", {frameWidth:360, frameHeight: 272});
    this.load.image("choicebox", "assets/textboxes/choicebox.png");
    this.load.image("tb1", "assets/textboxes/radhika.png");
    this.load.image("tb2", "assets/textboxes/maybeyoushould.png");
    this.load.image("tb3", "assets/textboxes/takeabreak.png");
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
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.counter = 0;
    this.choicenum = 1;
    this.counter2 = 0;
    console.log(this.cameras.main.x);
    console.log(this.cameras.main.y);
  }

  update() {
    if(Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      console.log("this.num = " + this.num);
      this.num += 1;
    }
    if(this.num === 0) {
      this.radhika = this.add.sprite(310,272-46, "rcp-side");
    } else if(this.num === 1) {
      this.tb1 = this.add.sprite(15, 10, "tb1");
      this.tb1.setOrigin(0,0);
      // this.something = this.add.sprite(60,20, "desktop-textbox");
      // this.add.text(8, 8, 'Phaser 3 pixelArt: true', { font: '12px Consolas', fill: '#405A66' }).setOrigin(0, 0);
    } else if(this.num === 2) {
      this.radhika = this.add.sprite(310,272-46, "rcp-tired");
      this.tb2 = this.add.sprite(15, 40, "tb2");
      this.tb2.setOrigin(0,0);
    } else if(this.num === 3) {
      this.radhika = this.add.sprite(310,272-46, "rcp-angry");
      if(this.cursorKeys.down.isDown && this.counter < this.choicenum) {
        console.log("down detected");
        this.counter += 1;
      } else if(this.cursorKeys.up.isDown && this.counter > 0) {
        console.log("up detected");
        this.counter -= 1;
      }        
      this.choicebox = new ChoiceTextbox(this, ["No.", "I'm not going to do that."], this.counter, 135, 238);
    } else if(this.num === 4) {
      this.tb3 = this.add.sprite(15, 90, "tb3");
      this.tb3.setOrigin(0,0);
      if(this.cursorKeys.down.isDown && this.counter2 < this.choicenum) {
        console.log("down detected");
        this.counter2 += 1;
      } else if(this.cursorKeys.up.isDown && this.counter2 > 0) {
        console.log("up detected");
        this.counter2 -= 1;
      }        
      this.choicebox = new ChoiceTextbox(this, ["Fine.", "Alright."], this.counter2, 135, 238);
    } else {
      this.scene.start("woods-scene");
    }
  }
}