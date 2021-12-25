import axios from 'axios'

var url = 'https://localhost:44311/api/'

async function get (route) {
  var ret = ''
  await axios.get(url + route, { headers: { Authorization: 'Bearer ' + atob(sessionStorage.getItem('token')) } }).then(res => {
    ret = res.data
  }).catch(err => {
    console.log(err)
    if(err.status === 401) {
      this.$router.push('Login')
      sessionStorage.setItem('token','')
    }
  })
  return ret
}

async function post(route, obj){
  var ret = ''
  await axios.post(url + route, obj, { headers: { Authorization: 'Bearer ' + atob(sessionStorage.getItem('token')) } }).then(res => {
    ret = res.data
  }).catch(err => {
    if(err.status === 401) {
      this.$router.push('Login')
      sessionStorage.setItem('token','')
    }
  })
  return ret
}
export default{
  get,
  post
}