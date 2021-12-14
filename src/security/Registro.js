import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import axios from 'axios'

export default {
  data () {
    return {
      registro: false,
      login: true,
      form: {
        nome: '',
        email: '',
        senha: ''
      }
    }
  },
  setup () {
    return {}
  },
  methods: {
    registrar (form) {
      axios.post('https://localhost:44311/api/AuthManager/Register', form).then(res => {
        console.log(res.data)
        this.$router.push('login')
      }).catch(err => {
        this.$toast.add({ severity: 'error', summary: 'SSCOntainer', detail: err.response.data, life: 3000 })
      })
    },
    retornar () {
      this.$router.push('login')
    }
  },
  components: {
    InputText,
    Password,
    Button
  }
}
