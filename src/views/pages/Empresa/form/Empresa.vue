<template>
  <div class="ui-r-view">
    <h2>Cadastro de Empresas</h2>
    <div class="ui-form">
      <div class="p-fluid p-formgrid p-grid">
        <div class="p-field p-col-5">
            <label for="firstname1">Empresa</label>
            <InputText v-model="form.nomeEmpresa" id="firstname1" type="text"/>
        </div>
        <div class="p-field p-col-4">
            <label for="firstname1">Razao Social</label>
            <InputText v-model="form.razaoSocial" id="firstname1" type="text"/>
        </div>
        <div class="p-field p-col-3">
            <label for="firstname1">Cnpj</label>
            <InputMask mask="99.999.999/9999-99" v-model="form.cnpj" id="firstname1" type="text"/>
        </div>
        <div class="p-field p-col-8">
            <label for="firstname1">Endereço</label>
            <InputText v-model="form.endereco" id="firstname1" type="text"/>
        </div>
        <div class="p-field p-col-4">
            <label for="firstname1">Telefone</label>
            <InputMask mask="+99 (99)99999-9999" v-model="form.telefone" id="firstname1" type="text"/>
        </div>
      </div>
    </div>
    <div class="ui-btns-form">
      <Button @click="save()" label="Salvar" class=" p-button-info p-button-rounded p-button-sm"/>
      <Button @click="cancel()" label="Calcelar" class="p-button-danger p-button-rounded p-button-sm ui-left"/>
    </div>
  </div>
</template>
<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputMask from 'primevue/inputmask'
import util from '../../../../util/util'
var objForm = {
  id: 0,
  cnpj: '',
  nomeEmpresa: '',
  razaoSocial: '',
  endereco: '',
  telefone: '',
  inscricaoEstadual: '',
  ativo: false
}
export default {
  data: () => ({
    form: {}
  }),
  setup () {
    return {}
  },
  mounted () {
    this.getbyId()
    this.form = JSON.parse(JSON.stringify(objForm))
  },
  methods: {
    async getbyId () {
      await util.get('Empresa/'+ this.$route.params.id).then(res => {
        this.form = res
      })
    },
    async save () {
      console.log(this.form)
      await util.post('Empresa', this.form).then(res => {
        console.log(res)
        this.$router.push('Empresa');
      })
    },
    cancel () {
      this.$router.push('Empresa');
    }
  },
  components: {
    Button,
    InputText,
    InputMask
  }
}
</script>

<style lang="scss" scoped>

</style>