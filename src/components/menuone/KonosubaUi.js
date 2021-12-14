var id = null
export default {
  name: 'ss-side-bar',
  data: () => ({
    tamanho: 0,
    objmenu: {
      internalmenu: null,
      name: 's',
      itemmenu: null
    },
    items: [
      {
        route: 'DashBoard',
        name: 'DashBoard',
        toltip: '',
        icon: 'ks ks-dashboard',
      },
      {
        route: '',
        name: 'Cadastros',
        toltip: '',
        icon: 'ks ks-person-plus',
        menu: [
          {
            route: 'empresa',
            name: 'Empresa',
            toltip: '',
            icon: 'ks ks-dashboard'
          },
          {
            route: '',
            name: 'Thunais',
            toltip: '',
            icon: 'ks ks-dashboard'
          }
        ]
      }
    ]
  }),
  setup () {
    return {}
  },
  mounted () {
    const content = document.getElementById('content')
    content.addEventListener('click', this.onCloseMenu)
  },
  methods: {
    onRoute (route) {
      this.$router.push(route);
      this.onCloseMenu();
    },
    onTeste () {
      this.onCloseMenu();
    },
    onOpenMenu (item, mnu) {
      if (item.menu === undefined){
        this.$router.push(item.route)
        return
      }
      this.objmenu = {
        name: item.name,
        internalmenu: mnu,
        itemmnu: item
      }
      const menu = document.getElementById('side-menu')
      var tamanho = 0
      if (menu.style.width === '' || menu.style.width === '0px') {
        clearInterval(id)
        id = setInterval(animacao, 0.1)
      }
      function animacao () {
        if (tamanho === 250) {
          clearInterval(id)
        } else {
          tamanho = tamanho + 5
          menu.style.width = tamanho + 'px'
        }
      }
    },
    onCloseMenu () {
      const menu = document.getElementById('side-menu')
      var tamanho = 250
      if (menu.style.width === '250px') {
        clearInterval(id)
        id = setInterval(animacao, 1)
      }
      function animacao () {
        if (tamanho === 0) {
          clearInterval(id)
        } else {
          tamanho = tamanho - 5
          menu.style.width = tamanho + 'px'
        }
      }
    }
  }
}
