
BasicGame.Preloader = function (game) {

    this.background = null;
    this.preloadBar = null;

    this.ready = false;

};

BasicGame.Preloader.prototype = {

    preload: function () {

        console.log(this);
        //	These are the assets we loaded in Boot.js
        //	A nice sparkly background and a loading progress bar
        this.background = this.add.sprite(this.game.width/2, 0, 'preloaderBackground');
        this.background.anchor.x = 0.5;

        this.background.scale.x = 0.5;
        this.background.scale.y = 0.5;


        this.preloadBar = this.add.sprite((this.game.width/2) - 156, this.game.height/2, 'preloaderBar');

        var style = { font: "bold 24px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        this.score_ui = this.add.text(this.game.width/2, this.game.height/2 + 100, 'Loading...', style);
        this.score_ui.anchor.x = 0.5;

        //	This sets the preloadBar sprite as a loader sprite.
        //	What that does is automatically crop the sprite from 0 to full-width
        //	as the files below are loaded in.
        this.load.setPreloadSprite(this.preloadBar);

        //	Here we load the rest of the assets our game needs.
        //	As this is just a Project Template I've not provided these assets, the lines below won't work as the files themselves will 404, they are just an example of use.
        this.load.image('titlepage', 'images/robert.jpg');
        this.load.image('playButton', 'images/play_button.png');

        //this.load.image('grass', 'images/grass.png');
        this.load.image('grass', 'images/pitch.jpg');
        //this.load.image('crowd', 'images/crowd.png');
        this.load.image('crowd', 'images/crowd.jpg');
        //this.load.image('ball', 'images/ball.png');
        this.load.image('ball', 'images/ball_360.png');

        //this.load.image('posts', 'images/posts2.png');
        this.load.image('posts', 'images/posts2_360.png');

        //this.load.image('windflag', 'images/windflag.png');
        this.load.image('windflag', 'images/windflag_360.png');

        //this.load.image('windflag', 'images/windflag.png');
        this.load.image('shadow', 'images/shadow.png');


        //this.load.image('posts', 'images/ball_rooi.png');




        //this.load.atlas('playButton', 'images/play_button.png', 'images/play_button.json');

        //this.load.audio('titleMusic', ['audio/music.ogg']);
        this.load.audio('kick', ['audio/kick3.mp3', 'audio/kick3.ogg']);
        this.load.audio('miss', ['audio/ooh.mp3', 'audio/ooh.ogg']);
        this.load.audio('hit', ['audio/whistle.mp3', 'audio/whistle.ogg']);

        var self = this;
        this.game.sound.setDecodedCallback(['kick','miss','hit'], function(){
            self.ready = true;
            console.log('done loading sounds');
        }, this);

        //this.load.audio('kick2', ['audio/kick2.m4a']);

        //this.load.bitmapFont('caslon', 'fonts/caslon.png', 'fonts/caslon.xml');
        //	+ lots of other required assets here

    },

    create: function () {

        //	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
        this.preloadBar.cropEnabled = false;


    },

    update: function () {

        //	You don't actually need to do this, but I find it gives a much smoother game experience.
        //	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
        //	You can jump right into the menu if you want and still play the music, but you'll have a few
        //	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
        //	it's best to wait for it to decode here first, then carry on.
        if (this.ready == true){
            this.state.start('MainMenu');
        } else {
            console.log('not ready');
        }
        //	If you don't have any music in your game then put the game.state.start line into the create function and delete
        //	the update function completely.
        //


        // if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
        // {
        // 	this.ready = true;
        // 	this.state.start('MainMenu');
        // }

    }

};
