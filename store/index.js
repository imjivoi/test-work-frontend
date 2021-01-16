export const state = () => ({
  userData: {},
  isLogged: false,
  hasAccount: false,
})

export const mutations = {
  SET_USER_DATA(state, payload) {
    state.userData = payload
  },
  SET_LOGGED(state, payload) {
    state.isLogged = true
  },
  SET_TOKEN(state, payload) {
    this.$cookies.set('access_token', payload)
  },
  SET_HAS_ACC(state) {
    state.hasAccount = true
  },
  CLEAR_STATE(state) {
    state.userData = {}
    state.isLogged = false
    this.$cookies.remove('access_token')
  },
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { app }) {
    const hasAccount = app.$cookies.get('has_account')
    const token = app.$cookies.get('access_token')
    if (hasAccount) {
      await commit('SET_HAS_ACC')
    }
    if (token) {
      await dispatch('GET_USER_DATA')
    }
  },

  LOGIN({ state, commit, dispatch }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await this.$axios.post('auth/obtain_token/', payload)
        commit('SET_TOKEN', data.access)
        commit('SET_LOGGED')
        if (!Object.keys(state.userData).length) {
          await dispatch('GET_USER_DATA')
        }
        resolve(data)
      } catch (error) {
        reject(error)
      }
    })
  },
  REGISTER({ commit, dispatch }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await this.$axios.post('auth/users/', payload)
        commit('SET_USER_DATA', data)
        commit('SET_HAS_ACC')
        resolve(data)
        await dispatch('LOGIN')
      } catch (error) {}
      reject(error)
    })
  },

  async GET_USER_DATA({ commit }) {
    try {
      const { data } = await this.$axios.get('auth/users/me')
      commit('SET_USER_DATA', data)
      commit('SET_LOGGED')
    } catch (error) {}
  },
  async LOGOUT({ commit }) {
    commit('CLEAR_STATE')
    this.$toast.show('Вы вышли из аккаунта')
  },
  async CHANGE_DATA({ commit }, payload) {
    try {
      const { data } = await this.$axios.put('auth/users/me/', payload)
      commit('SET_USER_DATA', data)
      this.$toast.success('Данные успешно изменены')
    } catch (error) {}
  },
  async CHANGE_PASSWORD({}, payload) {
    try {
      await this.$axios.post('auth/users/set_password/', payload)
      this.$toast.success('Пароль успешно изменен')
    } catch (error) {
      this.$toast.error('Неверный текущий пароль')
    }
  },
}
