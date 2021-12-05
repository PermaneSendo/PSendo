<template>
  <div class="container">
    <div class="align-img-center">
      <v-img
        max-height="55%"
        max-width="30%"
        class="d-flex justify-center"
        alt="a palavra permanesendo ao redor de pessoas unidas"
        src="../assets/LOGO_psendo-removebg-preview.png">
      </v-img>
    </div>
    <div class="info-box d-flex align-center mx-6">
      <p class="mx-10 text-center pa-5 rounded-xl"
          style="background-color: #FBD266;  width: 33%"
      >
        É um programa de incentivo à criação de políticas de permanência por meio de estratégias
        coletivas de apoio ao universitário nos diferentes cursos, com a participação dos próprios
        alunos.
      </p>
      <v-img
        max-height="60%"
        max-width="30%"
        alt="duas pessoas se ajudando a carregar um lapis gigante"
        src="../assets/person-help.png">
      </v-img>
      <p class="mx-10 text-center pa-5 rounded-xl"
        style="background-color: #FBD266; width: 33%"
      >
        Objetiva desenvolver diferentes práticas de parceria entre alunos (tutoria entre
        alunos em diferentes modalidades como oficinas de leitura, grupos de discussão, grupos de
        estudo, rodas de conversa, apoio psicopedagógico, apadrinhamento, outros), a serem
        organizadas a partir da identificação das necessidades diferenciadas dos cursos.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      instagram: 'https://www.instagram.com/permanesendo/',
      facebook: 'https://www.facebook.com/PermaneSENDO/',
    };
  },
  methods: {
    goToPage(iconClick) {
      window.open(iconClick, '_blank').focus();
    },

    sendToManual() {

    },
  },
};
</script>

<style scoped>
  .container {
    background-color: var(--creme);
    width: 100vw;
  }

  .align-img-center {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 700px) {
    .info-box {
      display: flex;
      flex-direction: column;
    }
  }
</style>
