<template>
	<div>

		<main>
			<div class="frame">
				<h1 class="frame__title">
					<router-link to="/">Fucking Craftsman</router-link>
				</h1>
			</div>

			<div class="projects" >
				
				<router-link to="/microsynth" class="grid-item micro-synth"></router-link>

				<router-link to="/okko-diablo" class="grid-item okko-diablo"></router-link>

				<router-link to="/fuzz-factory" class="grid-item fuzz-factory"></router-link>

				<router-link to="/big-muff" class="grid-item big-muff"></router-link>

				<router-link to="/tube-mic" class="grid-item tube-mic"></router-link>

				<router-link to="/tube-head" class="grid-item tube-head"></router-link>

			</div>
		</main>

	</div>
</template>


<script>

	export default{
		name: 'morning-glory',
	};
</script>


<style lang="sass">


</style>	