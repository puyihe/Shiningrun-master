// 
//Here's Johnny:
//https://www.myinstants.com/en/instant/heres-johnny/
//https://movie-sounds.org/horror-movie-samples/quotes-with-sound-clips-from-the-shining-1980/come-and-play-with-us-danny-forever-and-ever-and-ever
//assets：
//https://kamisama887.itch.io/lorenz-fries-school-horror
//https://shubibubi.itch.io/cozy-people
//scenes3
//https://ninjikin.itch.io/grass
//backgroundmusic：
//Halloween Horror Creepy Piano | Horror by Alex-Productions | https://onsound.eu/
//Music promoted by https://www.chosic.com/free-music/all/
//Creative Commons CC BY 3.0
//https://creativecommons.org/licenses/by/3.0/
//Come Play with Me Kevin MacLeod (incompetech.com)
//Licensed under Creative Commons: By Attribution 3.0 License
//http://creativecommons.org/licenses/by/3.0/
//Music promoted by https://www.chosic.com/free-music/all/
//Demented Nightmare by Darren Curtis | https://www.darrencurtismusic.com/
//Music promoted by https://www.chosic.com/free-music/all/
//Creative Commons CC BY 3.0
//https://creativecommons.org/licenses/by/3.0/
//
let config = {
    type: Phaser.CANVAS,
    render: {
      pixelArt: true
    },
    // width: 640,
    // height: 400,
    backgroundColor: '#33A5E7',
    physics: {
      default: 'arcade',
      arcade: {
          debug: false
      }
    },
    scale: {
      width: 640,
      height: 400,
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [ Menu, Info, ChildMenu, Play, Level2, Level2_1, Level3, end1, 
             Level2_Info, Level3_Info, Level1_Info],
    zoom: 2,
  }
let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let keyJUMP, keyQ, keyE, keyleft, keyright, keyup, keydown;
let key_w, key_a, key_s, key_d, key_n;






  
