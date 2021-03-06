class ChoiceTextbox extends Phaser.GameObjects.Sprite {
  constructor(scene, choices, num) {
    super(scene, 135, 238, "choicebox");
    scene.add.sprite(135, 238, "choicebox");
    var finalString = "";
    for(var i = 0; i < choices.length; i++) {
      if(i === num) {
        finalString += "> ";
      } else {
        finalString += "   ";
      }
      finalString += choices[i] + "\n";
    }
    scene.add.text(20,220,finalString,{ font: "12px Arial", fill: '#405A66' });
  }
}