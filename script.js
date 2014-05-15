$(document).ready(function(){
	console.log("ready");	
	
	$('#im').click(function(){

	$("#ssound")[0].load();
	$("#ssound")[0].play();
		
	});
	
	var temp_x = 0;
	var count = 0;

	var gradient = function(number2){
		$('#im').css({"-webkit-transform": "rotate("+Number(number2)*10+"deg)"});
	}
	 
	
	var check = function (number1){
		
		if(count === 0){
			temp_x = (Number(number1));
			count++;		
			
		}else if(count === 1){
			
			if(temp_x < 0 && 0 < Number(number1)){ // temp_x가 음수 이고 number1이 양수일 때
				count++;
				$("#ssound")[0].load();
				$("#ssound")[0].play();
				setTimeout(function(){count = 0;},1100);
			}
			
			if(temp_x >= 0 && 0 > Number(number1)){ // temp_x가 0이거나 양수 이고 number1이 음수일 때
				count++;
				$("#ssound")[0].load();
				$("#ssound")[0].play();		
				setTimeout(function(){count = 0;},1100);		
			}
			/*
			if( temp_x != Math.abs(Number(number1)) ){
				//document.getElementById("ssound").play();
				count++;
				setTimeout(function(){count = 0;$("#ssound")[0].load();$("#ssound")[0].play();},1100);
			}
			*/
			
		}

	}

	function handleMotionEvent(event) {

	    var x = event.accelerationIncludingGravity.x;
	    var y = event.accelerationIncludingGravity.y;
	    var z = event.accelerationIncludingGravity.z;
		
		$("#xVal").html(Math.round(x));
		gradient(Math.round(x));
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
		check(Number(newX));
		

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
