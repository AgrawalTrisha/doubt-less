var config = {
  width: 360,
  height: 272,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
  scale: {
    parent: 'yourgamediv',
    mode: Phaser.Scale.NONE,
    zoom: 2.5,
  },
  backgroundColor: 0x405A66,
  scene: [Opening, StartScreen, WoodsScene, ClosingScreen, Credits],
	pixelArt: true,
}

var game = new Phaser.Game(config);