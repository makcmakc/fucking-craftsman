<template>
	<div class="witch__sound">
		<div class="witch__btn">
			<canvas id="canvas" width="60" height="30"></canvas>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'witch',
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