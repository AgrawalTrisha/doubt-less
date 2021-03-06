class StartScreenTextBox extends Phaser.GameObjects.Sprite {
  constructor(scene, text, x, y) {
    super(scene, x, y, "desktop-textbox");
    scene.add.sprite(x,y,"desktop-textbox");
  }
}