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
          <div class="login-mobile" style="margin-bottom: 50px">
            <p class="login-texto" >Nicolas<span style="color: #a80ec7">Cagezinho</span></p>
          </div>
          <div class="registro-template" style="margin-bottom: 50px">
            <p class="ss">Registre-se</p>
          </div>
          <div>
            <span class="p-float-label">
              <InputText id="nome" type="text" v-model="form.nome" />
              <label for="nome">Nome</label>
            </span>
          </div>
          <div style="margin-top: 40px">
            <span class="p-float-label">
              <InputText id="email" type="email" v-model="form.email" />
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
            <Button label="Registrar" @click="registrar(form)" class="p-button-rounded" />
          </div>
          <div style="margin-top: 20px">
            <Button @click="retornar" label="Retornar" class="p-button-rounded p-button-secondary" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Registro.js">
</script>

<style lang="scss" scoped>
.ss{
  font-size: 30px;
  color: azure;
}
.registro-template{
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-mobile{
  display: none;
}
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
@media screen and (max-width: 900px) {
  .login-esquerdo{
    width: 50%;
  }
  .login-texto{
    font-size: 30px;
  }
  .login-direito{
    width: 50%;
  }
}
@media screen and (max-width: 600px) {
  .login-mobile{
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .login-esquerdo{
    width: 0%;
  }
  .login-esquerdo-mascara{
    display: none;
  }
  .login-texto{
    font-size: 35px;
  }
  .login-direito{
    width: 100%;
  }
}
</style>