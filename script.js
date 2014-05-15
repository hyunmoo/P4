$(document).ready(function(){
	
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

	}

	function handleMotionEvent(event) {

	    var x = event.accelerationIncludingGravity.x;
	    var y = event.accelerationIncludingGravity.y;
	    var z = event.accelerationIncludingGravity.z;
		
		$("#xVal").html(Math.round(x));
		gradient(Math.round(x));
		check(Math.round(x));
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
