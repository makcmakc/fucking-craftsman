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

				<router-link
					v-for="article in articles"
					:key="article.id"
					:to="article.id"
					class="grid-item"
					:class="article.id">
				</router-link>

			</div>

		</main>
	</div>
</template>


<script>
	export default {
		computed: {
			articles() {
				return this.$store.getters.articles
			}
		},		
		mounted() {
			this.$store.dispatch('getArticles')
		}
	};
</script>


<style lang="sass">

</style>