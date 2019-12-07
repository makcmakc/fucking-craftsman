export default {
//	install(Vue, options) 
	install(Vue) {
		Vue.prototype.$message = function (html) {
			this.$toasted.show(`${html}`, {
				duration: 5000,
				icon: 'exclamation-circle'
			})	
		},
		Vue.prototype.$error = function(html) {
			this.$toasted.show(`[Ошибка] : ${html}`, {
				duration: 5000,
				icon: 'exclamation-circle'
			})	
		}
	}
}
