$(document).ready(function(){
	var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser_1', { preload: preload, create: create, update: update, render: render });

	function preload() {

  	 // game.load.image('disk', 'assets/sprites/ra_dont_crack_under_pressure.png');

    //  Firefox doesn't support mp3 files, so use ogg
   	 game.load.audio('boden', ['maracas.mp3']);

	}

var s;
var music;

function create() {

    game.stage.backgroundColor = '#182d3b';
    game.input.touch.preventDefault = false;

    music = game.add.audio('boden');

 //   music.play();

    s = game.add.sprite(game.world.centerX, game.world.centerY, 'disk');
    s.anchor.setTo(0.5, 0.5);

    game.input.onDown.add(changeVolume, this);

}

function changeVolume(pointer) {

    if (pointer.y < 300)
    {
        music.volume += 0.1;
    }
    else
    {
        music.volume -= 0.1;
    }

}

function update() {
    s.rotation += 0.01;
}

function render() {
    game.debug.soundInfo(music, 20, 32);
}


	var temp_x = 0;
	var temp_xx = 0;
	var count = 0;
	console.log("ready");	

	$('#im').click(function(){
		
		$("#ssound")[0].load();
		$("#ssound")[0].play();
		
	});

	var gradient = function(number2){
		$('#im').css({"-webkit-transform": "rotate("+Number(number2)*10+"deg)"});
	}
	 
	var check = function (number1){
		if(count === 0) {
			temp_x = number1;
			count++;
		}else if(count === 1){
			if(temp_x != number1){
				//$("#ssound")[0].load();
			    //$("#ssound")[0].play();
				music.play();
				count = 0;
			}
		}
		/*
		if(count === 0){
			temp_x = (Number(number1));
			count++;
			if(temp_x === 0){
				temp_x = 5;
			}else if(temp_x < 0){
				temp_x = -5;
			}else{
				temp_x = 5;
			}
			$("#tVal").html(count);
			$("#cVal").html(temp_x);
			
		}else if(count === 1){
			
			temp_xx = (Number(number1));
			$("#tVal").html(count);
			$("#aVal").html(temp_xx);
			
			if(temp_xx === 0){
				temp_xx = 5;
			}else if(temp_xx < 0){
				temp_xx= -5;
			}else{
				temp_xx = 5;
			}			
			
			if(temp_x + temp_xx === 0){ // 5+ -5 = 0, -5 + 5 = 0
				count++;
				$("#ssound")[0].load();
				$("#ssound")[0].play();
				
				var timer = setInterval(function(){
					$("#im").animate({ marginLeft: "30px" }, 300, "", function () {
						$(this).animate({ marginLeft: "0px" }, 300, "", function () { 
						 });
					});
					clearInterval(timer);    
					}, 1000);
				
				
				setTimeout(function(){count = 0;},600);
			}		

			
		}
		*/

	}

	function handleMotionEvent(event) {

	    var x = event.accelerationIncludingGravity.x;
	    var y = event.accelerationIncludingGravity.y;
	    var z = event.accelerationIncludingGravity.z;
		
		var alpha = 0.6;
		var revision = 0;
		revision = (alpha * revision) + (1-alpha * x);
		
		$("#xVal").html(Math.round(revision));
		gradient(Math.round(revision));
		check(Math.round(revision));
		
		$("#yVal").html(y);
		$("#zVal").html(z);		
		
		
		var maxX = window.innerWidth - $("#ball").width();
		var maxY = window.innerHeight - $("#ball").height();

		var factor = 3;

		x = Math.round(x * factor);

		var orgX = $("#ball").css("left");
		orgX = parseFloat(orgX);

		var newX = orgX + x;
		newX = Math.max(0, newX);
		newX = Math.min(maxX, newX);
		//$("#tVal").html(Math.abs(Number(newX)));
		//check(Number(newX));
		

		$("#ball").css("left", Math.round(newX));

		y = Math.round(y * factor);

		var orgY = $("#ball").css("top");
		orgY = parseFloat(orgY);

		var newY = orgY - y;
		newY = Math.max(0, newY);
		newY = Math.min(maxY, newY);

		$("#ball").css("top", Math.round(newY));


	}

	window.addEventListener("devicemotion", handleMotionEvent, true);

	//$("#ball").css("left", 30);
	//$("#ball").css("top", 30);
	

	//document.getElementById("ssound").play();
	

});
