<template>
	<div class="home">

		<!--<Theme />-->

		<Slider     
			animation="fade"
			v-model="sliderValue"
			:duration="1000"
			:speed="1000"
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

											<router-link
												:key="i.url"
												:to="i.url"
												class="butt"
											>
											Enter
											</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="navigation">
					<a v-if="sliderValue > 0" class="button prev" v-on:click="moveFromIndex(index)"></a>
					<a v-if="sliderValue !== 1" class="button next" v-on:click="moveToIndex(index)"></a>
				</div>						
			</SliderItem>		
		</Slider>

		<Footer />
		<router-view/>
		<Menu />

	</div>
</template>


<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer'
//import Theme from '@/components/Theme'
import { Slider, SliderItem } from "vue-easy-slider";



export default {
	name: 'home',
	data:() => ({
		sliderValue: 0,
		sections: [
			{
				sectionTitle: "Morning Glory",
				sectionDescription: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Имеет о семь его великий напоивший текстов! По всей, своих, собрал.",
				url: "/morning-glory"
			},
			{
				sectionTitle: "R.E.M.I.C.O.R.E",
				sectionDescription: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Имеет о семь его великий напоивший текстов! По всей, своих, собрал.",
				url: "/remicore"
			}	
		]		
	}),
	components: {
		Menu,
		Footer,
		Slider,
		SliderItem,
	//	Theme
	},
	methods: {
		moveToIndex(index) {
			this.sliderValue = ++index
		},
		moveFromIndex(index) {
			this.sliderValue = --index		
		}
	},
};
</script>

<style lang="sass">
.slider
	height: 100vh !important
</style>
