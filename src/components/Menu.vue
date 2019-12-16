<template>
	<div class="menu" v-on:click="toggle">
		<div class="hambergerIcon" :class="open"></div>
	</div>	
</template>


<script>
	export default {
		name: 'menu',
		data() {
			return {
				open: true
			}
		},
		methods: {
			toggle() {
				this.open = !this.open
			}
		}
	};
</script>


<style lang="sass">
@import '@/styles/menu'	
</style>