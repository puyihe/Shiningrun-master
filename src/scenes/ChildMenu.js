class ChildMenu extends Phaser.Scene {
  constructor() {
    super("childMenuScene");
  }
  preload() {
    this.load.audio('sfx_jump', './assets/audio/jump.wav');
    this.load.audio('sfx_select', './assets/audio/blipSelect.wav');
    this.load.image('bg', './assets/bg.png');
  }
  create() {
    const bg = this.add.image(0,0,'bg').setSize(640,400).setOrigin(0,0);
    const level_1 = this.add.text(300, 150, 'level 1', { font: '"Arial"' });
    level_1.setInteractive();
    level_1.setOriginFromFrame();
    level_1.on('pointerup', () => {
      game.settings = {
        xianjing_p: 0.5,
        speed:2
      }
      this.scene.start('info1Scene')
    } );

    const level_2 = this.add.text(300, 200, 'level 2', { font: '"Arial"' });
    level_2.setInteractive();
    level_2.setOriginFromFrame();
    level_2.on('pointerup', () => {
      
      this.scene.start('info2Scene')
    } );

    const level_3 = this.add.text(300, 250, 'level 3', { font: '"Arial"' });
    level_3.setInteractive();
    level_3.setOriginFromFrame();
    level_3.on('pointerup', () => {
      
      this.scene.start('info3Scene')
    } );

    const back1 = this.add.text(25, 10, 'back');
    back1.setInteractive();
    back1.setOriginFromFrame();
    back1.on('pointerup', () => {
      this.scene.start('menuScene');
    })



    keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
  }
  update() {

  }

}