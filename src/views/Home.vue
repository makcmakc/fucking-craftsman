<template>
	<div class="home">

		<Theme />

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
					<a v-if="sliderValue >= 1" class="button prev" v-on:click="moveFromIndex(index)"></a>
					<a v-if="sliderValue !== 3" class="button next" v-on:click="moveToIndex(index)"></a>
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
import Theme from '@/components/Theme'
import { Slider, SliderItem } from "vue-easy-slider";


const fakeData = require ('../fakeData.json')

export default {
	name: 'home',
	data:() => ({
		sliderValue: 0,
		sections: fakeData.sections
	}),
	components: {
		Menu,
		Footer,
		Slider,
		SliderItem,
		Theme
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
