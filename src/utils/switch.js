

module.exports = SineDraw => {
	window.requestAnimationFrame = window.requestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.msRequestAnimationFrame ||

	function(f) {
		return setTimeout(f, 1000 / 60)
	};



	function getPath(height) {
	let width = canvas.width;
	let spacing = 0.22;
	let loopNum = 0;
	let pointList = [];
	let i = 0;

	for (i = 0; i < width / 2; i++) {
	pointList[loopNum] = [loopNum, Math.sin(loopNum * spacing) * (i * height) + 15];
	loopNum++;
	}
	for (i = width / 2; i > 0; i--) {
	pointList[loopNum] = [loopNum, Math.sin(loopNum * spacing) * (i * height) + 15];
	loopNum++;
	}
	return pointList;
	}

	function draw() {
	let currentTime = new Date().getTime();
	let runTime = currentTime - startTime;

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "rgb(80, 100, 230)";

	let height = Math.sin(runTime * 0.008) * 0.4;
	let pointList = getPath(height);

	for (var i = 0; i < 60; i++) {
	if (i === 0) {
	ctx.moveTo(pointList[0][0], pointList[0][1]);
	} else {
	ctx.lineTo(pointList[i][0], pointList[i][1]);
	}
	}
	ctx.stroke();

	window.requestAnimationFrame(draw);
	}

	window.requestAnimationFrame(draw);

}