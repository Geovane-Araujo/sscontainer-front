<template>
  <router-view/>
  <Toast position="bottom-left"/>
</template>
<script>
import Toast from 'primevue/toast'
export default {
  components: {
    Toast
  }
}
</script>
<style lang="scss">
*{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
