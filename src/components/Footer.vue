<template>
		<footer class="footer-section">
			<div class="container">
				<div class="row">

					<SwitchSound />

					<div class="col-md-4">
						<div class="languages">
							<div 
								class="english language" 
								v-bind:class="{ active: !active}"
								>EN
							</div>
							<div 
								class="russian language" 
								v-bind:class="{ active: active}"
								>RU
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</footer>
</template>


<script>
	import SwitchSound from '@/components/Switch'

	export default {
		name: 'f-ooter',
		components: { SwitchSound },
		data() {
			return {
				active: true
			}
		},
		methods: {

		}
	};
</script>


<style lang="sass">
</style>