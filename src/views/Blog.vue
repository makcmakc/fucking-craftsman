<template>
	<div>
		<BlogSideBar />

		<main>
			<div class="title">
				<h1>Some Title</h1>
			</div>
			<div class="main-content">
				<p>				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi sunt fuga nulla aperiam pariatur, at dolor explicabo quam! Quas quod enim ipsum quisquam vel accusantium, possimus mollitia eveniet recusandae ut, autem doloremque eaque unde, repellendus illo nihil assumenda fugit modi minima eos pariatur maxime quidem! Fuga, repellat, natus. Fugit ullam nulla consequuntur reprehenderit quibusdam, velit numquam harum, consequatur commodi asperiores voluptates neque perferendis nisi exercitationem! Ullam id voluptates, quam blanditiis, similique itaque praesentium ea officia a, iure assumenda cumque deserunt fuga facilis nisi accusamus voluptatum illum. Officia fugit quis itaque tenetur, obcaecati praesentium esse recusandae quia eveniet inventore. Id.</p>

				<img src="@/assets/img/Okko Diablo.jpg">
			</div>
		</main>
	</div>
</template>


<script>
	
	import BlogSideBar from '@/components/BlogSideBar.vue'

	export default {
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

