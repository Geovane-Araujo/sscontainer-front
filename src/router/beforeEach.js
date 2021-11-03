export default async (to, from, next) => {
  var token = sessionStorage.getItem('token')
  if(to.name !== 'Login' && (token === null || token === '' || token === undefined )) {
    next({ name: 'Login' })
  } else {
    next()
  }
}
