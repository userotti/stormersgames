
BasicGame.Done = function (game) {


};

BasicGame.Done.prototype = {


    create: function () {

        this.smack_sound = this.add.audio('smack');
        this.smack_sound.play();
        
        this.background_group = this.game.add.group();
        this.setupCrowdSprite();
        this.setupGrassSprite();
        this.graphics = this.game.add.graphics(0, 5);

        this.graphics.beginFill(0x000000, 0.5);
        this.graphics.drawRect(0, 0, this.game.width, this.game.height);
        this.graphics.endFill();

        var style = { font: "bold 30px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        this.score_ui1 = this.add.text(this.game.width/2, 50, 'Accuracy Rating:', style);
        this.score_ui1.anchor.x = 0.5;
        this.score_ui1.visible = true;

        var style = { font: "bold 60px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        this.score_ui1 = this.add.text(this.game.width/2, 110, this.game.player_stats.accuracy, style);
        this.score_ui1.anchor.x = 0.5;
        this.score_ui1.visible = true;

        var style = { font: "bold 20px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        this.score_ui1 = this.add.text(this.game.width/2, 220, this.game.player_stats.score + ' out of ' + this.game.player_stats.attempts, style);
        this.score_ui1.anchor.x = 0.5;
        this.score_ui1.visible = true;


        this.retry = this.add.button(this.game.width/2, this.game.height - 150, 'retry', this.startGame, this);
        this.retry.anchor.x = 0.5;
        this.retry.anchor.y = 0.5;
        this.retry.scale.x = 0.17;
        this.retry.scale.y = 0.17;


    },

    startGame: function (pointer) {

		this.state.start('Game');

	},

    update: function () {


    },

    setupCrowdSprite: function(){
        this.crowd = this.game.add.sprite(0, 0, 'crowd');
        this.crowd.x = this.game.width/2;
        this.crowd.y = this.game.height/2;
        this.crowd.anchor.x = 0.5;
        this.crowd.anchor.y = 1;

        this.background_group.add(this.crowd);
    },

    setupGrassSprite: function(){
        this.grass = this.game.add.sprite(0, 0, 'grass');
        this.grass.x = this.game.width/2;
        this.grass.y = this.game.height/2;
        this.grass.anchor.x = 0.5;
        this.grass.anchor.y = 0;

        this.background_group.add(this.grass);
    },


    render: function() {

    }

};
