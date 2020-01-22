<template>
	<div class="switch__sound" v-on:click="OnOff">
		<canvas id="wave"></canvas>
	</div>
</template>


<script>
	import SineWaves from 'sine-waves'

	export default {
		data: () => ({
			sound: true
		}),
		mounted() {
			new SineWaves({
			el: document.getElementById('wave'),
			speed: 4,
			width: '50px',
			height: '30px',
			wavesWidth: '95%',
			ease: 'SineInOut',
			waves: [
				{
					timeModifier: 1,
					lineWidth: 1,
					amplitude: 12,
					wavelength: 5,
					segmentLength: 1
				},
			],
			resizeEvent: function() {
				let gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
				gradient.addColorStop(0,"rgba(0, 0, 0, 0)");
				gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
				gradient.addColorStop(1,"rgba(0, 0, 0, 0)");

				let index = -1;
				let length = this.waves.length;

				while(++index < length){
					this.waves[index].strokeStyle = gradient;
				}

				index = void 0;
				length = void 0;
				gradient = void 0;
			}
			});


		},
		methods: {
			OnOff() {}
		}
	};

</script>


<style lang="sass">

.switch__sound
	cursor: pointer
	z-index: 999
	width: 50px
	height: 30px
	background: #fff
	position: fixed
	bottom: 1.8rem
	left: 72%			
	border-radius: 2px
	background: transparent
	//border: 1px solid rgba(255, 255, 255, .4)
	color: #aaa

	#wave
		width: 50px
		height: 30px

</style>