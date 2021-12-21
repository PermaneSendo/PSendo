<template>
<section class="ma-9">
  <div class="box-menus menus-link">
    <router-link to="/manual-calouro/restaurantes" class="menus-link">RESTAURANTES</router-link>
    <router-link to="/manual-calouro/campus" class="menus-link">CAMPUS</router-link>
    <router-view></router-view>
  </div>

  <div class="d-flex">
    <div class="d-flex flex-column justify-space-around">
      <p class="my-6 mx-10 info-manual">
        No 6º ano de existência do Projeto PermaneSENDO foi finalizado um dos trabalhos elaborados
        pelos próprios estudantes: o 'Manual de Sobrevivência' para o aluno que vive a realidade
        da rotina acadêmica.
      </p>
      <p class="my-6 mx-10 info-manual">
        Entendemos que o acesso ao ensino superior é um marco importantíssimo
        para o estudante, mas que, com este, surgem diversos desafios.
      </p>
    </div>
    <div class="d-flex align-center">
      <v-img
      max-height="80%"
      max-width="80%"
      alt="a palavra permanesendo ao redor de pessoas unidas"
      src="@/assets/search.png">
      </v-img>
    </div>
  </div>

  <div class="d-flex">
    <div class="d-flex align-center">
      <v-img
      max-height="80%"
      max-width="80%"
      alt="a palavra permanesendo ao redor de pessoas unidas"
      src="@/assets/sentado-lendo.png">
      </v-img>
    </div>
    <div class="d-flex flex-column justify-space-around">
      <p class="my-6 mx-10 info-manual">
        E com uma profunda
          pesquisa feita pelos integrantes do projeto sobre a inserção do aluno na universidade e
          sua permanência, chegamos à conclusão de que a disponibilidade e o acesso às informações
          necessárias aos estudantes merecem grande atenção da instituição.
      </p>
      <p class="my-6 mx-10 info-manual">
        Com isso... Bem-vind@ ao SEU MANUAL para a vida na UFPR! Que sejam bons anos! Faça bom uso
        das informações aqui disponibilizadas especialmente para você!
      </p>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'ManualCalouro',
};
</script>
<style>
    .router-link {
      text-decoration: none;
      margin: 5px 10px;
    }
    .info-manual {
      font-size: 1.2em;
    }

    .box-menus .menus-link {
      background-color: var(--amarelo);
      padding: 8px 12px;
      margin: 8px;
      border-radius: 8px;
      text-decoration: none;
      color: var(--preto);
    }

    .box-menus .menus-link:hover {
      background-color: rgb(0,0,0,0.05);
      transition-duration: 0.3s;
    }

</style>
