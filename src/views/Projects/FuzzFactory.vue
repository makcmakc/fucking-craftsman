<template>
	<div class="project">
		<SideBar />

		<div class="images"></div>

		<Article v-bind:project="project"/>
	</div>
</template>


<script>
import SideBar from '@/components/api/SideBar.vue'
import Article from '@/components/api/Article.vue'

	export default {	
		components: {
			SideBar,
			Article
		},
		data() {
			return {
				
			}
		}			
	};
</script>


<style lang="sass" scoped>
.images
	background: url('../../assets/img/_Fuzz_Factory.jpg')
	background-size: cover 
</style>