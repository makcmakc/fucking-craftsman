		
/* eslint-disable */


function SineWave() {

	let waves = new SineWaves({
		el: document.getElementById('waves'),
		speed: 5,
		width: '50px',
		height: '30px',
		wavesWidth: '95%',
		ease: 'SineInOut',
		waves: [{
			timeModifier: 1,
			lineWidth: 1,
			amplitude: 10,
			wavelength: 5,
			segmentLength: 1
		}],
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

			// Clean Up
			index = void 0;
			length = void 0;
			gradient = void 0;
		}
	});

}

module.exports = SineWave