<template>
	<div class="witch__sound">
		<div class="witch__btn">
			<canvas id="canvas" width="40" height="20"></canvas>
		</div>
	</div>
</template>


<script>
	//import '@/utils/switch.js'

	export default {
		name: 'witch',
		mounted() {
			let canvas = document.getElementById("canvas");
			let ctx = canvas.getContext("2d");
			let startTime = new Date().getTime();

			function getPath(height) {
				let width = canvas.width;
				let spacing = 0.28;
				let loopNum = 0;
				let pointList = [];
				let i = 0;

				for (i = 0; i < width / 2; i++) {
					pointList[loopNum] = [loopNum, Math.sin(loopNum * spacing) * (i * height) + 10];
					loopNum++;
				}
				for (i = width / 2; i > 0; i--) {
					pointList[loopNum] = [loopNum, Math.sin(loopNum * spacing) * (i * height) + 10];
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
			ctx.strokeStyle = "rgba(255, 255, 255, .8)";

			let height = Math.sin(runTime * 0.008) * 0.4;
			let pointList = getPath(height);

			for (var i = 0; i < 40; i++) {
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
	};
</script>


<style lang="sass">
.witch__sound
	cursor: pointer
	z-index: 99
	width: 40px
	height: 22px
	background: #fff
	position: fixed
	bottom: 2.1rem
	left: 72%			
	border-radius: 2px
	background: transparent
	border: 1px solid rgba(255, 255, 255, .4)
	
</style>