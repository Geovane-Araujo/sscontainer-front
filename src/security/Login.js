import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        email: '',
        senha: ''
      }
    }
  },
  setup () {
    return {}
  },
  methods: {
    login (form) {
      axios.post('https://localhost:44311/api/AuthManager/Login', form).then(res => {
        console.log(res.data)
        sessionStorage.setItem('token', res.data.token)
        this.$router.push('dashboard')
      }).catch(err => {
        sessionStorage.setItem('token', '')
        this.$toast.add({ severity: 'error', summary: 'SSCOntainer', detail: err.response.data.errors[0], life: 3000 })
      })
    },
    registro () {
      this.$router.push('registro')
    }
  },
  components: {
    InputText,
    Password,
    Button
  }
}
