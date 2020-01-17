<template>
	<div class="project">

		<SideBar />

		<div class="images"></div>

		<!--<Article />-->
	</div>
</template>


<script>
import SideBar from '@/components/api/SideBar.vue'
//import Article from '@/components/api/Article'

//const fakeData = require ('../../fakeData.json')

	export default {
		data:() => ({
			//project: fakeData.projects
		}),		
		 mounted() {

		},
		components: {
			SideBar,
			//Article
		}
	};
</script>


<style lang="sass" scoped>

.images
	background: url('../../assets/img/Okko Diablo.jpg')
	background-size: cover 

</style>