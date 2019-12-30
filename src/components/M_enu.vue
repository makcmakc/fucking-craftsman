<template>
	<div>
		<div class="menu" v-on:click="toggle">
			<div class="hambergerIcon" v-bind:class="{ open: open}">
				
			</div>
			<div class="close"></div>
		</div>	

		<!--<div class="overlay">
			<div class="data">
				<ul class="el">
					<li><a href="#">Morning Glory</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Details</a></li>
					<li><a href="#">About</a></li>
				</ul>
			</div>
		</div>-->
	</div>	
</template>


<script>
	//import { TimelineMax } from 'gsap'

	export default {
		name: 'm-enu',
		data() {
			return {
				open: false				
			}
		},
		methods: {
			toggle() {
				this.open = !this.open
			},
		}

	};
</script>


<style lang="sass">
@import '@/styles/menu'	

.overlay
	
	.data
		position: absolute
		top: 8rem
		right: 15rem
li
	list-style: none
	font-size: 2.7rem	
	text-align: right

</style>