class Level2_Info extends Phaser.Scene {
  constructor() {
    super("info2Scene");
  }
  preload() {
    this.load.image('bg', './assets/bg.png');
  }
  create() {
    // this.add.text(0, 0, 'Hello World', { font: '"Press Start 2P"' });
    // this.add.text(260, 100, 'Shiningrun');
    const bg = this.add.image(0,0,'bg').setSize(640,400).setOrigin(0,0);
    const information = this.add.text(100, 50, "Second scene\n  This scene is one of the most classic \nscenes in The Shining. The scene \nwhere Jack frantically hunts down \nhis wife and son after going crazy. \nWhile his wife hid in the toilet, Jack \nfrantically hacked at the door with \nan axe. \n  The empty space is the jump \nbutton, you can use it more than \nonce! The highest can achieve triple \njump!");

    const back = this.add.text(400, 300, 'start play');
    back.setInteractive();
    back.setOriginFromFrame();
    back.on('pointerup', () => {
      this.scene.start('level2Scene');
    })

    const back1 = this.add.text(25, 10, 'back');
    back1.setInteractive();
    back1.setOriginFromFrame();
    back1.on('pointerup', () => {
      this.scene.start('childMenuScene');
    })
    
  }
  update() {

  }

}