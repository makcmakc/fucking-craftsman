<template>
	<div class="project">
		<SideBar />

		<Loader />
	</div>
</template>


<script>
import SideBar from '@/components/api/SideBar.vue'
import Loader from '@/components/api/Loader.vue'
	export default {
		components: {
			SideBar,
			Loader
		}
	};
</script>

<style lang="sass" scoped>

.sidebar
	border-right: 1px solid rgba(255, 255, 255, 0.2)
	position: absolute

</style>
