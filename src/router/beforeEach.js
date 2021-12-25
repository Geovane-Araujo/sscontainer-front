export default async (to, from, next) => {
  var token = sessionStorage.getItem('token')
  if(to.name === 'Registro') {
    next()
  } else if(to.name !== 'Login' && token === '') {
    next({ name: 'Login' })
  } else {
    next()
  }
}
