<template>
	<div class="home">
   
		<div class="main-title">
			<div class="header-flex">
				<div class="flex-center">
					<div class="container" v-for="section in sections" v-bind:key="section">
						<div class="row">
							<div class="col-sm-5 ">
								<div class="header-composition">
									<div class="welcome">
										<p><span>fucking craftsman</span></p>
										<h1 class="h1">{{ section.sectionTitle }}</h1>
									</div>

									<p class="description">{{ section.sectionDescription }}</p>

									<router-link to="/morning-glory" class="butt">Enter</router-link>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>


		<Footer />

		<router-view/>
		<Menu />
		<Navigation />
	</div>
</template>


<script>
import Menu from '@/components/Menu.vue'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default {
	name: 'home',
	data:() => ({
		sections: [
			{
				sectionTitle: "Morning Glory",
				sectionDescription: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Имеет о семь его великий напоивший текстов! По всей, своих, собрал.",
				index: 0
			},
			/*{
				sectionTitle: "Blog",
				sectionDescription: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Имеет о семь его великий напоивший текстов! По всей, своих, собрал.",
				link: ""
			},
			{
				sectionTitle: "About",
				sectionDescription: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Имеет о семь его великий напоивший текстов! По всей, своих, собрал.",
				link: ""				
			}*/
		]
	}),
	components: {
		Menu,
		Navigation,
		Footer
	}
};
</script>

<style lang="sass">
</style>


<!--
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
}*/-->
