<template>
  <div class="container">
    <div class="align-img-center">
      <v-img
        max-height="55%"
        max-width="30%"
        alt="a palavra permanesendo ao redor de pessoas unidas"
        src="../assets/LOGO_psendo-removebg-preview.png">
      </v-img>
    </div>
    <div class="d-flex align-center mx-6 ">
      <p class="mx-10 text-center pa-5"
            style="background-color: #FBD266">
        É um programa de incentivo à criação de políticas de permanência por meio de estratégias
        coletivas de apoio ao universitário nos diferentes cursos, com a participação dos próprios
        alunos. Objetiva desenvolver diferentes práticas de parceria entre alunos (tutoria entre
        alunos em diferentes modalidades como oficinas de leitura, grupos de discussão, grupos de
        estudo, rodas de conversa, apoio psicopedagógico, apadrinhamento, outros), a serem
        organizadas a partir da identificação das necessidades diferenciadas dos cursos.
      </p>
      <v-img
        max-height="60%"
        max-width="30%"
        alt="duas pessoas se ajudando a carregar um lapis gigante"
        src="../assets/person-help.png">
      </v-img>
      <p class="mx-10 text-center pa-5"
            style="background-color: #FBD266">
        É um programa de incentivo à criação de políticas de permanência por meio de estratégias
        coletivas de apoio ao universitário nos diferentes cursos, com a participação dos próprios
        alunos. Objetiva desenvolver diferentes práticas de parceria entre alunos (tutoria entre
        alunos em diferentes modalidades como oficinas de leitura, grupos de discussão, grupos de
        estudo, rodas de conversa, apoio psicopedagógico, apadrinhamento, outros), a serem
        organizadas a partir da identificação das necessidades diferenciadas dos cursos.
      </p>
    </div>

    <div class="footer">
      <v-footer
        padless
        class="bg-c-yellow"
      >
        <v-card
          flat
          tile
          class="bg-c-yellow text-center"
          style="width: 100%;"
        >
          <div class="d-flex justify-center my-3">
            <div>
              <v-btn
                class="mx-4"
                icon
              >
                <v-icon size="24px" color="black">
                  mdi-facebook
                </v-icon>
              </v-btn>
            </div>

            <div>
              <v-btn
                class="mx-4"
                icon
              >
                <v-icon size="24px"  color="black"> mdi-instagram </v-icon>
              </v-btn>
            </div>

            <div>
              <v-btn
                class="mx-4"
                icon
              >
                <v-img
                size="24px"
                max-height="32px"
                max-width="48px"
                alt="a palavra permanesendo ao redor de pessoas unidas"
                src="../assets/marca_UFPR.png">
                </v-img>
              </v-btn>
            </div>
          </div>
          <div class="black--text">
            <p>PermaneSendo</p>
            <p>De aluno para aluno</p>
          </div>

          <v-divider></v-divider>

          <v-card-text class="black--text">
            2014 - {{ new Date().getFullYear() }}
          </v-card-text>
        </v-card>
      </v-footer>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
};
</script>

<style scoped>
  .container {
    background-color: var(--creme);
    width: 100%;
  }
  .align-img-center {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .bg-c-yellow {
    background-color: var(--amarelo) !important;
  }
</style>
