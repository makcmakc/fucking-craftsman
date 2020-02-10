<template>
	<div>
		<BlogSideBar />

		<main>
			<div class="title">
				<h1>{{ content.title }}</h1>
			</div>
			<div class="main-content">
				<p>{{ content.body }}</p>

				<img src="@/assets/img/Okko Diablo.jpg">
			</div>
		</main>
	</div>
</template>


<script>
	
	import BlogSideBar from './BlogSideBar.vue'

	export default {
		props: [
			'content'
		],
		components: {
			BlogSideBar
		}
	};
</script>


<style lang="sass">
.main-content

	width: 600px
	color: #fff
	margin: 0 auto


main
	position: relative
	.title
		text-align: center
		font-style: italic
		color: #fff

	img
		margin-top: 5px

</style>

