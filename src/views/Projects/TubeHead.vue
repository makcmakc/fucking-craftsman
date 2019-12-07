<template>
	<div class="project">
		<SideBar />
		
		<div class="project-title">
		
		</div>

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
	position: absolute;

.project-title
	h2
		position: fixed;
		margin: auto 48%
		width: 100% 
		color: #FF6901
		top: 10rem
</style>
