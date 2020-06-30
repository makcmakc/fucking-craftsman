<template>
	<div>

		<main>
			<div class="frame">
				<h1 class="frame__title">
					<router-link to="/">Fucking Craftsman</router-link>
				</h1>
			</div>

			<div class="projects" >
				<router-link
					v-for="project in projects"
					:key="project.id"
					:to="project.id"
					class="grid-item"
					:class="project.id">
				</router-link>
			</div>
		</main>

	</div>
</template>


<script>

	export default{
		name: 'morning-glory',
		computed: {
			projects() {
				return this.$store.getters.projects
			}
		},		
		mounted() {
			this.$store.dispatch('getProjects')
		}
	};
</script>

