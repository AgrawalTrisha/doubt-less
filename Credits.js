class Credits extends Phaser.Scene {
  constructor() {
    super("credits-screen");
  }

  preload() {
    this.load.spritesheet("desktop-night", "assets/desktopspritesheetnight.png", {frameWidth:360, frameHeight: 272});
  }

  create() {
    this.cameras.main.setBackgroundColor('#405A66');
    console.log("atcredits");
    this.words = this.add.text(10,10,"Radhika's portraits: @bumblie_ on Picrew\nParallax background: @Aethrall on itch.io\nRadhika's sprite: Katana ZERO (edited)\nProgramming, music, other assets: Trisha Agrawal\n\nDear Player,\nYou are never as alone as you may feel.\nMany of us struggle with imposter syndrome.\nYou are where you are because of your hard work and your skill.\nYou have no reason to doubt yourself,\nand all the reason to believe in yourself.\n\nThank you for playing\n<DOUBT/LESS>.",{ font: "12px Arial", fill: '#FFFFFF' });
  }
}