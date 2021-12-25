<template>
  <div class="ui-r-view">
    <h2>Empresas</h2>
    <div class="ui-btns">
      <Button @click="save(0)" label="Adicionar" class=" p-button-info p-button-rounded p-button-sm"/>
      <Button @click="save(1)" label="Editar" class=" p-button-help p-button-rounded p-button-sm ui-left"/>
      <Button label="Excluir" class="p-button-danger p-button-rounded p-button-sm ui-left"/>
    </div>
    <div class="ui-table">
      <DataTable :value="dados" :scrollable="true" scrollHeight="400px" v-model:selection="select" selectionMode="single" dataKey="id" responsiveLayout="scroll" >
          <Column field="nomeEmpresa" header="Nome Empresa"></Column>
          <Column field="cnpj" header="Cnpj"></Column>
          <Column field="endereco" header="Endereço"></Column>
          <Column field="telefone" header="Telefone"></Column>
      </DataTable>
    </div>
  </div>
</template>
<script>
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import util from '../../../../util/util'
export default {
  data: () => ({
    dados: null,
    select: null
  }),
  setup () {
    return {}
  },
  mounted () {
    this.getAll()
  },
  methods: {
    getAll () {
      util.get('Empresa').then(res => {
        this.dados = res
      })
    },
    save (id) {
      if(this.select === null){
        alert("selecione um registro");
      } else {
        if(id !== 0) {
          id = this.select.id
        }
        this.$router.push({name: 'FormEmpresa', params: { id:  id }})
      }
    }
  },
  components: {
    Button,
    DataTable,
    Column
  }
}
</script>

<style lang="scss" scoped>

</style>