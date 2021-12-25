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
      form.email = this.onTratativaone(form.email);
      form.senha = this.onTratativaone(form.senha);

      axios.post('https://localhost:44311/api/AuthManager/Login', form).then(res => {
        sessionStorage.setItem('token', btoa(res.data.token))
        this.$router.push('dashboard')
      }).catch(err => {
        sessionStorage.setItem('token', '')
        this.$toast.add({ severity: 'error', summary: 'SSCOntainer', detail: err.response.data.errors[0], life: 3000 })
      })
    },
    registro () {
      this.$router.push('registro')
    },
    onTratativaone(texto) {
      return texto.replace(/\0/g, '')
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&#34;')
          .replace(/'/g, '&#39;');
    }
  },
  components: {
    InputText,
    Password,
    Button
  }
}
