<template>
	<div class="project">
		<SideBar />

		<div class="images"></div>

		<Article v-bind:project="project" />
	</div>
</template>


<script>
import SideBar from '@/components/project/SideBar.vue'
import Article from '@/components/project/Article.vue'

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
	background: url('../../assets/img/Electro-Harmonix Bass Microsynth.jpg')
	background-size: cover 
	background-position: 60% 50%

</style>
