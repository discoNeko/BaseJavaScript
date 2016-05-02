(function(){
	var w = 800, h = 600;
	var moveCnt = 0;
	var moveOn = false;
	var requestId;

	var canvas = document.getElementById('canvas');
	canvas.addEventListener("click", onClick, false);
	canvas.addEventListener('mousemove', onMove, false);
	var ctx = canvas.getContext('2d');
	
	init();
	requestId = window.requestAnimationFrame(renderTitle); 

	function init(){

	}

	function renderTitle(){
		var str = "SampleText";
		var margin = w - 20*str.length;
		ctx.fillStyle = '#aaa';
		ctx.fillRect(0,0,w,h);
		ctx.font= 'bold 40px Meiryo';
		ctx.strokeStyle = '#333';
		ctx.lineWidth = 6;
		ctx.lineJoin = 'round';
		ctx.fillStyle = '#fff';
		ctx.strokeText(str,margin/2,455,510);
		ctx.fillText(str,margin/2,455);

		requestId = window.requestAnimationFrame(renderTitle); 
	}

	function renderPop(){
		var str = "SampleText";
		var m = (moveCnt<500) ? moveCnt : 1000 - moveCnt;
		var move = m*Math.abs(Math.sin(Math.PI*2*m/100));
		var margin = w - 20*str.length;
		ctx.fillStyle = '#aaa';
		ctx.fillRect(0,0,w,h);
		ctx.font= 'bold 40px Meiryo';
		ctx.strokeStyle = '#333';
		ctx.lineWidth = 6;
		ctx.lineJoin = 'round';
		ctx.fillStyle = '#fff';
		ctx.strokeText(str,margin/2,455-move,510);
		ctx.fillText(str,margin/2,455-move);
		moveCnt++;
		if(moveCnt==1000)moveCnt = 0;

		requestId = window.requestAnimationFrame(renderPop); 
	}

	function onClick(e){
		var rect = e.target.getBoundingClientRect();
		var x =  Math.round(e.clientX - rect.left);
		var y =  Math.round(e.clientY - rect.top);
		//console.log("click "+x+" "+y);

		//change animation to click.
		moveOn = !moveOn;
		if(moveOn){
			moveCnt = 0;
			window.cancelAnimationFrame(requestId);
			requestId = window.requestAnimationFrame(renderPop); 
		}else{
			window.cancelAnimationFrame(requestId);
			requestId = window.requestAnimationFrame(renderTitle); 
		}
	}

	function onMove(e){
		var rect = e.target.getBoundingClientRect();
		var x =  Math.round(e.clientX - rect.left);
		var y =  Math.round(e.clientY - rect.top);
		//console.log(x+" "+y);
	}
	
})();