<template>
		<footer class="footer-section">
			<div class="container">
				<div class="row">

					<SwitchSound />

					<div class="col-md-4">
						<div class="languages">
							<div 
								class="english language" 
								:class="{ active: !ru }"
								@click="toggleLang"
								>EN
							</div>
							<div 
								class="russian language" 
								:class="{ active: ru }"
								@click="toggleLang"
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
				ru: true
			}
		},
		methods: {
			toggleLang() {	
				this.ru = !this.ru			
			}
		}
	};
</script>


<style lang="sass">
</style>