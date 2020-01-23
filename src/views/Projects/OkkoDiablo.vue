<template>
	<div class="project">

		<SideBar />

		<div class="images"></div>

		<Article v-bind:project="project" />

	</div>
</template>


<script>
import SideBar from '@/components/project/SideBar.vue'
import Article from '@/components/project/Article'
	export default {
		data: () => ({
			project: 'OkkoDiablo'
		}),	
		components: {
			SideBar,
			Article
		}
	};
</script>


<style lang="sass" scoped>

.images
	background: url('../../assets/img/Okko Diablo.jpg')
	background-size: cover 

</style>