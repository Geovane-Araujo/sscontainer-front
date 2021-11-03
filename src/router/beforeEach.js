export default async (to, from, next) => {
  var token = sessionStorage.getItem('token')
  console.log('chegou')
  if(to.name === 'registro') {
    next()
  } else if(to.name !== 'Login' && (token === null || token === '' || token === undefined )) {
    next({ name: 'Login' })
  } else {
    next()
  }
}
