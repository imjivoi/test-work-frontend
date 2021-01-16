export default function ({ store, route, redirect }) {
  if (!store.state.isLogged && route.name !== 'login') {
    redirect('/login')
  }
  if (route.path === '/') {
    redirect('/profile')
  }
}
