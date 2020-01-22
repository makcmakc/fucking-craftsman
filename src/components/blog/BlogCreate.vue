<template>
	<div class="blog">
		<form>
			<div class="blog__title">
				<label for="blog-title">Title</label>
				<input type="text" class="create__title" id="blog-title">
			</div>

			<div class="blog__subject">
				<label for="blog-subject">Subject</label>
				<input type="text" class="create__subject" id="blog-subject">
			</div>

			<div class="blog__content">
				<label for="blog-content">Content</label>
				<textarea type="text" class="create__content" id="blog-content"></textarea>
			</div>

			<a class="butt">Создать</a>
		</form>
	</div>
</template>


<script>
	export default {
		data: () => ({
			title: '',
			subject: '',
			content: ''
		}),
	};
</script>


<style>
	
</style>