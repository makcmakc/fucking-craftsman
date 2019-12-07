<template>
	<div>

		<main>
			<div class="content">
				<form class="form" @submit.prevent="submitHandler">

					<div class="form__title">> login</div>
					
						<!-- /* EMAIL VALIDATION */ -->
						<div class="form__item">
							<div class="form-group">
								<div class="styled-input">
									<input 
										name="Your Email"
										placeholder="Your Email" 
										class="styled-input__input form-control" 
										v-model.trim="email"
										:class="{'is-invalid':$v.email.$error, 'is-valid':!$v.email.$invalid }">

									<!--<div class="styled-input__placeholder">
										<span class="styled-input__placeholder-text">Your Email</span>
									</div>-->
									<div class="styled-input__circle"></div>

									<div class="valid-feedback">Your Email is vaild!</div>	

									<div class="invalid-feedback">
										<span v-if="!$v.email.required">Email is required</span>
										<span v-if="!$v.email.isUnique">This Email not valid</span>
									</div>									
								</div>
							</div>	
						</div>

						<!-- /* PASSWORD VALIDATION */ -->
						<div class="form__item">
							<div class="form-group">
								<div class="styled-input">
									<input 
										type="password" 
										placeholder="Password" 
										class="styled-input__input form-control"
										v-model.trim="$v.password.$model"
										:class="{'is-invalid':$v.password.$error, 'is-valid':!$v.password.$invalid }">

									<!--<div class="styled-input__placeholder">
										<span class="styled-input__placeholder-text">Password</span>
									</div>-->
									<div class="styled-input__circle"></div>

									<div class="valid-feedback">Your Password is vaild!</div>

									<div class="invalid-feedback">
										<span v-if="!$v.password.required">Password is required</span>
										<span v-if="!$v.password.minLength">Password must be at least {{ $v.password.$params.minLength.min }}</span>
									</div>										
								</div>	


							</div>
						</div>

					<!-- /* SUBMIT BUTTON */ -->
					<div class="form__item">
						<input class="butt" type="submit" value="Login">
					</div>

				</form>

				<div class="to-login">
					<p>Зарегистрироваться</p>
					<router-link to="/register">Можно тут</router-link>
				</div>				
			</div>
		</main>		

	</div>
</template>


<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
import messages from '@/utils/messages'

	export default {
		name: 'login',
		data: () => ({
			email: '',
			password: ''
		}),
		validations: {
			email: {
				required,
				email,
				isUnique(value) {
					if (value === '') return true

					// eslint-disabled-next-line
					const emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;

					return new Promise(resolve => {
						setTimeout(() => {
							resolve(emailRegex.test(value))
						}, 350 + Math.random() * 300)
					})
				}
			},	
			password: {
				required,
				minLength: minLength(6)
			},													
		},	
		methods: {
			async submitHandler() {		
				if (this.$v.$invalid) {
					this.$v.$touch()
					return
				}

				const formData = {
					email: this.email,
					password: this.password
				}	

				try {
					await this.$store.dispatch('login', formData)
					this.$router.push('/')	
				} catch (e)	{
					throw e
				}	
			}			
		},
		computed: {
			error() {
				return this.$store.getters.error
			}
		},
		watch: {
			error(fbError) {
				this.$error(messages[fbError.code] || 'Что то пошло не так')
			}			
		},
		mounted() {
			if (messages[this.$route.query.message]) {
				this.$message(messages[this.$route.query.message])
				this.$message('test')
			}			
		}		
	};
</script>


<style lang="sass"></style>


<!--
	// To SQLLite backend
	import AuthenticationService from '@/services/auth'

		methods: {
			async submitHandler() {
				try {
					await AuthenticationService.login({
						email: this.email,
						password: this.password
					})
				} catch (error) {
					this.error = error.response.data.error
				}
			}
		}
-->


