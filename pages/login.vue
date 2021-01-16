<template>
  <section class="login">
    <div class="login__logo">
      <Logo />
    </div>
    <div class="login__form">
      <Input
        type="text"
        placeholder="Login"
        v-model="login"
        :errors="!$v.login.required ? ['Пожалуйста заполните поле'] : null"
      />
      <Input
        type="password"
        placeholder="Password"
        v-model="password"
        :errors="!$v.password.required ? ['Пожалуйста заполните поле'] : null"
      />
      <Button
        :text="hasAccount ? 'Войти' : 'Зарегистрироваться'"
        @click.native="hasAccount ? auth() : register()"
      />
    </div>
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Logo from '@/components/Logo'
export default {
  layout: 'empty',
  components: {
    Logo,
    Input,
    Button,
  },

  data: () => ({
    login: '',
    password: '',
  }),
  validations: {
    login: { required },
    password: { required },
  },
  methods: {
    async auth() {
      if (!this.$v.$invalid) {
        try {
          await this.$store.dispatch('LOGIN', {
            login: this.login,
            password: this.password,
          })
          this.$router.push('/profile')
          this.$toast.success('Вы успешно авторизовались')
        } catch (error) {
          this.$toast.error('Неверные логин или пароль')
        }
      }
    },
    async register() {
      if (!this.$v.$invalid) {
        await this.$store.dispatch('REGISTER', {
          login: this.login,
          password: this.password,
        })
        this.$router.push('/profile')
      }
    },
  },
  computed: {
    hasAccount() {
      return this.$store.state.hasAccount
    },
  },
}
</script>

<style scoped lang='scss'>
.login {
  text-align: center;
  max-width: 358px;
  width: 100%;
  padding: 0 32px;
  &__form {
    margin: 60px 0 0;
  }
}
</style>