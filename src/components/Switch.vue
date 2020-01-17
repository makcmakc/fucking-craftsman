<template>
	<div class="switch__sound">
		wave<canvas id="wave"></canvas>
	</div>
</template>


<script>

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
	border: 1px solid rgba(255, 255, 255, .4)
	color: #aaa

	#wave
		width: 50px
		height: 30px
		cursor: pointer

</style>