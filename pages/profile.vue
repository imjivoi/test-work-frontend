<template>
  <section class="profile">
    <h1>Мой профиль</h1>
    <div class="profile__block">
      <p v-if="isLoading" style="text-align: center">Загрузка ...</p>
      <div class="profile__form" v-else>
        <form action="">
          <div class="form__block">
            <Input
              label="Имя"
              type="text"
              :border="false"
              v-model="first_name"
              :errors="
                !$v.first_name.required ? ['Пожалуйста заполните поле'] : null
              "
            />
            <Input
              label="Фамилия"
              type="text"
              :border="false"
              v-model="last_name"
              :errors="
                !$v.last_name.required ? ['Пожалуйста заполните поле'] : null
              "
            />
          </div>
          <div class="form__block">
            <Input
              label="Сменить пароль"
              type="password"
              :border="false"
              v-model="new_password"
            />
            <Input
              label="Сменить логин"
              type="text"
              :border="false"
              v-model="login"
              :errors="
                !$v.login.required ? ['Пожалуйста заполните поле'] : null
              "
            />
          </div>
        </form>
        <div class="form__btn">
          <Button text="Сохранить" @click.native="save()" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

import { mapState } from 'vuex'
import Button from '@/components/Button'
import Input from '@/components/Input'
export default {
  components: { Input, Button },
  data: () => ({
    first_name: '',
    last_name: '',
    login: '',
    new_password: '',
    current_password: '',
    errors: false,
    isLoading: true,
  }),
  validations: {
    first_name: { required },
    last_name: { required },
    login: { required },
  },
  mounted() {
    this.first_name = this.$store.state.userData.first_name
    this.last_name = this.$store.state.userData.last_name
    this.login = this.$store.state.userData.login
    this.isLoading = false
  },

  methods: {
    save() {
      if (!this.$v.$invalid) {
        this.$store.dispatch('CHANGE_DATA', {
          first_name: this.first_name,
          last_name: this.last_name,
          login: this.login,
        })
        if (this.new_password.length) {
          this.current_password = prompt('Введите свой текущий пароль')
          this.$store.dispatch('CHANGE_PASSWORD', {
            new_password: this.new_password,
            current_password: this.current_password,
          })
        }
      }
    },
  },
}
</script>

<style scoped lang='scss'>
.profile {
  width: 100%;
  &__block {
    @include block;
  }

  &__form {
    form {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  .form__block {
    min-width: 40%;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }

  .form__btn {
    margin: 0 0 0 auto;
    width: 300px;

    @media screen and (max-width: 800px) {
      margin: 0;
      width: 100%;
    }
  }
}
</style>