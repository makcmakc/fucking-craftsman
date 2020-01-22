<template>
	<div>

		<main >

			<div class="frame">
				<h1 class="frame__title">
					<router-link to="/">Fucking Craftsman</router-link>
				</h1>
			</div>

			<div class="content">
				<form class="form" @submit.prevent="submitHandler">

					<div class="form__title">> create an account</div>

					<!-- /* NAME VALIDATION */ -->
					<div class="form__item">
						<div class="form-group">
							<div class="styled-input">
								<input 
									type="text" 
									placeholder="Your Name" 
									class="styled-input__input form-control" 
									v-model.trim="$v.firstname.$model"
									:class="{'is-invalid':$v.firstname.$error, 'is-valid':!$v.firstname.$invalid }">

									<div class="styled-input__circle"></div>								
									<div class="valid-feedback">Your name is vaild!</div>

									<div class="invalid-feedback">
										<span v-if="!$v.firstname.required">Name is required.</span>
										<span v-if="!$v.firstname.minLength">Name must have at least {{ $v.firstname.$params.minLength.min}} letters.</span>							
										<span v-if="!$v.firstname.maxLength">Name must have at most {{ $v.firstname.$params.maxLength.max}} letters.</span>							
									</div>	
								</div>
							</div>
					</div>

					<!-- /* EMAIL VALIDATION */ -->
					<div class="form__item">
						<div class="form-group">
							<div class="styled-input">
								<input  
									placeholder="Your Email" 
									class="styled-input__input form-control" 
									v-model.trim="email"
									:class="{'is-invalid':$v.email.$error, 'is-valid':!$v.email.$invalid }">

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
									id="password" 
									class="styled-input__input form-control"
									v-model.trim="$v.password.$model"
									:class="{'is-invalid':$v.password.$error, 'is-valid':!$v.password.$invalid }">

									<div class="styled-input__circle"></div>									
									<div class="valid-feedback">Your Password is vaild!</div>

									<div class="invalid-feedback">
										<span v-if="!$v.password.required">Password is required</span>
										<span v-if="!$v.password.minLength">Password must be at least {{ $v.password.$params.minLength.min }}</span>
									</div>	
								</div>				
						</div>
					</div>

					<!-- /* SHOW / HIDE PASSWORD */ -->
					<div class="form__item">
						<div class="form-group form-check">
							<input 
								type="checkbox" 
								id="showpassword" 
								v-on:click="toggleShowPassword"
								v-model="showpassword">
							<label for="showpassword" class="check-box"></label>
							<div>Show Password</div>
						</div>	
					</div>				

					<!-- /* SUBMIT BUTTON */ -->
					<div class="form__item">
						<input class="butt" type="submit" value="Sign up">
					</div>
				</form>

				<div class="to-login">
					<p>Уже есть аккаунт?</p>
					<router-link to="/login">Войти</router-link>
				</div>
			</div>
		</main>		

	</div>
</template>


<script>
import { required, minLength, email, maxLength } from 'vuelidate/lib/validators'
import messages from '@/utils/messages'

	export default {
		name: 'register',
		data: () => ({
			email: '',
			password: '',
			firstname: '',
			showpassword: false
		}),
		validations: {
			firstname: {
				required,
				minLength: minLength(5),
				maxLength: maxLength(30)
			},	
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
				minLength: minLength(6),
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
					name: this.firstname,
					password: this.password
				}	

				try {
					await this.$store.dispatch('register', formData)
					this.$router.push('/')	
				} catch (e)	{
					throw e
				}	
			},
			toggleShowPassword() {
				let show = document.getElementById('password')
				if (this.showpassword == false) {
					this.showpassword = true
					show.type = 'text'
				} else {
					this.showpassword = false
					show.type = 'password'
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
		}			
	};
</script>


<style lang="sass"></style>
