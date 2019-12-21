<template>
	<div>
		<div class="navigation">
			<a class="button prev" ></a>
			<a class="button next" ></a>
		</div>		
	</div>
</template>


<script>
	export default {
		name: 'navigation',		
	};
</script>


<style lang="sass">

.navigation 
	.next
		position: absolute
		top: 47%
		right: 15px

	.prev
		position: absolute
		top: 47%
		left: 17px

	.button
		border: 2px solid #fff
		background-color: transparent
		border: 1.5px solid rgba(255, 255, 255, 0.5)
		border-radius: 50%
		cursor: pointer
		transition: all 0.4s
		width: 50px
		height: 50px
		outline: none

		&:hover
			border-top: 1px solid #000
			border-bottom: 1px solid #000
			box-shadow: 0 0 0 0.1rem rgba(255,197,39, 0.9)
			animation: rotate 0.8s linear infinite
			transition: all 0.4s

@keyframes rotate
	100%
		transform: rotate(360deg)

</style>