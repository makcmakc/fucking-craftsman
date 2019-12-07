<template>
	<div>
		<div class="name">Name: Max</div>
		<div class="email">Email: makcmakc321@mail.ru</div>
		<div class="password">Password: 123456789</div>

		<a href="#">LogOut</a>
	</div>
</template>


<script>
	export default {
		methods: {
			async logout() {
				await this.$store.dispatch('logout')
				this.$router.push('')
			}
		},
	};
</script>


<style>
	
</style>