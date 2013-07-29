function init() {
	var can = document.getElementById("pacman");
	
	var wid = can.width;
	var hei = can.height;
	var radian = Math.PI/180;

	var context = can.getContext("2d");
	context.fillStyle = "#000000";
	context.stroke = "#ff0000";
	context.fillRect(0,0,wid,hei);

	context.fillStyle = "#f3f100";
	context.beginPath();

	context.moveTo(wid/2,hei/2);
	context.arc(wid/2,hei/2, 50, 40*radian,320*radian,false);
	context.lineTo(wid/2,hei/2);

	context.closePath();
	context.fill();
	context.stroke();
}
