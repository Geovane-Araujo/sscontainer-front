<template>
  <div>
    <div class="login">
      <div class="login-esquerdo">
        <div class="login-esquerdo-mascara">
          <p class="login-texto" >Nicolas<span style="color: #a80ec7">Cagezinho</span></p>
        </div>
      </div>
      <div class="login-direito">
        <div class="fo p-fluid">
          <div>
            <span class="p-float-label">
              <InputText id="email" type="text" v-model="form.email" />
              <label for="email">Email</label>
            </span>
          </div>
          <div style="margin-top: 40px">
            <span class="p-float-label">
              <Password id="senha" v-model="form.senha" :feedback="false" toggleMask/>
              <label for="senha">Senha</label>
            </span>
          </div>
          <div style="margin-top: 40px">
            <Button label="Login" @click="login" class="p-button-rounded" />
          </div>
          <div style="margin-top: 20px">
            <Button label="Registre-se" class="p-button-rounded p-button-secondary" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Login.js">
</script>

<style lang="scss" scoped>
.fo{
  width: 90%;
}
.login{
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #1d1c1c;
}
.login-esquerdo{
  width: 70%;
  height: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_960_720.jpg');
}
.login-esquerdo-mascara{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: #1d1c1c, $alpha: 0.4);
}
.login-texto{
  color: white;
  font-size: 100px;
}
.login-direito{
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 600px) {
  .esquerda{
    height: 100%;
    width: 100%
  }
  .direita{
    display: none;
  }
  .texto{
  font-size: 50px;
  }
}
</style>