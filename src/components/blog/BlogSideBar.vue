<template>
	<div class="sidebar">
		<ul>
			<li>
				<router-link to="/" class="exit">
					<img src="@/assets/icons/exit.svg">
				</router-link>
			</li>
			<li>
				<a class="font">
					<img src="@/assets/icons/text-font.svg">
				</a>
			</li>
			<li>
				<a class="search">
					<img src="@/assets/icons/search.svg">
				</a>				
			</li>
		</ul>
	</div>
</template>


<script>
	export default {

	};
</script>


<style lang="sass">
@import '@/styles/vars.sass'

.sidebar
	position: absolute
	width: 40px
	height: 100vh
	border-right: 1px solid $gray
	left: 0
	top: 0

	ul
		position: relative
		left: -40px

		li
			width: 40px
			height: 50px
			border-bottom: 1px solid $gray
			padding: 10px 10px





</style>