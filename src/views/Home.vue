<template>
	<div class="home">

		<Slider     
			animation="fade"
			v-model="sliderValue"
			:duration="2000"
			:speed="1500"
			:autoplay="false"
			:control-btn="true"
			:indicators="false"
		>

		<SliderItem
			v-for="(i, index) in sections"
			:key="index"
		>
			<div class="main-title">
				<div class="header-flex">
					<div class="flex-center">
						<div class="container">
							<div class="row">
								<div class="col-sm-5 ">
									<div class="header-composition">
										<div class="welcome">
											<p><span>fucking craftsman</span></p>
											<h1 class="h1">{{ i.sectionTitle }}</h1>
										</div>

										<p class="description">{{ i.sectionDescription }}</p>

										<router-link to="/morning-glory" class="butt">Enter</router-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</SliderItem>		
	
		</Slider>

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

import { Slider, SliderItem } from "vue-easy-slider";


export default {
	name: 'home',
	data:() => ({
		sliderValue: 3,
		sections: [
			{
				sectionTitle: "Morning Glory",
				sectionDescription: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Имеет о семь его великий напоивший текстов! По всей, своих, собрал."
			},
			{
				sectionTitle: "Blog",
				sectionDescription: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Имеет о семь его великий напоивший текстов! По всей, своих, собрал.",
			},
			{
				sectionTitle: "About",
				sectionDescription: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Имеет о семь его великий напоивший текстов! По всей, своих, собрал.",				
			}
		]
	}),

	components: {
		Menu,
		Navigation,
		Footer,
		Slider,
		SliderItem
	}
};
</script>

<style lang="sass">
.slider
	height: 100vh
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
