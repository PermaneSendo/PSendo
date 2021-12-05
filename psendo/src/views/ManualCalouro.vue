<template>
<div>
    <p class="my-6 mx-10 info-manual">
        No 6º ano de existência do Projeto PermaneSENDO foi finalizado um dos trabalhos elaborados
        pelos próprios estudantes: o 'Manual de Sobrevivência' para o aluno que vive a realidade
        da rotina acadêmica. Entendemos que o acesso ao ensino superior é um marco importantíssimo
        para o estudante, mas que, com este, surgem diversos desafios.  E com uma profunda
        pesquisa feita pelos integrantes do projeto sobre a inserção do aluno na universidade e
        sua permanência, chegamos à conclusão de que a disponibilidade e o acesso às informações
        necessárias aos estudantes merecem grande atenção da instituição. Com isso... Bem-vind@ ao
        SEU MANUAL para a vida na UFPR! Que sejam bons anos! Faça bom uso das informações aqui
        disponibilizadas especialmente para você!
    </p>

      <router-link to="/manual-calouro/restaurantes" class="router-link">RESTAURANTES</router-link>
      <router-link to="/manual-calouro/campus" class="router-link">CAMPUS</router-link>
      <router-view></router-view>
</div>
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

</style>
