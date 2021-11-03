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
    login () {
      axios.post('/', this.form).then(res => {
        console.log(res.data)
      })
    }
  },
  components: {
    InputText,
    Password,
    Button
  }
}
