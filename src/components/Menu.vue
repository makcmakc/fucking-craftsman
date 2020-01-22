<template>
	<div>
		<div class="overlay">
			<div class="data">
				<ul class="el">
					<router-link
						v-for="link in links"
						:key="link.url"
						tag="li"
						:to="link.url"
					>
					<a>{{link.title}}</a>
				</router-link>
				</ul>
			</div>			
		</div>

		<div class="menu" v-on:click="toggle">
			<div class="hambergerIcon" v-bind:class="{ open: open}"></div>
			<div class="close"></div>
		</div>	
		
	</div>	
</template>


<script>
	//import localizeFilter from '@/filters/localize.filter'
	//import { TimelineMax } from 'gsap'

	export default {
		name: 'm-enu',
		data: () => ({
			open: false,
			links: [
				{ title: 'Morning Glory'/*localizeFilter('morning-glory')*/, url: '/morning-glory' },
				{ title: 'Blog'/*localizeFilter('blog')*/, url: '/blog' },
				{ title: 'Profile'/*localizeFilter('profile')*/, url: '/login' },
				{ title: 'R.E.M.I.C.O.R.E'/*localizeFilter('remicore)*/, url: '/remicore' },
			]
		}),
		methods: {
			toggle() {
				this.open = !this.open
				let overlay = document.querySelector('.overlay')
				if (this.open === true ) {
					overlay.style.opacity = '.95' 
					overlay.style.zIndex = 99
				} else {
					overlay.style.opacity = '0' 	
					overlay.style.zIndex = 0
				}    

			},
		}

	};
</script>


<style lang="sass">
@import '@/styles/menu'	
  
.overlay
  width: 100vw
  height: 100vh
  position: absolute
  background: #000
  opacity: 0
  transition: all 1s
  top: 0%
  

  .data
    position: absolute
    right: 22%
    top: 22%

    li
      list-style: none
      font-size: 2.7rem 
      text-align: right   
</style>