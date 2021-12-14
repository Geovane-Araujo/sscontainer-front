export default async (to, from, next) => {
  var token = sessionStorage.getItem('token')
  console.log(to.name)
  if(to.name === 'Registro') {
    next()
  } else if(to.name !== 'Login' && (token === null || token === '' || token === undefined )) {
    next({ name: 'Login' })
  } else {
    next()
  }
}
