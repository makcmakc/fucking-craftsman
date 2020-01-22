<template>
	<div>
		<main>
			<div class="frame">
				<h1 class="frame__title">
					<router-link to="/">Fucking Craftsman</router-link>
				</h1>
			</div>

			<!--<div class="projects" >-->
			<div class="projects">

				<router-link to="/" class="grid-item arduino-js"></router-link>	
				<router-link to="/" class="grid-item go-wails"></router-link>

			</div>

		</main>
	</div>
</template>


<script>
	//import Page from '@/components/blog/page.vue'

	export default {
		components: {
		//	Page
		}
	};
</script>


<style lang="sass">

	.arduino-js
		background: url('../assets/img/_arduino-js.png') 50% 50%

	.go-wails
		background: url('../assets/img/_go-wails.png') 50% 50%

</style>