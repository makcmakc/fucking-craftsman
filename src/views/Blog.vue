<template>
	<div>
		<blogCreate />
	</div>
</template>


<script>
	import blogCreate from '@/components/blogCreate.vue'
	export default {
		components: {
			blogCreate
		}
	};
</script>


<style>
	
</style>

<!--
		<div class="main-title">
			<div class="header-flex">
				<div class="flex-center">

					<div class="container">
						<div class="row">
							<div class="col-sm-5 ">

								<div class="header-composition">
									<div class="welcome">
										<p><span>fucking craftsman</span></p>
										<h1 class="h1">My Blog</h1>
									</div>

									<p class="description">{{ $t('section_description') }}</p>

									<router-link to="/blog" class="butt">Enter</router-link>
								</div>

							</div>
						</div>
					</div>

				</div>
			</div>
		</div>	
-->		