class Level3_Info extends Phaser.Scene {
  constructor() {
    super("info3Scene");
  }
  preload() {
    this.load.image('bg', './assets/bg.png');
  }
  create() {
    // this.add.text(0, 0, 'Hello World', { font: '"Press Start 2P"' });
    // this.add.text(260, 100, 'Shiningrun');
    const bg = this.add.image(0,0,'bg').setSize(640,400).setOrigin(0,0);
    const information = this.add.text(100, 50, "For the last scene:\n  The scene where Jack hunts down \nhis son Danny. They are in the \nblizzard maze at night. In the end, \nthe youngest son avoids leaving \nfootprints and successfully escapes \nJack's pursuit. This is also the end of \nthis article, so make this the last \npart of our game.\n  Use WASD to control the character \nto move and avoid hunting. After a \ncertain period of time, touch the \nmother who appears to end the \ngame.");

    const back = this.add.text(400, 300, 'start play');
    back.setInteractive();
    back.setOriginFromFrame();
    back.on('pointerup', () => {
      this.scene.start('level3Scene');
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