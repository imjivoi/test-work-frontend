export default ({ $axios, $cookies }) => {
  $axios.onRequest((config) => {
    $axios.setToken($cookies.get('access_token'), 'JWT')
  })
}
