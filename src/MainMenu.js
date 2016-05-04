
BasicGame.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;

};

BasicGame.MainMenu.prototype = {


	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

        this.kicksound = this.add.audio('kick');
        this.miss_sound = this.add.audio('miss');
        this.hit_sound = this.add.audio('hit');

		this.title_screen = this.add.sprite(this.game.width/2, 0, 'titlepage');
        this.title_screen.anchor.x = 0.5;

        this.playButton = this.add.button(this.game.width - 150, 50, 'playButton', this.startGame, this);
        this.playButton.anchor.x = 0.5;
        this.playButton.anchor.y = 0.5;

        this.playButton.scale.x = 0.2;
        this.playButton.scale.y = 0.2;





		this.playSoundButton = this.add.button(this.game.width/2, this.game.height/2, 'playButton', this.playSounds, this);
        this.playSoundButton.anchor.x = 0.5;
        this.playSoundButton.anchor.y = 0.5;


	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

    playSounds: function(){
        var random = Math.random() * 3;
        if (random > 2){
            this.kicksound.play();
        } else if (random > 1){
            this.miss_sound.play();
        } else if (random > 0){
            this.hit_sound.play();
        }
    },

	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		//this.music.stop();

		//	And start the actual game
		this.state.start('Game');
        //this.music.play();

	},

    render: function() {
        this.game.debug.soundInfo(this.kicksound, 20, 32);
        this.game.debug.soundInfo(this.miss_sound, 20, 182);
        this.game.debug.soundInfo(this.hit_sound, 20, 312);
    }

};
