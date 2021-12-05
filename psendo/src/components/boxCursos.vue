<template>
    <div class="pa-3 mx-5 my-3 rounded-xl range-day">
        <h3 class="pb-3">{{ curso }}</h3>
        <p>Coordenação: {{ telCoordenacao }}</p>
        <p>Site: {{ siteCoordenacao }}</p>
        <p>E-mail secretaria: {{ emailSecretaria }}</p>
    </div>
</template>
<script>

export default {
  name: 'BoxCurso',
  props: {
    curso: {
      type: String,
      default: null,
    },
    telCoordenacao: {
      type: String,
      default: null,
    },
    siteCoordenacao: {
      type: String,
      default: null,
    },
    emailSecretaria: {
      type: String,
      default: null,
    },
  },
};
</script>
<style scoped>
  .range-day {
    background-color: #f0a588;
  }

  .range-day:hover {
    background-color: #ee865d;
    transition: 0.2s;
  }

  @media screen and (max-width: 700px) {
    .range-day {
      margin: 10px 0px;
    }
  }
</style>
