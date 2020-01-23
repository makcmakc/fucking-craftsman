<template>
	<div class="project">
		<SideBar />

		<div class="images"></div>

		<Article v-bind:project="project"/>
	</div>
</template>


<script>
import SideBar from '@/components/project/SideBar.vue'
import Article from '@/components/project/Article.vue'

	export default {	
		data:() => ({
			project: 'FuzzFactory'
		}),			
		components: {
			SideBar,
			Article
		}			
	};
</script>


<style lang="sass" scoped>
.images
	background: url('../../assets/img/_Fuzz_Factory.jpg')
	background-size: cover 
</style>