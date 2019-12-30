<template>
	<div class="home">

		<Slider     
			animation="fade"
			v-model="sliderValue"
			:duration="2000"
			:speed="1500"
			:autoplay="false"
			:control-btn="false"
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

			<div class="navigation">
				<a class="button prev" v-on:click="moveFromIndex(index)"></a>
				<a class="button next" v-on:click="moveToIndex(index)"></a>
			</div>						

		</SliderItem>		
	
		</Slider>

		<Footer />

		<router-view/>
		<Menu />

	</div>
</template>


<script>
import Menu from '@/components/M_enu.vue'
import Footer from '@/components/F_ooter'

import { Slider, SliderItem } from "vue-easy-slider";


export default {
	name: 'home',
	data:() => ({
		sliderValue: 0,
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
		Footer,
		Slider,
		SliderItem
	},
	methods: {
		moveToIndex(index) {
			this.sliderValue = ++index
		},
		moveFromIndex(index) {
			this.sliderValue = --index		
		}
	}
};
</script>

<style lang="sass">
.slider
	height: 100vh !important
</style>
