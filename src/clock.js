// Set up!
var a_canvas = document.getElementById("a");
var context = a_canvas.getContext("2d");
function drawCircle() {
	var d = new Date();
	var f = document.getElementById("sec");
	var hour = d.getHours() % 12;
	var minute = d.getMinutes();
	var second = d.getSeconds();
	var rad = [(hour/12*360)+(minute/60*360/12) + second/60*360/12/60, minute/60*360+second/60*360/60, second / 60 * 360];
	context.clearRect(0,0,200,200);
	context.beginPath();
	
	context.arc(100,100,90,0, 2*Math.PI);
	context.closePath();
	context.fillStyle="yellow";
	context.fill();

	context.beginPath();
	context.arc(100,100,5,0,2*Math.PI);
	context.closePath();
	context.fillStyle="black";
	context.fill();
	
	context.beginPath();
	context.moveTo(100, 100);
	context.lineTo(100+Math.cos(rad[2]*Math.PI/180-Math.PI/2)*70, 100 + Math.sin(rad[2]*Math.PI/180-Math.PI/2)*70);
	context.moveTo(100, 100);
	context.lineTo(100+Math.cos(rad[1]*Math.PI/180-Math.PI/2)*60, 100 + Math.sin(rad[1]*Math.PI/180-Math.PI/2)*60);
	context.moveTo(100, 100);
	context.lineTo(100+Math.cos(rad[0]*Math.PI/180-Math.PI/2)*40, 100 + Math.sin(rad[0]*Math.PI/180-Math.PI/2)*40);
	context.closePath();
	context.stroke();
	f.innerHTML = hour + ":" + minute + ":" + second;
	setTimeout("drawCircle()",1);
}

setTimeout("drawCircle()", 1);
