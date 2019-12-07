<template>
  <div class="home">
    
    <div class="main-title">
		<div class="header-flex">
			<div class="flex-center">

				<div class="container">
					<div class="row">
						<div class="col-sm-5 ">

							<div class="header-composition">
								<div class="welcome">
									<p><span>fucking craftsman</span></p>
									<h1 class="h1">Morning Glory</h1>
								</div>

								<p class="description">{{ $t('section_description') }}</p>

								<router-link 
									to="/morning-glory" class="butt">Enter</router-link>
							</div>

						</div>
					</div>
				</div>

			</div>
		</div>
	</div>


	<div class="footer-section">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="languages">
						<div class="english">EN</div>
						<div class="russian">RU</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<router-view/>

  </div>
</template>


<script>

export default {
	name: 'home',
	/*methods: {
		setLocale(locale) {
			import(`../locale/${locale}.json`).then(data => {
				this.$i18n.setLocaleMessage(locale, data)
				this.$i18n.locale = locale
				//console.log(data)

				@click="setLocale('en')"
				 @click="setLocale('ru')"
			})
		},
	}*/

};
</script>

<style lang="sass">

</style>